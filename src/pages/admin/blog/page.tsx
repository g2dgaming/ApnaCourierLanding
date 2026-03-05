import { usePaginatedQuery, useMutation } from "convex/react";
import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import { api } from "@/convex/_generated/api.js";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { ConvexError } from "convex/values";
import { ArrowLeft, Edit, Trash2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { Card } from "@/components/ui/card.tsx";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "@/components/ui/empty.tsx";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog.tsx";
import { SignInButton } from "@/components/ui/signin.tsx";
import { useState } from "react";
import { format } from "date-fns";
import type { Id } from "@/convex/_generated/dataModel.d.ts";

interface Post {
  _id: Id<"blogPosts">;
  title: string;
  category: string;
  status: "draft" | "published";
  authorName: string;
  _creationTime: number;
}

export default function AdminBlogPage() {
  return (
    <>
      <Unauthenticated>
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold">Sign in to manage blog</h1>
            <p className="text-muted-foreground">You need to be signed in to access the admin panel.</p>
            <SignInButton signInText="Sign In" />
          </div>
        </div>
      </Unauthenticated>
      <AuthLoading>
        <div className="min-h-screen bg-background flex items-center justify-center">
          <Skeleton className="h-10 w-40" />
        </div>
      </AuthLoading>
      <Authenticated>
        <AdminBlogPageInner />
      </Authenticated>
    </>
  );
}

function AdminBlogPageInner() {
  const navigate = useNavigate();
  const { results, status, loadMore, isLoading } = usePaginatedQuery(
    api.blog.listAll,
    {},
    { initialNumItems: 20 },
  );
  const [deleteId, setDeleteId] = useState<Id<"blogPosts"> | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const removeMutation = useMutation(api.blog.remove);

  const handleDelete = async () => {
    if (!deleteId) return;

    setIsDeleting(true);
    try {
      await removeMutation({ id: deleteId });
      toast.success("Post deleted successfully");
      setDeleteId(null);
    } catch (error) {
      if (error instanceof ConvexError) {
        const { message } = error.data as { code: string; message: string };
        toast.error(`Failed to delete: ${message}`);
      } else {
        toast.error("Failed to delete post");
      }
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/blog")}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
            <h1 className="text-3xl font-bold">Blog Management</h1>
          </div>
          <Button onClick={() => navigate("/admin/blog/new")} className="gap-2">
            <Plus className="h-4 w-4" />
            New Post
          </Button>
        </div>

        {/* Empty State */}
        {!isLoading && results?.length === 0 && (
          <Empty>
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <Plus />
              </EmptyMedia>
              <EmptyTitle>No blog posts yet</EmptyTitle>
              <EmptyDescription>
                Create your first blog post to get started
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button onClick={() => navigate("/admin/blog/new")}>
                Create Post
              </Button>
            </EmptyContent>
          </Empty>
        )}

        {/* Table */}
        {results && results.length > 0 && (
          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-muted">
                    <th className="text-left px-6 py-3 text-sm font-semibold">
                      Title
                    </th>
                    <th className="text-left px-6 py-3 text-sm font-semibold">
                      Category
                    </th>
                    <th className="text-left px-6 py-3 text-sm font-semibold">
                      Status
                    </th>
                    <th className="text-left px-6 py-3 text-sm font-semibold">
                      Author
                    </th>
                    <th className="text-left px-6 py-3 text-sm font-semibold">
                      Date
                    </th>
                    <th className="text-right px-6 py-3 text-sm font-semibold">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((post) => (
                    <tr key={post._id} className="border-b border-border hover:bg-muted/50">
                      <td className="px-6 py-4 font-medium truncate">
                        {post.title}
                      </td>
                      <td className="px-6 py-4 text-sm">{post.category}</td>
                      <td className="px-6 py-4">
                        <Badge
                          variant={post.status === "published" ? "default" : "secondary"}
                          className={
                            post.status === "published"
                              ? "bg-green-600 hover:bg-green-700"
                              : "bg-yellow-600 hover:bg-yellow-700"
                          }
                        >
                          {post.status === "published" ? "Published" : "Draft"}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 text-sm">{post.authorName}</td>
                      <td className="px-6 py-4 text-sm">
                        {format(post._creationTime, "MMM d, yyyy")}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => navigate(`/admin/blog/${post._id}/edit`)}
                            title="Edit"
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-destructive hover:text-destructive hover:bg-destructive/10"
                            onClick={() => setDeleteId(post._id)}
                            title="Delete"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Skeletons for loading more */}
            {isLoading && (
              <div>
                {Array.from({ length: 5 }).map((_, i) => (
                  <tr key={i} className="border-b border-border">
                    <td className="px-6 py-4">
                      <Skeleton className="h-4 w-48" />
                    </td>
                    <td className="px-6 py-4">
                      <Skeleton className="h-4 w-24" />
                    </td>
                    <td className="px-6 py-4">
                      <Skeleton className="h-4 w-16" />
                    </td>
                    <td className="px-6 py-4">
                      <Skeleton className="h-4 w-24" />
                    </td>
                    <td className="px-6 py-4">
                      <Skeleton className="h-4 w-20" />
                    </td>
                    <td className="px-6 py-4">
                      <Skeleton className="h-4 w-16" />
                    </td>
                  </tr>
                ))}
              </div>
            )}

            {/* Load More Button */}
            {status === "CanLoadMore" && (
              <div className="p-6 border-t border-border text-center">
                <Button
                  variant="secondary"
                  onClick={() => loadMore(10)}
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "Load More"}
                </Button>
              </div>
            )}
          </Card>
        )}
      </div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteId !== null} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Post</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this post? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex justify-end gap-4">
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              disabled={isDeleting}
              className="bg-destructive hover:bg-destructive/90"
            >
              {isDeleting ? "Deleting..." : "Delete"}
            </AlertDialogAction>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
