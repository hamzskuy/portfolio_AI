import { NextRequest, NextResponse } from "next/server";
import { SYSTEM_PROMPT, demoReply } from "@/lib/knowledge";

export const runtime = "nodejs";

type ChatMessage = { role: "user" | "assistant" | "system"; content: string };

export async function POST(req: NextRequest) {
  let body: { messages?: ChatMessage[] } = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Body tidak valid" }, { status: 400 });
  }

  const messages = Array.isArray(body.messages) ? body.messages : [];
  const lastUser = [...messages].reverse().find((m) => m.role === "user");

  if (!lastUser || typeof lastUser.content !== "string" || !lastUser.content.trim()) {
    return NextResponse.json({ error: "Pesan kosong" }, { status: 400 });
  }

  const apiKey = process.env.AI_API_KEY;
  const baseUrl = (process.env.AI_API_BASE || "https://api.openai.com/v1").replace(/\/$/, "");
  const model = process.env.AI_MODEL || "gpt-4o-mini";

  if (!apiKey) {
    // Mode demo: jangan berpura-pura AI sungguhan terhubung.
    return NextResponse.json({
      reply: demoReply(lastUser.content),
      demo: true,
    });
  }

  try {
    const res = await fetch(`${baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages
            .filter((m) => m.role === "user" || m.role === "assistant")
            .map((m) => ({ role: m.role, content: m.content })),
        ],
        temperature: 0.6,
        max_tokens: 500,
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json(
        { error: `AI provider error: ${res.status}`, detail: text.slice(0, 300) },
        { status: 502 },
      );
    }

    const data = await res.json();
    const reply =
      data?.choices?.[0]?.message?.content?.trim() ||
      "Maaf, saya tidak bisa memproses jawaban saat ini.";

    return NextResponse.json({ reply, demo: false });
  } catch (err) {
    return NextResponse.json(
      { error: "Gagal menghubungi AI provider", detail: String(err) },
      { status: 502 },
    );
  }
}
