import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { paginationOptsValidator } from "convex/server";
import type { QueryCtx, MutationCtx } from "./_generated/server.d.ts";

// ── Helpers ──────────────────────────────────────────────────────────────────

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

async function requireAuth(ctx: QueryCtx | MutationCtx) {
  const identity = await ctx.auth.getUserIdentity();
  if (!identity) {
    throw new ConvexError({ message: "You must be logged in", code: "UNAUTHENTICATED" });
  }
  return identity;
}

// ── Public Queries ───────────────────────────────────────────────────────────

/** List published blog posts with pagination */
export const listPublished = query({
  args: {
    paginationOpts: paginationOptsValidator,
    category: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const results = args.category
      ? await ctx.db
          .query("blogPosts")
          .withIndex("by_category_and_status", (q) =>
            q.eq("category", args.category!).eq("status", "published"),
          )
          .order("desc")
          .paginate(args.paginationOpts)
      : await ctx.db
          .query("blogPosts")
          .withIndex("by_status", (q) => q.eq("status", "published"))
          .order("desc")
          .paginate(args.paginationOpts);

    return {
      ...results,
      page: await Promise.all(
        results.page.map(async (post) => {
          const author = await ctx.db.get(post.authorId);
          return { ...post, authorName: author?.name ?? "ApnaCourier Team" };
        }),
      ),
    };
  },
});

/** Get a single published post by slug */
export const getBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    const post = await ctx.db
      .query("blogPosts")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .first();

    if (!post || post.status !== "published") return null;

    // Attach author name
    const author = await ctx.db.get(post.authorId);
    return { ...post, authorName: author?.name ?? "ApnaCourier Team" };
  },
});

/** Get all unique categories (published posts only) */
export const getCategories = query({
  args: {},
  handler: async (ctx) => {
    const posts = await ctx.db
      .query("blogPosts")
      .withIndex("by_status", (q) => q.eq("status", "published"))
      .collect();

    const categories = [...new Set(posts.map((p) => p.category))];
    return categories.sort();
  },
});

/** Get recent published posts (for sidebar / related) */
export const getRecent = query({
  args: { limit: v.optional(v.number()), excludeSlug: v.optional(v.string()) },
  handler: async (ctx, args) => {
    const limit = args.limit ?? 5;
    const posts = await ctx.db
      .query("blogPosts")
      .withIndex("by_status", (q) => q.eq("status", "published"))
      .order("desc")
      .take(limit + 1);

    return posts.filter((p) => p.slug !== args.excludeSlug).slice(0, limit);
  },
});

// ── Admin Queries ────────────────────────────────────────────────────────────

/** List all posts for admin (draft + published) */
export const listAll = query({
  args: { paginationOpts: paginationOptsValidator },
  handler: async (ctx, args) => {
    await requireAuth(ctx);

    const results = await ctx.db
      .query("blogPosts")
      .order("desc")
      .paginate(args.paginationOpts);

    return {
      ...results,
      page: await Promise.all(
        results.page.map(async (post) => {
          const author = await ctx.db.get(post.authorId);
          return { ...post, authorName: author?.name ?? "Unknown" };
        }),
      ),
    };
  },
});

/** Get a single post by ID (admin, any status) */
export const getById = query({
  args: { id: v.id("blogPosts") },
  handler: async (ctx, args) => {
    await requireAuth(ctx);
    return await ctx.db.get(args.id);
  },
});

// ── Mutations ────────────────────────────────────────────────────────────────

/** Create a new blog post */
export const create = mutation({
  args: {
    title: v.string(),
    content: v.string(),
    excerpt: v.string(),
    category: v.string(),
    tags: v.array(v.string()),
    coverImageUrl: v.optional(v.string()),
    status: v.union(v.literal("draft"), v.literal("published")),
    metaTitle: v.optional(v.string()),
    metaDescription: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const identity = await requireAuth(ctx);
    const user = await ctx.db
      .query("users")
      .withIndex("by_token", (q) => q.eq("tokenIdentifier", identity.tokenIdentifier))
      .unique();

    if (!user) {
      throw new ConvexError({ message: "User not found", code: "NOT_FOUND" });
    }

    let slug = generateSlug(args.title);

    // Ensure slug is unique
    const existing = await ctx.db
      .query("blogPosts")
      .withIndex("by_slug", (q) => q.eq("slug", slug))
      .first();
    if (existing) {
      slug = `${slug}-${Date.now()}`;
    }

    const publishedAt =
      args.status === "published" ? new Date().toISOString() : undefined;

    return await ctx.db.insert("blogPosts", {
      title: args.title,
      slug,
      content: args.content,
      excerpt: args.excerpt,
      category: args.category,
      tags: args.tags,
      coverImageUrl: args.coverImageUrl,
      authorId: user._id,
      status: args.status,
      publishedAt,
      metaTitle: args.metaTitle,
      metaDescription: args.metaDescription,
    });
  },
});

/** Update an existing post */
export const update = mutation({
  args: {
    id: v.id("blogPosts"),
    title: v.optional(v.string()),
    content: v.optional(v.string()),
    excerpt: v.optional(v.string()),
    category: v.optional(v.string()),
    tags: v.optional(v.array(v.string())),
    coverImageUrl: v.optional(v.string()),
    status: v.optional(v.union(v.literal("draft"), v.literal("published"))),
    metaTitle: v.optional(v.string()),
    metaDescription: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    await requireAuth(ctx);

    const post = await ctx.db.get(args.id);
    if (!post) {
      throw new ConvexError({ message: "Post not found", code: "NOT_FOUND" });
    }

    const updates: Record<string, unknown> = {};

    if (args.title !== undefined) {
      updates.title = args.title;
      // Regenerate slug if title changes
      let newSlug = generateSlug(args.title);
      const existing = await ctx.db
        .query("blogPosts")
        .withIndex("by_slug", (q) => q.eq("slug", newSlug))
        .first();
      if (existing && existing._id !== args.id) {
        newSlug = `${newSlug}-${Date.now()}`;
      }
      updates.slug = newSlug;
    }
    if (args.content !== undefined) updates.content = args.content;
    if (args.excerpt !== undefined) updates.excerpt = args.excerpt;
    if (args.category !== undefined) updates.category = args.category;
    if (args.tags !== undefined) updates.tags = args.tags;
    if (args.coverImageUrl !== undefined) updates.coverImageUrl = args.coverImageUrl;
    if (args.metaTitle !== undefined) updates.metaTitle = args.metaTitle;
    if (args.metaDescription !== undefined) updates.metaDescription = args.metaDescription;

    // Handle status change — set publishedAt on first publish
    if (args.status !== undefined) {
      updates.status = args.status;
      if (args.status === "published" && !post.publishedAt) {
        updates.publishedAt = new Date().toISOString();
      }
    }

    await ctx.db.patch(args.id, updates);
  },
});

/** Delete a blog post */
export const remove = mutation({
  args: { id: v.id("blogPosts") },
  handler: async (ctx, args) => {
    await requireAuth(ctx);
    await ctx.db.delete(args.id);
  },
});
