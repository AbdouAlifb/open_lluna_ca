"use client";

import * as React from "react";
import {
  Search,
  Gauge,
  Boxes,
  Cpu,
  KanbanSquare,
  Cable,
  Rocket,
  RefreshCcw,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import SectionTitle from "./SectionTitle";

const BRAND = "#28B7D5";

type Step = {
  key: string;
  title: string;
  subtitle?: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  body: string;
};

const STEPS: Step[] = [
  {
    key: "discovery",
    title: "Discovery & Analysis",
    subtitle: "Guided Roadmap to Digital Success",
    icon: Search,
    body:
      "Identify business needs and technical requirements via deep consultations. Assess current systems and processes to pinpoint gaps, risks and impact areas.",
  },
  { key: "feasibility", title: "Feasibility & Impact Assessment", icon: Gauge, body: "Estimate effort, cost and timeline. Validate assumptions with quick spikes and risk registers to ensure a pragmatic, ROI-focused plan." },
  { key: "architecture", title: "Solution Architecture Design", icon: Boxes, body: "Design a scalable, secure architecture. Define domains, data flows, integrations, and non-functional requirements aligned to future growth." },
  { key: "tech", title: "Technology Selection & Prototyping", icon: Cpu, body: "Pick the right stack (web, mobile, cloud, AI) and build thin prototypes to validate UX, data contracts and performance before full build." },
  { key: "agile", title: "Agile Development Process", icon: KanbanSquare, body: "Deliver in sprints with CI/CD, code reviews, automated tests and observability. Weekly demos keep stakeholders aligned." },
  { key: "integration", title: "System Integration & Testing", icon: Cable, body: "Integrate with existing systems and run comprehensive testing—unit, integration, E2E, security and load—before release." },
  { key: "deploy", title: "Deployment & User Training", icon: Rocket, body: "Blue/green or canary deployments, runbooks and handover. Train admins and users for smooth adoption across teams." },
  { key: "optimize", title: "Continuous Support & Optimization", icon: RefreshCcw, body: "SLAs, monitoring and iterative improvements. Track KPIs, gather feedback and ship enhancements to drive ongoing value." },
];

export default function HowWeWork() {
  const [active, setActive] = React.useState(0);
  const railRef = React.useRef<HTMLDivElement>(null);

  const canLeft = () => {
    const el = railRef.current;
    if (!el) return false;
    return el.scrollLeft > 4;
  };
  const canRight = () => {
    const el = railRef.current;
    if (!el) return false;
    return el.scrollLeft + el.clientWidth < el.scrollWidth - 4;
  };

  const scrollRail = (dir: "left" | "right") => {
    const el = railRef.current;
    if (!el) return;
    const chip = el.querySelector<HTMLElement>("[data-chip]");
    const delta = (chip?.offsetWidth ?? 220) * (dir === "left" ? -1 : 1);
    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setActive((i) => Math.max(0, i - 1));
      if (e.key === "ArrowRight")
        setActive((i) => Math.min(STEPS.length - 1, i + 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="py-14 md:py-18">
      <div className="mx-auto max-w-7xl px-4">
       <SectionTitle title="How We Work" watermark="Process" className="mb-6 md:mb-10" />
        {/* TOP STEPPER (scrollable) */}
        <div className="relative">
          <div
            ref={railRef}
            className="no-scrollbar overflow-x-auto scroll-smooth"
          >
            <div className="flex gap-3 md:gap-4 pr-6">
              {STEPS.map((s, i) => {
                const Icon = s.icon;
                const isActive = i === active;
                return (
                  <button
                    key={s.key}
                    data-chip
                    onClick={() => setActive(i)}
                    className={[
                      "shrink-0 group inline-flex items-center gap-3 rounded-2xl border px-4 py-3 md:px-5 md:py-3.5 transition",
                      isActive
                        ? "bg-[color:var(--brand,#28B7D5)] text-white border-transparent shadow"
                        : "bg-white text-slate-800 border-slate-200 hover:border-slate-300",
                    ].join(" ")}
                    style={{ ["--brand" as any]: BRAND }}
                  >
                    <span
                      className={[
                        "inline-flex h-8 w-8 items-center justify-center rounded-xl border",
                        isActive
                          ? "border-white/30 bg-white/10"
                          : "border-slate-200 bg-slate-50",
                      ].join(" ")}
                    >
                      <Icon className="w-4 h-4" />
                    </span>
                    <div className="text-left">
                      <div className="text-sm opacity-70">Step {i + 1}</div>
                      <div className="text-[15px] md:text-base font-medium leading-tight">
                        {s.title}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* rail arrows */}
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-1 pr-6 bg-gradient-to-r from-white to-transparent/0">
            <button
              aria-label="Scroll left"
              onClick={() => scrollRail("left")}
              className="pointer-events-auto inline-flex items-center justify-center rounded-full border bg-white p-2 shadow"
              style={{ color: BRAND }}
              disabled={!canLeft()}
            >
              <ArrowLeft />
            </button>
          </div>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1 pl-6 bg-gradient-to-l from-white to-transparent/0">
            <button
              aria-label="Scroll right"
              onClick={() => scrollRail("right")}
              className="pointer-events-auto inline-flex items-center justify-center rounded-full border bg-white p-2 shadow"
              style={{ color: BRAND }}
              disabled={!canRight()}
            >
              <ArrowRight />
            </button>
          </div>
        </div>

        {/* subtle progress line */}
        <div className="mt-4 h-1 w-full rounded-full bg-slate-200/70">
          <div
            className="h-1 rounded-full"
            style={{
              width: `${((active + 1) / STEPS.length) * 100}%`,
              backgroundColor: BRAND,
            }}
          />
        </div>

        {/* CONTENT PANEL full width */}
        <div className="mt-6 relative overflow-hidden rounded-2xl bg-[#0e1620] text-white ring-1 ring-black/10">
          <div className="pointer-events-none absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle_at_center,rgba(40,183,213,0.22),transparent_60%)]" />
          <div className="pointer-events-none absolute -bottom-44 -right-44 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(40,183,213,0.13),transparent_60%)]" />

          <div className="relative p-6 sm:p-8 lg:p-12">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">
              <span
                className="inline-block h-2 w-2 rounded-full"
                style={{ backgroundColor: BRAND }}
              />
              <span className="opacity-80">
                Step {active + 1} of {STEPS.length}
              </span>
            </div>

            <h3 className="mt-5 text-3xl sm:text-4xl font-extrabold leading-tight">
              {STEPS[active].title}
            </h3>
            {STEPS[active].subtitle && (
              <p className="mt-2 text-white/80">{STEPS[active].subtitle}</p>
            )}

            <p className="mt-6 text-lg leading-relaxed text-white/90 max-w-4xl">
              {STEPS[active].body}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/contact?topic=discovery"
                className="inline-flex items-center rounded-full px-6 py-3 font-medium border transition
                           bg-[color:var(--brand,#28B7D5)] text-white border-[color:var(--brand,#28B7D5)]
                           hover:bg-transparent hover:text-[color:var(--brand,#28B7D5)]"
                style={{ ["--brand" as any]: BRAND }}
              >
                Start a Discovery Call
              </a>
              <a
                href="/services"
                className="inline-flex items-center rounded-full px-6 py-3 font-medium border transition
                           bg-transparent text-white border-white/30 hover:border-white/50 hover:bg-white/5"
              >
                See Our Services
              </a>
            </div>
          </div>

          {/* bottom nav for long screens */}
          <div className="relative border-t border-white/10 p-4 flex items-center justify-between">
            <button
              onClick={() => setActive((i) => Math.max(0, i - 1))}
              disabled={active === 0}
              className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-sm shadow disabled:opacity-40"
              style={{ color: BRAND }}
            >
              <ArrowLeft className="w-4 h-4" />
              Previous
            </button>
            <button
              onClick={() =>
                setActive((i) => Math.min(STEPS.length - 1, i + 1))
              }
              disabled={active === STEPS.length - 1}
              className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-sm shadow disabled:opacity-40"
              style={{ color: BRAND }}
            >
              Next
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
