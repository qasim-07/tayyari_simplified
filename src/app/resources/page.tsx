import type { Metadata } from "next";
import ResourcesPageHeader from "@/components/resources/ResourcesPageHeader";
import CategoryCard from "@/components/resources/CategoryCard";
import ResourceGrid from "@/components/resources/ResourceGrid";
import LeadCaptureForm from "@/components/resources/LeadCaptureForm";
import { CATEGORIES, RESOURCES } from "@/data/resources";

export const metadata: Metadata = {
  title: "Free Resources | Tayyari Simplified",
  description:
    "Browse and download free UPSC preparation resources — PDF notes, revision sheets, current affairs, mind maps, and more.",
};

export default function ResourcesPage() {
  const categoryLabelMap = CATEGORIES.reduce((acc, cat) => {
    acc[cat.slug] = cat.label;
    return acc;
  }, {} as Record<string, string>);


  return (
    <>
      <ResourcesPageHeader
        title="Quality resources, completely free."
        description="Browse exam-focused PDF notes, revision sheets, current affairs digests, and strategy guides — curated for the modern UPSC aspirant."
        breadcrumbs={[{ label: "Free Resources" }]}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 py-12 sm:py-16 space-y-16">
        <section>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="text-[22px] font-black text-brand-navy tracking-tight">
                Browse by category
              </h2>
              <p className="mt-1 text-[14px] font-medium text-brand-gray">
                Pick a resource type to see all available documents.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CATEGORIES.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </section>

        <section className="bg-[#0a2240] text-white p-6 sm:p-8 rounded-3xl relative overflow-hidden border border-slate-800 shadow-md">
          <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-brand-gold/10 blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl">
            <LeadCaptureForm source="resources_page" />
          </div>
        </section>

        <section>
          <div className="mb-8">
            <h2 className="text-[22px] font-black text-brand-navy tracking-tight">
              All documents
            </h2>
            <p className="mt-1 text-[14px] font-medium text-brand-gray">
              Search and filter across our entire library of free resources.
            </p>
          </div>

          <ResourceGrid resources={RESOURCES} categoryLabelMap={categoryLabelMap} />
        </section>
      </div>
    </>
  );
}
