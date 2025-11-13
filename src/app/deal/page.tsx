"use client";
import { useMemo, useState } from "react";
import { ContactDialog } from "@/components/ContactDialog";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function DealPage() {
  const [company, setCompany] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [domain, setDomain] = useState("");
  const [projectType, setProjectType] = useState("Веб апп");
  const [features, setFeatures] = useState<string[]>([]);
  const [budget, setBudget] = useState("1-5 сая₮");
  const [timeline, setTimeline] = useState("2–4 долоо хоног");
  const [goals, setGoals] = useState("");
  const [notes, setNotes] = useState("");
  const [assistOpen, setAssistOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; domain?: string }>({});

  const validateEmail = (v: string) => {
    if (!v) return undefined;
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    return ok ? undefined : "Имэйл формат буруу байна";
  };
  const validateDomain = (v: string) => {
    if (!v) return undefined;
    const ok = /^(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/.test(v);
    return ok ? undefined : "Домэйн формат буруу (ж: example.com)";
  };
  const requiredMissing = !company.trim() || !contactName.trim();
  const emailError = validateEmail(email);
  const formInvalid = requiredMissing;

  const toggleFeature = (f: string) => {
    setFeatures((prev) =>
      prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]
    );
  };

  const summaryText = useMemo(() => {
    const lines = [
      `Компани: ${company || "(бөглөөгүй)"}`,
      `Холбогдох хүн: ${contactName || "(бөглөөгүй)"}`,
      `Имэйл: ${email || "(бөглөөгүй)"}`,
      `Утас: ${phone || "(бөглөөгүй)"}`,
      `Домэйн/Төсөл: ${domain || "(бөглөөгүй)"}`,
      `Төсөл төрөл: ${projectType}`,
      `Фичерүүд: ${features.length ? features.join(", ") : "(сонгогдоогүй)"}`,
      `Төсөв: ${budget}`,
      `Хугацаа: ${timeline}`,
      `Зорилго: ${goals || "(бөглөөгүй)"}`,
      `Тэмдэглэл: ${notes || "(бөглөөгүй)"}`,
    ];
    return `Санамж бичиг / Deal хүсэлт\n\n${lines
      .map((l) => `• ${l}`)
      .join("\n")}\n\n— Илгээсэн: ${contactName}`;
  }, [
    company,
    contactName,
    email,
    domain,
    projectType,
    features,
    budget,
    timeline,
    goals,
    notes,
  ]);

  return (
    <main className="container mx-auto px-4 py-16">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold">Ажилын санал</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              className="w-full rounded-md bg-white/10 border border-white/20 p-2"
              placeholder="Компани"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <input
              className="w-full rounded-md bg-white/10 border border-white/20 p-2"
              placeholder="Холбогдох хүн"
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                className="w-full rounded-md bg-white/10 border border-white/20 p-2"
                placeholder="Имэйл"
                type="email"
                value={email}
                onChange={(e) => {
                  const v = e.target.value;
                  setEmail(v);
                  setErrors((prev) => ({ ...prev, email: validateEmail(v) }));
                }}
              />
              {emailError && (
                <div className="mt-1 text-xs text-red-400">{emailError}</div>
              )}
            </div>
            <div>
              <input
                className="w-full rounded-md bg-white/10 border border-white/20 p-2"
                placeholder="Төслийн нэр"
                value={domain}
                onChange={(e) => {
                  const v = e.target.value;
                  setDomain(v);
                  setErrors((prev) => ({ ...prev, domain: validateDomain(v) }));
                }}
              />
            </div>
          </div>
          <div>
            <input
              className="w-full rounded-md bg-white/10 border border-white/20 p-2"
              placeholder="Утас"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Select
                value={projectType}
                onValueChange={(v) => setProjectType(v)}
              >
                <SelectTrigger className="w-full rounded-md bg-white/10 border border-white/20 p-2">
                  <SelectValue
                    placeholder="Төслийн төрөл"
                    value={projectType}
                  />
                </SelectTrigger>
                <SelectContent className="mt-2 rounded-md border border-white/20 bg-gray-900">
                  {[
                    "Веб апп",
                    "Танилцуулга сайт",
                    "Онлайн худалдаа",
                    "Аялал зуучилал",
                    "Дотоод систем (CRM/ERP)",
                  ].map((opt) => (
                    <SelectItem key={opt} value={opt} onSelect={setProjectType}>
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select value={budget} onValueChange={(v) => setBudget(v)}>
                <SelectTrigger className="w-full rounded-md bg-white/10 border border-white/20 p-2">
                  <SelectValue placeholder="Төсөв" value={budget} />
                </SelectTrigger>
                <SelectContent className="mt-2 rounded-md border border-white/20 bg-gray-900">
                  {[
                    "1-5 сая₮",
                    "5–10 сая₮",
                    "10–30 сая₮",
                    "30–60 сая₮",
                    "60+ сая₮",
                  ].map((opt) => (
                    <SelectItem key={opt} value={opt} onSelect={setBudget}>
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Select value={timeline} onValueChange={(v) => setTimeline(v)}>
                <SelectTrigger className="w-full rounded-md bg-white/10 border border-white/20 p-2">
                  <SelectValue placeholder="Хугацаа" value={timeline} />
                </SelectTrigger>
                <SelectContent className="mt-2 rounded-md border border-white/20 bg-gray-900">
                  {[
                    "2–4 долоо хоног",
                    "4–8 долоо хоног",
                    "8–12 долоо хоног",
                    "12+ долоо хоног",
                  ].map((opt) => (
                    <SelectItem key={opt} value={opt} onSelect={setTimeline}>
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <label className="block text-sm text-white/70 mb-2">Шийдлүүд</label>
            <div className="grid grid-cols-2 gap-2">
              {[
                "Идэвхтэй чат",
                "Админ панель",
                "Олон хэл",
                "Төлбөр тооцоо",
                "SEO ба аналитик",
                "Мобайл апп (Hybrid)",
              ].map((f) => (
                <label key={f} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={features.includes(f)}
                    onChange={() => toggleFeature(f)}
                  />
                  {f}
                </label>
              ))}
            </div>
          </div>
          <Textarea
            className="w-full rounded-md bg-white/10 border border-white/20"
            placeholder="Төслийн зорилго, шалгуур"
            rows={4}
            value={goals}
            onChange={(e) => setGoals(e.target.value)}
          />
          <Textarea
            className="w-full rounded-md bg-white/10 border border-white/20"
            placeholder="Нэмэлт тэмдэглэл"
            rows={3}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
          <div className="mt-2">
            <button
              className="px-4 py-2 w-full rounded-md bg-white text-gray-900 hover:bg-white/80"
              disabled={saving || formInvalid}
              onClick={async () => {
                setSaving(true);
                await fetch("/api/deal/submit", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    company,
                    contactName,
                    email,
                    phone,
                    domain,
                    projectType,
                    features,
                    budget,
                    timeline,
                    goals,
                    notes,
                    summary: summaryText,
                  }),
                });
                setSaving(false);
                alert("Амжилттай илгээгдлээ!");
              }}
            >
              {saving ? "Илгээж байна..." : "Илгээх"}
            </button>
            {formInvalid && (
              <div className="mt-2 text-xs text-red-400">
                Компани болон холбогдох хүн шаардлагатай.
              </div>
            )}
          </div>
        </section>
        <aside className="md:sticky md:top-20">
          <div className="rounded-lg border border-white/15 bg-white/5 p-4">
            <pre className="text-sm whitespace-pre-wrap text-white/80">
              {summaryText}
            </pre>
          </div>
        </aside>
      </div>
    </main>
  );
}
