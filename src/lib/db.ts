import { neon } from "@neondatabase/serverless";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  console.warn("DATABASE_URL is not set. Database features will be disabled.");
}

function getSql() {
  if (!connectionString) {
    throw new Error("DATABASE_URL is not set");
  }
  return neon(connectionString);
}

export async function query(text: string, params: any[] = []) {
  const sql = getSql();
  return await sql.query(text, params);
}

export async function ensureDealsTable() {
  await query(
    `CREATE TABLE IF NOT EXISTS deals (
      id TEXT PRIMARY KEY,
      company TEXT NOT NULL,
      contact_name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      domain TEXT NOT NULL,
      project_type TEXT NOT NULL,
      features JSONB NOT NULL DEFAULT '[]',
      budget TEXT NOT NULL,
      timeline TEXT NOT NULL,
      goals TEXT NOT NULL,
      notes TEXT NOT NULL,
      summary TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    );`
  );
}
