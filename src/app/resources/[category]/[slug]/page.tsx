import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ResourceDetailClient from "@/components/resources/ResourceDetailClient";
import {
  getAllResourceParams,
  getCategoryMeta,
  getResource,
  type ResourceCategory,
} from "@/data/resources";

interface ResourceDetailPageProps {
  params: { category: string; slug: string };
}

export function generateStaticParams() {
  return getAllResourceParams().map(({ category, slug }) => ({ category, slug }));
}

export function generateMetadata({ params }: ResourceDetailPageProps): Metadata {
  const resource = getResource(params.category as ResourceCategory, params.slug);
  if (!resource) return { title: "Resource | Tayyari Simplified" };

  return {
    title: `${resource.title} | Tayyari Simplified`,
    description: resource.description,
  };
}

export default function ResourceDetailPage({ params }: ResourceDetailPageProps) {
  const meta = getCategoryMeta(params.category);
  const resource = getResource(params.category as ResourceCategory, params.slug);

  if (!meta || !resource) notFound();

  const categoryInfo = {
    slug: meta.slug,
    label: meta.label,
    description: meta.description,
    theme: meta.theme,
  };

  return <ResourceDetailClient meta={categoryInfo} resource={resource} />;
}
