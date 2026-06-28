import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CategoryMeta } from "@/data/resources";
import { getResourcesByCategory } from "@/data/resources";

interface CategoryCardProps {
  category: CategoryMeta;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const Icon = category.icon;
  const count = getResourcesByCategory(category.slug).length;
  const iconBg =
    category.theme === "blue"
      ? "bg-brand-navy/5 text-brand-navy group-hover:bg-brand-navy group-hover:text-white"
      : "bg-brand-gold/10 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy";

  return (
    <Link
      href={`/resources/${category.slug}`}
      className="group flex flex-col bg-white rounded-2xl border border-slate-200/80 p-6 hover:border-brand-gold/30 hover:shadow-xl hover:shadow-brand-navy/5 hover:-translate-y-1 transition-all duration-300"
    >
      <div
        className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${iconBg}`}
      >
        <Icon className="w-7 h-7 stroke-[1.8]" />
      </div>

      <h3 className="mt-5 text-[17px] font-extrabold text-brand-navy tracking-tight group-hover:text-brand-gold transition-colors duration-300">
        {category.label}
      </h3>

      <p className="mt-2 text-[13px] font-medium text-brand-gray/90 leading-relaxed flex-1">
        {category.description}
      </p>

      <div className="mt-5 flex items-center justify-between">
        <span className="text-[12px] font-bold text-brand-gray/70">
          {count} {count === 1 ? "document" : "documents"}
        </span>
        <span className="inline-flex items-center gap-1 text-[13px] font-extrabold text-brand-navy group-hover:text-brand-gold transition-colors">
          Browse
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
