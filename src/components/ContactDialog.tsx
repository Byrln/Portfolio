// ContactDialog.tsx
"use client";

import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { ArrowUpRightIcon, Facebook, Instagram, Mail, Send, Loader2, MessageSquare, X, Maximize2, Minimize2, ChevronRight } from "lucide-react";
import { GradientButton } from "./ui/gradient-button";

type ContactDialogProps = {
  initialSubject?: string;
  initialMessage?: string;
  source?: string;
  projectDomain?: string;
  floating?: boolean;
};

export function ContactDialog({
  initialSubject = "Төсөл санал",
  initialMessage = "",
  source,
  projectDomain,
  floating = false,
}: ContactDialogProps) {
  const [messages, setMessages] = useState<Array<{ role: "user" | "assistant"; content: string }>>([
    { role: "assistant", content: "Сайн байна уу! 👋 Веб үйлчилгээний төслийн хамтын ажиллагааны талаар ярилцъя. Үргэлжлүүлэхийн өмнө утасны дугаараа илгээнэ үү." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [phone, setPhone] = useState<string>("");
  const [phoneInput, setPhoneInput] = useState<string>("");

  const validatePhone = (v: string) => {
    const digits = v.replace(/[^0-9+]/g, "");
    return /^\+?[0-9]{7,12}$/.test(digits);
  };

  const handlePhoneSubmit = () => {
    const v = phoneInput.trim();
    if (!validatePhone(v)) {
      setMessages((m) => [
        ...m,
        { role: "assistant", content: "Утасны дугаар буруу байна. Дахин оруулна уу (жишээ: +97699112233)." },
      ]);
      return;
    }
    setPhone(v);
    setMessages((m) => [
      ...m,
      { role: "assistant", content: "Баярлалаа! 📲 Утас хүлээн авлаа. Төслийн талаар товч тайлбар, төсөв болон хугацааг хэлж өгнө үү." },
    ]);
    setPhoneInput("");
  };

  const sendMessage = async () => {
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [...m, { role: "user", content: text }]);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [
            { role: "system", content: `Source: ${source ?? "contact-section"}; Domain: ${projectDomain ?? ""}; Subject: ${initialSubject}; Phone: ${phone || "(not-provided)"}; Context: ${initialMessage}` },
            ...messages,
            { role: "user", content: text },
          ],
        }),
      });
      const data = await res.json();
      if (data?.error) {
        const hint =
          "AI чат идэвхгүй байна. .env файлд OPENAI_API_KEY эсвэл AI_API_KEY тохируулна уу.";
        setMessages((m) => [
          ...m,
          { role: "assistant", content: hint },
        ]);
      } else {
        const reply = data?.content || "Уучлаарай, одоогоор хариулт өгч чадсангүй.";
        setMessages((m) => [...m, { role: "assistant", content: reply }]);
      }
    } catch (e) {
      setMessages((m) => [
        ...m,
        { role: "assistant", content: "Алдаа гарлаа. Дахин оролдоно уу." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (floating) {
    const containerClass = fullscreen ? "fixed inset-0 z-50" : "fixed bottom-5 right-5 z-50";
    const panelClass = fullscreen
      ? "w-full h-full rounded-none border border-white/10 bg-gray-900/95 backdrop-blur-md shadow-2xl overflow-hidden"
      : "w-[360px] max-w-[92vw] rounded-2xl border border-white/10 bg-gray-900/95 backdrop-blur-md shadow-2xl overflow-hidden";
    const messagesHeightClass = fullscreen ? "h-[calc(100vh-140px)]" : "h-72";
    return (
      <div className={containerClass}>
        {!open && (
          <button
            aria-label="Нээлттэй чат"
            className="rounded-full shadow-lg bg-white text-gray-900 hover:bg-white/90 w-14 h-14 flex items-center justify-center border border-white/20"
            onClick={() => setOpen(true)}
          >
            <MessageSquare className="w-6 h-6" />
          </button>
        )}
        {open && (
          <div className={panelClass}>
            <div className="flex items-center justify-between px-3 py-2 bg-white/5">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-white/80" />
                <span className="text-sm font-semibold">AI Чатбот</span>
              </div>
              <div className="flex items-center gap-1">
                <button
                  aria-label={fullscreen ? "Жижигрүүлэх" : "Томруулах"}
                  className="rounded-md p-1 hover:bg-white/10"
                  onClick={() => setFullscreen((v) => !v)}
                >
                  {fullscreen ? (
                    <Minimize2 className="w-4 h-4 text-white/80" />
                  ) : (
                    <Maximize2 className="w-4 h-4 text-white/80" />
                  )}
                </button>
                <button
                  aria-label="Хаах"
                  className="rounded-md p-1 hover:bg-white/10"
                  onClick={() => {
                    setOpen(false);
                    setFullscreen(false);
                  }}
                >
                  <X className="w-4 h-4 text-white/80" />
                </button>
              </div>
            </div>
            <div className={`p-3 ${messagesHeightClass} overflow-y-auto space-y-3`}>
              {messages.map((m, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-[11px] uppercase tracking-wide text-white/40">{m.role}</div>
                  <div
                    className={
                      (m.role === "assistant"
                        ? "bg-white/5 text-white/90"
                        : "bg-white/10 text-white") +
                      " border border-white/10 rounded-xl p-2 whitespace-pre-wrap leading-relaxed text-[13px]"
                    }
                  >
                    {m.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="text-white/60 flex items-center gap-2"><Loader2 className="w-4 h-4 animate-spin" /> Бодож байна...</div>
              )}
              {!phone && (
                <div className="rounded-xl bg-white/10 border border-white/10 p-2">
                  <div className="text-xs text-white/70 mb-2">Таны утасны дугаар*</div>
                  <div className="flex items-center gap-2">
                    <Input
                      value={phoneInput}
                      onChange={(e) => setPhoneInput(e.target.value)}
                      placeholder="+9769xxxxxxx"
                      className="h-8 text-sm"
                    />
                    <Button onClick={handlePhoneSubmit} size="sm" className="h-8 px-2">
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              )}
              {phone && (
                <div className="flex flex-wrap gap-2">
                  {["Төсөл ярья 👋", "Үнэ хэд орчим байх бол?", "Хугацаа болон дамжуулалт?", "Шаардлагуудын жагсаалт илгээе", "Буллетээр товчилж форматла", "Функцүүдийн санал гарга"].map((q) => (
                    <button
                      key={q}
                      className="text-xs rounded-full bg-white/10 border border-white/10 px-3 py-1 hover:bg-white/15"
                      onClick={() => {
                        setInput(q);
                        setTimeout(() => sendMessage(), 0);
                      }}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="p-3 border-t border-white/10 flex gap-2">
              <Textarea
                placeholder="Асуух зүйлээ бичнэ үү"
                value={input}
                rows={fullscreen ? 4 : 2}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    sendMessage();
                  }
                }}
              />
              <Button onClick={sendMessage} disabled={loading} className="flex gap-2">
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <div className="px-3 pb-3 text-[11px] text-white/40">Сэдэв: {initialSubject} • Эх сурвалж: {source ?? "contact-section"}</div>
          </div>
        )}
      </div>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <GradientButton
          variant="variant"
          className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max"
        >
          <span className="font-semibold">Холбоо барих</span>
          <ArrowUpRightIcon className="size-5" />
        </GradientButton>
      </DialogTrigger>
      <DialogContent className="max-w-2xl p-4 rounded-2xl bg-gray-900/80 backdrop-blur-md grid gap-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">AI Чатбот</h3>
          <div className="text-xs text-white/50">Сэдэв: {initialSubject}</div>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/5 p-3 h-64 overflow-y-auto space-y-3">
          {messages.map((m, i) => (
            <div key={i} className="space-y-1">
              <div className="text-[11px] uppercase tracking-wide text-white/40">{m.role}</div>
              <div
                className={
                  (m.role === "assistant" ? "bg-white/5 text-white/90" : "bg-white/10 text-white") +
                  " border border-white/10 rounded-xl p-2 whitespace-pre-wrap leading-relaxed text-[13px]"
                }
              >
                {m.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="text-white/60 flex items-center gap-2"><Loader2 className="w-4 h-4 animate-spin" /> Бодож байна...</div>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {["Буллетээр товчилж форматла", "Функцүүдийн санал гарга", "Дараагийн алхмыг жагсаа"].map((q) => (
            <button
              key={q}
              className="text-xs rounded-full bg-white/10 border border-white/10 px-3 py-1 hover:bg-white/15"
              onClick={() => {
                setInput(q);
                setTimeout(() => sendMessage(), 0);
              }}
            >
              {q}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <Input
            placeholder="Асуух зүйлээ бичнэ үү"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") sendMessage(); }}
          />
          <Button onClick={sendMessage} disabled={loading} className="flex gap-2">
            <Send className="w-4 h-4" /> Илгээх
          </Button>
        </div>
        <div className="flex flex-wrap gap-2">
          {["Товч дүгнэлт гарга", "Төсвийн хүрээг тайлбарла", "Шаардлага асуултуудыг жагсаа"].map((q) => (
            <button
              key={q}
              className="text-xs rounded-full bg-white/10 border border-white/10 px-3 py-1 hover:bg-white/15"
              onClick={() => {
                setInput(q);
                setTimeout(() => sendMessage(), 0);
              }}
            >
              {q}
            </button>
          ))}
        </div>
        <div className="text-xs text-white/50">Эх сурвалж: {source ?? "contact-section"}</div>
        <div className="flex items-center justify-center gap-3 text-center text-white/70">
          <a href="https://www.facebook.com/byrlnnn" target="_blank" rel="noopener noreferrer" className="underline">Facebook</a>
          <span>•</span>
          <a href="https://www.instagram.com/_byrln_" target="_blank" rel="noopener noreferrer" className="underline">Instagram</a>
          <span>•</span>
          <a href="mailto:contact.byrln@gmail.com" className="underline">Mail</a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
