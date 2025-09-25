"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  Users,
  BriefcaseBusiness,
  Building2,
  Handshake,
  Clock,
  CalendarClock,
  Shield,
  GitBranch,
  Rocket,
  Gauge,
  Globe,
  Laptop2,
  Bug,
  Wrench,
  Cpu,
  Layers,
  Cloud,
  MessageSquare,
  NotebookPen,
  ArrowRight,
} from "lucide-react";
import { useContactSubmit } from "@/hooks/useContactSubmit";

const BRAND = "#28B7D5";

/* ------------------------- tiny scroll-reveal helper ------------------------- */
function useReveal<T extends HTMLElement>(
  opts: IntersectionObserverInit = { rootMargin: "0px 0px -10% 0px", threshold: 0.2 }
) {
  const ref = React.useRef<T | null>(null);
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

/* ----------------------------- Shared wrappers ------------------------------ */
function Section({
  id,
  title,
  subtitle,
  children,
}: React.PropsWithChildren<{ id?: string; title: string; subtitle?: string }>) {
  const { ref, show } = useReveal<HTMLDivElement>();
  return (
    <section id={id} className="py-12 md:py-16">
      <div ref={ref} className="mx-auto max-w-7xl px-4">
        <div className={`transition-all duration-700 ease-out ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">{title}</h2>
          {subtitle && <p className="mt-3 text-lg text-slate-700 max-w-3xl">{subtitle}</p>}
          <div className="mt-8">{children}</div>
        </div>
      </div>
    </section>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-slate-100 text-slate-700 px-3 py-1.5 text-sm ring-1 ring-slate-200">
      {children}
    </span>
  );
}

function Pill({
  title,
  text,
  Icon = Users,
}: {
  title: string;
  text: string;
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}) {
  return (
    <div
      className="group rounded-2xl border border-slate-200 p-6 bg-white/80 transition-all duration-300
                 hover:-translate-y-0.5 hover:shadow-lg hover:bg-[color:var(--brand,#28B7D5)] hover:border-transparent"
      style={{ ["--brand" as any]: BRAND }}
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl ring-1 ring-slate-200 bg-white text-[color:var(--brand,#28B7D5)]
                         group-hover:bg-white/10 group-hover:text-white group-hover:ring-white/30 transition-colors">
          <Icon className="h-5 w-5" />
        </span>
        <h4 className="text-xl font-semibold text-slate-900 group-hover:text-white transition-colors">{title}</h4>
      </div>
      <p className="mt-2 text-slate-700 group-hover:text-white/90 transition-colors">{text}</p>
    </div>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-2xl bg-white ring-1 ring-slate-200 p-5 text-center transition hover:shadow-md hover:-translate-y-0.5">
      <div className="text-3xl font-extrabold" style={{ color: BRAND }}>{k}</div>
      <div className="mt-1 text-slate-600">{v}</div>
    </div>
  );
}

function Card({
  title,
  text,
  href,
  image,
}: {
  title: string;
  text: string;
  href?: string;
  image?: string;
}) {
  return (
    <article className="group overflow-hidden rounded-2xl ring-1 ring-slate-200 bg-white transition-all hover:-translate-y-0.5 hover:shadow-xl">
      {image && (
        <div className="relative aspect-[16/10]">
          <Image src={image} alt={title} fill className="object-cover" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      )}
      <div className="p-6 transition-colors group-hover:bg-[color:var(--brand,#28B7D5)]" style={{ ["--brand" as any]: BRAND }}>
        <h4 className="text-xl font-semibold text-slate-900 group-hover:text-white transition-colors">{title}</h4>
        <p className="mt-2 text-slate-700 group-hover:text-white/90 transition-colors">{text}</p>
        {href && (
          <div className="mt-4">
            <Link
              href={href}
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 font-semibold text-white ring-1 ring-transparent
                         group-hover:bg-white/10 group-hover:ring-white/30 transition"
            >
              View Case Study
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </article>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="border-b border-slate-200 py-4">
      <button onClick={() => setOpen((o) => !o)} className="w-full flex items-center justify-between text-left">
        <span className="font-medium text-slate-900">{q}</span>
        <ChevronDown className={`h-5 w-5 transition ${open ? "rotate-180" : ""}`} style={{ color: BRAND }} />
      </button>
      <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <p className="mt-3 text-slate-700">{a}</p>
        </div>
      </div>
    </div>
  );
}

/* --------------------------------- Page --------------------------------- */
export default function StaffAugmentationClient() {
     const { onSubmit, submitting, modalElement } = useContactSubmit(BRAND);
  
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* soft glow */}
        <div
          className="pointer-events-none absolute -right-32 -top-16 h-[420px] w-[420px] rounded-full opacity-70"
          style={{ background: `radial-gradient(closest-side, ${BRAND}22, transparent 70%)` }}
        />
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-20 grid md:grid-cols-12 gap-8 items-center">
          {/* text */}
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm">
              <Handshake className="h-4 w-4" style={{ color: BRAND }} />
              <span className="text-slate-700">B2B Resources • Embedded Teams • Co-Managed Delivery</span>
            </div>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              IT Staff Augmentation for{" "}
              <span style={{ color: BRAND }}>On-Demand Expertise</span>
            </h1>
            <p className="mt-5 text-lg text-slate-700 max-w-3xl">
              Scale with vetted engineers, designers, QA, and DevOps. We embed with your rituals—or
              co-manage delivery with SLAs—so you get velocity without overhead. Offshore, nearshore,
              or hybrid, always aligned to your roadmap.
            </p>
            <div className="mt-7">
              <Link
                href="/contact?topic=staff-augmentation"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-white transition"
                style={{ backgroundColor: BRAND, boxShadow: "0 8px 24px rgba(40,183,213,.25)" }}
              >
                Book Talent Today
                <Rocket className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* media */}
          <div className="md:col-span-5">
            <div className="relative rounded-3xl ring-1 ring-slate-200 overflow-hidden bg-[#0e1620]">
              <Image
                src="/images/services/staff.jpg"
                alt="Staff augmentation"
                width={900}
                height={650}
                className="object-cover opacity-90"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10 rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* What we offer */}
      <Section
        title="Augmentation Models that Fit Your Operating Rhythm"
        subtitle="Plug specialized experts into your team—or run a co-managed pod that ships outcomes."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Pill title="Embedded Experts" text="Engineers, designers, PM, QA, DevOps working in your tools and ceremonies." Icon={Users} />
          <Pill title="Managed Pods" text="Cross-functional squads led by our EM/TPM, synced to milestones & SLAs." Icon={BriefcaseBusiness} />
          <Pill title="Flexible Coverage" text="Part-time, full-time, timezone overlap, and quick scale-up/down." Icon={CalendarClock} />
          <Pill title="Governed & Secure" text="NDAs, access policies, SOC2-ready practices, least-privilege." Icon={Shield} />
          <Pill title="Delivery Discipline" text="Git flow, CI/CD, code reviews, and quality gates on every PR." Icon={GitBranch} />
          <Pill title="Velocity & Visibility" text="Dashboards, burndown, cycle time, and sprint demos." Icon={Gauge} />
        </div>
      </Section>

      {/* Roles / capabilities */}
      <Section
        title="Roles You Can Add Today"
        subtitle="Single experts or blended pods across the product lifecycle."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card title="Frontend Engineers" text="React/Next.js, TypeScript, performance & accessibility." />
          <Card title="Backend Engineers" text="Node.js, Python, services, APIs, and data pipelines." />
          <Card title="Mobile Engineers" text="React Native + Native modules, release trains, OTA." />
          <Card title="UI/UX Designers" text="Figma systems, motion, and design tokens." />
          <Card title="QA & Automation" text="E2E suites, device labs, and CI gates." image="/images/cases/3.jpg" />
          <Card title="DevOps & SRE" text="Cloud, IaC, monitoring, and cost controls." />
          <Card title="Data & Analytics" text="Warehouses, dashboards, product analytics." />
          <Card title="TPM / EM" text="Delivery management, reporting, and stakeholder comms." />
        </div>
      </Section>

      {/* Pillars */}
      <Section title="Why Teams Love Our Augmentation">
        <div className="grid md:grid-cols-3 gap-6">
          <Pill title="01 · Faster Ramp" text="Onboard playbooks, access checklists, day-1 commit." Icon={Rocket} />
          <Pill title="02 · Global Reach" text="Near/Offshore options for follow-the-sun productivity." Icon={Globe} />
          <Pill title="03 · Outcome Focus" text="We point talent at your KPIs—quality, speed, and impact." Icon={Building2} />
        </div>
      </Section>

      {/* Tooling & stack familiarity */}
      <Section title="Tooling We Work With">
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            [Laptop2, "Jira / Linear"],
            [GitBranch, "GitHub / GitLab"],
            [Bug, "Sentry / Crashlytics"],
            [Cloud, "AWS / Azure / GCP"],
            [Layers, "Storybook / Design Systems"],
            [MessageSquare, "Slack / Teams"],
          ].map(([I, label], i) => {
            const Icon = I as React.ComponentType<React.SVGProps<SVGSVGElement>>;
            return (
              <div
                key={i}
                className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-3 bg-white/80 text-slate-800
                           transition hover:-translate-y-0.5 hover:shadow-md
                           hover:bg-[color:var(--brand,#28B7D5)] hover:text-white"
                style={{ ["--brand" as any]: BRAND }}
              >
                <Icon className="h-4 w-4" />
                {label as string}
              </div>
            );
          })}
        </div>
      </Section>

      {/* Process */}
      <Section title="How Augmentation Engagements Work">
        <ol className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            ["Scope & Fit", "Role profiles, stack, ceremonies, and objectives.", NotebookPen],
            ["Curate & Interview", "Shortlist within days; technical & culture screens.", Users],
            ["Onboard & Secure", "Access policy, NDA, environments, rituals.", Shield],
            ["Deliver & Report", "Velocity metrics, demos, release notes.", GitBranch],
            ["Optimize & Scale", "Add skills, shift coverage, remove bottlenecks.", Wrench],
            ["Review & Renew", "Quarterly impact review and roadmap alignment.", CalendarClock],
          ].map(([t, d, I], i) => {
            const Icon = I as React.ComponentType<React.SVGProps<SVGSVGElement>>;
            return (
              <li key={t as string} className="rounded-2xl border border-slate-200 p-5 bg-white/80 transition hover:-translate-y-0.5 hover:shadow-lg">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-slate-500">0{i + 1}</span>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 ring-slate-200 text-[color:var(--brand,#28B7D5)]" style={{ ["--brand" as any]: BRAND }}>
                    <Icon className="h-4 w-4" />
                  </span>
                </div>
                <h4 className="mt-2 text-lg font-semibold">{t as string}</h4>
                <p className="mt-2 text-slate-700">{d as string}</p>
              </li>
            );
          })}
        </ol>
      </Section>

      {/* Stats */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-4 gap-4">
            <Stat k="100+" v="Available Experts" />
            <Stat k="2–10d" v="Typical Ramp Time" />
            <Stat k="95%" v="Engagement Renewal" />
            <Stat k="24/5" v="Time-Zone Coverage" />
          </div>
        </div>
      </section>

      {/* Case study teasers (tie to your existing ones) */}
      <Section title="Where Augmented Teams Delivered Results">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card title="WashMinute – Ops Pod" text="React Native + dispatch backend" image="/images/cases/1.jpg" href="/case-studies/washminute" />
          <Card title="Cardnd – Marketplace" text="Web, KYC, payments, and fraud checks" image="/images/cases/2.jpg" href="/case-studies/cardnd" />
          <Card title="LegalQ – AI Copilot" text="RAG with citations and guardrails" image="/images/cases/3.jpg" href="/case-studies/legalq" />
          <Card title="HireSense – Interview AI" text="Voice bot, scoring, ATS sync" image="/images/cases/4.jpg" href="/case-studies/hiresense" />
        </div>
      </Section>

      {/* FAQs */}
      <Section title="Staff Augmentation FAQs">
        <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 sm:p-6">
          {[
            ["How is this different from outsourcing?", "You keep product ownership and rituals. Our people work as part of your team or a co-managed pod focused on your outcomes."],
            ["Minimum commitment?", "We can start as low as part-time per role; most engagements are 3–6 months rolling."],
            ["Time zones & overlap?", "We offer near/offsore options with guaranteed daily overlap windows."],
            ["Security & IP?", "NDAs, access controls, private repos. You own the IP—contractually explicit."],
            ["Can we scale up/down?", "Yes—add roles on demand, taper down as goals are met."],
            ["How do you assure quality?", "Technical screens, trial tasks, code reviews, and delivery checkpoints."],
          ].map(([q, a]) => (
            <FAQ key={q} q={q} a={a} />
          ))}
        </div>
      </Section>

      {/* Final CTA + compact form */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center rounded-3xl bg-[#0e1620] p-6 sm:p-8 lg:p-12 ring-1 ring-black/10">
            <div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-white">Spin Up Your Dream Team</h3>
              <p className="mt-3 text-white/85 max-w-prose">
                Tell us the roles, stack, and goals. We’ll curate a shortlist fast and align on delivery cadence.
              </p>
              <div className="mt-6">
                <div className="flex flex-wrap gap-3">
                  <Chip>Frontend</Chip>
                  <Chip>Backend</Chip>
                  <Chip>Mobile</Chip>
                  <Chip>QA</Chip>
                  <Chip>DevOps</Chip>
                  <Chip>Design</Chip>
                </div>
              </div>
            </div>

             <form
  className="rounded-2xl bg-white/95 backdrop-blur p-5 sm:p-6 ring-1 ring-slate-200 grid gap-3"
  onSubmit={onSubmit}
>
  <input
    name="name"
    placeholder="Full Name"
    required
    className="h-11 rounded-lg border border-slate-200 px-3 outline-none focus:border-[color:var(--brand,#28B7D5)]"
    style={{ ["--brand" as any]: BRAND }}
  />
  <input
    name="email"
    type="email"
    placeholder="Email"
    required
    className="h-11 rounded-lg border border-slate-200 px-3 outline-none focus:border-[color:var(--brand,#28B7D5)]"
    style={{ ["--brand" as any]: BRAND }}
  />
  <input
    name="phone"
    type="tel"
    placeholder="Number (optional)"
    className="h-11 rounded-lg border border-slate-200 px-3 outline-none focus:border-[color:var(--brand,#28B7D5)]"
    style={{ ["--brand" as any]: BRAND }}
  />
  <textarea
    name="message"
    rows={3}
    placeholder="Describe Your Project Need"
    className="rounded-lg border border-slate-200 px-3 py-2 outline-none focus:border-[color:var(--brand,#28B7D5)]"
    style={{ ["--brand" as any]: BRAND }}
  />

  <p className="text-xs text-slate-500">
    By submitting this form, you agree to our{" "}
    <Link href="/privacy" className="underline font-medium" style={{ color: BRAND }}>
      Privacy Policy
    </Link>.
  </p>

  <button
    type="submit"
    disabled={submitting}
    aria-busy={submitting}
    className="mt-1.5 h-11 rounded-full font-semibold text-white transition hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
    style={{ backgroundColor: BRAND, boxShadow: "0 8px 22px rgba(40,183,213,.22)" }}
  >
    {submitting ? "Sending…" : "Get in Touch Now"}
  </button>
</form>
          </div>
   {modalElement}

        </div>
      </section>
    </main>
  );
}
