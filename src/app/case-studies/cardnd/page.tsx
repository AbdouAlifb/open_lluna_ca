"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Globe,
  Smartphone,
  ShieldCheck,
  MapPin,
  CreditCard,
  Users,
  BarChart3,
  Server,
  Building2,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

/** Brand palette */
const CARDND_GREEN = "#0F3F2D"; // main brand green
const ACCENT_BROWN = "#6B4E2E"; // warm brown accent
const SKY = "#28B7D5";

/** Animation presets */
const revealUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6 } },
};

/** Reusable section wrapper */
function AnimatedSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.section
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

function Badge({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <span
      className="inline-block px-4 py-2 rounded-full text-sm font-bold"
      style={{ backgroundColor: `${color}15`, color }}
    >
      {children}
    </span>
  );
}

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  tags: string[];
};

function Feature({ icon, title, desc, tags }: FeatureProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-slate-200">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2" style={{ color: CARDND_GREEN }}>{title}</h3>
      <p className="text-slate-600 leading-relaxed mb-4">{desc}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="px-3 py-1 rounded-full text-xs font-semibold"
            style={{ backgroundColor: `${SKY}10`, color: SKY }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function Card({ title, points }: { title: string; points: string[] }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-slate-200">
      <h3 className="text-xl font-bold mb-3" style={{ color: CARDND_GREEN }}>{title}</h3>
      <ul className="space-y-2 text-slate-700 text-[15px] leading-6">
        {points.map((p) => (
          <li key={p} className="flex gap-2">
            <span className="mt-[7px] h-1.5 w-1.5 rounded-full" style={{ backgroundColor: CARDND_GREEN }} />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ——— Page ——— */

export default function CardndCaseStudy() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO with background video */}
      <section className="relative min-h-[78vh] md:min-h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/images/cases/cardnd.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 md:py-28">
          <motion.h1
            variants={revealUp}
            initial="hidden"
            animate="show"
            className="text-4xl md:text-6xl font-black leading-[1.05] tracking-tight text-white"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <span style={{ color: SKY }}>Cardnd</span>  Morocco’s Trust-First Car Rental Marketplace
          </motion.h1>

          <motion.p
            variants={revealUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.08 }}
            className="mt-5 text-lg md:text-2xl text-slate-100/95 leading-relaxed max-w-3xl"
          >
            Real availability, transparent deposits, and verified agencies without the call-and-wait loop. Marketplace + ERP dashboard powering renters and agencies.
          </motion.p>

          <motion.div
            variants={revealUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.16 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link
              href="https://cardnd.com/"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-white font-semibold hover:-translate-y-0.5 transition"
              style={{ backgroundColor: CARDND_GREEN, boxShadow: `0 8px 24px ${CARDND_GREEN}55` }}
            >
              <Globe className="h-5 w-5" />
              Open Web Demo (cardnd.com)
            </Link>
            <Link
              href="/contact?topic=android-cardnd"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-white/90 text-slate-900 font-semibold border border-white/40 hover:bg-white transition"
              title="Android beta / notify me"
            >
              <Smartphone className="h-5 w-5" />
              Android (notify me)
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-white font-semibold hover:-translate-y-0.5 transition"
              style={{ backgroundColor: ACCENT_BROWN, boxShadow: `0 8px 24px ${ACCENT_BROWN}55` }}
              title="Back to Case Studies"
            >
              <ArrowLeft className="h-5 w-5" />
              All Case Studies
            </Link>
          </motion.div>
        </div>
      </section>

      {/* QUICK STATS */}
      <AnimatedSection className="py-14 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "Nationwide", label: "Morocco coverage (agencies)" },
              { value: "99.9%", label: "Uptime (target)" },
              { value: "10%", label: "Marketplace take model" },
              { value: "Cash / Online", label: "Flexible payments" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                variants={revealUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="text-center"
              >
                <div
                  className="text-2xl md:text-3xl font-black mb-2"
                  style={{ color: [CARDND_GREEN, SKY, ACCENT_BROWN, CARDND_GREEN][i % 4] }}
                >
                  {s.value}
                </div>
                <div className="text-slate-600 font-medium">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* THE PROBLEM (copy left, image right) */}
      <AnimatedSection className="py-16 md:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge color={ACCENT_BROWN}>The Problem</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6" style={{ color: CARDND_GREEN }}>
              Car rentals in Morocco lack transparency and convenience
            </h2>
            <div className="prose prose-slate max-w-none text-[17px] leading-7">
              <ul className="list-disc pl-5">
                <li><b>Deposit anxiety:</b> unpredictable amounts, unclear refund timelines, manual handovers.</li>
                <li><b>Availability black box:</b> renters bounce between calls/DMs; double-booking risks.</li>
                <li><b>Inconsistent pricing:</b> scattered quotes, hidden fees, weak comparability.</li>
                <li><b>No unified experience:</b> delivery, insurance, add-ons, and reviews live in silos.</li>
              </ul>
            </div>
          </div>

          {/* Image placeholder on the right */}
          <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5">
            <Image
              src="/images/cases/cardnd-problem.png"
              alt="Fragmented car rental experience (placeholder visual)"
              fill
              className="object-cover"
              priority
            />
          
          </div>
        </div>
      </AnimatedSection>

      {/* BEFORE / AFTER block (moved below Problem) */}
      <AnimatedSection className="py-10 md:py-14 bg-white">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-6">
          <ProblemCard
            title="Before Cardnd"
            bullets={[
              "Endless calls & WhatsApp to chase availability",
              "Deposit surprises on pickup day",
              "Paper contracts, manual verification",
              "No central reviews, hard to compare options",
            ]}
            tone="before"
          />
          <ProblemCard
            title="After Cardnd"
            bullets={[
              "Live availability & instant pricing",
              "Transparent deposits incl. online pre-auth",
              "Verified agencies + standardized contracts",
              "Reviews, delivery options, secure checkout",
            ]}
            tone="after"
          />
        </div>
      </AnimatedSection>

      {/* OUR APPROACH */}
      <AnimatedSection className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <Badge color={SKY}>Our Approach</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mt-3" style={{ color: CARDND_GREEN }}>
              Marketplace + ERP for agencies, seamless for renters
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              Co-designed with agencies, delivered in 2-week sprints toward a resilient, trust-first platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card
              title="Discovery & Trust"
              points={[
                "Mapped deposit practices & refund workflows",
                "Defined standardized pricing & cancellation policies",
                "Designed review & verification flows",
              ]}
            />
            <Card
              title="MVP & Rollout"
              points={[
                "Live availability + instant quotes",
                "Checkout with deposit pre-auth options",
                "ERP dashboard (fleet, pricing, payouts)",
              ]}
            />
            <Card
              title="Scale & Ops"
              points={[
                "Dynamic pricing & city/season modifiers",
                "Delivery radius, fees, scheduling",
                "Uptime targets, alerts, monitoring",
              ]}
            />
          </div>
        </div>
      </AnimatedSection>

      {/* SOLUTION FEATURES */}
      <AnimatedSection className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <Badge color={SKY}>Solution</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mt-3" style={{ color: CARDND_GREEN }}>
              Real-time availability and fair deposits for a trust-first marketplace
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              Renters book faster; agencies manage fleets and revenue with clarity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                variants={revealUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.05 }}
              >
                <Feature {...f} />
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* TECH STACK */}
      <AnimatedSection className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-10">
            <Badge color={SKY}>Tech Stack</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mt-3" style={{ color: CARDND_GREEN }}>
              Built for reliability & scale
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              Pragmatic choices across web, backend, infra, and analytics—ready for web & mobile.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STACK.map((b, i) => (
              <motion.div
                key={b.title}
                variants={revealUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.03 }}
                className="rounded-2xl p-6 bg-white shadow-sm ring-1 ring-slate-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  {b.icon}
                  <div className="text-lg font-bold" style={{ color: CARDND_GREEN }}>{b.title}</div>
                </div>
                <ul className="text-slate-600 space-y-1.5 text-[15px] leading-6">
                  {b.items.map((x) => (
                    <li key={x} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* RESULTS / IMPACT */}
      <AnimatedSection className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <Badge color={ACCENT_BROWN}>Impact</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-8" style={{ color: CARDND_GREEN }}>
            Transparency, faster bookings, and agency growth
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {IMPACT.map((r, i) => (
              <motion.div
                key={r.kpi}
                variants={revealUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl p-8 shadow-lg border border-slate-200"
              >
                <div className="text-3xl font-black mb-2" style={{ color: SKY }}>
                  {r.kpi}
                </div>
                <div className="text-slate-600">{r.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* TIMELINE */}
      <AnimatedSection className="py-16 md:py-24 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4">
          <Badge color={SKY}>Timeline</Badge>
          <div className="mt-6 grid md:grid-cols-4 gap-6">
            {TIMELINE.map((b, i) => (
              <motion.div
                key={b.t}
                variants={revealUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.04 }}
                className="rounded-2xl p-6 bg-white shadow-sm ring-1 ring-slate-200"
              >
                <div className="font-bold text-slate-900 mb-2">{b.t}</div>
                <ul className="text-slate-600 space-y-1.5">
                  {b.items.map((x) => (
                    <li key={x} className="text-[15px] leading-6">
                      {x}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Explore Cardnd</h2>
          <p className="text-lg text-slate-300">
            Real cars, real agencies, real availability—without the call-and-wait loop.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
            <Link
              href="https://cardnd.com/"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-lg font-semibold text-white hover:-translate-y-0.5 transition"
              style={{ backgroundColor: CARDND_GREEN, boxShadow: `0 8px 24px ${CARDND_GREEN}55` }}
            >
              <Globe className="h-5 w-5" />
              Open Web Demo
            </Link>
            <Link
              href="/contact?topic=android-cardnd"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-lg font-semibold bg-white text-slate-900 hover:bg-white/95 border border-white/40 transition"
              title="Android beta / notify me"
            >
              <Smartphone className="h-5 w-5" />
              Android (notify me)
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-lg font-semibold text-white hover:-translate-y-0.5 transition"
              style={{ backgroundColor: ACCENT_BROWN, boxShadow: `0 8px 24px ${ACCENT_BROWN}55` }}
            >
              View All Case Studies
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          <div className="mt-6 text-sm text-white/70">
            Case Study path: <code className="bg-white/10 px-2 py-1 rounded">/case-studies/cardnd</code>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}

/* ——— Data ——— */

const FEATURES: FeatureProps[] = [
  {
    icon: <MapPin className="h-10 w-10" />,
    title: "Live Availability & Delivery",
    desc:
      "Instant results with filters (city, dates, class, delivery). Agencies can offer free/paid delivery with clear time windows.",
    tags: ["Filters", "Delivery radius", "Slots"],
  },
  {
    icon: <CreditCard className="h-10 w-10" />,
    title: "Transparent Deposits",
    desc:
      "Clear deposit amounts and refund rules upfront. Support for online pre-auth or cash-on-delivery as allowed by agencies.",
    tags: ["Pre-auth", "Policy surface", "Refund SLAs"],
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: "Verified Agencies & Reviews",
    desc:
      "KYC/verification, standardized contracts, and post-trip reviews to drive accountability and repeat bookings.",
    tags: ["KYC", "Contracts", "Ratings"],
  },
  {
    icon: <Building2 className="h-10 w-10" />,
    title: "Agency ERP Dashboard",
    desc:
      "Manage fleet, pricing, availability, bookings, payouts, and delivery logistics from one place.",
    tags: ["Fleet", "Payouts", "Calendar"],
  },
  {
    icon: <ShieldCheck className="h-10 w-10" />,
    title: "Trust & Safety",
    desc:
      "Dispute flows, damage evidence, cancellation policies, and audit trails protect renters and agencies alike.",
    tags: ["Disputes", "Evidence", "Policies"],
  },
  {
    icon: <BarChart3 className="h-10 w-10" />,
    title: "Growth & Pricing",
    desc:
      "Promos, loyalty (roadmap), and dynamic pricing suggestions by season/city. Agency nudges for peak events.",
    tags: ["Promos", "Loyalty (R)", "Smart pricing"],
  },
];

const STACK = [
  {
    title: "Web Frontend",
    icon: <Globe className="h-6 w-6 text-slate-700" />,
    items: ["Next.js (App Router)", "TypeScript + Tailwind + shadcn/ui", "React Query", "SSR/ISR for fast search"],
  },
  {
    title: "Backend",
    icon: <Server className="h-6 w-6 text-slate-700" />,
    items: ["Node.js (NestJS/Express)", "PostgreSQL + Prisma", "Redis (cache/queues)", "WebSockets for ops"],
  },
  {
    title: "ERP & Ops",
    icon: <Building2 className="h-6 w-6 text-slate-700" />,
    items: ["Agency dashboard (availability, payouts)", "Pricing rules, delivery zones", "Exports & reports"],
  },
  {
    title: "Payments & Security",
    icon: <ShieldCheck className="h-6 w-6 text-slate-700" />,
    items: ["Stripe / NAPS (pre-auth & capture)", "3-D Secure", "JWT + RBAC", "Audit logs & rate limiting"],
  },
  {
    title: "Mobile (Roadmap)",
    icon: <Smartphone className="h-6 w-6 text-slate-700" />,
    items: ["React Native apps", "Deep links", "Push notifications (FCM)", "Map SDK integrations"],
  },
  {
    title: "Infra & DevOps",
    icon: <Server className="h-6 w-6 text-slate-700" />,
    items: ["Docker + Nginx", "AWS / DigitalOcean", "GitHub Actions CI/CD", "Telemetry, alerts, SLOs"],
  },
];

const IMPACT = [
  { kpi: "↓ deposit friction", desc: "Upfront rules + pre-auth reduce disputes and surprises." },
  { kpi: "↑ conversion", desc: "Live availability and instant pricing cut drop-offs." },
  { kpi: "↑ agency revenue", desc: "ERP visibility + delivery = higher utilization." },
];

const TIMELINE = [
  {
    t: "Phase 1 — Discovery",
    items: ["Market interviews (renters/agencies)", "Deposit & policy mapping", "MVP scope & KPIs"],
  },
  {
    t: "Phase 2 — MVP",
    items: ["Search/filters + live availability", "Checkout with deposit options", "Agency dashboard v1"],
  },
  {
    t: "Phase 3 — Scale",
    items: ["Delivery scheduling & pricing", "Promos + reviews", "Monitoring & incident playbooks"],
  },
  {
    t: "Phase 4 — Mobile",
    items: ["React Native apps", "Push & deep links", "Field ops & handover tools"],
  },
];

/* ——— Small presentational block ——— */

function ProblemCard({
  title,
  bullets,
  tone,
}: {
  title: string;
  bullets: string[];
  tone: "before" | "after";
}) {
  const color = tone === "before" ? "#ef4444" : CARDND_GREEN;
  return (
    <div className="rounded-2xl p-6 bg-white shadow-sm ring-1 ring-slate-200">
      <div className="font-bold mb-2" style={{ color }}>
        {title}
      </div>
      <ul className="text-slate-600 space-y-1.5 text-[15px] leading-6">
        {bullets.map((x) => (
          <li key={x} className="flex items-start gap-2">
            <span
              className="mt-[7px] h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: color }}
            />
            <span>{x}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
