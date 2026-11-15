import React from "react";

type Variant = "browser" | "phone" | "dashboard" | "grid";

interface ProjectPreviewProps {
  variant?: Variant;
  accent?: string;
  label?: string;
  className?: string;
}

/**
 * Mockup visual berbasis CSS/SVG — tidak memakai foto stok.
 * Ganti komponen ini dengan <Image /> bila foto proyek asli tersedia.
 */
export default function ProjectPreview({
  variant = "browser",
  accent = "#3b82f6",
  label = "Project preview",
  className = "",
}: ProjectPreviewProps) {
  const bars = [72, 48, 86, 60, 92, 54];

  return (
    <div
      role="img"
      aria-label={label}
      className={`relative h-full w-full overflow-hidden bg-[#0d0f13] ${className}`}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(120% 90% at 20% 0%, ${accent}33 0%, transparent 60%), radial-gradient(90% 70% at 100% 100%, #22d3ee26 0%, transparent 65%)`,
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {variant === "browser" && (
        <div className="absolute inset-[8%] flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111318]/90 shadow-2xl backdrop-blur">
          <div className="flex items-center gap-1.5 border-b border-white/5 px-4 py-3">
            <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
            <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
            <span className="h-2 w-2 rounded-full bg-[#28c840]" />
            <span className="ml-3 h-2 w-24 rounded-full bg-white/10" />
          </div>
          <div className="grid flex-1 grid-cols-3 gap-3 p-4">
            <div className="col-span-2 flex flex-col gap-2 rounded-xl border border-white/5 bg-white/[0.02] p-4">
              <span className="h-2.5 w-2/3 rounded-full" style={{ background: accent }} />
              <span className="h-1.5 w-full rounded-full bg-white/10" />
              <span className="h-1.5 w-4/5 rounded-full bg-white/10" />
              <span className="mt-2 h-6 w-20 rounded-full" style={{ background: `${accent}33` }} />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex-1 rounded-xl border border-white/5 bg-white/[0.03]" />
              <div className="flex-1 rounded-xl border border-white/5 bg-white/[0.03]" />
            </div>
            <div className="col-span-3 flex items-end gap-2 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3">
              {bars.map((height, index) => (
                <span
                  key={index}
                  className="w-full rounded-t-md"
                  style={{
                    height: `${height * 0.32}px`,
                    background: index % 2 === 0 ? accent : "#22d3ee",
                    opacity: 0.55,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {variant === "phone" && (
        <div className="absolute left-1/2 top-1/2 h-[86%] w-[42%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[2rem] border border-white/15 bg-[#111318]/95 p-3 shadow-2xl">
          <div className="mx-auto mb-2 h-1 w-10 rounded-full bg-white/20" />
          <div className="flex h-[calc(100%-0.75rem)] flex-col gap-2.5 rounded-[1.4rem] border border-white/5 bg-white/[0.02] p-3">
            <div className="h-14 rounded-xl" style={{ background: `linear-gradient(135deg, ${accent}55, #22d3ee33)` }} />
            <div className="h-2 w-2/3 rounded-full bg-white/15" />
            <div className="h-2 w-1/2 rounded-full bg-white/10" />
            <div className="mt-1 grid grid-cols-2 gap-2">
              <div className="h-12 rounded-lg bg-white/[0.05]" />
              <div className="h-12 rounded-lg bg-white/[0.05]" />
            </div>
            <div className="mt-auto h-8 rounded-full" style={{ background: accent }} />
          </div>
        </div>
      )}

      {variant === "dashboard" && (
        <div className="absolute inset-[7%] grid grid-cols-4 grid-rows-6 gap-2.5">
          <div className="col-span-4 flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4">
            <span className="h-2 w-16 rounded-full bg-white/20" />
            <span className="h-5 w-5 rounded-full" style={{ background: accent }} />
          </div>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="col-span-1 row-span-2 flex flex-col justify-between rounded-xl border border-white/10 bg-white/[0.03] p-3"
            >
              <span className="h-1.5 w-8 rounded-full bg-white/15" />
              <span className="h-4 w-12 rounded-md" style={{ background: `${accent}55` }} />
            </div>
          ))}
          <div className="col-span-1 row-span-2 rounded-xl border border-white/10 bg-white/[0.02]" />
          <div className="col-span-3 row-span-3 flex items-end gap-2 rounded-xl border border-white/10 bg-white/[0.02] p-4">
            {bars.map((height, index) => (
              <span
                key={index}
                className="w-full rounded-t-md"
                style={{
                  height: `${height}%`,
                  background: index % 2 === 0 ? accent : "#22d3ee",
                  opacity: 0.5,
                }}
              />
            ))}
          </div>
          <div className="col-span-1 row-span-1 rounded-xl border border-white/10 bg-white/[0.03]" />
          <div className="col-span-1 row-span-1 rounded-xl border border-white/10 bg-white/[0.03]" />
        </div>
      )}

      {variant === "grid" && (
        <div className="absolute inset-[9%] grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-white/10" style={{ background: `${accent}2e` }} />
          <div className="rounded-2xl border border-white/10 bg-white/[0.04]" />
          <div className="rounded-2xl border border-white/10 bg-white/[0.04]" />
          <div className="rounded-2xl border border-white/10 bg-[#22d3ee26]" />
        </div>
      )}
    </div>
  );
}
