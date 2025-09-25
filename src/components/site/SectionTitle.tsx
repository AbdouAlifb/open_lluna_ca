// components/SectionTitle.tsx
"use client";

import * as React from "react";

const BRAND = "#28B7D5";

type Props = {
  title: string;
  watermark?: string; // if omitted, uses title
  className?: string;
};

export default function SectionTitle({ title, watermark, className = "" }: Props) {
  const wrapRef = React.useRef<HTMLDivElement>(null);
  const h2Ref = React.useRef<HTMLHeadingElement>(null);
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    // small delay so layout is correct before first paint of watermark
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const faint = watermark ?? title;

  return (
    <div className={`relative ${className}`}>
      {/* keep this wrapper ONLY as tall as the heading so the watermark never overlaps following content */}
      <div
        ref={wrapRef}
        className="relative mx-auto max-w-7xl px-4 pt-2 pb-3 isolate"
      >
        {/* Watermark: locked to the same line as the H2 */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 z-0"
          style={{
            top: "50%",
            transform: "translate(-50%, -52%)",
            // keep width loose but not full container to avoid drifting
            maxWidth: "100%",
            whiteSpace: "nowrap",
            opacity: 0.04,
            lineHeight: 1,
            // size: bigger but subtle
            fontSize: "9vw", // responsive; will cap via clamp below
            fontWeight: 800,
            filter: "blur(0)", // crisp
          }}
        >
          <span
            style={{
              fontSize: "clamp(48px, 9vw, 160px)",
            }}
          >
            {faint}
          </span>
        </div>

        {/* Foreground title */}
        <div className="relative z-10 text-center">
          <h2
            ref={h2Ref}
            className="inline-block text-3xl md:text-4xl font-extrabold tracking-tight text-slate-800"
          >
            {title}
          </h2>

          {/* Accent underline grows in once mounted (gentle polish) */}
          <span
            className={`
              block mx-auto mt-3 h-1 rounded-full
              transition-[width] duration-700 ease-out
            `}
            style={{
              width: ready ? "6rem" : "0rem",
              background: `linear-gradient(90deg, ${BRAND}, ${BRAND}80)`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
