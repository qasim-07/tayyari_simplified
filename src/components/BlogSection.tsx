import React from "react";

interface BlogCardProps {
  imageSrc: string;
  category: string;
  title: string;
  footer: string;
}

function BlogCard({ imageSrc, category, title, footer }: BlogCardProps) {
  return (
    <article className="flex flex-col space-y-3.5 group cursor-pointer">
      {/* Image Block with hover zoom and clean rounded corners */}
      <div className="w-full aspect-square rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 relative select-none">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Category Tag */}
      <span className="text-[11px] font-black tracking-wider text-brand-gold uppercase block">
        {category}
      </span>

      {/* Article Title */}
      <h3 className="text-[15px] font-extrabold text-brand-navy leading-snug tracking-tight group-hover:text-brand-gold transition-colors duration-300 min-h-[44px]">
        {title}
      </h3>

      {/* Metadata Footer */}
      <span className="text-[12px] font-semibold text-brand-gray/70 block">
        {footer}
      </span>
    </article>
  );
}

export default function BlogSection() {
  const blogs: BlogCardProps[] = [
    {
      imageSrc: "/images/blog_alarm_clock.png",
      category: "STRATEGY",
      title: "How to Create a Revision Timetable That Works",
      footer: "May 12, 2024 • 5 min read",
    },
    {
      imageSrc: "/images/blog_archery_target.png",
      category: "PRELIMS",
      title: "10 Most Repeated Topics in UPSC Prelims",
      footer: "May 8, 2024 • 6 min read",
    },
    {
      imageSrc: "/images/blog_bookshelf.png",
      category: "MOTIVATION",
      title: "Lessons Every UPSC Topper Wants You to Know",
      footer: "May 5, 2024 • 4 min read",
    },
  ];

  return (
    <section className="w-full">
      {/* Blog Heading Row */}
      <div className="flex items-end justify-between gap-4 mb-8">
        <div className="space-y-1.5">
          <span className="text-[12px] font-extrabold tracking-[0.25em] text-brand-gold uppercase block">
            FROM OUR BLOG
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-brand-navy tracking-tight leading-snug">
            Insights that make a difference.
          </h2>
        </div>

        <a
          href="#blog"
          className="inline-flex items-center gap-1.5 text-[13px] font-extrabold text-brand-navy hover:text-brand-gold transition-brand group/link"
        >
          <span>View All Blogs</span>
          <span className="transition-transform duration-300 group-hover/link:translate-x-1">
            &rarr;
          </span>
        </a>
      </div>

      {/* 3-Column Articles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-5 lg:gap-6">
        {blogs.map((blog, idx) => (
          <BlogCard key={idx} {...blog} />
        ))}
      </div>
    </section>
  );
}
