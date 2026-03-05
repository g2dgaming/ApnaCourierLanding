import { useState } from "react";
import { useMutation } from "convex/react";
import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import { api } from "@/convex/_generated/api.js";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { ConvexError } from "convex/values";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import { Label } from "@/components/ui/label.tsx";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import { SignInButton } from "@/components/ui/signin.tsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";
import TiptapEditor from "../_components/TiptapEditor.tsx";

const CATEGORIES = [
  "Shipping Tips",
  "Industry Insights",
  "Logistics Guide",
  "E-commerce",
  "COD Management",
  "Company News",
  "Technology",
];

export default function NewBlogPostPage() {
  return (
    <>
      <Unauthenticated>
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold">Sign in required</h1>
            <p className="text-muted-foreground">You need to be signed in to create blog posts.</p>
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
        <NewBlogPostPageInner />
      </Authenticated>
    </>
  );
}

function NewBlogPostPageInner() {
  const navigate = useNavigate();
  const createMutation = useMutation(api.blog.create);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    category: "",
    tags: "",
    coverImageUrl: "",
    content: "",
    metaTitle: "",
    metaDescription: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, category: value }));
  };

  const handleContentChange = (html: string) => {
    setFormData((prev) => ({ ...prev, content: html }));
  };

  const handleSubmit = async (status: "draft" | "published") => {
    // Validation
    if (!formData.title.trim()) {
      toast.error("Title is required");
      return;
    }
    if (!formData.excerpt.trim()) {
      toast.error("Excerpt is required");
      return;
    }
    if (!formData.category) {
      toast.error("Category is required");
      return;
    }
    if (!formData.content.trim()) {
      toast.error("Content is required");
      return;
    }

    setIsSubmitting(true);
    try {
      const tags = formData.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag);

      await createMutation({
        title: formData.title,
        excerpt: formData.excerpt,
        category: formData.category,
        tags,
        coverImageUrl: formData.coverImageUrl || undefined,
        content: formData.content,
        status,
        metaTitle: formData.metaTitle || undefined,
        metaDescription: formData.metaDescription || undefined,
      });

      toast.success(
        status === "published"
          ? "Post published successfully"
          : "Post saved as draft",
      );
      navigate("/admin/blog");
    } catch (error) {
      if (error instanceof ConvexError) {
        const { message } = error.data as { code: string; message: string };
        toast.error(`Failed to save: ${message}`);
      } else {
        toast.error("Failed to save post");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/admin/blog")}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
          <h1 className="text-3xl font-bold">Create New Post</h1>
        </div>

        {/* Form */}
        <Card>
          <CardHeader>
            <CardTitle>Post Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Title */}
            <div className="space-y-2">
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g., How to Optimize Your Shipping Costs"
              />
            </div>

            {/* Excerpt */}
            <div className="space-y-2">
              <Label htmlFor="excerpt">Excerpt *</Label>
              <Textarea
                id="excerpt"
                name="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                placeholder="Brief summary of the post (1-2 sentences)"
                rows={3}
              />
            </div>

            {/* Category and Tags */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <Select value={formData.category} onValueChange={handleSelectChange}>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {CATEGORIES.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tags">Tags</Label>
                <Input
                  id="tags"
                  name="tags"
                  value={formData.tags}
                  onChange={handleChange}
                  placeholder="e.g., shipping, cost, logistics (comma-separated)"
                />
              </div>
            </div>

            {/* Cover Image URL */}
            <div className="space-y-2">
              <Label htmlFor="coverImageUrl">Cover Image URL</Label>
              <Input
                id="coverImageUrl"
                name="coverImageUrl"
                value={formData.coverImageUrl}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
              />
            </div>

            {/* Content */}
            <div className="space-y-2">
              <Label htmlFor="content">Content *</Label>
              <TiptapEditor
                content={formData.content}
                onChange={handleContentChange}
              />
            </div>

            {/* SEO Fields */}
            <div className="space-y-6 border-t border-border pt-6">
              <h3 className="text-lg font-semibold">SEO</h3>

              <div className="space-y-2">
                <Label htmlFor="metaTitle">Meta Title</Label>
                <Input
                  id="metaTitle"
                  name="metaTitle"
                  value={formData.metaTitle}
                  onChange={handleChange}
                  placeholder="Title for search results"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="metaDescription">Meta Description</Label>
                <Textarea
                  id="metaDescription"
                  name="metaDescription"
                  value={formData.metaDescription}
                  onChange={handleChange}
                  placeholder="Description for search results (160 characters)"
                  rows={3}
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 justify-end border-t border-border pt-6">
              <Button
                variant="outline"
                onClick={() => navigate("/admin/blog")}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                variant="outline"
                onClick={() => handleSubmit("draft")}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Saving..." : "Save as Draft"}
              </Button>
              <Button
                onClick={() => handleSubmit("published")}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Publishing..." : "Publish"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
