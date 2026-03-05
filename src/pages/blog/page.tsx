import { usePaginatedQuery, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api.js";
import { useState } from "react";
import { Button } from "@/components/ui/button.tsx";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "@/components/ui/empty.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { motion } from "motion/react";
import BlogCard from "./_components/BlogCard.tsx";
import SEOHead from "@/components/seo/SEOHead.tsx";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd.tsx";
import { BookOpenIcon } from "lucide-react";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Fetch categories
  const categories = useQuery(api.blog.getCategories);

  // Fetch paginated blog posts
  const { results, status, loadMore } = usePaginatedQuery(
    api.blog.listPublished,
    { category: selectedCategory || undefined },
    { initialNumItems: 9 }
  );

  const isFirstLoad = status === "LoadingFirstPage";
  const canLoadMore = status === "CanLoadMore";
  const isLoadingMore = status === "LoadingMore";

  const blogCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <>
      <SEOHead
        title="Blog"
        description="Latest insights and updates from ApnaCourier. Tips, guides, and news about shipping, logistics, and courier services in India."
        keywords="logistics blog, courier tips, shipping guides, e-commerce logistics"
        canonicalPath="/blog"
        ogType="website"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ]}
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <motion.section
          className="relative overflow-hidden py-16 md:py-24 pt-28"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="mb-6 flex items-center justify-center">
                <div className="rounded-full bg-primary/10 p-3">
                  <BookOpenIcon className="size-6 text-primary" />
                </div>
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Blog & Insights
              </h1>

              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover tips, guides, and the latest updates about logistics,
                shipping, and e-commerce solutions from ApnaCourier.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Main Content */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          {/* Category Filter */}
          {categories && categories.length > 0 && (
            <motion.div
              className="mb-12 flex flex-wrap items-center gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-sm font-medium text-muted-foreground">
                Filter by:
              </span>

              <motion.button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === null
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-secondary/50 text-foreground hover:bg-secondary/70"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                All
              </motion.button>

              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-secondary/50 text-foreground hover:bg-secondary/70"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>
          )}

          {/* Blog Grid */}
          {isFirstLoad ? (
            // Loading Skeletons
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <Skeleton className="h-48 w-full rounded-xl" />
                  <Skeleton className="h-4 w-24 rounded" />
                  <Skeleton className="h-6 w-full rounded" />
                  <Skeleton className="h-12 w-full rounded" />
                  <Skeleton className="h-3 w-32 rounded" />
                </div>
              ))}
            </div>
          ) : results && results.length > 0 ? (
            // Blog Posts Grid
            <>
              <motion.div
                className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                initial="hidden"
                animate="visible"
              >
                {results.map((post, idx) => (
                  <motion.div
                    key={post._id}
                    custom={idx}
                    variants={blogCardVariants}
                  >
                    <BlogCard
                      slug={post.slug}
                      title={post.title}
                      excerpt={post.excerpt}
                      coverImageUrl={post.coverImageUrl}
                      category={post.category}
                      author={post.authorName}
                      createdAt={post._creationTime}
                    />
                  </motion.div>
                ))}
              </motion.div>

              {/* Load More Button */}
              {canLoadMore && (
                <motion.div
                  className="mt-12 flex items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Button
                    onClick={() => loadMore(9)}
                    disabled={isLoadingMore}
                    size="lg"
                    variant="secondary"
                    className="min-w-48"
                  >
                    {isLoadingMore ? "Loading..." : "Load More Posts"}
                  </Button>
                </motion.div>
              )}
            </>
          ) : (
            // Empty State
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center py-12"
            >
              <Empty>
                <EmptyHeader>
                  <EmptyMedia variant="icon">
                    <BookOpenIcon />
                  </EmptyMedia>
                  <EmptyTitle>No blog posts yet</EmptyTitle>
                  <EmptyDescription>
                    Check back soon for insights, tips, and updates about
                    logistics and courier services.
                  </EmptyDescription>
                </EmptyHeader>
              </Empty>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
}
