import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    tokenIdentifier: v.string(),
    name: v.optional(v.string()),
    email: v.optional(v.string()),
    role: v.optional(v.string()),
  }).index("by_token", ["tokenIdentifier"]),

  blogPosts: defineTable({
    title: v.string(),
    slug: v.string(),
    content: v.string(),
    excerpt: v.string(),
    category: v.string(),
    tags: v.array(v.string()),
    coverImageUrl: v.optional(v.string()),
    authorId: v.id("users"),
    status: v.union(v.literal("draft"), v.literal("published")),
    publishedAt: v.optional(v.string()),
    metaTitle: v.optional(v.string()),
    metaDescription: v.optional(v.string()),
  })
    .index("by_slug", ["slug"])
    .index("by_status", ["status"])
    .index("by_author", ["authorId"])
    .index("by_category_and_status", ["category", "status"]),
});
