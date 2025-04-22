// ContactDialog.tsx
"use client";

import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  ArrowUpRightIcon,
  Facebook,
  Instagram,
  Mail,
  Send,
} from "lucide-react";
import { GradientButton } from "./ui/gradient-button";

export function ContactDialog() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    emailjs
      .send("byrln_contact", "template_2lsyg1e", form, "xKMhxVLOPv818fUpu")
      .then(() => {
        alert("Мессеж амжилттай илгээгдлээ 🎉");
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Failed 😢"));
  };

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
      <DialogContent className="max-w-3xl p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left: Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <h3 className="text-xl font-semibold">Хамтран ажиллацгаая 🫳</h3>
          <Input
            placeholder="Таны Нэр"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <Input
            placeholder="Таны Мэйл Хаяг"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <Textarea
            placeholder="Your message"
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
          />
          <Button type="submit" className="w-full flex gap-2">
            <Send className="w-4 h-4" /> Илгээх
          </Button>
        </form>

        {/* Right: Socials */}
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-lg mx-auto text-center font-medium">Эсвэл энд дарж <br />надтай холбогдоно уу! 👇</p>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/byrlnnn"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <Button className="bg-slate-600" size="icon" variant="outline">
                <Facebook />
              </Button>
            </a>
            <a
              href="https://www.instagram.com/_byrln_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-slate-600" size="icon" variant="outline">
                <Instagram />
              </Button>
            </a>
            <a href="mailto:contact.byrln@gmail.com">
              <Button className="bg-slate-600" size="icon" variant="outline">
                <Mail />
              </Button>
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
