"use client";

import { useEffect, useState } from "react";
import { hasLeadAccess, getStoredLead, storeLead, type LeadRecord } from "@/lib/leads";

export function useLeadAccess() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [lead, setLead] = useState<LeadRecord | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const stored = getStoredLead();
    setLead(stored);
    setIsUnlocked(hasLeadAccess());
    setIsReady(true);
  }, []);

  const unlock = (email: string) => {
    const record = storeLead(email);
    setLead(record);
    setIsUnlocked(true);
  };

  return { isUnlocked, lead, isReady, unlock };
}
