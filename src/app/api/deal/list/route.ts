import { NextResponse } from "next/server";

export async function GET() {
  const store = (globalThis as any).__deals || [];
  return NextResponse.json({ deals: store });
}