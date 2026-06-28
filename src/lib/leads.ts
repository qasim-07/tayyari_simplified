const LEAD_STORAGE_KEY = "tayyari_lead_access";

export interface LeadRecord {
  email: string;
  capturedAt: string;
}

export function getStoredLead(): LeadRecord | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(LEAD_STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as LeadRecord;
  } catch {
    return null;
  }
}

export function storeLead(email: string): LeadRecord {
  const record: LeadRecord = {
    email: email.trim().toLowerCase(),
    capturedAt: new Date().toISOString(),
  };
  localStorage.setItem(LEAD_STORAGE_KEY, JSON.stringify(record));
  return record;
}

export function hasLeadAccess(): boolean {
  return getStoredLead() !== null;
}

export interface SubmitLeadPayload {
  email: string;
  source: string;
  resourceSlug?: string;
  resourceTitle?: string;
}

export interface SubmitLeadResult {
  success: boolean;
  message: string;
}

export async function submitLead(payload: SubmitLeadPayload): Promise<SubmitLeadResult> {
  const response = await fetch("/api/leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = (await response.json()) as SubmitLeadResult;

  if (!response.ok || !data.success) {
    throw new Error(data.message || "Something went wrong. Please try again.");
  }

  storeLead(payload.email);
  return data;
}
