"use client";

import * as React from "react";
import {
  ArrowLeft, ArrowRight, Clock, Gavel, Car, Building2,
  ShoppingBag, Factory, GraduationCap, ArrowUpRight
} from "lucide-react";
import "@/styles/hero.css"; // for .no-scrollbar if you added it there
import SectionTitle from "./SectionTitle";

type DomainKey =
  | "onDemand" | "law" | "automotive" | "rentals"
  | "ecom" | "industry" | "education";

const ICONS: Record<DomainKey, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  onDemand: Clock,
  law: Gavel,
  automotive: Car,
  rentals: Building2,
  ecom: ShoppingBag,
  industry: Factory,
  education: GraduationCap,
};

const ITEMS: { key: DomainKey; title: string; blurb: string }[] = [
  {
    key: "onDemand",
    title: "On-Demand",
    blurb:
      "Booking, dispatch, tracking and payouts. Real-time ETAs and ops dashboards to run at scale.",
  },
  {
    key: "law",
    title: "Law",
    blurb:
      "Matter management, secure document workflows, billing and compliance-ready audit trails.",
  },
  {
    key: "automotive",
    title: "Automotive",
    blurb:
      "Telematics, maintenance scheduling, connected services and analytics to optimize fleets.",
  },
  {
    key: "rentals",
    title: "Rentals",
    blurb:
      "P2P & B2C rentals, pricing engines, KYC, insurance hooks and multi-party payments.",
  },
  {
    key: "ecom",
    title: "E-commerce",
    blurb:
      "Catalog, checkout, subscriptions and analytics with performance built for conversions.",
  },
  {
    key: "industry",
    title: "Industry",
    blurb:
      "Work orders, asset tracking, integrations with ERPs/MES and data pipes for BI.",
  },
  {
    key: "education",
    title: "Education",
    blurb:
      "LMS features, cohorts, assessments, proctoring and progress analytics.",
  },
];

export default function DomainsExpertise() {
  const ref = React.useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = React.useState(false);
  const [canRight, setCanRight] = React.useState(false);

  const update = React.useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  React.useEffect(() => {
    update();
    const el = ref.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, [update]);

  const scrollByCard = (dir: "left" | "right") => {
    const el = ref.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = (card?.offsetWidth ?? 360) * 1.1 * (dir === "left" ? -1 : 1);
    el.scrollBy({ left: step, behavior: "smooth" });
  };

  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle title="Domains We Serve" watermark="Expertise" className="mb-6 md:mb-10" />

        {/* Track */}
        <div
          ref={ref}
          className="
            overflow-x-auto no-scrollbar scroll-smooth overscroll-x-contain
            snap-x snap-mandatory px-1 pb-1
          "
        >
          <div className="inline-flex gap-5 pr-6">
            {ITEMS.map(({ key, title, blurb }) => {
              const Icon = ICONS[key];
              return (
                <article
                  key={key}
                  data-card
                  className="
                    group relative w-[340px] sm:w-[380px] md:w-[400px]
                    snap-start rounded-2xl bg-[#F6F8FA] ring-1 ring-black/5 shadow-sm
                    transition-transform hover:-translate-y-0.5
                  "
                >
                  <div className="p-7 md:p-8">
                    {/* Badge icon */}
                    <div
                      className="
                        inline-flex items-center justify-center w-14 h-14 rounded-full
                        bg-[color:var(--brand,#28B7D5)]/12 text-[color:var(--brand,#28B7D5)]
                        ring-1 ring-[color:var(--brand,#28B7D5)]/30
                      "
                    >
                      <Icon className="w-7 h-7" strokeWidth={2.1} />
                    </div>

                    <h3 className="mt-6 text-2xl font-semibold tracking-tight text-[#1B2B3A]">
                      {title}
                    </h3>

                    <p className="mt-3 text-[#566575] leading-relaxed">
                      {blurb}
                    </p>

                    {/* bottom row */}
                    <div className="mt-6 flex items-center justify-between">
                      {/* animated underline */}
                      <span className="relative text-[color:var(--brand,#28B7D5)] text-sm font-medium">
                        Learn more
                        <i className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[color:var(--brand,#28B7D5)] transition-all duration-300 group-hover:w-full" />
                      </span>

                      <span
                        className="
                          inline-flex items-center justify-center w-10 h-10 rounded-full
                          border border-[color:var(--brand,#28B7D5)]/40 text-[color:var(--brand,#28B7D5)]
                          bg-white transition-colors group-hover:bg-[color:var(--brand,#28B7D5)]
                          group-hover:text-white
                        "
                        aria-hidden
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </span>
                    </div>
                  </div>

                  {/* soft corner highlight to differ from Services look */}
                  <div className="pointer-events-none absolute -right-12 -top-12 w-24 h-24 rounded-full bg-[color:var(--brand,#28B7D5)]/6 blur-2xl" />
                </article>
              );
            })}
          </div>
        </div>

        {/* Arrows under the track */}
        <div className="mt-4 flex items-center justify-center gap-4">
          <button
            aria-label="Scroll left"
            onClick={() => scrollByCard("left")}
            disabled={!canLeft}
            className="
              inline-flex items-center justify-center rounded-full border px-3 py-2
              bg-white text-[color:var(--brand,#28B7D5)] shadow
              disabled:opacity-40 disabled:cursor-not-allowed
            "
          >
            <ArrowLeft />
          </button>
          <button
            aria-label="Scroll right"
            onClick={() => scrollByCard("right")}
            disabled={!canRight}
            className="
              inline-flex items-center justify-center rounded-full border px-3 py-2
              bg-white text-[color:var(--brand,#28B7D5)] shadow
              disabled:opacity-40 disabled:cursor-not-allowed
            "
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
