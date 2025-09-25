"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Images, Award, Rocket } from "lucide-react";

const BRAND = "#28B7D5";
const brandVars = { ["--brand"]: BRAND };

/* scroll-reveal helper (JS) */
function useReveal(opts = { rootMargin: "0px 0px -10% 0px", threshold: 0.2 }) {
  const ref = React.useRef(null);
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setShow(true);
        io.disconnect();
      }
    }, opts);
    io.observe(el);
    return () => io.disconnect();
  }, [opts.rootMargin, opts.threshold]);

  return { ref, show };
}

export default function PortfolioHero() {
  const { ref, show } = useReveal();

  const chips = React.useMemo(
    () => [
      { Icon: Images, text: "200+ Projects" },
      { Icon: Award, text: "4.9★ Avg Ratings" },
      { Icon: Rocket, text: "Fast Time-to-Value" },
    ],
    []
  );

  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-[520px] w-[520px] rounded-full"
        style={{ background: `radial-gradient(closest-side, ${BRAND}22, transparent 70%)` }}
      />

      <div className="pointer-events-none absolute inset-x-0 top-14 md:top-16 flex justify-center">
        <span className="select-none text-[12vw] md:text-[160px] leading-none font-extrabold tracking-tighter text-slate-900/5">
          Portfolio
        </span>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
        <nav className="mb-6 text-sm text-slate-500">
          <Link href="/" className="hover:text-slate-700">Home</Link>{" "}
          <span className="mx-2">→</span>
          <span className="font-medium text-slate-700">Portfolio</span>
        </nav>

        <div
          ref={ref}
          className={[
            "grid items-start gap-10 md:grid-cols-12",
            "transition-all duration-700 ease-out",
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
          ].join(" ")}
        >
          <div className="md:col-span-7 lg:col-span-7 relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm">
              <Sparkles className="h-4 w-4" style={{ color: BRAND }} />
              <span className="text-slate-700">Real results • Real users • Real scale</span>
            </div>

            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-slate-900">
              Our <span style={{ color: BRAND }}>Work</span> That Moves the Needle
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-slate-700 max-w-3xl">
              A curated selection of launches across mobile, web, and AI—from MVPs to
              enterprise rebuilds. Designed for speed, engineered for reliability, and
              optimized for growth.
            </p>

            <div className="mt-7 grid gap-x-10 gap-y-3 sm:grid-cols-2">
              {[
                "Conversion-first experiences",
                "Performance & Core Web Vitals",
                "Secure, scalable architectures",
                "Actionable analytics & insights",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-2 inline-flex h-2.5 w-2.5 rounded-full" style={{ backgroundColor: BRAND }} />
                  <span className="text-slate-800">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#grid"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-white"
                style={{ backgroundColor: BRAND, boxShadow: "0 8px 22px rgba(40,183,213,.22)" }}
              >
                View Case Studies
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/contact?topic=portfolio"
                className="inline-flex items-center rounded-full px-6 py-3 font-semibold border bg-transparent text-slate-900 border-slate-200 hover:bg-slate-50 transition"
              >
                Start Your Project
              </Link>
            </div>

            <div className="relative mt-8 h-16">
              <ul className="absolute -left-1 flex gap-2 animate-[floatRow_18s_linear_infinite] will-change-transform">
                {chips.map(({ Icon, text }, i) => (
                  <li key={`${text}-${i}`} className="inline-flex items-center gap-2 rounded-full bg-white ring-1 ring-slate-200 px-3 py-1.5 text-sm">
                    <span className="text-[color:var(--brand,#28B7D5)]" style={brandVars}>
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="text-slate-700">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:col-span-5 lg:col-span-5">
            <div
              className={[
                "relative overflow-hidden rounded-3xl ring-1 ring-slate-200 bg-[#0e1620]",
                "transition-all duration-700 ease-out",
                show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 delay-150",
              ].join(" ")}
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/40 via-black/10 to-transparent" />
              <div className="grid grid-cols-2 gap-2 p-3">
                {["/images/cases/1.jpg","/images/cases/2.jpg","/images/cases/3.jpg","/images/cases/4.jpg"].map((src, i) => (
                  <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-xl group">
                    <Image
                      src={src}
                      alt={`Showcase ${i + 1}`}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      priority={i === 0}
                    />
                  </div>
                ))}
              </div>
              <div className="pointer-events-none absolute -right-14 -top-14 h-28 w-28 rounded-full bg-white/5 blur-xl" />
            </div>
          </div>
        </div>

        <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      <style jsx>{`
        @keyframes floatRow {
          0%   { transform: translateX(0); }
          50%  { transform: translateX(8px); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
