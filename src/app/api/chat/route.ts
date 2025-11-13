import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const apiKey = process.env.OPENAI_API_KEY || process.env.AI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Missing OPENAI_API_KEY" }, { status: 500 });
    }

    const payload = {
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            [
              "Та зөвхөн веб үйлчилгээ/веб апп хөгжүүлэлтийн deal талаар ярьдаг туслах.",
              "Үндсэн зорилго: төслийн хамтын ажиллагаа, шаардлага, функцүүд, төсөв (MNT), хугацаа, дамжуулалттай холбоотой асуулт/хариулт өгөх.",
              "Үйлчлүүлэгч Монгол болон Англи хэлээр бичсэн бол Монгол хэлээр хариул.",
              "Үнэ, төсөв, өртөгтэй холбоотой аливаа тоон мэдээллийг МНТ (₮)‑оор илэрхийл. Мянгатын тусгаарлагч ашигла (жишээ: 15,000,000₮). USD‑ийг зөвхөн илэрхий хүсвэл дурд.",
              "Холбогдохгүй сэдэв (жишээ: аялал, спорт, улс төр, код бичих бусад ерөнхий асуулт гэх мэт) орж ирвэл соёлтойгоор татгалзаж, энэ чат зөвхөн веб үйлчилгээний хамтран ажиллах deal‑д зориулагдсан гэдгийг сануул.",
              "Тайлбаргүй урт монолог бүү бич — товч, ойлгомжтой, хэрэгцээт асуултууд тавьж тодруулга ав.",
              "Хариу формат: гарчигтай богино хэсэг → дараах мөрөнд 4–6 буллет (•), мөр бүрийг 1 өгүүлбэрт багтаа.",
              "Үргэлж төгсгөлд нь ‘Дараагийн алхам’ хэсгийг оруулж, тодруулга авах 2–3 асуулт болон дараагийн санал болгосон үйлдлийг жагсаа.",
              "Урт текст бүү явуул; чатаар уншихад амар байхаар шинэ мөр, буллет ашигла.",
              "Хэрэглэгч утасны дугаараа илгээвэл цааш явах; утас байхгүй бол уг мэдээллийг хүсэж дахин сануулж болно. Дугаарыг нууцлалтай авч үзэж, бусад мэдрэмтгий өгөгдөл битгий асуу.",
              "Хэрэв яриа ‘deal’ үүсгэхэд бэлэн болсныг чи шийдвэл дараах 2 мөрийг нэмж оруул:",
              "CREATE_DEAL",
              "{\"company\":...,\"contactName\":...,\"email\":...,\"phone\":...,\"domain\":...,\"projectType\":...,\"features\":[...],\"budget\":...,\"timeline\":...,\"goals\":...,\"notes\":...,\"summary\":...}",
              "JSON‑ийг цомхон, код блокгүйгээр өг. Хэрэв бэлэн биш бол энэ хэсгийг битгий оруул.",
            ].join("\n"),
        },
        ...(Array.isArray(messages) ? messages : []),
      ],
      temperature: 0.7,
    };

    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const err = await res.text();
      return NextResponse.json({ error: err }, { status: res.status });
    }
    const data = await res.json();
    const content = data?.choices?.[0]?.message?.content ?? "";
    let deal: any = null;
    try {
      const marker = "CREATE_DEAL";
      if (content.includes(marker)) {
        const after = content.split(marker)[1] || "";
        // Try to find a JSON object either as plain or fenced
        const fenceMatch = after.match(/```json[\s\S]*?```/i);
        const plainMatch = after.match(/\{[\s\S]*\}/);
        let jsonStr = fenceMatch ? fenceMatch[0].replace(/```json|```/gi, "").trim() : (plainMatch ? plainMatch[0] : "");
        if (jsonStr) {
          const obj = JSON.parse(jsonStr);
          // Basic shape validation
          if (obj && obj.company && obj.contactName && obj.email && obj.domain) {
            deal = obj;
          }
        }
      }
    } catch {}
    return NextResponse.json({ content, deal });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Unknown error" }, { status: 500 });
  }
}