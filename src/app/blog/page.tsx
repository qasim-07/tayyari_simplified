"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Calendar, Clock, ArrowRight, FileText, Compass } from "lucide-react";
import ResourcesPageHeader from "@/components/resources/ResourcesPageHeader";
import LeadCaptureForm from "@/components/resources/LeadCaptureForm";
import { BLOGS, getAllBlogCategories } from "@/data/blogs";

export default function BlogListingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(() => getAllBlogCategories(), []);

  // Filtered posts
  const filteredPosts = useMemo(() => {
    return BLOGS.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        selectedCategory === "All" ? true : post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Spotlight post (use first post in the full list if no filter, otherwise the first matching)
  const spotlightPost = useMemo(() => {
    if (searchQuery || selectedCategory !== "All") return null;
    return BLOGS[0] || null;
  }, [searchQuery, selectedCategory]);

  // Grid posts (exclude spotlight post if it's shown)
  const gridPosts = useMemo(() => {
    if (spotlightPost) {
      return filteredPosts.filter((p) => p.slug !== spotlightPost.slug);
    }
    return filteredPosts;
  }, [filteredPosts, spotlightPost]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
  };

  const formatDate = (isoDate: string) => {
    return new Date(isoDate).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <>
      <ResourcesPageHeader
        title="Insights & Strategies for UPSC Success"
        description="Deep-dives into exam strategy, high-yield topic analysis, mains answer writing, and topper tips to help you build consistency and target IAS."
        breadcrumbs={[{ label: "Blog" }]}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 py-12 sm:py-16 space-y-16">
        
        {/* Spotlight Post */}
        {spotlightPost && (
          <section className="space-y-6">
            <h2 className="text-[12px] font-extrabold tracking-[0.25em] text-brand-gold uppercase block">
              Spotlight Article
            </h2>
            <Link
              href={`/blog/${spotlightPost.slug}`}
              className="group grid grid-cols-1 lg:grid-cols-12 bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm hover:border-brand-gold/30 hover:shadow-2xl hover:shadow-brand-navy/5 transition-all duration-300"
            >
              {/* Image Column */}
              <div className="lg:col-span-7 aspect-video lg:aspect-auto min-h-[300px] bg-slate-50 relative border-b lg:border-b-0 lg:border-r border-slate-200/60 overflow-hidden">
                <img
                  src={spotlightPost.imageSrc}
                  alt={spotlightPost.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                />
              </div>

              {/* Text Column */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-extrabold tracking-wider uppercase text-brand-gold bg-brand-gold/10 px-2.5 py-1 rounded-full">
                      {spotlightPost.category}
                    </span>
                    <span className="text-[11px] font-semibold text-brand-gray/60 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {spotlightPost.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-brand-navy leading-tight tracking-tight group-hover:text-brand-gold transition-colors duration-300">
                    {spotlightPost.title}
                  </h3>

                  <p className="text-[14px] font-medium text-brand-gray/90 leading-relaxed">
                    {spotlightPost.summary}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[13px] font-extrabold text-brand-navy flex items-center gap-2">
                    Read Article
                    <ArrowRight className="w-4 h-4 text-brand-gold transition-transform duration-300 group-hover:translate-x-1.5" />
                  </span>
                  <span className="text-[11px] font-bold text-brand-gray/60 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {formatDate(spotlightPost.publishDate)}
                  </span>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* Search & Filter Controls */}
        <section className="space-y-6">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/60">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gray/50" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles by title, summary, or tags..."
                className="w-full pl-11 pr-10 py-3 rounded-xl border border-slate-200 text-[13px] font-medium text-brand-navy placeholder:text-brand-gray/50 bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold transition-brand"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-lg text-brand-gray hover:bg-slate-100 hover:text-brand-navy transition-brand"
                >
                  <Search className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-[12px] font-extrabold px-4 py-2 rounded-xl transition-brand ${
                    selectedCategory === cat
                      ? "bg-brand-navy text-white shadow-sm"
                      : "bg-white border border-slate-200 text-brand-gray hover:border-brand-gold/30 hover:text-brand-gold"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Output */}
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200/80 p-8">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4 text-brand-gray">
                <Compass className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h4 className="text-[15px] font-black text-brand-navy">No articles found</h4>
              <p className="mt-1.5 text-[13px] font-medium text-brand-gray leading-relaxed max-w-sm mx-auto">
                We couldn&apos;t find any articles matching your search criteria. Try a different search term or select another category.
              </p>
              <button
                onClick={clearFilters}
                className="mt-5 px-4 py-2 text-[12px] font-extrabold text-brand-gold bg-brand-gold/10 hover:bg-brand-gold hover:text-brand-navy rounded-xl transition-brand"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {gridPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm hover:border-brand-gold/30 hover:shadow-xl hover:shadow-brand-navy/5 hover:-translate-y-1.5 transition-all duration-300"
                >
                  {/* Card Image */}
                  <div className="aspect-video bg-slate-50 relative overflow-hidden border-b border-slate-100">
                    <img
                      src={post.imageSrc}
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-extrabold tracking-wider uppercase text-brand-gold bg-brand-gold/10 px-2 py-0.5 rounded">
                          {post.category}
                        </span>
                        <span className="text-[10px] font-semibold text-brand-gray/60 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="text-[16px] font-black text-brand-navy leading-snug tracking-tight group-hover:text-brand-gold transition-colors duration-300">
                        {post.title}
                      </h3>

                      <p className="text-[13px] font-medium text-brand-gray/80 leading-relaxed line-clamp-3">
                        {post.summary}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-brand-gray/60">
                      <span className="text-[12px] font-extrabold text-brand-navy flex items-center gap-1 group-hover:text-brand-gold transition-colors">
                        Read More &rarr;
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {formatDate(post.publishDate)}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* Newsletter Section */}
        <section className="bg-[#0a2240] text-white p-6 sm:p-8 rounded-3xl relative overflow-hidden border border-slate-800 shadow-md">
          <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-brand-gold/10 blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl">
            <LeadCaptureForm
              source="blog_list"
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
