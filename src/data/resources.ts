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
    slug: "geography-notes",
    title: "Geography Comprehensive Notes",
    description:
      "Complete geography concepts, physical geography, mapping, and Indian atlas for UPSC.",
    category: "pdf-notes",
    filePath: "/pdfs/pdf-notes/Geography in pdf.pdf",
    fileSize: "7.2 MB",
    pages: 31,
    updatedAt: "2026-06-28",
    tags: ["Geography", "Prelims", "GS-I"],
  },
  {
    slug: "gs3-disaster-management",
    title: "GS3 Disaster Management Notes",
    description:
      "High-yield value addition notes for Disaster Management (GS-III Mains), featuring frameworks and NDMA guidelines.",
    category: "pdf-notes",
    filePath: "/pdfs/pdf-notes/GS3_Disaster_Management_Value_Addition_1.pdf",
    fileSize: "5.4 MB",
    pages: 58,
    updatedAt: "2026-06-28",
    tags: ["Disaster Management", "Mains", "GS-III"],
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
