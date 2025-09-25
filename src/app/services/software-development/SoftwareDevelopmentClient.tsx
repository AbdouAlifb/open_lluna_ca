"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  Server,
  Cpu,
  Database,
  Boxes,
  Cable,
  Cloud,
  Shield,
  Bug,
  Rocket,
  GitBranch,
  Gauge,
  FileCode,
  Workflow,
  Layers,
  Settings2,
  BarChart,
  Puzzle,
  Repeat,
  ArrowRight,
} from "lucide-react";

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
  Icon = Settings2,
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
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      )}
      <div
        className="p-6 transition-colors group-hover:bg-[color:var(--brand,#28B7D5)]"
        style={{ ["--brand" as any]: BRAND }}
      >
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
export default function SoftwareDevelopmentClient() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute -right-32 -top-16 h-[420px] w-[420px] rounded-full opacity-70"
          style={{ background: `radial-gradient(closest-side, ${BRAND}22, transparent 70%)` }}
        />
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-20 grid md:grid-cols-12 gap-8 items-center">
          {/* text */}
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm">
              <Workflow className="h-4 w-4" style={{ color: BRAND }} />
              <span className="text-slate-700">APIs • Integrations • DevOps • Observability</span>
            </div>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Software Development for{" "}
              <span style={{ color: BRAND }}>Scalable Systems</span>
            </h1>
            <p className="mt-5 text-lg text-slate-700 max-w-3xl">
              We design and build reliable, measurable software—secure services, event-driven
              backends, integrations, and data platforms—deployed with CI/CD and strong observability,
              so your product can scale without surprises.
            </p>
            <div className="mt-7">
              <Link
                href="/contact?topic=software"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-white transition"
                style={{ backgroundColor: BRAND, boxShadow: "0 8px 24px rgba(40,183,213,.25)" }}
              >
                Start with a Free Consultation
                <Rocket className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* media */}
          <div className="md:col-span-5">
            <div className="relative rounded-3xl ring-1 ring-slate-200 overflow-hidden bg-[#0e1620]">
              <Image
                src="/images/services/software.jpg"
                alt="Software development"
                width={900}
                height={650}
                className="object-cover opacity-90"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10 rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Services list */}
      <Section
        title="Enterprise-Grade Software Development Services"
        subtitle="Componentized architecture, clean contracts, and operational excellence."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Pill title="Architecture & Design" text="Domain-driven design, event-driven systems, and dependable data models." Icon={Layers} />
          <Pill title="Backend Services" text="Node.js / Python / Go services with clean APIs, caching, and queues." Icon={Server} />
          <Pill title="APIs & Integrations" text="REST/GraphQL, webhooks, OAuth/SSO, SAP/HubSpot/Stripe integrations." Icon={Cable} />
          <Pill title="Data & Analytics" text="Postgres/Redis, pipelines, warehouses, and BI dashboards." Icon={BarChart} />
          <Pill title="DevOps & Cloud" text="AWS/Azure/GCP, Terraform, Kubernetes, autoscaling and cost controls." Icon={Cloud} />
          <Pill title="Quality & Security" text="Automated tests, SAST/DAST, secrets hygiene, observability by default." Icon={Shield} />
        </div>
      </Section>

      {/* Solutions */}
      <Section
        title="Custom Software That Moves KPI Needles"
        subtitle="From internal platforms to public SaaS—built to last."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card title="B2B/B2C SaaS" text="Multi-tenant, metering/billing, role-based access, audit trails." />
          <Card title="Internal Tools" text="Ops consoles, approval workflows, and reporting suites." />
          <Card title="Integration Hubs" text="ETL/ELT, 3rd-party adapters, and sync engines." />
          <Card title="Event Systems" text="Streaming, CQRS, and reliable background processing." />
        </div>
        <div className="mt-6">
          <Link
            href="/contact?topic=software"
            className="inline-flex items-center gap-2 rounded-full px-5 py-3 font-semibold text-white"
            style={{ backgroundColor: BRAND }}
          >
            Discuss Project Scope
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* Pillars */}
      <Section title="Purpose-Built Engineering">
        <div className="grid md:grid-cols-3 gap-6">
          <Pill title="01 · Observable by Default" text="Tracing, metrics, logs, and SLOs from day one." Icon={Gauge} />
          <Pill title="02 · Secure by Design" text="Least-privilege, encrypted transport/storage, secret rotation." Icon={Shield} />
          <Pill title="03 · Resilient & Scalable" text="Circuit-breakers, retries, idempotency, and horizontal scale." Icon={Repeat} />
        </div>
      </Section>

      {/* Tech stack tabs */}
      <TechStack />

      {/* Process */}
      <Section title="Our Simple, Frictionless Software Delivery Workflow">
        <ol className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            ["Discovery & Shaping", "Goals, constraints, and success metrics.", Workflow],
            ["Architecture & Plan", "Bounded contexts, contracts, and SLAs.", Layers],
            ["Build & Integrate", "APIs, workers, and adapters wired cleanly.", FileCode],
            ["Test & Harden", "Unit, integration, load, security checks.", Bug],
            ["Deploy & Observe", "CI/CD, canaries, dashboards, alerts.", GitBranch],
            ["Iterate & Improve", "Data-driven roadmap and cost tuning.", Settings2],
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
            <Stat k="80+" v="Backend & Platform Engineers" />
            <Stat k="300+" v="Service Deployments" />
            <Stat k="99.95%" v="Uptime Targets" />
            <Stat k="TB+" v="Data Pipelines / mo" />
          </div>
        </div>
      </section>

      {/* Portfolio teasers */}
      <Section title="Recent Software Projects">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card title="Ops Automation Platform" text="Workflow engine + integrations" href="/case-studies/project-impact" image="/images/cases/1.jpg" />
          <Card title="Marketplace Core" text="Payments, KYC, disputes" href="/case-studies/marketplace" image="/images/cases/2.jpg" />
          <Card title="Dealer Suite APIs" text="Inventory, pricing, analytics" href="/case-studies/dealership" image="/images/cases/3.jpg" />
          <Card title="Talent Network Backend" text="GraphQL, search, feeds" href="/case-studies/talent" image="/images/cases/4.jpg" />
        </div>
      </Section>

      {/* Industries */}
      <Section title="Domain Coverage">
        <div className="flex flex-wrap gap-2">
          {[
            "Fintech","eCommerce","Healthcare","Logistics","Government","EdTech",
            "Real Estate","Automotive","Travel","SaaS","Media","IoT",
          ].map((t) => <Chip key={t}>{t}</Chip>)}
        </div>
      </Section>

      {/* Benefits */}
      <Section title="Why Build with Open Lluna">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Pill title="Lower Ops Cost" text="Right-sized infra, caching, and queues keep spend in check." Icon={Cloud} />
          <Pill title="Fewer Incidents" text="Clear runbooks, alert hygiene, and SLOs that matter." Icon={Bug} />
          <Pill title="Faster Roadmaps" text="Monorepos, modules, and CI speed up safe delivery." Icon={GitBranch} />
          <Pill title="Data to Decisions" text="Telemetry and dashboards inform what to build next." Icon={BarChart} />
          <Pill title="Security First" text="Threat modeling, secrets rotation, and hardening." Icon={Shield} />
          <Pill title="Scale with Confidence" text="Load tests, quotas, and idempotency from day one." Icon={Gauge} />
        </div>
      </Section>

      {/* Differentiators */}
      <Section title="What Sets Our Software Team Apart">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Pill title="DDD & Clean Contracts" text="Clear boundaries and stable APIs." Icon={Layers} />
          <Pill title="Integration Craft" text="Third-party systems without the spaghetti." Icon={Puzzle} />
          <Pill title="Operational Maturity" text="Real-time insight and control planes." Icon={Settings2} />
          <Pill title="Security Mindset" text="Shift-left culture and review discipline." Icon={Shield} />
        </div>
      </Section>

      {/* FAQs */}
      <Section title="Software Development FAQs">
        <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 sm:p-6">
          {[
            ["Do you handle greenfield and re-platforms?", "Yes—new builds and modernization with migration plans."],
            ["Which stacks do you prefer?", "Node/TypeScript, Python, Go; Postgres/Redis; Kafka/SQS; on AWS/Azure/GCP."],
            ["How do you ensure quality?", "Automated tests, code review, security checks, and CI gates."],
            ["What’s your deployment strategy?", "CI/CD with canaries/blue-green, IaC, and strong observability."],
            ["How do you estimate?", "Short discovery, then options with scope, timeline, and pricing."],
            ["Do you offer maintenance?", "Yes—SLAs, monitoring, patches, and feature delivery."],
          ].map(([q, a]) => <FAQ key={q} q={q} a={a as string} />)}
        </div>
      </Section>

      {/* Final CTA + compact form */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center rounded-3xl bg-[#0e1620] p-6 sm:p-8 lg:p-12 ring-1 ring-black/10">
            <div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-white">Ready to Ship Reliable Software?</h3>
              <p className="mt-3 text-white/85 max-w-prose">
                Align on goals and constraints—then build systems that are observable, secure, and scalable.
              </p>
              <div className="mt-6">
                <div className="flex flex-wrap gap-3">
                  <Chip>APIs</Chip>
                  <Chip>Integrations</Chip>
                  <Chip>DevOps</Chip>
                </div>
              </div>
            </div>

            <form className="rounded-2xl bg-white/95 backdrop-blur p-5 sm:p-6 ring-1 ring-slate-200 grid gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                placeholder="Full Name"
                className="h-11 rounded-lg border border-slate-200 px-3 outline-none focus:border-[color:var(--brand,#28B7D5)]"
                style={{ ["--brand" as any]: BRAND }}
              />
              <input
                type="email"
                placeholder="Email"
                className="h-11 rounded-lg border border-slate-200 px-3 outline-none focus:border-[color:var(--brand,#28B7D5)]"
                style={{ ["--brand" as any]: BRAND }}
              />
              <input
                type="tel"
                placeholder="Number (optional)"
                className="h-11 rounded-lg border border-slate-200 px-3 outline-none focus:border-[color:var(--brand,#28B7D5)]"
                style={{ ["--brand" as any]: BRAND }}
              />
              <textarea
                rows={3}
                placeholder="Describe Your Platform (users, features, integrations)"
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
                className="mt-1.5 h-11 rounded-full font-semibold text-white transition hover:shadow-lg"
                style={{ backgroundColor: BRAND, boxShadow: "0 8px 22px rgba(40,183,213,.22)" }}
              >
                Get in Touch Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ------------------------------- Tech Stack ------------------------------- */
function TechStack() {
  const tabs = ["Backend", "APIs & Integration", "Data", "DevOps & Cloud"] as const;
  const [active, setActive] = React.useState<(typeof tabs)[number]>("Backend");

  const CONTENT: Record<(typeof tabs)[number], { label: string; Icon: React.ComponentType<React.SVGProps<SVGSVGElement>> }[]> = {
    Backend: [
      { label: "Node.js / TypeScript", Icon: Cpu },
      { label: "Python / FastAPI", Icon: Cpu },
      { label: "Go Services", Icon: Cpu },
      { label: "Workers & Queues", Icon: Server },
    ],
    "APIs & Integration": [
      { label: "REST / GraphQL", Icon: Cable },
      { label: "OAuth / SSO", Icon: Shield },
      { label: "Webhooks", Icon: Cable },
      { label: "3P Adapters", Icon: Puzzle },
    ],
    Data: [
      { label: "PostgreSQL / MySQL", Icon: Database },
      { label: "Redis / Caching", Icon: Database },
      { label: "Warehouses / BI", Icon: BarChart },
      { label: "Streaming (Kafka/SQS)", Icon: Boxes },
    ],
    "DevOps & Cloud": [
      { label: "AWS / Azure / GCP", Icon: Cloud },
      { label: "Kubernetes", Icon: Cloud },
      { label: "Terraform / IaC", Icon: Settings2 },
      { label: "CI/CD", Icon: GitBranch },
    ],
  };

  return (
    <Section title="Tech Stack That Powers Our Software Development">
      <div className="flex gap-2 flex-wrap">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={`px-4 py-2 rounded-full text-sm font-medium ring-1 transition ${
              active === t ? "text-white" : "text-slate-700 bg-white ring-slate-200 hover:bg-slate-50"
            }`}
            style={active === t ? { backgroundColor: BRAND } : {}}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="mt-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {CONTENT[active].map(({ label, Icon }) => (
          <div
            key={label}
            className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-3 bg-white/80 text-slate-800
                       transition hover:-translate-y-0.5 hover:shadow-md
                       hover:bg-[color:var(--brand,#28B7D5)] hover:text-white"
            style={{ ["--brand" as any]: BRAND }}
          >
            <Icon className="h-4 w-4" />
            {label}
          </div>
        ))}
      </div>
    </Section>
  );
}
