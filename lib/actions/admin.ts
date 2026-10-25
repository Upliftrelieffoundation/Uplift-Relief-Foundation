"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/server";

export type SiteContent = {
  id?: string;
  section: string;
  key: string;
  value: string;
  updated_at?: string;
};

// ─── Read ─────────────────────────────────────────────────────────────────────

export async function getSiteContent(): Promise<Record<string, Record<string, string>>> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("site_content")
    .select("section, key, value");

  if (error) {
    console.error("getSiteContent error:", error);
    return {};
  }

  const result: Record<string, Record<string, string>> = {};
  for (const row of data ?? []) {
    if (!result[row.section]) result[row.section] = {};
    result[row.section][row.key] = row.value;
  }
  return result;
}

export async function getSectionContent(section: string): Promise<Record<string, string>> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("site_content")
    .select("key, value")
    .eq("section", section);

  if (error) {
    console.error("getSectionContent error:", error);
    return {};
  }

  const result: Record<string, string> = {};
  for (const row of data ?? []) {
    result[row.key] = row.value;
  }
  return result;
}

// ─── Write ────────────────────────────────────────────────────────────────────

export async function upsertContent(
  section: string,
  key: string,
  value: string
) {
  const supabase = await createClient();
  const { error } = await supabase.from("site_content").upsert(
    { section, key, value },
    { onConflict: "section,key" }
  );

  if (error) throw new Error(error.message);
  revalidatePath("/", "layout");
}

export async function saveSectionContent(
  section: string,
  fields: Record<string, string>
) {
  const supabase = await createClient();

  const rows = Object.entries(fields).map(([key, value]) => ({
    section,
    key,
    value,
  }));

  const { error } = await supabase
    .from("site_content")
    .upsert(rows, { onConflict: "section,key" });

  if (error) throw new Error(error.message);

  revalidatePath("/", "layout");
  revalidatePath("/about");
  revalidatePath("/stories");
  revalidatePath("/impact");
  revalidatePath("/work");
}

// ─── Donations ────────────────────────────────────────────────────────────────

export async function getDonationStats() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("donations")
    .select("amount, status, created_at, donor_name, email")
    .order("created_at", { ascending: false })
    .limit(50);

  if (error) {
    console.error("getDonationStats error:", error);
    return { donations: [], total: 0, count: 0 };
  }

  const completed = (data ?? []).filter((d) => d.status === "captured");
  const total = completed.reduce((sum, d) => sum + (d.amount ?? 0), 0);

  return { donations: data ?? [], total, count: completed.length };
}
