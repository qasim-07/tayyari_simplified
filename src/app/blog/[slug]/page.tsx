import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogDetailClient from "@/components/blog/BlogDetailClient";
import { BLOGS, getBlogPost } from "@/data/blogs";

interface BlogPostPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return BLOGS.map((b) => ({ slug: b.slug }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = getBlogPost(params.slug);
  if (!post) return { title: "Blog | Tayyari Simplified" };

  return {
    title: `${post.title} | Blog | Tayyari Simplified`,
    description: post.summary,
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  return <BlogDetailClient post={post} />;
}
