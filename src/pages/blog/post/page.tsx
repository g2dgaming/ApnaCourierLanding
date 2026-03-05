import { useParams, Link, useNavigate } from "react-router-dom";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api.js";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import { Card } from "@/components/ui/card.tsx";
import SEOHead from "@/components/seo/SEOHead.tsx";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd.tsx";
import {
  Clock,
  Share2,
  CheckCircle2,
  Calendar,
  User,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { useEffect } from "react";
import { toast } from "sonner";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const post = useQuery(api.blog.getBySlug, { slug: slug ?? "" });
  const relatedPosts = useQuery(api.blog.getRecent, {
    limit: 3,
    excludeSlug: slug ?? "",
  });

  // Calculate reading time
  const readingTime =
    post && post.content
      ? Math.max(
          1,
          Math.ceil(
            post.content.replace(/<[^>]*>/g, "").split(/\s+/).length / 200
          )
        )
      : 0;

  // Handle not found
  useEffect(() => {
    if (post === null && post !== undefined) {
      navigate("/blog");
    }
  }, [post, navigate]);

  if (post === undefined) {
    return <BlogPostSkeleton />;
  }

  if (post === null) {
    return null;
  }

  const publishDate = post.publishedAt ? new Date(post.publishedAt) : new Date();
  const gradientOverlay =
    "bg-gradient-to-b from-transparent via-transparent to-background";

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ];

  return (
    <>
      <SEOHead
        title={post.title}
        description={post.excerpt}
        ogImage={post.coverImageUrl}
      />
      <BreadcrumbJsonLd items={breadcrumbItems} />

      <article className="min-h-screen bg-background">
        {/* Breadcrumb Navigation */}
        <nav className="border-b border-border bg-secondary/50 pt-20">
          <div className="mx-auto max-w-4xl px-4 py-3 sm:px-6">
            <ol className="flex items-center gap-2 text-sm text-muted-foreground">
              {breadcrumbItems.map((crumb, index) => (
                <li key={index} className="flex items-center gap-2">
                  {index < breadcrumbItems.length - 1 ? (
                    <Link
                      to={crumb.path}
                      className="hover:text-foreground transition-colors"
                    >
                      {crumb.name}
                    </Link>
                  ) : (
                    <span className="text-foreground font-medium">
                      {crumb.name}
                    </span>
                  )}
                  {index < breadcrumbItems.length - 1 && (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </li>
              ))}
            </ol>
          </div>
        </nav>

        {/* Cover Image */}
        <div className="relative h-96 w-full overflow-hidden bg-muted">
          {post.coverImageUrl && (
            <img
              src={post.coverImageUrl}
              alt={post.title}
              className="h-full w-full object-cover"
            />
          )}
          <div className={`absolute inset-0 ${gradientOverlay}`} />
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-8">
            {/* Category Badge */}
            <div className="mb-4">
              <Badge variant="secondary">{post.category}</Badge>
            </div>

            {/* Title */}
            <h1 className="mb-6 text-4xl font-bold leading-tight text-foreground sm:text-5xl">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="mb-8 flex flex-wrap items-center gap-4 text-muted-foreground">
              {/* Author */}
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.authorName}</span>
              </div>

              {/* Date */}
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{format(publishDate, "MMM dd, yyyy")}</span>
              </div>

              {/* Reading Time */}
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{readingTime} min read</span>
              </div>
            </div>

            {/* Share Button */}
            <div>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  toast.success("Link copied to clipboard!");
                }}
                className="gap-2"
              >
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Article Content */}
            <div className="lg:col-span-2">
              {/* Excerpt */}
              <p className="mb-8 text-xl text-muted-foreground">
                {post.excerpt}
              </p>

              {/* Article Body */}
              <div
                className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground prose-blockquote:border-primary prose-blockquote:text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-12 border-t border-border pt-8">
                  <h3 className="mb-4 text-sm font-semibold text-foreground">
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="cursor-pointer hover:bg-muted"
                      >
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div>
              {/* Related Posts */}
              {relatedPosts && relatedPosts.length > 0 && (
                <div className="sticky top-20 space-y-4">
                  <h3 className="text-lg font-bold text-foreground">
                    Related Posts
                  </h3>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <Link
                        key={relatedPost._id}
                        to={`/blog/${relatedPost.slug}`}
                        className="group block"
                      >
                        <Card className="h-full overflow-hidden transition-all hover:shadow-md">
                          {relatedPost.coverImageUrl && (
                            <div className="relative h-32 w-full overflow-hidden bg-muted">
                              <img
                                src={relatedPost.coverImageUrl}
                                alt={relatedPost.title}
                                className="h-full w-full object-cover transition-transform group-hover:scale-105"
                              />
                            </div>
                          )}
                          <div className="p-4">
                            <Badge
                              variant="secondary"
                              className="mb-2 text-xs"
                            >
                              {relatedPost.category}
                            </Badge>
                            <h4 className="mb-2 line-clamp-2 text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                              {relatedPost.title}
                            </h4>
                            <p className="mb-3 text-xs text-muted-foreground">
                              {relatedPost.publishedAt
                                ? format(
                                    new Date(relatedPost.publishedAt),
                                    "MMM dd, yyyy"
                                  )
                                : ""}
                            </p>
                            <div className="flex items-center gap-1 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                              Read more
                              <ArrowRight className="h-3 w-3" />
                            </div>
                          </div>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <section className="border-t border-border bg-secondary/50 py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="flex items-center gap-2 text-primary">
                <CheckCircle2 className="h-5 w-5" />
                <span className="text-sm font-medium">
                  Want to stay updated with our latest posts?
                </span>
              </div>
              <Link to="/blog">
                <Button className="gap-2">
                  Back to Blog
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}

function BlogPostSkeleton() {
  return (
    <article className="min-h-screen bg-background">
      {/* Breadcrumb Skeleton */}
      <nav className="border-b border-border bg-secondary/50 pt-20">
        <div className="mx-auto max-w-4xl px-4 py-3 sm:px-6">
          <Skeleton className="h-4 w-48" />
        </div>
      </nav>

      {/* Cover Image Skeleton */}
      <Skeleton className="h-96 w-full rounded-none" />

      {/* Content Skeleton */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Skeleton className="mb-4 h-6 w-24" />
          <Skeleton className="mb-6 h-12 w-3/4" />
          <div className="mb-8 flex gap-4">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-32" />
          </div>
          <Skeleton className="h-9 w-24" />
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-5/6" />
            <div className="space-y-4 mt-8">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
          <div className="space-y-4">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-40 w-full" />
            <Skeleton className="h-40 w-full" />
          </div>
        </div>
      </div>
    </article>
  );
}
