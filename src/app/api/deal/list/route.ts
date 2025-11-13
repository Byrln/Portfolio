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

export async function GET() {
  try {
    const store: Deal[] = (globalThis as any).__deals || [];
    // Return newest first
    const deals = [...store].sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    return NextResponse.json({ deals });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Unknown error" }, { status: 500 });
  }
}