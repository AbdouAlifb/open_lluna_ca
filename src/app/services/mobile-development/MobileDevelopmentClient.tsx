"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  Smartphone,
  AppWindow,
  Cpu,
  Cloud,
  Shield,
  Wrench,
  Rocket,
  Zap,
  GitBranch,
  Gauge,
  BellRing,
  PackageOpen,
  Repeat,
  Code2,
  Apple,
  Puzzle,
  Database,
  ArrowRight,
} from "lucide-react";

/** Brand color */
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
  Icon = Smartphone,
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
export default function MobileDevelopmentClient() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* soft parallax glow */}
        <div
          className="pointer-events-none absolute -right-32 -top-16 h-[420px] w-[420px] rounded-full opacity-70"
          style={{ background: `radial-gradient(closest-side, ${BRAND}22, transparent 70%)` }}
        />
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-20 grid md:grid-cols-12 gap-8 items-center">
          {/* text */}
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm">
              <Zap className="h-4 w-4" style={{ color: BRAND }} />
              <span className="text-slate-700">Native Feel • OTA Updates • Observability</span>
            </div>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Mobile Development for{" "}
              <span style={{ color: BRAND }}>iOS & Android</span>
            </h1>
            <p className="mt-5 text-lg text-slate-700 max-w-3xl">
              We build native-quality apps with React Native/Expo and platform-native modules,
              wire them to secure backends, and ship with CI/CD, OTA updates, analytics, and crash reporting—so
              you can move fast without breaking experience.
            </p>
            <div className="mt-7">
              <Link
                href="/contact?topic=mobile"
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
                src="/images/services/mobile.jpg"
                alt="Mobile development"
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
        title="Mobile Development Services for High-Performance Apps"
        subtitle="Component-focused delivery with native capabilities, performance, and reliability."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Pill title="Product & UX Design" text="Figma flows, motion guidelines, and platform patterns that convert." Icon={AppWindow} />
          <Pill title="Cross-Platform Apps" text="React Native/Expo for iOS & Android with native modules when needed." Icon={Smartphone} />
          <Pill title="Native Modules" text="Swift/Kotlin bridges for camera, Bluetooth, sensors, biometrics, more." Icon={Puzzle} />
          <Pill title="Backend & APIs" text="Node/Python services, GraphQL/REST, auth, rate limits, and caching." Icon={Cpu} />
          <Pill title="CI/CD & QA" text="Automated builds, TestFlight/Internal App Sharing, E2E tests, device labs." Icon={GitBranch} />
          <Pill title="Observability" text="Crashlytics/Sentry, analytics, feature flags, and in-app alerts." Icon={BellRing} />
          <Pill title="App Store Delivery" text="Store assets, privacy manifest, review readiness & phased rollout." Icon={PackageOpen} />
          <Pill title="Maintenance & OTA" text="Over-the-air updates, hotfixes, and roadmap iterations." Icon={Repeat} />
          <Pill title="Security & Compliance" text="Secure storage, certificate pinning, PII minimization, SOC2-ready." Icon={Shield} />
        </div>
      </Section>

      {/* Custom solutions */}
      <Section
        title="Mobile Solutions That Broaden Business Prospects"
        subtitle="From MVPs to enterprise-grade apps with growth-ready architectures."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card title="Consumer Apps" text="Delightful UX, offline modes, push, and growth loops baked-in." />
          <Card title="Field & Ops Apps" text="Route-aware, background sync, ruggedized workflows for crews." />
          <Card title="E-Commerce Apps" text="Mobile-first catalog, 1-tap payments, wallets, subscriptions." />
          <Card title="Internal Portals" text="Secure employee apps with SSO, role-based access, and telemetry." />
        </div>
        <div className="mt-6">
          <Link
            href="/contact?topic=mobile"
            className="inline-flex items-center gap-2 rounded-full px-5 py-3 font-semibold text-white"
            style={{ backgroundColor: BRAND }}
          >
            Discuss Project Scope
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* Purpose-built pillars */}
      <Section title="Purpose-Built Mobile Engineering">
        <div className="grid md:grid-cols-3 gap-6">
          <Pill title="01 · Native Quality" text="60fps interactions, platform idioms, and accessibility built-in." Icon={Gauge} />
          <Pill title="02 · Robust Security" text="Encrypted storage, secure transport, and runtime checks." Icon={Shield} />
          <Pill title="03 · Scalable Delivery" text="Monorepos, modularization, and automated release trains." Icon={GitBranch} />
        </div>
      </Section>

      {/* Tech stack tabs */}
      <TechStack />

      {/* Process */}
      <Section title="Our Simple, Frictionless Mobile Development Workflow">
        <ol className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            ["Kick-Off & Discovery", "Goals, KPIs, and risk map for the roadmap.", Rocket],
            ["Architecture & Stack", "React Native/Native mix, state, navigation, data.", Cpu],
            ["Design System", "Tokens, components, motion & accessibility patterns.", AppWindow],
            ["Develop", "Features, native modules, and offline-first data flows.", Code2],
            ["Test & Harden", "Unit/integration/E2E + device labs & perf checks.", Shield],
            ["Ship & Iterate", "App Store/Play rollout, OTA updates, metrics-driven.", Repeat],
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
                  <span
                    className="inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 ring-slate-200 text-[color:var(--brand,#28B7D5)]"
                    style={{ ["--brand" as any]: BRAND }}
                  >
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
            <Stat k="40+" v="Mobile Engineers" />
            <Stat k="150+" v="Shipped Releases / yr" />
            <Stat k="5.0" v="App Store Avg Rating" />
            <Stat k="10M+" v="Monthly Sessions" />
          </div>
        </div>
      </section>

      {/* Portfolio teasers */}
      <Section title="Recent Mobile Projects">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card title="On-Demand Services App" text="Route-aware dispatch, live status, in-app wallet" href="/case-studies/washminute" image="/images/cases/1.jpg" />
          <Card title="P2P Car Rentals" text="Host verification, KYC, insurance flows" href="/case-studies/cardnd" image="/images/cases/2.jpg" />
          <Card title="Legal Assistant" text="LLM chatbot, citations, safe-guardrails" href="/case-studies/legalq" image="/images/cases/3.jpg" />
          <Card title="AI Interviewer" text="Adaptive Q&A, ATS sync, scoring" href="/case-studies/hiresense" image="/images/cases/4.jpg" />
        </div>
      </Section>

      {/* Industries */}
      <Section title="Domain Coverage">
        <div className="flex flex-wrap gap-2">
          {[
            "On-Demand","Fintech","Healthcare","Education","Logistics","eCommerce",
            "Travel","Real Estate","Social","Entertainment","Government","Automotive",
          ].map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>
      </Section>

      {/* Benefits */}
      <Section title="Why Mobile with Us">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Pill title="Faster Time-to-Value" text="Shared code, OTA updates, and rapid iteration." Icon={Zap} />
          <Pill title="Native Hooks" text="Camera, sensors, biometrics, low-latency media." Icon={Smartphone} />
          <Pill title="Data & Insights" text="Analytics, funnels, and cohort tracking to grow." Icon={Database} />
          <Pill title="Store Confidence" text="Privacy manifests, review readiness, staged rollouts." Icon={PackageOpen} />
          <Pill title="Offline-First" text="Resilient sync, conflict resolution, background tasks." Icon={Cloud} />
          <Pill title="Secure by Default" text="Secrets handling, secure storage, transport pinning." Icon={Shield} />
        </div>
      </Section>

      {/* Differentiators */}
      <Section title="What Sets Our Mobile Team Apart">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Pill title="React Native + Native" text="The best of both—velocity and platform power." Icon={Smartphone} />
          <Pill title="Release Discipline" text="Automated builds, smoke checks, and rollout playbooks." Icon={GitBranch} />
          <Pill title="Perf Obsessed" text="Cold starts, frame time, memory profiles, network cost." Icon={Gauge} />
          <Pill title="Support SLAs" text="Uptime, incident response, and roadmap cadence." Icon={Wrench} />
        </div>
      </Section>

      {/* FAQs */}
      <Section title="Mobile Development FAQs">
        <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 sm:p-6">
          {[
            ["Do you build for both iOS and Android?", "Yes—shared RN codebase with native modules when needed."],
            ["Can you integrate with our backend/ATS/CRM?", "Absolutely—REST/GraphQL, webhooks, OAuth/SSO, and custom adapters."],
            ["How do you handle releases?", "CI/CD to TestFlight/Play Internal Testing, staged rollout, OTA for safe fixes."],
            ["What analytics stack do you use?", "Mixpanel/GA4/Segment + Crashlytics/Sentry, with consent and privacy controls."],
            ["How long & how much?", "Varies by scope. We’ll propose timelines & pricing after a quick discovery."],
            ["Do you provide maintenance?", "Yes—SLA options, updates, monitoring, and roadmap delivery."],
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
              <h3 className="text-3xl md:text-4xl font-extrabold text-white">Ready to Launch Your App?</h3>
              <p className="mt-3 text-white/85 max-w-prose">
                Let’s align on goals, timelines, and KPIs—then ship a native-quality app your users love.
              </p>
              <div className="mt-6">
                <div className="flex flex-wrap gap-3">
                  <Chip>iOS <Apple className="ml-1 h-3.5 w-3.5" /></Chip>
                  <Chip>Android
                    {/*     <Android className="ml-1 h-3.5 w-3.5" /> */}
                  </Chip>
                  <Chip>React Native</Chip>
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
                placeholder="Describe Your App (platforms, features, timeline)"
                className="rounded-lg border border-slate-200 px-3 py-2 outline-none focus:border-[color:var(--brand,#28B7D5)]"
                style={{ ["--brand" as any]: BRAND }}
              />
              <p className="text-xs text-slate-500">
                By submitting this form, you agree to our{" "}
                <Link href="/privacy" className="underline font-medium" style={{ color: BRAND }}>
                  Privacy Policy
                </Link>.
              </p>
              <button className="mt-1.5 h-11 rounded-full font-semibold text-white transition hover:shadow-lg" style={{ backgroundColor: BRAND, boxShadow: "0 8px 22px rgba(40,183,213,.22)" }}>
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
  const tabs = ["Frameworks", "Native", "Data & Backend", "Delivery"] as const;
  const [active, setActive] = React.useState<(typeof tabs)[number]>("Frameworks");

  const CONTENT: Record<(typeof tabs)[number], { label: string; Icon: React.ComponentType<React.SVGProps<SVGSVGElement>> }[]> = {
    Frameworks: [
      { label: "React Native", Icon: Smartphone },
      { label: "Expo", Icon: Rocket },
      { label: "TypeScript", Icon: Code2 },
      { label: "Redux / Zustand", Icon: Database },
    ],
    Native: [
      { label: "Swift", Icon: Apple },
    //   { label: "Kotlin", Icon: Android },
      { label: "Native Modules", Icon: Puzzle },
      { label: "Camera/BLE/Location", Icon: Smartphone },
    ],
    "Data & Backend": [
      { label: "REST / GraphQL", Icon: Cpu },
      { label: "Auth / SSO", Icon: Shield },
      { label: "SQLite / MMKV", Icon: Database },
      { label: "Cloud Functions", Icon: Cloud },
    ],
    Delivery: [
      { label: "CI/CD", Icon: GitBranch },
      { label: "Crash/Analytics", Icon: BellRing },
      { label: "A/B & Feature Flags", Icon: Gauge },
      { label: "OTA Updates", Icon: Repeat },
    ],
  };

  return (
    <Section title="Tech Stack That Powers Our Mobile Development">
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
            className="
              flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-3 bg-white/80 text-slate-800
              transition hover:-translate-y-0.5 hover:shadow-md
              hover:bg-[color:var(--brand,#28B7D5)] hover:text-white
            "
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
