"use client";

import React, { useState, useMemo } from "react";
import { Search, X, SlidersHorizontal } from "lucide-react";
import type { Resource } from "@/data/resources";
import ResourceCard from "./ResourceCard";

interface ResourceGridProps {
  resources: Resource[];
  categoryLabelMap?: Record<string, string>;
  showCategoryLabel?: boolean;
}

export default function ResourceGrid({
  resources,
  categoryLabelMap = {},
  showCategoryLabel = true,
}: ResourceGridProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Extract all unique tags
  const uniqueTags = useMemo(() => {
    const tagsSet = new Set<string>();
    resources.forEach((r) => {
      r.tags.forEach((t) => tagsSet.add(t));
    });
    return Array.from(tagsSet);
  }, [resources]);

  // Filter resources based on query and tag
  const filteredResources = useMemo(() => {
    return resources.filter((resource) => {
      const matchesSearch =
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesTag = selectedTag ? resource.tags.includes(selectedTag) : true;

      return matchesSearch && matchesTag;
    });
  }, [resources, searchQuery, selectedTag]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedTag(null);
  };

  return (
    <div className="space-y-8">
      {/* Search & Filter Controls */}
      <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/60">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gray/50" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by title, topic, or tags..."
            className="w-full pl-11 pr-10 py-3 rounded-xl border border-slate-200 text-[13px] font-medium text-brand-navy placeholder:text-brand-gray/50 bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold transition-brand"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-lg text-brand-gray hover:bg-slate-100 hover:text-brand-navy transition-brand"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {uniqueTags.length > 0 && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[12px] font-bold text-brand-gray/70 flex items-center gap-1.5 mr-1">
              <SlidersHorizontal className="w-3.5 h-3.5 text-brand-gold" />
              Filter:
            </span>
            <button
              onClick={() => setSelectedTag(null)}
              className={`text-[11px] font-extrabold px-3 py-1.5 rounded-lg transition-brand ${
                selectedTag === null
                  ? "bg-brand-navy text-white shadow-sm"
                  : "bg-white border border-slate-200 text-brand-gray hover:border-brand-gold/30 hover:text-brand-gold"
              }`}
            >
              All
            </button>
            {uniqueTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                className={`text-[11px] font-extrabold px-3 py-1.5 rounded-lg transition-brand ${
                  selectedTag === tag
                    ? "bg-brand-navy text-white shadow-sm"
                    : "bg-white border border-slate-200 text-brand-gray hover:border-brand-gold/30 hover:text-brand-gold"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Grid output */}
      {filteredResources.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-200/80 p-8">
          <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4 text-brand-gray">
            <Search className="w-6 h-6 stroke-[1.5]" />
          </div>
          <h4 className="text-[15px] font-black text-brand-navy">No resources found</h4>
          <p className="mt-1.5 text-[13px] font-medium text-brand-gray leading-relaxed max-w-sm mx-auto">
            We couldn&apos;t find anything matching your search term. Try checking your spelling or selecting another filter.
          </p>
          <button
            onClick={clearFilters}
            className="mt-5 px-4 py-2 text-[12px] font-extrabold text-brand-gold bg-brand-gold/10 hover:bg-brand-gold hover:text-brand-navy rounded-xl transition-brand"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredResources.map((resource) => (
            <ResourceCard
              key={resource.slug}
              resource={resource}
              categoryLabel={
                showCategoryLabel
                  ? (categoryLabelMap[resource.category] ?? resource.category)
                  : ""
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}
