"use client";
import { useMemo, useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const FEATURES = [
  "Идэвхтэй чат",
  "Админ панель",
  "Олон хэл",
  "Төлбөр тооцоо",
  "SEO ба аналитик",
  "Мобайл апп (Hybrid)",
];

const PROJECT_TYPES = [
  "Веб апп",
  "Танилцуулга сайт",
  "Онлайн худалдаа",
  "Аялал зуучилал",
  "Дотоод систем (CRM/ERP)",
];

const BUDGET_OPTIONS = [
  "1-5 сая₮",
  "5–10 сая₮",
  "10–30 сая₮",
  "30–60 сая₮",
  "60+ сая₮",
];

const TIMELINE_OPTIONS = [
  "2–4 долоо хоног",
  "4–8 долоо хоног",
  "8–12 долоо хоног",
  "12+ долоо хоног",
];

function FormSection({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("space-y-3", className)}>
      <h2 className="text-sm font-semibold text-white/90 uppercase tracking-wider">
        {title}
      </h2>
      {children}
    </section>
  );
}

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
  const [saving, setSaving] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
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
    return `Ажилын санал\n\n${lines
      .map((l) => `• ${l}`)
      .join("\n")}\n\n— Илгээсэн: ${contactName}`;
  }, [
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
  ]);

  return (
    <main className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
      {/* Page header */}
      <div className="mb-8 sm:mb-10">
        <h1 className="text-2xl sm:text-3xl font-semibold text-white">
          Ажилын санал
        </h1>
        <p className="mt-2 text-sm sm:text-base text-white/60 max-w-xl">
          Төслийн талаарх мэдээллээ бөглөнө үү. Бид тантай холбогдоно.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
        {/* Form column */}
        <div className="lg:col-span-3 space-y-8">
          <FormSection title="Холбоо барих мэдээлэл">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs text-white/60">Компани *</label>
                <Input
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus-visible:ring-white/30"
                  placeholder="Компанийн нэр"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs text-white/60">Холбогдох хүн *</label>
                <Input
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus-visible:ring-white/30"
                  placeholder="Нэр"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs text-white/60">Имэйл</label>
                <Input
                  className={cn(
                    "bg-white/5 border-white/20 text-white placeholder:text-white/40 focus-visible:ring-white/30",
                    emailError && "border-red-400/50 focus-visible:ring-red-400/30"
                  )}
                  placeholder="email@example.com"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    const v = e.target.value;
                    setEmail(v);
                    setErrors((prev) => ({ ...prev, email: validateEmail(v) }));
                  }}
                />
                {emailError && (
                  <p className="text-xs text-red-400">{emailError}</p>
                )}
              </div>
              <div className="space-y-1.5">
                <label className="text-xs text-white/60">Утас</label>
                <Input
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus-visible:ring-white/30"
                  placeholder="+976 9999 9999"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
          </FormSection>

          <FormSection title="Төслийн мэдээлэл">
            <div className="space-y-1.5">
              <label className="text-xs text-white/60">Төслийн нэр / Домэйн</label>
              <Input
                className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus-visible:ring-white/30"
                placeholder="example.com эсвэл төслийн нэр"
                value={domain}
                onChange={(e) => {
                  const v = e.target.value;
                  setDomain(v);
                  setErrors((prev) => ({ ...prev, domain: validateDomain(v) }));
                }}
              />
              {errors.domain && (
                <p className="text-xs text-red-400">{errors.domain}</p>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs text-white/60">Төслийн төрөл</label>
                <Select value={projectType} onValueChange={setProjectType}>
                  <SelectTrigger className="h-9 w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:ring-1 focus:ring-white/30 [&>svg]:text-white/50">
                    <SelectValue placeholder="Сонгох" />
                  </SelectTrigger>
                  <SelectContent className="border-white/20 bg-gray-900 text-white">
                    {PROJECT_TYPES.map((opt) => (
                      <SelectItem key={opt} value={opt} className="text-white focus:bg-white/10 focus:text-white">
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs text-white/60">Төсөв</label>
                <Select value={budget} onValueChange={setBudget}>
                  <SelectTrigger className="h-9 w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:ring-1 focus:ring-white/30 [&>svg]:text-white/50">
                    <SelectValue placeholder="Сонгох" />
                  </SelectTrigger>
                  <SelectContent className="border-white/20 bg-gray-900 text-white">
                    {BUDGET_OPTIONS.map((opt) => (
                      <SelectItem key={opt} value={opt} className="text-white focus:bg-white/10 focus:text-white">
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs text-white/60">Хугацаа</label>
              <Select value={timeline} onValueChange={setTimeline}>
                <SelectTrigger className="h-9 w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:ring-1 focus:ring-white/30 [&>svg]:text-white/50">
                  <SelectValue placeholder="Сонгох" />
                </SelectTrigger>
                <SelectContent className="border-white/20 bg-gray-900 text-white">
                  {TIMELINE_OPTIONS.map((opt) => (
                    <SelectItem key={opt} value={opt} className="text-white focus:bg-white/10 focus:text-white">
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </FormSection>

          <FormSection title="Шийдлүүд">
            <p className="text-xs text-white/50 mb-3">
              Хэрэгтэй шийдлүүдээ сонгоно уу
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {FEATURES.map((f) => (
                <label
                  key={f}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg border cursor-pointer transition-colors",
                    features.includes(f)
                      ? "bg-white/10 border-white/30 text-white"
                      : "bg-white/5 border-white/15 text-white/80 hover:bg-white/5 hover:border-white/25"
                  )}
                >
                  <Checkbox
                    checked={features.includes(f)}
                    onCheckedChange={(checked) =>
                      setFeatures((prev) =>
                        checked ? [...prev, f] : prev.filter((x) => x !== f)
                      )
                    }
                    className="border-white/30 data-[state=checked]:bg-white data-[state=checked]:text-gray-900 data-[state=checked]:border-white"
                  />
                  <span className="text-sm">{f}</span>
                </label>
              ))}
            </div>
          </FormSection>

          <FormSection title="Нэмэлт мэдээлэл">
            <div className="space-y-1.5">
              <label className="text-xs text-white/60">Төслийн зорилго</label>
              <Textarea
                className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus-visible:ring-white/30 min-h-[100px] resize-y"
                placeholder="Төслийн зорилго, хүлээгдэж буй үр дүн..."
                rows={4}
                value={goals}
                onChange={(e) => setGoals(e.target.value)}
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs text-white/60">Нэмэлт тэмдэглэл</label>
              <Textarea
                className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus-visible:ring-white/30 min-h-[80px] resize-y"
                placeholder="Бусад тэмдэглэл..."
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>
          </FormSection>

          <div className="pt-2">
            <Button
              className="w-full h-11 bg-white text-gray-900 hover:bg-white/90 font-semibold"
              disabled={saving || formInvalid}
              onClick={async () => {
                setSaving(true);
                setSubmitError(null);
                try {
                  const res = await fetch("/api/deal/submit", {
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
                  const data = await res.json();
                  if (!res.ok) {
                    setSubmitError(data.error || "Алдаа гарлаа");
                    return;
                  }
                  setSuccessOpen(true);
                  setCompany("");
                  setContactName("");
                  setEmail("");
                  setPhone("");
                  setDomain("");
                  setProjectType("Веб апп");
                  setFeatures([]);
                  setBudget("1-5 сая₮");
                  setTimeline("2–4 долоо хоног");
                  setGoals("");
                  setNotes("");
                } catch {
                  setSubmitError("Холболт амжилтгүй боллоо");
                } finally {
                  setSaving(false);
                }
              }}
            >
              {saving ? "Илгээж байна..." : "Илгээх"}
            </Button>
            {formInvalid && (
              <p className="mt-2 text-xs text-red-400 text-center">
                Компани болон холбогдох хүн шаардлагатай.
              </p>
            )}
            {submitError && (
              <p className="mt-2 text-xs text-red-400 text-center">
                {submitError}
              </p>
            )}
          </div>
        </div>

        {/* Success dialog */}
        <Dialog open={successOpen} onOpenChange={setSuccessOpen}>
          <DialogContent className="sm:max-w-md border-white/20 bg-gray-900 text-white">
            <DialogHeader>
              <DialogTitle className="text-white">
                Амжилттай илгээгдлээ
              </DialogTitle>
              <DialogDescription className="text-white/70">
                Таны ажилын санал амжилттай хүлээн авлаа. Бид тантай удахгүй холбогдоно.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button
                onClick={() => setSuccessOpen(false)}
                className="bg-white text-gray-900 hover:bg-white/90"
              >
                Хаах
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Summary sidebar */}
        <aside className="lg:col-span-2">
          <div className="lg:sticky lg:top-24 rounded-xl border border-white/15 bg-white/5 backdrop-blur-sm p-5 sm:p-6">
            <h3 className="text-sm font-semibold text-white/90 mb-4 uppercase tracking-wider">
              Санал дүгнэлт
            </h3>
            <pre className="text-xs sm:text-sm whitespace-pre-wrap text-white/75 font-sans leading-relaxed">
              {summaryText}
            </pre>
          </div>
        </aside>
      </div>
    </main>
  );
}
