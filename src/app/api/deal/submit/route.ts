import { NextResponse } from "next/server";

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

const store = (globalThis as any).__deals || [];
(globalThis as any).__deals = store;

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
    store.push(deal);
    return NextResponse.json({ ok: true, id: deal.id });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Unknown error" }, { status: 500 });
  }
}