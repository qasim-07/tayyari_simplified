import Link from "next/link";
import { ArrowRight, FileText, Calendar, HardDrive } from "lucide-react";
import type { Resource } from "@/data/resources";
import { formatResourceDate } from "@/data/resources";

interface ResourceCardProps {
  resource: Resource;
  categoryLabel: string;
}

export default function ResourceCard({ resource, categoryLabel }: ResourceCardProps) {
  return (
    <Link
      href={`/resources/${resource.category}/${resource.slug}`}
      className="group flex flex-col bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 hover:border-brand-gold/30 hover:shadow-xl hover:shadow-brand-navy/5 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="w-11 h-11 rounded-xl bg-brand-navy/5 text-brand-navy flex items-center justify-center flex-shrink-0 group-hover:bg-brand-gold/10 group-hover:text-brand-gold transition-brand">
          <FileText className="w-5 h-5 stroke-[1.8]" />
        </div>
        <span className="text-[10px] font-extrabold tracking-wider uppercase text-brand-gold bg-brand-gold/10 px-2.5 py-1 rounded-full">
          {categoryLabel}
        </span>
      </div>

      <h3 className="mt-4 text-[16px] font-extrabold text-brand-navy tracking-tight leading-snug group-hover:text-brand-gold transition-colors duration-300">
        {resource.title}
      </h3>

      <p className="mt-2 text-[13px] font-medium text-brand-gray/90 leading-relaxed line-clamp-2 flex-1">
        {resource.description}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-3 text-[11px] font-semibold text-brand-gray/70">
        <span className="inline-flex items-center gap-1">
          <HardDrive className="w-3 h-3" />
          {resource.fileSize}
        </span>
        <span className="inline-flex items-center gap-1">
          <FileText className="w-3 h-3" />
          {resource.pages} pages
        </span>
        <span className="inline-flex items-center gap-1">
          <Calendar className="w-3 h-3" />
          {formatResourceDate(resource.updatedAt)}
        </span>
      </div>

      {resource.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {resource.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-bold text-brand-navy/70 bg-slate-100 px-2 py-0.5 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
        <span className="text-[13px] font-extrabold text-brand-navy group-hover:text-brand-gold transition-colors">
          View & Download
        </span>
        <ArrowRight className="w-4 h-4 text-brand-gold transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
