"use client";

import * as React from "react";
import {
  ArrowLeft, ArrowRight, Clock, Gavel, Car, Building2,
  ShoppingBag, Factory, GraduationCap, ArrowUpRight, X,
  Shield, Gauge, Layers, Globe, Sparkles
} from "lucide-react";
import "@/styles/hero.css";
import SectionTitle from "./SectionTitle";

const BRAND = "#28B7D5";

/* -------------------------------- Types -------------------------------- */
type DomainKey =
  | "onDemand" | "law" | "automotive" | "rentals"
  | "ecom" | "industry" | "education";

type DomainDetails = {
  key: DomainKey;
  title: string;
  blurb: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  tagline: string;
  collab: string;
  problems: string[];
  solutions: string[];
  capabilities: string[];
  caseStudies: { title: string; result: string; href?: string }[];
};

const ICONS: Record<DomainKey, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  onDemand: Clock,
  law: Gavel,
  automotive: Car,
  rentals: Building2,
  ecom: ShoppingBag,
  industry: Factory,
  education: GraduationCap,
};

/* -------------------------------- Data --------------------------------- */
const DOMAINS: DomainDetails[] = [
  {
    key: "onDemand",
    title: "On-Demand",
    blurb: "Booking, dispatch, tracking and payouts. Real-time ETAs and ops dashboards to run at scale.",
    icon: ICONS.onDemand,
    tagline: "Real-time logistics with delightful UX.",
    collab:
      "We partner from discovery to go-live: field-ops ride-alongs, SLA design, driver & customer apps, and dispatch consoles with observability.",
    problems: ["Unreliable ETAs & missed SLAs", "Inefficient route assignments", "Fragmented ops tooling"],
    solutions: ["Geo-routing & live status websockets", "Operator dashboards with alerting", "Wallets, payouts, KYC & tax hooks"],
    capabilities: ["React Native apps", "Realtime backends", "Maps/Geofence", "In-app wallets", "Ops dashboards"],
    caseStudies: [{ title: "WashMinute – Wash On Demand", result: "70% faster booking", href: "/case-studies/washminute" }],
  },
  {
    key: "law",
    title: "Law",
    blurb: "Matter management, secure document workflows, billing and compliance-ready audit trails.",
    icon: ICONS.law,
    tagline: "Compliance-first, client-friendly legal tech.",
    collab:
      "We co-design with your legal ops team: permissions, redaction, citations, and safe AI assistants aligned with your policies.",
    problems: ["Knowledge retrieval is slow", "PII exposure risks", "Manual document prep"],
    solutions: ["RAG with citation chains", "PII redaction & retention policies", "Templated docs & e-signature"],
    capabilities: ["RAG & LLM guardrails", "Doc pipelines", "Role-based access", "Audit logs", "Billing & timers"],
    caseStudies: [{ title: "LegalQ – Law Chatbot Copilot", result: "85% deflection rate", href: "/case-studies/legalq" }],
  },
  {
    key: "automotive",
    title: "Automotive",
    blurb: "Telematics, maintenance scheduling, connected services and analytics to optimize fleets.",
    icon: ICONS.automotive,
    tagline: "Connected vehicles, measurable uptime.",
    collab:
      "We integrate with OEM data, OBD dongles, and telematics clouds; build portals for service centers and fleet managers.",
    problems: ["Unplanned downtime", "Fuel/route inefficiency", "Fragmented maintenance data"],
    solutions: ["Predictive maintenance", "Route & fuel optimization", "Service scheduling portals"],
    capabilities: ["Telematics ingestion", "IoT pipelines", "Fleet dashboards", "Driver apps", "Analytics"],
    caseStudies: [{ title: "Dealership Ops Portal", result: "150% conversion lift", href: "/case-studies/dealership" }],
  },
  {
    key: "rentals",
    title: "Rentals",
    blurb: "P2P & B2C rentals, pricing engines, KYC, insurance hooks and multi-party payments.",
    icon: ICONS.rentals,
    tagline: "Trust, liquidity, and seamless checkout.",
    collab:
      "We design host & guest flows, verification, pricing ladders, damage claims, and payouts with split payments.",
    problems: ["Low trust & verification", "Leaky funnels", "Claims complexity"],
    solutions: ["KYC/AML flows", "Smart pricing & availability", "Claims & insurance APIs"],
    capabilities: ["Marketplace UX", "Payments & splits", "KYC/KYB", "Pricing engines", "Messaging & reviews"],
    caseStudies: [{ title: "Cardnd – Car Rentals", result: "+42% conversion", href: "/case-studies/cardnd" }],
  },
  {
    key: "ecom",
    title: "E-commerce",
    blurb: "Catalog, checkout, subscriptions and analytics with performance built for conversions.",
    icon: ICONS.ecom,
    tagline: "High-performance storefronts that convert.",
    collab:
      "We refine PDP/PLP UX, implement headless CMS, build custom checkout and subscriptions with robust analytics.",
    problems: ["Slow pages hurt SEO", "High cart abandonment", "Rigid CMS"],
    solutions: ["Edge caching & CWV", "Optimized checkout & wallets", "Headless CMS & personalization"],
    capabilities: ["Headless commerce", "Subscriptions", "Search & merch", "Loyalty", "A/B testing"],
    caseStudies: [{ title: "Watch & Jewelry Marketplace", result: "110% more leads", href: "/case-studies/marketplace" }],
  },
  {
    key: "industry",
    title: "Industry",
    blurb: "Work orders, asset tracking, integrations with ERPs/MES and data pipes for BI.",
    icon: ICONS.industry,
    tagline: "From shop-floor to C-suite visibility.",
    collab:
      "We connect machines, digitize SOPs, and surface KPIs across MES/ERP with role-aware apps and dashboards.",
    problems: ["Paper workflows", "Siloed data", "No real-time KPIs"],
    solutions: ["Digital work orders", "ETL to warehouse", "Live OEE & downtime analytics"],
    capabilities: ["IoT ingestion", "ERP/MES integration", "Role apps", "Data lakes", "BI dashboards"],
    caseStudies: [{ title: "Asset & Work-Order Suite", result: "↓ downtime, ↑ throughput" }],
  },
  {
    key: "education",
    title: "Education",
    blurb: "LMS features, cohorts, assessments, proctoring and progress analytics.",
    icon: ICONS.education,
    tagline: "Learning experiences that scale.",
    collab:
      "We craft student/teacher/admin portals, cohort tooling, assessments, and reporting with accessibility baked in.",
    problems: ["Low engagement", "Manual grading", "Fragmented tools"],
    solutions: ["Gamified modules & nudges", "Auto-grading & rubrics", "Unified portals & SSO"],
    capabilities: ["LMS & LTI", "Cohorts", "Assessments", "Accessibility", "Reports & SIS integrations"],
    caseStudies: [{ title: "Student Productivity Platform", result: "1.5× revenue", href: "/case-studies/project-impact" }],
  },
];

/* -------------------------- Small helpers/components -------------------------- */
function useBodyScrollLock(locked: boolean) {
  React.useEffect(() => {
    if (!locked) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [locked]);
}

function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 ring-1 ring-slate-200 px-3 py-1.5 text-xs text-slate-700">
      {icon}
      {text}
    </span>
  );
}

function ListCard({
  title,
  items,
  tone = "neutral",
  rootEl,
  delay = 0,
}: {
  title: string;
  items: string[];
  tone?: "neutral" | "brand";
   rootEl?: Element | null;  
  delay?: number;
}) {
  const { ref, shown } = useScrollReveal(rootEl, 0.15);
  const brand = tone === "brand";
  return (
    <div
      ref={ref }
      className={`rounded-2xl border p-4 sm:p-5 transition-all duration-500 ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      } ${brand ? "bg-[color:var(--brand,#28B7D5)] text-white border-transparent" : "bg-white ring-1 ring-slate-200"}`}
      style={{ ["--brand" as any]: BRAND, transitionDelay: `${delay}ms` }}
    >
      <div className={`text-sm font-semibold ${brand ? "opacity-90" : "text-slate-600"}`}>{title}</div>
      <ul className="mt-2 space-y-1.5">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2">
            <span
              className={`mt-1 inline-block h-2 w-2 rounded-full ${brand ? "bg-white/80" : "bg-[color:var(--brand,#28B7D5)]"}`}
              style={{ ["--brand" as any]: BRAND }}
            />
            <span className={`${brand ? "text-white/95" : "text-slate-700"}`}>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** IntersectionObserver helper that works within a scrollable root (the modal body) */
// Hook
/** IntersectionObserver helper that works within a scrollable root (the modal body) */
function useScrollReveal(rootEl?: Element | null, threshold = 0.2) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { root: rootEl ?? null, threshold }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [rootEl, threshold]);

  return { ref, shown };
}


/* -------------------------------- Modal -------------------------------- */
function DomainModal({
  open,
  onClose,
  data,
}: {
  open: boolean;
  onClose: () => void;
  data: DomainDetails | null;
}) {
  useBodyScrollLock(open);

  // keep mounted until fade-out finishes
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    if (open) {
      setMounted(true);
    } else {
      const t = setTimeout(() => setMounted(false), 200);
      return () => clearTimeout(t);
    }
  }, [open]);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

const scrollerRef = React.useRef<HTMLDivElement>(null);


  if (!open && !mounted) return null;
  const Icon = data?.icon ?? Clock;

  return (
    <div
      className={`fixed inset-0 z-[80] flex items-start justify-center p-4 sm:p-6 ${open ? "" : "pointer-events-none"}`}
      aria-modal="true"
      role="dialog"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
      />

      {/* Panel (starts a bit lower; scrollable content) */}
      <div
        className={`
          relative z-[81] w-full sm:w-[min(760px,92vw)] mx-auto
          mt-[10vh] sm:mt-[8vh]  /* start lower on screen */
          rounded-3xl overflow-hidden bg-white shadow-2xl ring-1 ring-black/10
          transition-all duration-200
          ${open ? "opacity-100 translate-y-0 sm:scale-100" : "opacity-0 translate-y-2 sm:scale-[0.98]"}
          flex flex-col max-h-[85vh]
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top accent bar */}
        <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, ${BRAND}, ${BRAND}80)` }} />

        {/* Header (sticky) */}
        <div className="sticky top-0 z-10 bg-white/90 backdrop-blur px-6 sm:px-8 pt-5 pb-4 border-b border-slate-200/60">
          <div className="flex items-start gap-4">
            <span
              className="inline-flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ring-[color:var(--brand,#28B7D5)]/30
                         bg-[color:var(--brand,#28B7D5)]/10 text-[color:var(--brand,#28B7D5)]"
              style={{ ["--brand" as any]: BRAND }}
            >
              <Icon className="h-6 w-6" />
            </span>
            <div className="flex-1">
              <h3 className="text-2xl font-bold tracking-tight">{data?.title}</h3>
              <p className="mt-1.5 text-slate-600">{data?.tagline}</p>
            </div>
            <button onClick={onClose} aria-label="Close" className="rounded-xl p-2 text-slate-500 hover:bg-slate-100">
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Scrollable body */}
        <div ref={scrollerRef} className="overflow-y-auto px-6 sm:px-8 py-6 space-y-6">
          {/* Collab + blurb */}
          <RevealBlock rootEl={scrollerRef.current}>
            <div className="rounded-2xl border border-slate-200 p-4 sm:p-5 bg-white">
              <p className="text-slate-700">{data?.collab}</p>
              <p className="mt-2 text-slate-600">{data?.blurb}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Badge icon={<Shield className="h-3.5 w-3.5" />} text="Secure by design" />
                <Badge icon={<Gauge className="h-3.5 w-3.5" />} text="Performance first" />
                <Badge icon={<Layers className="h-3.5 w-3.5" />} text="Composable" />
                <Badge icon={<Globe className="h-3.5 w-3.5" />} text="Scales globally" />
              </div>
            </div>
          </RevealBlock>

          {/* Problems / Solutions */}
          <div className="grid sm:grid-cols-2 gap-4">
            <ListCard title="Common Challenges" items={data?.problems ?? []} rootEl={scrollerRef.current} delay={0} />
            <ListCard title="Our Solutions" items={data?.solutions ?? []} tone="brand" rootEl={scrollerRef.current} delay={80} />
          </div>

          {/* Capabilities */}
          <RevealBlock rootEl={scrollerRef.current} delay={60}>
            <div>
              <h4 className="text-sm font-semibold text-slate-600">Capabilities</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {(data?.capabilities ?? []).map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-sm ring-1 ring-slate-200 bg-slate-50"
                  >
                    <Sparkles className="h-3.5 w-3.5 text-[color:var(--brand,#28B7D5)]" style={{ ["--brand" as any]: BRAND }} />
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </RevealBlock>

          {/* Related Work */}
          <RevealBlock rootEl={scrollerRef.current} delay={80}>
            <div>
              <h4 className="text-sm font-semibold text-slate-600">Related Work</h4>
              <div className="mt-3 grid sm:grid-cols-2 gap-3">
                {(data?.caseStudies ?? []).map((cs) => (
                  <a
                    key={cs.title}
                    href={cs.href ?? "#"}
                    className="group rounded-2xl ring-1 ring-slate-200 p-4 bg-white hover:bg-[color:var(--brand,#28B7D5)] hover:text-white transition"
                    style={{ ["--brand" as any]: BRAND }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-base font-semibold">{cs.title}</div>
                      <ArrowUpRight className="h-4 w-4 opacity-60 group-hover:opacity-100" />
                    </div>
                    <div className="mt-1 text-sm opacity-70">{cs.result}</div>
                  </a>
                ))}
              </div>
            </div>
          </RevealBlock>

          {/* Footer actions inside scroller for mobile reachability */}
          <RevealBlock rootEl={scrollerRef.current} delay={60}>
            <div className="flex flex-wrap items-center justify-end gap-3 pt-1">
              <a
                href="/contact?topic=domain"
                className="inline-flex items-center rounded-full px-5 py-2.5 text-white font-semibold shadow-sm"
                style={{ backgroundColor: BRAND, boxShadow: "0 8px 22px rgba(40,183,213,.22)" }}
              >
                Discuss Your Use-Case
              </a>
              <button onClick={onClose} className="inline-flex items-center rounded-full px-5 py-2.5 font-semibold ring-1 ring-slate-200">
                Close
              </button>
            </div>
          </RevealBlock>
        </div>
      </div>
    </div>
  );
}

/** Simple block that reveals when scrolled into view within a custom root */
function RevealBlock({
  children,
  rootEl,
  delay = 0,
}:  React.PropsWithChildren<{ rootEl?: Element | null; delay?: number }>) {
  const { ref, shown } = useScrollReveal(rootEl, 0.15);
  return (
    <div
      ref={ref }
      className={`transition-all duration-500 ${shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ------------------------------ Main section ----------------------------- */
export default function DomainsExpertise() {
  const ref = React.useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = React.useState(false);
  const [canRight, setCanRight] = React.useState(false);
  const [active, setActive] = React.useState<DomainDetails | null>(null);

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

        <div
          ref={ref}
          className="overflow-x-auto no-scrollbar scroll-smooth overscroll-x-contain snap-x snap-mandatory px-1 pb-1"
        >
          <div className="inline-flex gap-5 pr-6">
            {DOMAINS.map((d) => {
              const Icon = d.icon;
              return (
                <button
                  key={d.key}
                  data-card
                  onClick={() => setActive(d)}
                  className="
                    group relative w-[340px] sm:w-[380px] md:w-[400px] text-left
                    snap-start rounded-2xl bg-[#F6F8FA] ring-1 ring-black/5 shadow-sm
                    transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand,#28B7D5)]/60
                  "
                  style={{ ["--brand" as any]: BRAND }}
                  aria-label={`Open ${d.title} details`}
                >
                  <div className="p-7 md:p-8">
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
                      {d.title}
                    </h3>

                    <p className="mt-3 text-[#566575] leading-relaxed">{d.blurb}</p>

                    <div className="mt-6 flex items-center justify-between">
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

                  <div className="pointer-events-none absolute -right-12 -top-12 w-24 h-24 rounded-full bg-[color:var(--brand,#28B7D5)]/6 blur-2xl" />
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center gap-4">
          <button
            aria-label="Scroll left"
            onClick={() => scrollByCard("left")}
            disabled={!canLeft}
            className="inline-flex items-center justify-center rounded-full border px-3 py-2 bg-white text-[color:var(--brand,#28B7D5)] shadow disabled:opacity-40 disabled:cursor-not-allowed"
            style={{ ["--brand" as any]: BRAND }}
          >
            <ArrowLeft />
          </button>
          <button
            aria-label="Scroll right"
            onClick={() => scrollByCard("right")}
            disabled={!canRight}
            className="inline-flex items-center justify-center rounded-full border px-3 py-2 bg-white text-[color:var(--brand,#28B7D5)] shadow disabled:opacity-40 disabled:cursor-not-allowed"
            style={{ ["--brand" as any]: BRAND }}
          >
            <ArrowRight />
          </button>
        </div>
      </div>

      <DomainModal open={!!active} onClose={() => setActive(null)} data={active} />
    </section>
  );
}
