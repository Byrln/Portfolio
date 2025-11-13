"use client";
import { useEffect, useState } from "react";

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

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [deals, setDeals] = useState<Deal[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const ok = typeof window !== "undefined" && localStorage.getItem("admin") === "true";
    setAuthed(!!ok);
    if (ok) loadDeals();
  }, []);

  async function loadDeals() {
    setLoading(true);
    const res = await fetch("/api/deal/list");
    const data = await res.json();
    setDeals(data.deals || []);
    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Админ — Deals</h1>
          <a href="/deal" className="text-sm underline text-white/80 hover:text-white">Deal хуудас</a>
        </div>
        {!authed ? (
          <div className="max-w-md space-y-4">
            <p className="text-white/70 text-sm">Нэвтрэхийн тулд админ нууц үг оруулна уу.</p>
            <input
              className="w-full rounded-md bg-white/10 border border-white/20 p-2"
              type="password"
              placeholder="Нууц үг"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="px-4 py-2 rounded-md bg-white text-gray-900 hover:bg-white/80"
              onClick={() => {
                const adminPw = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "admin";
                if (password === adminPw) {
                  localStorage.setItem("admin", "true");
                  setAuthed(true);
                  loadDeals();
                } else {
                  alert("Буруу нууц үг");
                }
              }}
            >
              Нэвтрэх
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <button
                className="px-4 py-2 rounded-md bg-white text-gray-900 hover:bg-white/80"
                onClick={loadDeals}
              >
                Шинэчлэх
              </button>
              {loading && <span className="text-sm text-white/70">Ачааллаж байна...</span>}
            </div>
            <div className="overflow-auto border border-white/10 rounded-md">
              <table className="min-w-full text-sm">
                <thead className="bg-white/5">
                  <tr>
                    <th className="text-left p-3">Компани</th>
                    <th className="text-left p-3">Холбоо барих</th>
                    <th className="text-left p-3">Имэйл</th>
                    <th className="text-left p-3">Утас</th>
                    <th className="text-left p-3">Домэйн</th>
                    <th className="text-left p-3">Төрөл</th>
                    <th className="text-left p-3">Төсөв</th>
                    <th className="text-left p-3">Хугацаа</th>
                    <th className="text-left p-3">Шийдлүүд</th>
                    <th className="text-left p-3">Огноо</th>
                  </tr>
                </thead>
                <tbody>
                  {deals.length === 0 ? (
                    <tr>
                      <td colSpan={10} className="p-4 text-center text-white/60">Одоогоор бичлэг алга.</td>
                    </tr>
                  ) : (
                    deals.map((d) => (
                      <tr key={d.id} className="border-t border-white/10">
                        <td className="p-3">{d.company}</td>
                        <td className="p-3">{d.contactName}</td>
                        <td className="p-3">{d.email}</td>
                        <td className="p-3">{d.phone || ""}</td>
                        <td className="p-3">{d.domain}</td>
                        <td className="p-3">{d.projectType}</td>
                        <td className="p-3">{d.budget}</td>
                        <td className="p-3">{d.timeline}</td>
                        <td className="p-3">{(d.features || []).join(", ")}</td>
                        <td className="p-3">{new Date(d.createdAt).toLocaleString()}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
            <div className="mt-4">
              <details>
                <summary className="cursor-pointer text-white/80">Deal summary</summary>
                <div className="mt-2 space-y-3">
                  {deals.map((d) => (
                    <div key={d.id} className="p-3 rounded-md bg-white/5 border border-white/10">
                      <div className="text-xs text-white/60">#{d.id}</div>
                      <pre className="whitespace-pre-wrap text-sm">{d.summary}</pre>
                    </div>
                  ))}
                </div>
              </details>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}