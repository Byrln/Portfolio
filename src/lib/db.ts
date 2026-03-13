import { Pool } from "pg";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  console.warn("DATABASE_URL is not set. Database features will be disabled.");
}

const pool = connectionString
  ? new Pool({
      connectionString,
      ssl: { rejectUnauthorized: false },
    })
  : null;

export async function query(text: string, params: any[] = []) {
  if (!pool) {
    throw new Error("DATABASE_URL is not set");
  }
  const client = await pool.connect();
  try {
    const res = await client.query(text as any, params as any);
    return res;
  } finally {
    client.release();
  }
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