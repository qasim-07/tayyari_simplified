import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface ResourcesPageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs: BreadcrumbItem[];
}

export default function ResourcesPageHeader({
  eyebrow = "FREE RESOURCES",
  title,
  description,
  breadcrumbs,
}: ResourcesPageHeaderProps) {
  return (
    <div className="relative bg-[#0a2240] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]">
        <svg viewBox="0 0 200 200" className="w-full h-full fill-none stroke-white">
          <circle cx="100" cy="100" r="90" strokeWidth="1" />
          {Array.from({ length: 24 }).map((_, i) => (
            <line
              key={i}
              x1="100"
              y1="100"
              x2="100"
              y2="10"
              strokeWidth="1"
              transform={`rotate(${i * 15} 100 100)`}
            />
          ))}
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-brand-gold/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 py-10 sm:py-14">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[12px] font-semibold text-slate-400 mb-6 flex-wrap">
          <Link href="/" className="inline-flex items-center gap-1 hover:text-brand-gold transition-colors">
            <Home className="w-3.5 h-3.5" />
            Home
          </Link>
          {breadcrumbs.map((item, idx) => (
            <span key={idx} className="inline-flex items-center gap-1.5">
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              {item.href ? (
                <Link href={item.href} className="hover:text-brand-gold transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-slate-200">{item.label}</span>
              )}
            </span>
          ))}
        </nav>

        <span className="text-[12px] font-extrabold tracking-[0.25em] text-brand-gold uppercase block">
          {eyebrow}
        </span>
        <h1 className="text-[28px] sm:text-[36px] font-black tracking-tight leading-tight mt-2 max-w-3xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-[15px] font-medium text-slate-300/90 leading-relaxed max-w-2xl">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
