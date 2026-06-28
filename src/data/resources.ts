import {
  FileText,
  ClipboardList,
  Globe,
  Lightbulb,
  PieChart,
  Network,
  type LucideIcon,
} from "lucide-react";

export type ResourceCategory =
  | "pdf-notes"
  | "revision-sheets"
  | "current-affairs"
  | "prelims-tricks"
  | "infographics"
  | "mind-maps";

export interface CategoryMeta {
  slug: ResourceCategory;
  label: string;
  description: string;
  icon: LucideIcon;
  theme: "blue" | "gold";
}

/** Serializable subset safe to pass into client components */
export type CategoryInfo = Pick<CategoryMeta, "slug" | "label" | "description" | "theme">;

export interface Resource {
  slug: string;
  title: string;
  description: string;
  category: ResourceCategory;
  filePath: string;
  fileSize: string;
  pages: number;
  updatedAt: string;
  tags: string[];
}

export const CATEGORIES: CategoryMeta[] = [
  {
    slug: "pdf-notes",
    label: "PDF Notes",
    description: "Concise, exam-ready notes covering core UPSC subjects.",
    icon: FileText,
    theme: "blue",
  },
  {
    slug: "revision-sheets",
    label: "Revision Sheets",
    description: "Quick-revision sheets for last-mile prelims preparation.",
    icon: ClipboardList,
    theme: "gold",
  },
  {
    slug: "current-affairs",
    label: "Current Affairs",
    description: "Monthly digests and curated current affairs compilations.",
    icon: Globe,
    theme: "blue",
  },
  {
    slug: "prelims-tricks",
    label: "Prelims Tricks",
    description: "Smart elimination and time-saving strategies for MCQs.",
    icon: Lightbulb,
    theme: "gold",
  },
  {
    slug: "infographics",
    label: "Infographics",
    description: "Visual summaries of complex topics for faster recall.",
    icon: PieChart,
    theme: "blue",
  },
  {
    slug: "mind-maps",
    label: "Mind Maps",
    description: "Structured mind maps connecting concepts across subjects.",
    icon: Network,
    theme: "gold",
  },
];

export const RESOURCES: Resource[] = [
  {
    slug: "indian-polity-fundamentals",
    title: "Indian Polity Fundamentals",
    description:
      "Constitution, Parliament, Judiciary, and federal structure — distilled for prelims.",
    category: "pdf-notes",
    filePath: "/pdfs/pdf-notes/indian-polity-fundamentals.pdf",
    fileSize: "1.2 MB",
    pages: 48,
    updatedAt: "2024-05-10",
    tags: ["Polity", "Prelims", "GS-II"],
  },
  {
    slug: "modern-indian-history-crux",
    title: "Modern Indian History Crux",
    description:
      "Freedom struggle timeline, reform movements, and key personalities in one sheet.",
    category: "pdf-notes",
    filePath: "/pdfs/pdf-notes/modern-indian-history-crux.pdf",
    fileSize: "980 KB",
    pages: 36,
    updatedAt: "2024-05-08",
    tags: ["History", "Prelims", "GS-I"],
  },
  {
    slug: "geography-india-atlas",
    title: "Geography India Atlas",
    description:
      "Physical features, climate, rivers, and agriculture — map-based prelims prep.",
    category: "pdf-notes",
    filePath: "/pdfs/pdf-notes/geography-india-atlas.pdf",
    fileSize: "1.5 MB",
    pages: 52,
    updatedAt: "2024-05-05",
    tags: ["Geography", "Prelims", "GS-I"],
  },
  {
    slug: "prelims-quick-revision",
    title: "Prelims Quick Revision Sheet",
    description:
      "A 30-day subject-wise revision planner with daily targets and checklists.",
    category: "revision-sheets",
    filePath: "/pdfs/revision-sheets/prelims-quick-revision.pdf",
    fileSize: "640 KB",
    pages: 12,
    updatedAt: "2024-05-12",
    tags: ["Revision", "Prelims", "Strategy"],
  },
  {
    slug: "monthly-ca-digest",
    title: "Monthly Current Affairs Digest",
    description:
      "National, international, schemes, and science/environment highlights.",
    category: "current-affairs",
    filePath: "/pdfs/current-affairs/monthly-ca-digest.pdf",
    fileSize: "2.1 MB",
    pages: 64,
    updatedAt: "2024-05-01",
    tags: ["Current Affairs", "Prelims", "Mains"],
  },
  {
    slug: "elimination-techniques",
    title: "Elimination Techniques for Prelims",
    description:
      "MCQ elimination patterns, trap recognition, and time-saving tricks.",
    category: "prelims-tricks",
    filePath: "/pdfs/prelims-tricks/elimination-techniques.pdf",
    fileSize: "720 KB",
    pages: 18,
    updatedAt: "2024-04-28",
    tags: ["Strategy", "Prelims", "MCQ"],
  },
  {
    slug: "economy-key-concepts",
    title: "Economy Key Concepts Infographic",
    description:
      "Visual summary of macro indicators, budget basics, and monetary policy.",
    category: "infographics",
    filePath: "/pdfs/infographics/economy-key-concepts.pdf",
    fileSize: "890 KB",
    pages: 8,
    updatedAt: "2024-04-25",
    tags: ["Economy", "Infographic", "GS-III"],
  },
  {
    slug: "polity-mind-map",
    title: "Polity Mind Map",
    description:
      "Constitutional framework, fundamental rights, and centre–state relations.",
    category: "mind-maps",
    filePath: "/pdfs/mind-maps/polity-mind-map.pdf",
    fileSize: "560 KB",
    pages: 4,
    updatedAt: "2024-04-20",
    tags: ["Polity", "Mind Map", "Prelims"],
  },
];

export function getCategoryMeta(slug: string): CategoryMeta | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function getResourcesByCategory(category: ResourceCategory): Resource[] {
  return RESOURCES.filter((r) => r.category === category);
}

export function getResource(
  category: ResourceCategory,
  slug: string
): Resource | undefined {
  return RESOURCES.find((r) => r.category === category && r.slug === slug);
}

export function getAllCategorySlugs(): ResourceCategory[] {
  return CATEGORIES.map((c) => c.slug);
}

export function getAllResourceParams(): { category: ResourceCategory; slug: string }[] {
  return RESOURCES.map((r) => ({ category: r.category, slug: r.slug }));
}

export function formatResourceDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
