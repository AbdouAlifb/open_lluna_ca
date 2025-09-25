"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  LayoutDashboard,
  MonitorSmartphone,
  Code2,
  Server,
  Blocks,
  Cloud,
  Shield,
  Wrench,
  Rocket,
  Zap,
  Cpu,
  TimerReset,
  LineChart,
  ArrowRight,
} from "lucide-react";

/** Brand color */
const BRAND = "#28B7D5";

/* ------------------------- tiny scroll-reveal helper ------------------------- */
function useReveal<T extends HTMLElement>(opts: IntersectionObserverInit = { rootMargin: "0px 0px -10% 0px", threshold: 0.2 }) {
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
        <div
          className={`transition-all duration-700 ease-out ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">{title}</h2>
          {subtitle && <p className="mt-3 text-lg text-slate-700 max-w-3xl">{subtitle}</p>}
          <div className="mt-8">{children}</div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- UI bits --------------------------------- */
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
  Icon = Blocks,
}: {
  title: string;
  text: string;
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}) {
  return (
    <div
      className="
        group rounded-2xl border border-slate-200 p-6 bg-white/80
        transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg
        hover:bg-[color:var(--brand,#28B7D5)] hover:border-transparent
      "
      style={{ ["--brand" as any]: BRAND }}
    >
      <div className="flex items-center gap-3">
        <span
          className="
            inline-flex h-10 w-10 items-center justify-center rounded-xl ring-1
            ring-slate-200 bg-white text-[color:var(--brand,#28B7D5)]
            group-hover:bg-white/10 group-hover:text-white group-hover:ring-white/30 transition-colors
          "
        >
          <Icon className="h-5 w-5" />
        </span>
        <h4 className="text-xl font-semibold text-slate-900 group-hover:text-white transition-colors">
          {title}
        </h4>
      </div>
      <p className="mt-2 text-slate-700 group-hover:text-white/90 transition-colors">{text}</p>
    </div>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div
      className="
        rounded-2xl bg-white ring-1 ring-slate-200 p-5 text-center
        transition hover:shadow-md hover:-translate-y-0.5
      "
    >
      <div className="text-3xl font-extrabold" style={{ color: BRAND }}>
        {k}
      </div>
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
    <article
      className="
        group overflow-hidden rounded-2xl ring-1 ring-slate-200 bg-white
        transition-all hover:-translate-y-0.5 hover:shadow-xl
      "
    >
      {image && (
        <div className="relative aspect-[16/10]">
          <Image src={image} alt={title} fill className="object-cover" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      )}
      <div
        className="
          p-6 transition-colors
          group-hover:bg-[color:var(--brand,#28B7D5)]
        "
        style={{ ["--brand" as any]: BRAND }}
      >
        <h4 className="text-xl font-semibold text-slate-900 group-hover:text-white transition-colors">
          {title}
        </h4>
        <p className="mt-2 text-slate-700 group-hover:text-white/90 transition-colors">{text}</p>
        {href && (
          <div className="mt-4">
            <Link
              href={href}
              className="
                inline-flex items-center gap-2 rounded-full px-4 py-2 font-semibold text-white
                ring-1 ring-transparent
                group-hover:bg-white/10 group-hover:ring-white/30 transition
              "
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
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="mt-3 text-slate-700">{a}</p>
        </div>
      </div>
    </div>
  );
}

/* --------------------------------- Page --------------------------------- */

export default function WebDevelopmentPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* soft parallax glow */}
        <div className="pointer-events-none absolute -right-32 -top-16 h-[420px] w-[420px] rounded-full opacity-70"
             style={{ background: `radial-gradient(closest-side, ${BRAND}22, transparent 70%)` }} />
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-20 grid md:grid-cols-12 gap-8 items-center">
          {/* text */}
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm">
              <Zap className="h-4 w-4" style={{ color: BRAND }} />
              <span className="text-slate-700">Performance • Security • Scale</span>
            </div>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Web Development for{" "}
              <span style={{ color: BRAND }}>Multi-Channel Visibility</span>
            </h1>
            <p className="mt-5 text-lg text-slate-700 max-w-3xl">
              Build scalable, engaging websites and web apps with intuitive UI/UX, fast performance, and secure architectures.
              We add threat-resistance, tested patterns, continuous maintenance, and custom CMS to keep you efficient and future-ready.
            </p>
            <div className="mt-7">
              <Link
                href="/contact?topic=web"
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
              <Image src="/images/services/web.jpg" alt="Web development" width={900} height={650} className="object-cover opacity-90" />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10 rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Services list */}
      <Section
        title="Web Development Services for Novel, Best-Functioning Websites"
        subtitle="Component-focused development to hit every quality & functionality metric."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Pill title="UI/UX Web Design" text="Figma/Adobe CC designs for stickiness, accessibility, and on-brand consistency." Icon={LayoutDashboard} />
          <Pill title="Frontend Development" text="Lightning-fast, SEO-friendly UIs—monoliths or micro-frontends as needed." Icon={MonitorSmartphone} />
          <Pill title="Backend Development" text="Secure Node.js/Python backends, robust APIs, and high-throughput processing." Icon={Server} />
          <Pill title="Full-Stack Development" text="End-to-end delivery: auth to analytics, cohesive experiences that scale." Icon={Code2} />
          <Pill title="No/Low-Code" text="Accelerate with Appian / OutSystems—rapid iteration without compromise." Icon={Blocks} />
          <Pill title="Cloud Development" text="AWS, Azure, GCP with CI/CD & observability for performance & cost efficiency." Icon={Cloud} />
          <Pill title="Web Testing" text="Shared staging, exhaustive QA, and zero-downtime rollouts." Icon={Shield} />
          <Pill title="Maintenance & Updates" text="Support, patches, upgrades, and iterative enhancements." Icon={Wrench} />
        </div>
      </Section>

      {/* Custom solutions */}
      <Section
        title="Custom Web Development Services to Broaden Business Prospects"
        subtitle="Experience agile delivery with a team specialized in enterprise-grade web."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card title="Websites" text="Dynamic, responsive websites with scalable architectures." />
          <Card title="E-Commerce" text="Mobile-first storefronts with secure payments & SEO foundations." />
          <Card title="Web Applications" text="PWAs & rich apps delivering app-like experiences across devices." />
          <Card title="Content Management" text="Custom/headless CMS for fast time-to-market." />
        </div>
        <div className="mt-6">
          <Link
            href="/contact?topic=web"
            className="inline-flex items-center gap-2 rounded-full px-5 py-3 font-semibold text-white"
            style={{ backgroundColor: BRAND }}
          >
            Discuss Project Scope
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* Purpose-built pillars */}
      <Section title="Purpose-Built Web Development Solutions">
        <div className="grid md:grid-cols-3 gap-6">
          <Pill title="01 · Optimized Performance" text="Core Web Vitals focus and tuned delivery pipelines." Icon={Zap} />
          <Pill title="02 · Robust Security" text="Encryption, monitoring, and secure data handling." Icon={Shield} />
          <Pill title="03 · Scalable Architecture" text="Flexible designs that support growth and change." Icon={Cpu} />
        </div>
      </Section>

      {/* Tech stack tabs */}
      <TechStack />

      {/* Process */}
      <Section title="Our Simple, Frictionless Web Development Workflow">
        <ol className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            ["Kick-Off with Project Idea", "Evaluate scope & objectives with expert consultation.", Rocket],
            ["Decide Tech Stack", "Select useful-only resources to move fast and right.", Blocks],
            ["Design", "Appealing, intuitive UI/UX crafted to convert.", LayoutDashboard],
            ["Develop", "Functionality + backend features with pro devs.", Code2],
            ["Test", "Test, debug, and repeat until launch-ready.", Shield],
            ["Launch & Maintain", "Go live, iterate, and evolve with users.", TimerReset],
          ].map(([t, d, I], i) => {
            const Icon = I as React.ComponentType<React.SVGProps<SVGSVGElement>>;
            return (
              <li
                key={t as string}
                className="
                  rounded-2xl border border-slate-200 p-5 bg-white/80
                  transition hover:-translate-y-0.5 hover:shadow-lg
                "
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-slate-500">0{i + 1}</span>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 ring-slate-200 text-[color:var(--brand,#28B7D5)]"
                        style={{ ["--brand" as any]: BRAND }}>
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

      {/* Stats strip */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-4 gap-4">
            <Stat k="60+" v="Web Experts" />
            <Stat k="200+" v="Successful Projects" />
            <Stat k="5.0" v="GoodFirms Rating" />
            <Stat k="4.8" v="Clutch Rating" />
          </div>
        </div>
      </section>

      {/* Portfolio teasers */}
      <Section title="Our Web Development Projects – Ground-Up Launches to Makeovers">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card title="Student Productivity Platform" text="1.5× increase in revenue" href="/case-studies/project-impact" image="/images/cases/1.jpg" />
          <Card title="Watch & Jewelry Marketplace" text="110% increase in leads" href="/case-studies/marketplace" image="/images/cases/2.jpg" />
          <Card title="Complete Dealership Solution" text="150% increase in conversions" href="/case-studies/dealership" image="/images/cases/3.jpg" />
          <Card title="Talent Networking Platform" text="2× increase in traffic" href="/case-studies/talent" image="/images/cases/4.jpg" />
        </div>
      </Section>

      {/* Industries */}
      <Section title="Our Domain Diversity">
        <div className="flex flex-wrap gap-2">
          {[
            "eCommerce","Fintech","Healthcare","Education","Social Networking","Hospitality",
            "Entertainment","Government","Real Estate","Business","Logistics","Tech & IT",
            "Non-Profit","Automotive","Travel & Tourism",
          ].map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>
      </Section>

      {/* Benefits */}
      <Section title="Your Gateway to Multi-Dimensional Growth">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Pill title="Bigger Brand & Credibility" text="Better visibility & engagement to fuel expansion." Icon={LineChart} />
          <Pill title="Global Reach & Accessibility" text="More organic traffic, more leads, more conversions." Icon={Rocket} />
          <Pill title="Scales With You" text="Friendly platforms for startups and scale-ups." Icon={Blocks} />
          <Pill title="Sell Easily" text="API-integrated, mobile-optimized e-commerce sites." Icon={MonitorSmartphone} />
          <Pill title="User Insights & Analytics" text="Know perceptions, meet expectations, close misses." Icon={LineChart} />
          <Pill title="Showcase Your Triumphs" text="Demonstrate wins through an impressive portfolio." Icon={LayoutDashboard} />
        </div>
      </Section>

      {/* Differentiators */}
      <Section title="TekRevol’s Web Development Expertise">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Pill title="Specializes Modern Technologies" text="Accelerate full-stack dev using modern low-code & cloud." Icon={Cpu} />
          <Pill title="Result-Driven, Adaptive Workflow" text="Keep it simple; scale resources only when needed." Icon={TimerReset} />
          <Pill title="Expertise Across Industries" text="15+ domains shaped, launched, and grown." Icon={LayoutDashboard} />
          <Pill title="Shorten Time-to-Market" text="Fast-loading, friendly, well-functioning sites—delivered." Icon={Zap} />
        </div>
      </Section>

      {/* FAQs */}
      <Section title="Web Development FAQs">
        <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 sm:p-6">
          {[
            ["What does a web development company do?",
             "We plan, design, build, test, deploy, and maintain websites & web apps—covering UI/UX, frontend, backend, cloud, and integrations."],
            ["Do you sign NDAs?",
             "Yes. We routinely execute NDAs and MSAs to protect your IP and confidential information."],
            ["What is your process?",
             "Lean, agile delivery: discovery → design → build → test → launch → maintain, with continuous visibility."],
            ["What technologies do you use?",
             "Modern stacks across React, Next.js, Node.js, Python, Postgres, MongoDB, Redis, and AWS/Azure/GCP."],
            ["How much does it cost & how long?",
             "Depends on scope. After a short discovery, we’ll share a proposal with timelines and pricing options."],
            ["Do you provide ongoing maintenance?",
             "Yes—updates, patches, performance checks, new features, and SLAs if needed."],
          ].map(([q, a]) => (
            <FAQ key={q as string} q={q as string} a={a as string} />
          ))}
        </div>
      </Section>

      {/* Final CTA + compact form */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center rounded-3xl bg-[#0e1620] p-6 sm:p-8 lg:p-12 ring-1 ring-black/10">
            <div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-white">Let’s Connect With Our Experts</h3>
              <p className="mt-3 text-white/85 max-w-prose">
                Get valuable consultation to scope your website project. We’ll help with timelines,
                budgets, and the fastest path to value.
              </p>
              <div className="mt-6">
                <div className="flex flex-wrap gap-3">
                  <Chip>GoodFirms 5.0</Chip>
                  <Chip>RightFirms 4.8</Chip>
                  <Chip>Clutch 4.8</Chip>
                </div>
              </div>
            </div>

            <form
              className="rounded-2xl bg-white/95 backdrop-blur p-5 sm:p-6 ring-1 ring-slate-200 grid gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
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
  const tabs = ["Frontend", "Backend", "Database", "Cloud"] as const;
  const [active, setActive] = React.useState<(typeof tabs)[number]>("Frontend");

  const CONTENT: Record<(typeof tabs)[number], string[]> = {
    Frontend: ["HTML", "CSS", "JavaScript", "jQuery", "React.js", "Angular", "Next.js", "Tailwind CSS"],
    Backend: ["Node.js", "Express", "NestJS", "Python", "Django", "FastAPI", "GraphQL", "REST"],
    Database: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQLite", "DynamoDB"],
    Cloud: ["AWS", "Azure", "Google Cloud", "Vercel", "Docker", "Kubernetes", "Terraform"],
  };

  return (
    <Section title="Tech Stack That Powers Our Web Development Services">
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
        {CONTENT[active].map((x) => (
          <div
            key={x}
            className="
              rounded-xl border border-slate-200 px-4 py-3 bg-white/80 text-slate-800
              transition hover:-translate-y-0.5 hover:shadow-md
              hover:bg-[color:var(--brand,#28B7D5)] hover:text-white
            "
            style={{ ["--brand" as any]: BRAND }}
          >
            {x}
          </div>
        ))}
      </div>
    </Section>
  );
}
