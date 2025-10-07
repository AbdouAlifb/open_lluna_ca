"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Download,
  Play,
  MapPin,
  Route,
  CreditCard,
  Star,
  BarChart3,
  Sparkles,
  CheckCircle2,
  Server,
  Globe,
  Smartphone,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";

/** Brand palette */
const BRAND = "#28B7D5";
const ORANGE = "#FF8C42";

/** Animation presets */
const revealUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6 } },
};

export default function WashMinuteCaseStudy() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative min-h-[78vh] md:min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/images/cases/wash.mp4" type="video/mp4" />
        </video>

        {/* Readability overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
          <motion.h1
            variants={revealUp}
            initial="hidden"
            animate="show"
            className="text-4xl md:text-6xl font-black text-white leading-[1.05] tracking-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <span style={{ color: ORANGE }}>WashMinute</span> On Demand Car
            Care, Anywhere
          </motion.h1>

          <motion.p
            variants={revealUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.08 }}
            className="mt-5 text-lg md:text-2xl text-slate-100/95 leading-relaxed"
          >
            Uber-style car wash and light vehicle services (tire change, quick
            detailing) fulfilled by vetted Washmen. Real-time dispatch, live
            maps, ratings, and cashless checkout on iOS/Android + web.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={revealUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.16 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              href="https://play.google.com/store/apps/details?id=com.wash.minute&pcampaignid=web_share"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-white font-semibold shadow-lg hover:brightness-110 transition"
              style={{ backgroundColor: ORANGE, boxShadow: `0 8px 24px ${ORANGE}66` }}
            >
              <Download className="h-5 w-5" />
              Get it on Google Play
            </Link>

            {/* Replace with App Store URL when available */}
            <Link
              href="/contact?topic=ios-washminute"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-slate-900 font-semibold bg-white/90 border border-white/40 hover:bg-white transition"
            >
              <Download className="h-5 w-5" />
                  Get it on IOS
            </Link>

            <Link
              href="https://washminute.com"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-white font-semibold hover:-translate-y-0.5 transition"
              style={{ backgroundColor: BRAND, boxShadow: `0 8px 24px ${BRAND}40` }}
              title="Visit the Website"
            >
              <Globe className="h-5 w-5" />
              washminute.com
            </Link>

            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-white font-semibold hover:-translate-y-0.5 transition"
              style={{ backgroundColor: "#0F172A", boxShadow: `0 8px 24px #0F172A55` }}
              title="Back to all Case Studies"
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
              { value: "8+ months", label: "End-to-End Engagement" },
              { value: "2", label: "Mobile Platforms (iOS/Android)" },
              { value: "Sub-60s", label: "Avg. Booking Time" },
              { value: "4.8★", label: "User Rating (target)" },
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
                  className="text-3xl md:text-4xl font-black mb-2"
                  style={{ color: i % 2 === 0 ? ORANGE : BRAND }}
                >
                  {s.value}
                </div>
                <div className="text-slate-600 font-medium">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CHALLENGE */}
      <AnimatedSection className="py-16 md:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={revealUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <Badge color={ORANGE}>The Challenge</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6">
              Make car care as simple as ordering a ride
            </h2>
            <div className="prose prose-slate max-w-none text-[17px] leading-7">
              <ul className="list-disc pl-5">
                <li>
                  <b>Fragmented offline market:</b> customers rely on phone calls/DMs; no standard ETAs, prices, or quality control.
                </li>
                <li>
                  <b>Dispatch & coverage:</b> matching demand with nearby available Washmen while minimizing idle time and travel.
                </li>
                <li>
                  <b>Trust & consistency:</b> ratings, rework handling, and transparent pricing to keep retention high.
                </li>
                <li>
                  <b>Ops visibility:</b> real-time view for coordinators (zones, queues, SLAs, cancellations).
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <FrameVideo
              src="/images/cases/phoneapp.mp4"
            //   caption="Prior mapping of demand hot-zones, SLAs and service radius"
            />
          </motion.div>
        </div>
      </AnimatedSection>

      {/* OUR APPROACH */}
      <AnimatedSection className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <motion.div variants={revealUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <Badge color={BRAND}>Our Approach</Badge>
              <h2 className="text-3xl md:text-5xl font-bold mt-3">Co-design + Agile sprints</h2>
              <p className="mt-3 text-lg text-slate-600">
                8-month partnership from business planning and service blueprinting to rollout.
                We shipped in 2-week sprints with demoable increments.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Discovery & Blueprint",
                points: [
                  "Stakeholder interviews, value prop & pricing model",
                  "Service map: request → dispatch → onsite → rating",
                  "KPI definition: ETA, completion time, NPS, repeat rate",
                ],
              },
              {
                title: "MVP & Field Pilot",
                points: [
                  "Rider-like booking flow + Washman app with maps",
                  "Geo-matching, basic surge, secure payments",
                  "Pilot in 2 districts; refine routing & buffers",
                ],
              },
              {
                title: "Scale & Ops",
                points: [
                  "Ops dashboard, SLA alerts, churn-save offers",
                  "Ratings, re-assignment, queue balancing",
                  "Growth campaigns + referral loops",
                ],
              },
            ].map((c, i) => (
              <motion.div
                key={c.title}
                variants={revealUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.05 }}
              >
                <Card title={c.title} points={c.points} />
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* SOLUTION */}
      <AnimatedSection className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <motion.div variants={revealUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <Badge color={BRAND}>The Solution</Badge>
              <h2 className="text-3xl md:text-5xl font-bold mt-3">
                A two-sided marketplace with real-time dispatch
              </h2>
              <p className="mt-3 text-lg text-slate-600">
                Customer app, Washman app, and Ops cockpit — all synchronized in real time.
              </p>
            </motion.div>
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

      {/* ARCHITECTURE */}
      <AnimatedSection className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5"
          >
            <Image
              src="/images/cases/wash_arch.png"
              alt="WashMinute architecture diagram (placeholder)"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4 text-white text-sm">
              Architecture overview
            </div>
          </motion.div>

          <motion.div variants={revealUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <Badge color={ORANGE}>How it Works</Badge>
            <ul className="mt-3 space-y-3 text-slate-700 text-[17px] leading-7">
              <li>
                <b>Dispatcher:</b> job requests hit a queue; a matcher picks the best Washman using proximity,
                workload, and ETA feasibility.
              </li>
              <li>
                <b>State machine:</b> <i>requested → assigned → en-route → arrived → in-progress → complete</i> with
                guardrails for reassign/cancel.
              </li>
              <li>
                <b>Maps:</b> bi-directional updates broadcast to client & Washman; ops get SLA alerts and zone heatmaps.
              </li>
              <li>
                <b>Payments:</b> pre-auth at accept; capture on completion; refunds/adjustments via dispute console.
              </li>
            </ul>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* TECH STACK */}
      <AnimatedSection className="py-16 md:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div variants={revealUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-10">
            <Badge color={BRAND}>Tech Stack</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mt-3">Built for reliability & speed</h2>
            <p className="mt-3 text-lg text-slate-600">
              A pragmatic, scalable stack across mobile, backend, infra, and analytics.
            </p>
          </motion.div>

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
                  <div className="text-lg font-bold">{b.title}</div>
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
        <div className="mx-auto max-w-5xl px-4 text-center">
          <Badge color={ORANGE}>The Impact</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-8">
            Operational clarity and faster service
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                kpi: "70% faster",
                desc: "booking flow vs. baseline, with fewer drop-offs",
              },
              {
                kpi: "↑ repeat rate",
                desc: "ratings + consistent ETAs improved retention",
              },
              {
                kpi: "↓ idle time",
                desc: "zone balancing and re-assign lowered dead miles",
              },
            ].map((r, i) => (
              <motion.div
                key={r.kpi}
                variants={revealUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl p-8 shadow-lg border border-slate-200"
              >
                <div className="text-3xl font-black mb-2" style={{ color: BRAND }}>
                  {r.kpi}
                </div>
                <div className="text-slate-600">{r.desc}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={revealUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-10 max-w-3xl mx-auto text-slate-600"
          >
            <p className="leading-7">
              The product and sustainability narrative are aligned with WashMinute’s public positioning.
            </p>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* TIMELINE */}
      <AnimatedSection className="py-16 md:py-24 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4">
          <Badge color={BRAND}>Timeline (8 months)</Badge>
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

      {/* DEMO — single video */}
      <AnimatedSection className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <motion.div variants={revealUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-8">
            <Badge color={ORANGE}>Demo</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mt-3">Product Walkthrough</h2>
            <p className="mt-3 text-lg text-slate-600">
              Short highlight of request → dispatch → on-site service → rating.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative aspect-[16/9] rounded-2xl overflow-hidden ring-1 ring-black/5 shadow-xl"
          >
            {/* Replace with your final demo file if different */}
            <video
              src="/images/cases/wash.mp4"
              controls
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-3 right-3 bg-black/65 text-white text-xs px-2 py-1 rounded-full inline-flex items-center gap-1">
              <Play className="h-3 w-3" /> Demo
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Try WashMinute</h2>
          <p className="text-lg text-slate-300">
            Tap, book, and relax — we’ll take care of the shine.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
            <Link
              href="https://play.google.com/store/apps/details?id=com.wash.minute&pcampaignid=web_share"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-lg font-semibold text-white hover:brightness-110 transition"
              style={{ backgroundColor: ORANGE, boxShadow: `0 8px 24px ${ORANGE}66` }}
            >
              <Download className="h-5 w-5" />
              Google Play
            </Link>
            <Link
              href="/contact?topic=ios-washminute"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-lg font-semibold text-slate-900 bg-white hover:bg-white/95 border border-white/40 transition"
            >
              <Download className="h-5 w-5" />
              iOS 
            </Link>
            <Link
              href="https://washminute.com"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-lg font-semibold text-white hover:-translate-y-0.5 transition"
              style={{ backgroundColor: BRAND, boxShadow: `0 8px 24px ${BRAND}40` }}
            >
              <Globe className="h-5 w-5" />
              washminute.com
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-lg font-semibold text-white hover:-translate-y-0.5 transition"
              style={{ backgroundColor: "#0F172A", boxShadow: `0 8px 24px #0F172A55` }}
            >
              View All Case Studies
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          {/* Path hint for your CaseStudies list */}
          <div className="mt-6 text-sm text-white/70">
            Case Study path:{" "}
            <code className="bg-white/10 px-2 py-1 rounded">
              /case-studies/washminute
            </code>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}

/* ——— Helpers ——— */

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

function Card({ title, points }: { title: string; points: string[] }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-slate-200">
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <ul className="space-y-2 text-slate-700 text-[15px] leading-6">
        {points.map((p) => (
          <li key={p} className="flex gap-2">
            <span
              className="mt-[7px] h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: BRAND }}
            />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
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
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-slate-600 leading-relaxed mb-4">{desc}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="px-3 py-1 rounded-full text-xs font-semibold"
            style={{ backgroundColor: `${BRAND}10`, color: BRAND }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function FrameVideo({ src, caption }: { src: string; caption?: string }) {
  return (
    <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src={src} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
      {caption ? (
        <div className="absolute bottom-0 left-0 right-0 text-white text-sm p-3">
          {caption}
        </div>
      ) : null}
    </div>
  );
}

/* ——— Data ——— */

const FEATURES: FeatureProps[] = [
  {
    icon: <MapPin className="h-10 w-10" />,
    title: "Smart Matching",
    desc:
      "Nearest eligible Washman with travel time prediction & load balancing. ETA promises with buffer; auto re-assign on timeout.",
    tags: ["Geo-fencing", "ETA buffers", "Re-assign"],
  },
  {
    icon: <Route className="h-10 w-10" />,
    title: "Live Map & Routing",
    desc:
      "Turn-by-turn to the client; status updates (en-route → arrived → in-progress → complete), plus photo proof.",
    tags: ["Polyline", "Live status", "Proof photos"],
  },
  {
    icon: <CreditCard className="h-10 w-10" />,
    title: "Cashless & Secure",
    desc:
      "Card/NAPS/Wallet supported. Refunds & adjustments handled through an internal dispute flow.",
    tags: ["3-D Secure", "Refund flows", "PCI aware"],
  },
  {
    icon: <Star className="h-10 w-10" />,
    title: "Quality & Trust",
    desc:
      "Ratings, service checklists, and mandatory after-job photos to enforce quality and reduce rework.",
    tags: ["Checklists", "Ratings", "QC photos"],
  },
  {
    icon: <BarChart3 className="h-10 w-10" />,
    title: "Ops Cockpit",
    desc:
      "Real-time map of all jobs, SLA alerts, heatmaps, growth & cohort analytics, cancellation reasons.",
    tags: ["Heatmaps", "SLA alerts", "Cohorts"],
  },
  {
    icon: <Sparkles className="h-10 w-10" />,
    title: "Growth Loops",
    desc:
      "Referrals, promo codes, reactivation nudges; zone pricing for peak periods and weather-aware prompts.",
    tags: ["Referrals", "Zone pricing", "Nudges"],
  },
];

const STACK = [
  {
    title: "Mobile",
    icon: <Smartphone className="h-6 w-6 text-slate-700" />,
    items: ["React Native (iOS/Android)", "Expo EAS", "FCM push notifications", "Deep links"],
  },
  {
    title: "Web & Frontend",
    icon: <Globe className="h-6 w-6 text-slate-700" />,
    items: ["Next.js (App Router)", "Tailwind + shadcn/ui", "Map SDK (Google Maps)", "React Query"],
  },
  {
    title: "Backend",
    icon: <Server className="h-6 w-6 text-slate-700" />,
    items: ["Node.js (NestJS/Express)", "PostgreSQL + Prisma", "Redis (queues, cache)", "WebSockets (live ops)"],
  },
  {
    title: "Payments & Security",
    icon: <ShieldCheck className="h-6 w-6 text-slate-700" />,
    items: ["Stripe / NAPS integration", "3-D Secure", "Rate limiting & audit logs", "JWT + RBAC"],
  },
  {
    title: "Infra & DevOps",
    icon: <Server className="h-6 w-6 text-slate-700" />,
    items: ["Docker + Nginx", "AWS / DigitalOcean", "CI/CD (GitHub Actions)", "Telemetry & alerts"],
  },
  {
    title: "Observability",
    icon: <BarChart3 className="h-6 w-6 text-slate-700" />,
    items: ["Metrics (SLAs, cohorts)", "Tracing (jobs, retries)", "Error monitoring", "Heatmaps"],
  },
];

const TIMELINE = [
  {
    t: "Month 1",
    items: [
      "Discovery, business model, service blueprint",
      "Personas & key journeys; KPI baselines",
    ],
  },
  {
    t: "Months 2–3",
    items: [
      "MVP build (client + Washman apps, dispatch)",
      "Pilot in 2 districts; routing & SLA tuning",
    ],
  },
  {
    t: "Months 4–6",
    items: [
      "Payments, ratings, photo proof, ops dashboard",
      "Promo/referral system; cancel reasons",
    ],
  },
  {
    t: "Months 7–8",
    items: [
      "Scale prep, incident playbooks, analytics",
      "Marketing hooks; iOS readiness review",
    ],
  },
];
