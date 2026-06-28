"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Copy,
  Check,
  Send,
  MessageCircle,
  TrendingUp,
  Download,
} from "lucide-react";
import ResourcesPageHeader from "@/components/resources/ResourcesPageHeader";
import LeadCaptureForm from "@/components/resources/LeadCaptureForm";
import type { BlogPost } from "@/data/blogs";
import { getRelatedBlogs } from "@/data/blogs";

interface BlogDetailClientProps {
  post: BlogPost;
}

export default function BlogDetailClient({ post }: BlogDetailClientProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  // Scroll tracking effect
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      const totalScroll = documentHeight - windowHeight;
      const progress = totalScroll > 0 ? (scrollTop / totalScroll) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const related = useMemo(() => getRelatedBlogs(post.slug, 2), [post.slug]);

  const handleCopyLink = () => {
    if (typeof window === "undefined") return;
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareText = encodeURIComponent(`Check out this excellent UPSC article: ${post.title}`);
  const shareUrl = typeof window !== "undefined" ? encodeURIComponent(window.location.href) : "";

  const formatDate = (isoDate: string) => {
    return new Date(isoDate).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <>
      {/* Sticky Progress Indicator right under header */}
      <div className="fixed top-20 left-0 right-0 z-40 h-1 bg-slate-100 pointer-events-none">
        <div
          className="h-full bg-brand-gold transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <ResourcesPageHeader
        eyebrow={post.category.toUpperCase()}
        title={post.title}
        description={post.summary}
        breadcrumbs={[
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 py-10 sm:py-14">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[13px] font-bold text-brand-gray hover:text-brand-gold transition-brand mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to all articles
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Article Main Body (8 Columns) */}
          <article className="lg:col-span-8 space-y-8 bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm leading-relaxed text-brand-navy">
            
            {/* Meta Info Panel */}
            <div className="flex flex-wrap items-center gap-4 text-[12px] font-bold text-brand-gray/60 pb-6 border-b border-slate-100">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-brand-gold" />
                {formatDate(post.publishDate)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-brand-gold" />
                {post.readTime}
              </span>
              <span>•</span>
              <span>By Tayyari Simplified Editorial Team</span>
            </div>

            {/* Content Rendering Block */}
            <div className="space-y-6 text-[15px] font-medium text-brand-gray/90 leading-relaxed">
              {post.body.map((block, index) => {
                switch (block.type) {
                  case "paragraph":
                    return (
                      <p key={index} className="text-[15px] leading-relaxed">
                        {block.content as string}
                      </p>
                    );
                  case "header2":
                    return (
                      <h2
                        key={index}
                        className="text-[20px] font-black text-brand-navy tracking-tight mt-8 pt-4 mb-2 flex items-center gap-2"
                      >
                        {block.content as string}
                      </h2>
                    );
                  case "header3":
                    return (
                      <h3
                        key={index}
                        className="text-[16px] font-extrabold text-brand-navy tracking-tight mt-6 mb-2"
                      >
                        {block.content as string}
                      </h3>
                    );
                  case "quote":
                    return (
                      <blockquote
                        key={index}
                        className="border-l-4 border-brand-gold bg-brand-gold/[0.03] px-5 py-4 my-6 rounded-r-2xl italic font-semibold text-brand-navy"
                      >
                        &ldquo;{block.content as string}&rdquo;
                      </blockquote>
                    );
                  case "key-takeaways":
                    return (
                      <div
                        key={index}
                        className="bg-brand-navy/5 border border-brand-navy/10 rounded-2xl p-5 my-6 space-y-3"
                      >
                        <h4 className="text-[13px] font-extrabold text-brand-gold uppercase tracking-wider flex items-center gap-2">
                          <TrendingUp className="w-4 h-4" />
                          Key Takeaways
                        </h4>
                        <ul className="space-y-2">
                          {(block.content as string[]).map((takeaway, tIdx) => (
                            <li key={tIdx} className="flex items-start gap-2 text-[13px] text-brand-navy font-semibold">
                              <span className="text-brand-gold mr-1">•</span>
                              {takeaway}
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  case "bullet-list":
                    return (
                      <ul key={index} className="space-y-3 pl-4 list-none my-4">
                        {(block.content as string[]).map((item, bIdx) => {
                          const hasBold = item.includes("**");
                          let renderedText: React.ReactNode = item;
                          
                          if (hasBold) {
                            const parts = item.split("**");
                            renderedText = (
                              <>
                                {parts[0]}
                                <strong className="font-extrabold text-brand-navy">{parts[1]}</strong>
                                {parts.slice(2).join("**")}
                              </>
                            );
                          }

                          return (
                            <li key={bIdx} className="flex items-start gap-2.5 text-[14px]">
                              <span className="text-brand-gold mt-1">•</span>
                              <span>{renderedText}</span>
                            </li>
                          );
                        })}
                      </ul>
                    );
                  default:
                    return null;
                }
              })}
            </div>
          </article>

          {/* Sticky Sidebar (4 Columns) */}
          <aside className="lg:col-span-4 space-y-6">
            
            {/* Share Article Widget */}
            <div className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-sm">
              <h4 className="text-[14px] font-extrabold text-brand-navy tracking-tight flex items-center gap-2 mb-4">
                <Share2 className="w-4 h-4 text-brand-gold" />
                Share this article
              </h4>
              <div className="grid grid-cols-3 gap-2">
                <a
                  href={`https://api.whatsapp.com/send?text=${shareText}%20${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-2xl bg-emerald-50 hover:bg-emerald-100 text-emerald-600 transition-brand group"
                >
                  <MessageCircle className="w-5 h-5 group-hover:scale-105 transition-transform" />
                  <span className="text-[10px] font-extrabold mt-1">WhatsApp</span>
                </a>
                <a
                  href={`https://t.me/share/url?url=${shareUrl}&text=${shareText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-2xl bg-sky-50 hover:bg-sky-100 text-sky-600 transition-brand group"
                >
                  <Send className="w-5 h-5 rotate-45 -translate-x-0.5 translate-y-0.5 group-hover:scale-105 transition-transform" />
                  <span className="text-[10px] font-extrabold mt-1">Telegram</span>
                </a>
                <button
                  onClick={handleCopyLink}
                  className="flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-50 hover:bg-slate-100 text-brand-navy transition-brand group"
                >
                  {copied ? (
                    <>
                      <Check className="w-5 h-5 text-emerald-600 animate-bounce" />
                      <span className="text-[10px] font-extrabold text-emerald-600 mt-1">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-5 h-5 group-hover:scale-105 transition-transform" />
                      <span className="text-[10px] font-extrabold mt-1">Copy Link</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* UPSC Free Notes CTA Box */}
            <div className="bg-[#0a2240] text-white rounded-3xl p-6 relative overflow-hidden border border-slate-800 shadow-md">
              <div className="absolute -bottom-24 -right-24 w-40 h-40 rounded-full bg-brand-gold/10 blur-3xl pointer-events-none" />
              <div className="relative z-10 space-y-4">
                <span className="text-[10px] font-extrabold tracking-widest text-brand-gold uppercase block">
                  Exam Companion
                </span>
                <h4 className="text-[16px] font-black leading-snug">
                  Get Free Exam-Focused PDF Notes
                </h4>
                <p className="text-[12px] text-slate-300 font-medium leading-relaxed">
                  Download high-yield Polity, History, and Current Affairs guides curated by toppers.
                </p>
                <Link
                  href="/resources"
                  className="inline-flex w-full items-center justify-center gap-2 px-4 py-3 rounded-xl bg-brand-gold hover:bg-brand-gold-light active:scale-[0.98] text-brand-navy text-[12px] font-extrabold transition-brand shadow"
                >
                  <Download className="w-4 h-4" />
                  Download PDFs
                </Link>
              </div>
            </div>

            {/* Related Articles */}
            {related.length > 0 && (
              <div className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-sm space-y-4">
                <h4 className="text-[14px] font-extrabold text-brand-navy tracking-tight">
                  Recommended Articles
                </h4>
                <ul className="space-y-4">
                  {related.map((item) => (
                    <li key={item.slug} className="group border-b border-slate-100 last:border-b-0 pb-3 last:pb-0">
                      <Link href={`/blog/${item.slug}`} className="space-y-1 block">
                        <span className="text-[9px] font-extrabold text-brand-gold tracking-wider uppercase">
                          {item.category}
                        </span>
                        <h5 className="text-[13px] font-bold text-brand-navy group-hover:text-brand-gold transition-colors leading-snug">
                          {item.title}
                        </h5>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>

        {/* Lead Capture Banner */}
        <section className="bg-[#0a2240] text-white p-6 sm:p-8 rounded-3xl relative overflow-hidden border border-slate-800 shadow-md mt-12">
          <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-brand-gold/10 blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl">
            <LeadCaptureForm
              source="blog_detail"
              heading="Subscribe to the Tayyari Digest"
              subtext="Get high-yield UPSC articles, cheat sheets, and strategies delivered weekly to your inbox."
              buttonLabel="Subscribe"
            />
          </div>
        </section>
      </div>
    </>
  );
}
