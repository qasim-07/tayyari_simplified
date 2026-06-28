"use client";

import Link from "next/link";
import { Calendar, HardDrive, FileText, ArrowLeft } from "lucide-react";
import ResourcesPageHeader from "@/components/resources/ResourcesPageHeader";
import ResourceViewer from "@/components/resources/ResourceViewer";
import {
  getResourcesByCategory,
  formatResourceDate,
} from "@/data/resources";
import type { CategoryInfo, Resource } from "@/data/resources";

interface ResourceDetailClientProps {
  meta: CategoryInfo;
  resource: Resource;
}

export default function ResourceDetailClient({ meta, resource }: ResourceDetailClientProps) {
  const related = getResourcesByCategory(resource.category)
    .filter((r) => r.slug !== resource.slug)
    .slice(0, 3);

  return (
    <>
      <ResourcesPageHeader
        eyebrow={meta.label.toUpperCase()}
        title={resource.title}
        description={resource.description}
        breadcrumbs={[
          { label: "Free Resources", href: "/resources" },
          { label: meta.label, href: `/resources/${meta.slug}` },
          { label: resource.title },
        ]}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 py-10 sm:py-14">
        <Link
          href={`/resources/${meta.slug}`}
          className="inline-flex items-center gap-2 text-[13px] font-bold text-brand-gray hover:text-brand-gold transition-brand mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to {meta.label}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          <div className="lg:col-span-8">
            <ResourceViewer
              filePath={resource.filePath}
              title={resource.title}
              slug={resource.slug}
            />
          </div>

          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm">
              <h2 className="text-[15px] font-extrabold text-brand-navy tracking-tight">
                Document details
              </h2>

              <dl className="mt-4 space-y-3">
                <div className="flex items-center justify-between text-[13px]">
                  <dt className="font-semibold text-brand-gray flex items-center gap-2">
                    <HardDrive className="w-4 h-4 text-brand-gold" />
                    File size
                  </dt>
                  <dd className="font-bold text-brand-navy">{resource.fileSize}</dd>
                </div>
                <div className="flex items-center justify-between text-[13px]">
                  <dt className="font-semibold text-brand-gray flex items-center gap-2">
                    <FileText className="w-4 h-4 text-brand-gold" />
                    Pages
                  </dt>
                  <dd className="font-bold text-brand-navy">{resource.pages}</dd>
                </div>
                <div className="flex items-center justify-between text-[13px]">
                  <dt className="font-semibold text-brand-gray flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-brand-gold" />
                    Updated
                  </dt>
                  <dd className="font-bold text-brand-navy">
                    {formatResourceDate(resource.updatedAt)}
                  </dd>
                </div>
              </dl>

              {resource.tags.length > 0 && (
                <div className="mt-5 pt-5 border-t border-slate-100">
                  <p className="text-[12px] font-extrabold text-brand-gray uppercase tracking-wider mb-2">
                    Tags
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {resource.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-bold text-brand-navy bg-slate-100 px-2.5 py-1 rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {related.length > 0 && (
              <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm">
                <h2 className="text-[15px] font-extrabold text-brand-navy tracking-tight mb-4">
                  More in {meta.label}
                </h2>
                <ul className="space-y-3">
                  {related.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/resources/${item.category}/${item.slug}`}
                        className="block text-[13px] font-semibold text-brand-gray hover:text-brand-gold transition-colors leading-snug"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </div>
    </>
  );
}
