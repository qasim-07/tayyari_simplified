import React from "react";
import { Target, PenTool, Brain, FileCheck, Check } from "lucide-react";

interface CourseCardProps {
  icon: React.ComponentType<{ className?: string }>;
  headerBg: "navy" | "gold";
  title: string;
  bullets: string[];
}

function CourseCard({ icon: Icon, headerBg, title, bullets }: CourseCardProps) {
  // Determine header bg and icon colors
  const headerClass = headerBg === "navy" ? "bg-brand-navy" : "bg-brand-gold";
  const iconColorClass = headerBg === "navy" ? "text-brand-gold" : "text-white";

  return (
    <div className="flex flex-col rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group">
      {/* 1. Colored Header Block with Icon */}
      <div className={`h-36 sm:h-40 flex items-center justify-center relative ${headerClass} overflow-hidden`}>
        {/* Decorative inner elements for rich aesthetics */}
        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute -top-12 -left-12 w-24 h-24 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-24 h-24 rounded-full bg-white/5 pointer-events-none" />
        
        {/* Centered Large Icon */}
        <div className={`transition-transform duration-500 group-hover:scale-110 ${iconColorClass}`}>
          <Icon className="w-14 h-14 stroke-[1.2]" />
        </div>
      </div>

      {/* 2. Body Details */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Course Title */}
          <h3 className="text-[17px] font-bold text-brand-navy leading-snug tracking-tight group-hover:text-brand-gold transition-colors duration-300 min-h-[48px]">
            {title}
          </h3>

          {/* Bullet Lists */}
          <ul className="mt-5 mb-8 space-y-3">
            {bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="flex-shrink-0 w-4 h-4 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center mt-0.5">
                  <Check className="w-2.5 h-2.5 text-brand-gold stroke-[3]" />
                </span>
                <span className="text-[13px] font-semibold text-brand-gray/90 leading-tight">
                  {bullet}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. Footer Accent Link */}
        <div className="border-t border-slate-100 pt-4">
          <a
            href="#details"
            className="inline-flex items-center gap-1.5 text-[13px] font-extrabold text-brand-navy hover:text-brand-gold transition-brand group/link"
          >
            <span>View Details</span>
            <span className="transition-transform duration-300 group-hover/link:translate-x-1">
              &rarr;
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function CourseSection() {
  const courses: CourseCardProps[] = [
    {
      icon: Target,
      headerBg: "navy",
      title: "UPSC Prelims Mastery Program",
      bullets: [
        "PYQ Analysis",
        "Elimination Techniques",
        "Revision Frameworks",
        "Topic-wise Tests",
      ],
    },
    {
      icon: PenTool,
      headerBg: "gold",
      title: "UPSC Mains Answer Writing",
      bullets: [
        "Answer Structure",
        "Model Answers",
        "Evaluation & Feedback",
        "Essay Guidance",
      ],
    },
    {
      icon: Brain,
      headerBg: "navy",
      title: "Philosophy Optional Program",
      bullets: [
        "Comprehensive Notes",
        "Thinkers & Concepts",
        "PYQ Mapping",
        "Mentorship Support",
      ],
    },
    {
      icon: FileCheck,
      headerBg: "gold",
      title: "Test Series (Prelims + Mains)",
      bullets: [
        "Sectional Tests",
        "Full Length Tests",
        "Detailed Solutions",
        "Performance Analysis",
      ],
    },
  ];

  return (
    <section id="courses" className="w-full">
      {/* Course Heading Row */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
        <div className="space-y-2">
          <span className="text-[12px] font-extrabold tracking-[0.25em] text-brand-gold uppercase block">
            OUR COURSES
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight">
            Structured. Focused. Effective.
          </h2>
        </div>

        <a
          href="#courses"
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl border border-brand-navy/30 hover:border-brand-navy text-[13px] font-bold text-brand-navy hover:bg-slate-50 active:scale-[0.98] transition-brand"
        >
          View All Courses &rarr;
        </a>
      </div>

      {/* Course Card Grid (Alternating Headers, 4 Columns on XL screens) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {courses.map((course, idx) => (
          <CourseCard key={idx} {...course} />
        ))}
      </div>
    </section>
  );
}
