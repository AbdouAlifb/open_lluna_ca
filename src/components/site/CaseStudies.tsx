"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionTitle from "./SectionTitle";

const BRAND = "#28B7D5";

type Study = {
  title: string;
  image: string; // e.g. /images/cases/1.jpg
  tags: string[];
  blurb: string;
  stats: string[];
  href?: string;
};

const STUDIES: Study[] = [
  {
    title: "WashMinute – Wash-On-Demand",
    image: "/images/cases/1.jpg",
    tags: ["UI/UX", "iOS & Android", "Web App"],
    blurb:
      "An on-demand car wash platform with seamless booking, live status, and route-aware dispatch for field crews. Built for speed, reliability, and scale.",
    stats: ["70% Faster Booking Flow", "4.8★ App Store Rating", "Real-time Ops Dashboard"],
    href: "/case-studies/washminute",
  },
  {
    title: "Cardnd – Multi-Platform Car Rentals",
    image: "/images/cases/cardnddemo.png",
    tags: ["Product Design", "Mobile", "Web Marketplace"],
    blurb:
      "A peer-to-peer rental experience inspired by Airbnb, with verified hosts, smart pricing, insurance flows, and frictionless checkout on mobile & web.",
    stats: ["+42% Conversion Lift", "Sub-60s Listing Flow", "Secure KYC & Payments"],
    href: "/case-studies/cardnd",
  },
  {
    title: "LegalQ – Law Chatbot Copilot",
    image: "/images/cases/3.jpg",
    tags: ["AI/LLM", "RAG", "Compliance"],
    blurb:
      "A domain-tuned chatbot that answers common legal questions with sourced references, plain-English summaries, and guardrails for safe, helpful guidance.",
    stats: ["85% Deflection Rate", "Cited Sources", "PII-Safe Redaction"],
    href: "/case-studies/legalq",
  },
  {
    title: "HireSense – AI Interviewer",
    image: "/images/cases/4.jpg",
    tags: ["AI/LLM", "Voice", "ATS Integration"],
    blurb:
      "An AI interviewer that screens candidates with adaptive questions, scores competencies, and syncs structured feedback to your ATS for faster, fairer hiring.",
    stats: ["60% Faster Screening", "Bias-Guardrails Enabled", "ATS & Calendar Sync"],
    href: "/case-studies/hiresense",
  },
  {
    title: "TaxMaroc – Morocco Tax Guide",
    image: "/images/cases/5.png",
    tags: ["Gov Tech", "Educational", "Multi-lingual"],
    blurb:
      "A comprehensive tax guide demystifying Morocco's tax system with clear breakdowns of VAT, corporate tax, income tax, and compliance requirements for citizens and businesses.",
    stats: ["15K+ Monthly Users", "Arabic & French Support", "Interactive Tax Calculators"],
    href: "/case-studies/taxmaroc",
  },
];

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full px-3 py-1.5 text-sm font-medium bg-slate-100 text-slate-700 ring-1 ring-slate-200">
      {children}
    </span>
  );
}

function StatChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full px-4 py-2 text-[15px] font-medium bg-white text-slate-700 ring-1 ring-slate-200 shadow-sm">
      {children}
    </span>
  );
}

/** Reveal on scroll (one per item) */
function useReveal(threshold = 0.15) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(e.target); // animate once
          }
        });
      },
      { threshold }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, visible };
}

export default function CaseStudies() {
  return (
    <section className="py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
    <SectionTitle title="Case Studies" watermark="Results" className="mb-6 md:mb-10" />

        <div className="space-y-12 md:space-y-16">
          {STUDIES.map((s, idx) => (
            <CaseRow key={s.title} s={s} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseRow({ s, idx }: { s: Study; idx: number }) {
  const imageLeft = idx % 2 === 0;
  const { ref, visible } = useReveal();
 const fromSide = imageLeft ? "translate-y-6 md:-translate-x-6" : "translate-y-6 md:translate-x-6";

  return (
    <article
      ref={ref}
      className={[
      "grid items-center gap-5 md:gap-6 lg:gap-8 md:grid-cols-12",
        "opacity-0 will-change-transform transition-all duration-700 ease-out",
        visible ? "opacity-100 translate-y-0 md:translate-x-0" : fromSide,
      ].join(" ")}
      style={{ transitionDelay: `${Math.min(idx * 70, 200)}ms` }}
    >
      {/* IMAGE */}
      <div className={["md:col-span-7", imageLeft ? "order-1" : "order-2 md:col-start-6"].join(" ")}>
       <div className="group relative aspect-[16/10] w-full overflow-hidden rounded-3xl ring-1 ring-black/5 transition-transform duration-500">
          <Image
            src={s.image}
            alt={s.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            sizes="(max-width:768px) 100vw, (max-width:1200px) 55vw, 640px"
            priority={idx === 0}
          />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_80%_0%,transparent,rgba(0,0,0,.08)_60%,transparent_90%)]" />
        </div>
      </div>

      {/* CONTENT */}
      <div className={["md:col-span-5", imageLeft ? "order-2 md:col-start-9" : "order-1 md:col-start-1"].join(" ")}>
        <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">{s.title}</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {s.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
         ))}
        </div>
        <p className="mt-4 text-lg leading-relaxed text-slate-700">{s.blurb}</p>
        <div className="mt-4 flex flex-col gap-2.5">
          {s.stats.map((c) => (
            <StatChip key={c}>{c}</StatChip>
          ))}
       </div>
        <div className="mt-6">
          <Link
            href={s.href ?? "#"}
            className="inline-flex items-center gap-2 font-semibold tracking-wide rounded-full px-5 py-3 ring-2 transition text-white hover:-translate-y-0.5"
            style={{
             backgroundColor: BRAND,
              borderColor: BRAND,
              boxShadow: "0 6px 18px rgba(40,183,213,.25)",
              transition: "transform 300ms ease",
            }}
          >
         View Case Study
            <ArrowRight className="h-5 w-5" />
         </Link>
        </div>
      </div>
    </article>
  );
}