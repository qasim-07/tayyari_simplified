import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ResourcesPageHeader from "@/components/resources/ResourcesPageHeader";
import ResourceGrid from "@/components/resources/ResourceGrid";
import {
  getAllCategorySlugs,
  getCategoryMeta,
  getResourcesByCategory,
  type ResourceCategory,
} from "@/data/resources";

interface CategoryPageProps {
  params: { category: string };
}

export function generateStaticParams() {
  return getAllCategorySlugs().map((category) => ({ category }));
}

export function generateMetadata({ params }: CategoryPageProps): Metadata {
  const meta = getCategoryMeta(params.category);
  if (!meta) return { title: "Resources | Tayyari Simplified" };

  return {
    title: `${meta.label} | Free Resources | Tayyari Simplified`,
    description: meta.description,
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const meta = getCategoryMeta(params.category);
  if (!meta) notFound();

  const resources = getResourcesByCategory(params.category as ResourceCategory);

  return (
    <>
      <ResourcesPageHeader
        title={meta.label}
        description={meta.description}
        breadcrumbs={[
          { label: "Free Resources", href: "/resources" },
          { label: meta.label },
        ]}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 py-12 sm:py-16">
        {resources.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200/80">
            <p className="text-[16px] font-bold text-brand-navy">No documents yet</p>
            <p className="mt-2 text-[14px] text-brand-gray">
              New resources for this category are coming soon.
            </p>
          </div>
        ) : (
          <ResourceGrid resources={resources} showCategoryLabel={false} />
        )}
      </div>
    </>
  );
}
