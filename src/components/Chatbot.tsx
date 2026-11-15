"use client";

import { useEffect, useRef, useState } from "react";
import { Send, X } from "@/utils/icons";

type Message = { role: "user" | "assistant"; content: string };

const SUGGESTED = [
  "Siapa Moh Ilham Darmawan?",
  "Apa saja kemampuan yang dimiliki?",
  "Project apa saja yang pernah dibuat?",
  "Apa itu Pasweb?",
  "Bagaimana cara menghubungi Ilham?",
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Halo! Saya HANAM, AI assistant portfolio Moh Ilham Darmawan. Ada yang bisa saya bantu?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [demo, setDemo] = useState<boolean | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    if (open) el.removeAttribute("inert");
    else el.setAttribute("inert", "");
  }, [open]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  // close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const send = async (text?: string) => {
    const content = (text ?? input).trim();
    if (!content || loading) return;
    setInput("");
    const next: Message[] = [...messages, { role: "user", content }];
    setMessages(next);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      if (!res.ok) {
        setMessages((m) => [
          ...m,
          { role: "assistant", content: data?.error || "Terjadi kesalahan. Coba lagi." },
        ]);
      } else {
        setMessages((m) => [...m, { role: "assistant", content: data.reply }]);
        if (typeof data.demo === "boolean") setDemo(data.demo);
      }
    } catch {
      setMessages((m) => [
        ...m,
        { role: "assistant", content: "Gagal terhubung. Periksa koneksi Anda." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Tutup chat HANAM" : "Buka chat HANAM"}
        aria-expanded={open}
        className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full text-white shadow-2xl transition-transform duration-300 hover:scale-105"
        style={{ background: "var(--accent-btn)" }}
      >
        {open ? (
          <X className="h-6 w-6" />
        ) : (
          <span className="font-display text-lg font-bold">H</span>
        )}
      </button>

      {/* Panel */}
      <div
        ref={panelRef}
        className={`chat-panel fixed bottom-24 right-5 z-[60] flex w-[calc(100vw-2.5rem)] max-w-sm flex-col overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] shadow-2xl ${
          open
            ? "pointer-events-auto scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0"
        }`}
        style={{ height: "min(520px, 70vh)" }}
        role="dialog"
        aria-label="Chat HANAM"
        aria-hidden={!open}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-4">
          <div>
            <p className="font-display text-base font-semibold">HANAM</p>
            <p className="text-[11px] text-[var(--fg-muted)]">
              Your Personal AI Assistant
            </p>
          </div>
          {demo === true && (
            <span className="rounded-full border border-[var(--border)] bg-[var(--bg-soft)] px-2.5 py-1 text-[10px] uppercase tracking-wider text-[var(--fg-muted)]">
              Demo
            </span>
          )}
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  m.role === "user"
                    ? "bg-[var(--accent)] text-white"
                    : "bg-[var(--bg-soft)] text-[var(--fg)]"
                }`}
              >
                {m.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="flex items-center gap-1.5 rounded-2xl bg-[var(--bg-soft)] px-4 py-3">
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[var(--fg-muted)]" style={{ animationDelay: "0ms" }} />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[var(--fg-muted)]" style={{ animationDelay: "120ms" }} />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[var(--fg-muted)]" style={{ animationDelay: "240ms" }} />
              </div>
            </div>
          )}
        </div>

        {/* Suggested questions (only when few messages) */}
        {messages.length <= 2 && (
          <div className="flex flex-wrap gap-2 px-4 pb-2">
            {SUGGESTED.map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => send(q)}
                disabled={loading}
                className="rounded-full border border-[var(--border)] bg-[var(--bg-soft)] px-3 py-1.5 text-[11px] text-[var(--fg-muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--fg)] disabled:opacity-50"
              >
                {q}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <form
          className="flex items-center gap-2 border-t border-[var(--border)] p-3"
          onSubmit={(e) => {
            e.preventDefault();
            send();
          }}
        >
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Tanya HANAM..."
            className="flex-1 rounded-2xl border border-[var(--border)] bg-[var(--bg-soft)] px-4 py-2.5 text-sm outline-none transition-colors focus:border-[var(--accent)]"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            aria-label="Kirim"
            className="grid h-10 w-10 place-items-center rounded-full text-white transition-opacity disabled:opacity-40"
            style={{ background: "var(--accent-btn)" }}
          >
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </>
  );
}
