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

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const deal: Deal = {
      id: Math.random().toString(36).slice(2),
      company: body.company || "",
      contactName: body.contactName || "",
      email: body.email || "",
      phone: body.phone || "",
      domain: body.domain || "",
      projectType: body.projectType || "",
      features: Array.isArray(body.features) ? body.features : [],
      budget: body.budget || "",
      timeline: body.timeline || "",
      goals: body.goals || "",
      notes: body.notes || "",
      summary: body.summary || "",
      createdAt: new Date().toISOString(),
    };
    await ensureDealsTable();
    await query(
      `INSERT INTO deals (
        id, company, contact_name, email, phone, domain, project_type,
        features, budget, timeline, goals, notes, summary, created_at
      ) VALUES (
        $1, $2, $3, $4, $5, $6, $7,
        $8, $9, $10, $11, $12, $13, $14
      )`,
      [
        deal.id,
        deal.company,
        deal.contactName,
        deal.email,
        deal.phone,
        deal.domain,
        deal.projectType,
        JSON.stringify(deal.features || []),
        deal.budget,
        deal.timeline,
        deal.goals,
        deal.notes,
        deal.summary,
        deal.createdAt,
      ]
    );
    return NextResponse.json({ ok: true, id: deal.id });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Unknown error" }, { status: 500 });
  }
}