import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LEADS_FILE = path.join(process.cwd(), "data", "leads.json");

interface LeadEntry {
  email: string;
  source: string;
  resourceSlug?: string;
  resourceTitle?: string;
  capturedAt: string;
}

async function appendLead(entry: LeadEntry): Promise<void> {
  await fs.mkdir(path.dirname(LEADS_FILE), { recursive: true });

  let existing: LeadEntry[] = [];
  try {
    const raw = await fs.readFile(LEADS_FILE, "utf-8");
    existing = JSON.parse(raw) as LeadEntry[];
  } catch {
    existing = [];
  }

  existing.push(entry);
  await fs.writeFile(LEADS_FILE, JSON.stringify(existing, null, 2), "utf-8");
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      email?: string;
      source?: string;
      resourceSlug?: string;
      resourceTitle?: string;
    };

    const email = body.email?.trim().toLowerCase() ?? "";
    const source = body.source?.trim() || "website";

    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const entry: LeadEntry = {
      email,
      source,
      resourceSlug: body.resourceSlug,
      resourceTitle: body.resourceTitle,
      capturedAt: new Date().toISOString(),
    };

    await appendLead(entry);

    return NextResponse.json({
      success: true,
      message: "You're all set! Your download is ready.",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Unable to save your details. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get("token") || request.headers.get("Authorization")?.replace("Bearer ", "");
    const adminPassword = process.env.ADMIN_PASSWORD || "admin123";

    if (!token || token !== adminPassword) {
      return NextResponse.json(
        { success: false, message: "Unauthorized. Please check your credentials." },
        { status: 401 }
      );
    }

    let leads: LeadEntry[] = [];
    try {
      const raw = await fs.readFile(LEADS_FILE, "utf-8");
      leads = JSON.parse(raw) as LeadEntry[];
      // Sort leads newest first
      leads.sort((a, b) => new Date(b.capturedAt).getTime() - new Date(a.capturedAt).getTime());
    } catch {
      leads = [];
    }

    return NextResponse.json({
      success: true,
      leads,
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Unable to load lead records." },
      { status: 500 }
    );
  }
}

