export interface BlogContentBlock {
  type: "paragraph" | "header2" | "header3" | "quote" | "key-takeaways" | "bullet-list";
  content: string | string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  category: "Strategy" | "Prelims" | "Mains" | "Motivation";
  tags: string[];
  readTime: string;
  publishDate: string;
  summary: string;
  imageSrc: string;
  body: BlogContentBlock[];
}

export const BLOGS: BlogPost[] = [
  {
    slug: "revision-timetable",
    title: "How to Create a Revision Timetable That Works",
    category: "Strategy",
    tags: ["Revision", "Strategy", "UPSC Prep"],
    readTime: "5 min read",
    publishDate: "2024-05-12",
    summary: "Stop forgetting what you read. Learn the science-backed revision system that helps UPSC toppers retain GS and optional subjects efficiently.",
    imageSrc: "/images/blog_alarm_clock.png",
    body: [
      {
        type: "paragraph",
        content: "Revision is the single most critical factor that separates successful candidates from the rest in the Civil Services Examination. The vast syllabus makes it impossible to recall information during the exam unless you have a structured, science-backed revision plan.",
      },
      {
        type: "key-takeaways",
        content: [
          "Active recall beats passive reading every time.",
          "Implement the 1-7-30 Spaced Repetition rule.",
          "Dedicate the first 2 hours of your study day purely to revision."
        ]
      },
      {
        type: "header2",
        content: "The Science of Forgetting: Why Your Revision Fails"
      },
      {
        type: "paragraph",
        content: "According to Ebbinghaus' Forgetting Curve, humans lose about 70% of new information within 24 hours if they do not actively review it. Passive reading (re-reading highlighted text) gives you a false sense of familiarity, but fails to build strong neural pathways. To counter this, you must adopt Active Recall."
      },
      {
        type: "header3",
        content: "How to Practice Active Recall"
      },
      {
        type: "bullet-list",
        content: [
          "Close the book and write down a brief summary of the topic from memory.",
          "Use flashcards (digital like Anki or physical ones) for key facts, constitutional articles, and geographical locations.",
          "Explain the concept out loud to yourself as if you were teaching a beginner."
        ]
      },
      {
        type: "quote",
        content: "Do not revise to confirm what you know; revise to discover what you have forgotten."
      },
      {
        type: "header2",
        content: "The 1-7-30 Spaced Repetition Rule"
      },
      {
        type: "paragraph",
        content: "Spaced repetition involves reviewing information at increasing intervals. Organize your timetable so that you revise a topic on Day 1 (24 hours later), Day 7 (one week later), and Day 30 (one month later). This pushes the information from your short-term memory to your long-term memory."
      }
    ]
  },
  {
    slug: "most-repeated-topics",
    title: "10 Most Repeated Topics in UPSC Prelims",
    category: "Prelims",
    tags: ["Prelims", "High-Yield", "Analysis"],
    readTime: "6 min read",
    publishDate: "2024-05-08",
    summary: "Analyze the last 10 years of UPSC question papers to discover the recurring areas that yield the highest return on investment.",
    imageSrc: "/images/blog_archery_target.png",
    body: [
      {
        type: "paragraph",
        content: "UPSC Prelims is notorious for its unpredictability. However, an in-depth analysis of past papers reveals that certain high-yield topics are repeated year after year. Concentrating on these Core Areas can boost your score by 15-20 marks."
      },
      {
        type: "key-takeaways",
        content: [
          "Polity: Fundamental Rights, DPSP, and Parliament are non-negotiable.",
          "Modern History: Distill movements, chronological acts, and key personalities.",
          "Environment: National Parks, biosphere reserves, and schedule list of species."
        ]
      },
      {
        type: "header2",
        content: "The Top Recurring Areas to Prioritize"
      },
      {
        type: "paragraph",
        content: "Let's detail the absolute high-priority subjects and the specific sub-topics that you should study thoroughly:"
      },
      {
        type: "bullet-list",
        content: [
          "**Polity - Constitutional Bodies & Parliament**: Understand the powers, composition, and removal processes of statutory and constitutional bodies. Parliament's legislative procedures and committees are heavily targeted.",
          "**Economy - Monetary Policy & Inflation**: Conceptual clarity of CRR, SLR, Repo Rate, and how they impact inflation and the banking sector is tested annually.",
          "**Modern History - Chronology & Key Personalities**: Be ready with chronologies of the Indian National Movement, the charter acts, and individual leadership contributions.",
          "**Geography - Mapping & Rivers**: Practice physical mapping of India, river tributaries, national highways, and conflict zones globally.",
          "**Environment - Environmental Conventions**: International treaties like UNFCCC, CBD, Ramsar sites, and wildlife acts form the bulk of environment questions."
        ]
      },
      {
        type: "quote",
        content: "Smart work is not studying 18 hours a day; it is knowing what to skip and what to master."
      }
    ]
  },
  {
    slug: "topper-lessons",
    title: "Lessons Every UPSC Topper Wants You to Know",
    category: "Motivation",
    tags: ["Topper Advice", "Motivation", "Consistency"],
    readTime: "4 min read",
    publishDate: "2024-05-05",
    summary: "Succeeding in IAS prep is not just about intelligence. Read about the common principles and mental frameworks that UPSC toppers apply.",
    imageSrc: "/images/blog_bookshelf.png",
    body: [
      {
        type: "paragraph",
        content: "Every year, hundreds of candidates clear the Civil Services Examination. While their backgrounds and optional subjects vary, their mental preparation and daily habits share deep commonalities. Success in this exam is a marathon, not a sprint."
      },
      {
        type: "key-takeaways",
        content: [
          "Consistency beats high intensity study bursts.",
          "Limit your study resources; rely on multiple revisions.",
          "Simulating exam conditions is vital before entering the hall."
        ]
      },
      {
        type: "header2",
        content: "Rule 1: Resources Minimalist, Revision Maximalist"
      },
      {
        type: "paragraph",
        content: "A common mistake of aspirants is purchasing multiple books for the same subject. Toppers advise sticking to one standard source per subject (e.g., Laxmikanth for Polity, Spectrum for Modern History) and reading it 10 times, rather than reading 10 different books once. This builds strong retention and prevents confusion."
      },
      {
        type: "header2",
        content: "Rule 2: Consistency is the Key"
      },
      {
        type: "paragraph",
        content: "Studying 12 hours one day and 2 hours the next day is ineffective. Aim for a sustainable, daily routine of 7-9 hours. Consistency builds discipline and momentum, helping you maintain confidence through the lengthy exam cycle."
      },
      {
        type: "quote",
        content: "The UPSC exam is as much a test of character, patience, and mental strength as it is of academic knowledge."
      }
    ]
  },
  {
    slug: "answer-writing-secrets",
    title: "UPSC Mains: 5 Secrets to Master Answer Writing",
    category: "Mains",
    tags: ["Mains", "Answer Writing", "GS Papers"],
    readTime: "5 min read",
    publishDate: "2024-05-01",
    summary: "UPSC Mains is all about presentation and answer structuring. Learn how to draft balanced, high-scoring answers under strict time constraints.",
    imageSrc: "/images/blog_archery_target.png", // reusing target icon as it fits Mains targets
    body: [
      {
        type: "paragraph",
        content: "While Prelims gets you through the gate, Mains decides your entry into the final rank list. The secret to scoring well in Mains is not knowing everything, but communicating what you know in a structured, concise, and impactful manner."
      },
      {
        type: "key-takeaways",
        content: [
          "Always write a defined Introduction, Body, and Conclusion.",
          "Use diagrams, flowcharts, and physical maps to convey data rapidly.",
          "Back your arguments with government reports, committees, and data points."
        ]
      },
      {
        type: "header2",
        content: "The 5 Core Secrets of Effective Writing"
      },
      {
        type: "bullet-list",
        content: [
          "**1. Deconstruct the Question**: Read the question twice. Identify the core directives (e.g., Discuss, Critically Examine, Evaluate) and allocate word count and subheadings accordingly.",
          "**2. Introduction Hooks**: Open your answer with a definition, a recent current affairs context, or a relevant statistic from a recognized body (like NITI Aayog, NCRB).",
          "**3. Subheading Dividers**: Never write answers in long, continuous paragraphs. Break them down into logical subheadings corresponding to the parts of the question.",
          "**4. Diagram Integration**: Integrate simple schematics, maps, or flowcharts. They save writing time and grab the evaluator's attention instantly.",
          "**5. Forward-Looking Conclusion**: End your answer on a positive, solution-oriented note. Mention government schemes or directives (e.g., SDGs, NITI Aayog vision document)."
        ]
      },
      {
        type: "quote",
        content: "An examiner spends less than 3 minutes evaluation per sheet. Make your answers easy to read, scannable, and visually striking."
      }
    ]
  }
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOGS.find((b) => b.slug === slug);
}

export function getRelatedBlogs(slug: string, limit = 2): BlogPost[] {
  return BLOGS.filter((b) => b.slug !== slug).slice(0, limit);
}

export function getAllBlogCategories(): string[] {
  return ["All", "Strategy", "Prelims", "Mains", "Motivation"];
}
