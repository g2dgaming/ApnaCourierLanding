import { Card } from "@/components/ui/card.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  coverImageUrl?: string;
  category: string;
  author: string;
  createdAt: number; // Unix timestamp in milliseconds
}

export default function BlogCard({
  slug,
  title,
  excerpt,
  coverImageUrl,
  category,
  author,
  createdAt,
}: BlogCardProps) {
  const dateStr = formatDistanceToNow(new Date(createdAt), { addSuffix: true });

  // Gradient backgrounds if no image - using theme-consistent colors
  const gradients = [
    "from-primary/60 to-primary/30",
    "from-primary/40 to-foreground/20",
    "from-foreground/30 to-primary/40",
    "from-primary/50 to-primary/20",
    "from-foreground/20 to-primary/50",
    "from-primary/30 to-foreground/30",
  ];

  // Deterministic gradient based on slug
  const gradientIndex = slug.charCodeAt(0) % gradients.length;
  const gradient = gradients[gradientIndex];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
    >
      <Link to={`/blog/${slug}`} className="no-underline">
        <Card className="overflow-hidden h-full transition-shadow hover:shadow-md cursor-pointer bg-card border-border/50 hover:border-primary/30">
          {/* Image container */}
          <div
            className={`h-48 w-full overflow-hidden bg-gradient-to-br ${gradient} relative`}
          >
            {coverImageUrl ? (
              <img
                src={coverImageUrl}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            ) : (
              <div className={`w-full h-full bg-gradient-to-br ${gradient}`} />
            )}
          </div>

          {/* Content */}
          <div className="flex flex-col gap-3 p-6">
            {/* Category Badge */}
            <Badge variant="outline" className="w-fit text-xs font-medium">
              {category}
            </Badge>

            {/* Title */}
            <h3 className="font-semibold text-lg line-clamp-2 text-card-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>

            {/* Excerpt */}
            <p className="text-sm text-muted-foreground line-clamp-2">
              {excerpt}
            </p>

            {/* Meta info */}
            <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2 border-t border-border/30">
              <span>{author}</span>
              <span className="text-border/50">•</span>
              <time dateTime={new Date(createdAt).toISOString()}>
                {dateStr}
              </time>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
