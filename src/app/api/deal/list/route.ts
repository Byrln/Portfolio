import { NextResponse } from "next/server";
import { ensureDealsTable, query } from "@/lib/db";

type Deal = {
  id: string;
  company: string;
  contactName: string;
  email: string;
  phone?: string;
  domain: string;
  projectType: string;
  features: string[];
  budget: string;
  timeline: string;
  goals: string;
  notes: string;
  summary: string;
  createdAt: string;
};

export async function GET() {
  try {
    await ensureDealsTable();
    const res = await query(
      `SELECT id, company, contact_name, email, phone, domain, project_type,
              features, budget, timeline, goals, notes, summary, created_at
       FROM deals
       ORDER BY created_at DESC`
    );
    const deals: Deal[] = (res.rows || []).map((row: any) => ({
      id: row.id,
      company: row.company,
      contactName: row.contact_name,
      email: row.email,
      phone: row.phone ?? "",
      domain: row.domain,
      projectType: row.project_type,
      features: Array.isArray(row.features)
        ? row.features
        : typeof row.features === "string"
          ? (() => { try { return JSON.parse(row.features); } catch { return []; } })()
          : (row.features ?? []),
      budget: row.budget,
      timeline: row.timeline,
      goals: row.goals,
      notes: row.notes,
      summary: row.summary,
      createdAt: new Date(row.created_at).toISOString(),
    }));
    return NextResponse.json({ deals });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Unknown error" }, { status: 500 });
  }
}