"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Brain,
  Mic,
  FileText,
  Gauge,
  ShieldCheck,
  BarChart3,
  Users,
  CheckCircle2,
  Workflow,
  Database,
  MessagesSquare,
} from "lucide-react";

/** Brand palette (HR-friendly, confident) */
const PRIMARY = "#334155";      // slate-700
const ACCENT = "#0F3F2D";       // subtle green accent to match your ecosystem
const HIGHLIGHT = "#6B4E2E";    // warm brown touch for headings/labels

/* ----------------------------- Reveal on scroll ---------------------------- */

function useReveal(threshold = 0.18) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          setVisible(true);
          io.unobserve(e.target);
        }
      }),
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, visible };
}

function AnimatedSection({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useReveal();
  return (
    <section
      ref={ref}
      className={[
        className ?? "",
        "opacity-0 translate-y-6 transition-all duration-700 ease-out",
        visible ? "opacity-100 translate-y-0" : "",
      ].join(" ")}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </section>
  );
}

function Badge({ children, color = HIGHLIGHT }: { children: React.ReactNode; color?: string }) {
  return (
    <span
      className="inline-block px-4 py-2 rounded-full text-sm font-bold"
      style={{ backgroundColor: `${color}15`, color }}
    >
      {children}
    </span>
  );
}

/* --------------------------------- Page ---------------------------------- */

export default function AIHireCaseStudy() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO (video-ready) */}
      <section className="relative min-h-[78vh] md:min-h-screen flex items-center justify-center overflow-hidden">
        {/* Replace src with your final file, e.g. /images/cases/aihire-hero.mp4 */}
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/images/cases/aihire-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ background: "linear-gradient(120deg, rgba(0,0,0,.55), rgba(0,0,0,.25))" }} />

        <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 md:py-28 text-center">
          <h1
            className="text-4xl md:text-6xl font-black leading-[1.05] tracking-tight text-white"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <span style={{ color: HIGHLIGHT }}>AI Hire</span>  Conversational Screening & Structured Reports
          </h1>
          <p className="mt-5 text-lg md:text-2xl text-slate-100/95 leading-relaxed max-w-3xl mx-auto">
            A chat (voice or text) that interviews candidates, scores competencies against your rubric,
            and generates bias-aware, human-readable reports for faster, fairer hiring.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact?topic=aihire-coming-soon"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-white font-semibold hover:-translate-y-0.5 transition"
              style={{ backgroundColor: HIGHLIGHT, boxShadow: `0 8px 24px ${HIGHLIGHT}55` }}
              title="Coming soon — talk to us"
            >
              Coming Soon · Contact Us
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/contact?topic=build-ai-hiring-bot"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-white/90 text-slate-900 font-semibold border border-white/40 hover:bg-white transition"
              title="Fast intro call"
            >
              Discuss Your Project
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-white font-semibold hover:-translate-y-0.5 transition"
              style={{ backgroundColor: ACCENT, boxShadow: `0 8px 24px ${ACCENT}55` }}
              title="Back to Case Studies"
            >
              <ArrowLeft className="h-5 w-5" />
              All Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* QUICK STATS */}
      <AnimatedSection className="py-14 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "10–15 min", label: "Typical interview length" },
              { value: "Rubric-based", label: "Consistent scoring" },
              { value: "PII-safe", label: "Storage & logs" },
              { value: "Multilingual", label: "FR/EN/AR (roadmap)" },
            ].map((s, i) => (
              <div key={s.label}>
                <div
                  className="text-2xl md:text-3xl font-black mb-2"
                  style={{ color: i % 2 === 0 ? HIGHLIGHT : ACCENT }}
                >
                  {s.value}
                </div>
                <div className="text-slate-600 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* PROBLEM */}
      <AnimatedSection className="py-16 md:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge>Problem</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6" style={{ color: HIGHLIGHT }}>
              Screening takes too long and varies by interviewer
            </h2>
            <div className="prose prose-slate max-w-none text-[17px] leading-7">
              <ul className="list-disc pl-5">
                <li><b>Inconsistent signal:</b> unstructured notes and variable questions across interviewers.</li>
                <li><b>Slow loops:</b> scheduling, transcription, and write-ups delay decisions.</li>
                <li><b>Hidden bias:</b> subjective impressions leak into evaluations.</li>
                <li><b>Candidate drop-off:</b> long processes and unclear expectations.</li>
              </ul>
            </div>
          </div>

          {/* Image slot (replace with your visual) */}
          <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5">
            <Image
              src="/images/cases/aihire-problem.png"
              alt="Traditional screening is slow and inconsistent — AI Hire standardizes and speeds it up"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4 text-white text-sm">
              Replace with your visual (manual notes → structured report)
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* APPROACH */}
      <AnimatedSection className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <Badge color={ACCENT}>Our Approach</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mt-3" style={{ color: HIGHLIGHT }}>
              Conversational interview → rubric scoring → concise report
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              The assistant asks role-specific questions, captures answers (voice or text),
              evaluates competencies against your rubric, and drafts a decision-ready summary.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card
              icon={<MessagesSquare className="h-6 w-6" />}
              title="Guided conversation"
              points={[
                "Role templates with adaptive follow-ups",
                "Behavioral and technical probes",
                "Candidate consent & disclaimers",
              ]}
            />
            <Card
              icon={<Gauge className="h-6 w-6" />}
              title="Rubric scoring"
              points={[
                "Competency weights & thresholds",
                "Evidence-linked ratings per question",
                "Flags for contradictions & hallucinations",
              ]}
            />
            <Card
              icon={<FileText className="h-6 w-6" />}
              title="Structured report"
              points={[
                "Executive summary & recommendation",
                "Strengths/risks with cited snippets",
                "Next-step questions for a human round",
              ]}
            />
          </div>
        </div>
      </AnimatedSection>

      {/* SOLUTION FEATURES */}
      <AnimatedSection className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <Badge color={HIGHLIGHT}>Solution</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mt-3" style={{ color: HIGHLIGHT }}>
              An assistant built for speed, signal, and fairness
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              Standardize the first pass while keeping humans in control.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((f) => (
              <Feature key={f.title} {...f} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* TECH STACK */}
      <AnimatedSection className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-10">
            <Badge color={ACCENT}>Tech Stack</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mt-3" style={{ color: HIGHLIGHT }}>
              LLM orchestration + ASR/NLP + secure storage
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              Pragmatic choices to deliver reliable interviews and defensible reports.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STACK.map((b) => (
              <StackCard key={b.title} {...b} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* IMPACT */}
      <AnimatedSection className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <Badge color={HIGHLIGHT}>Impact</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-8" style={{ color: HIGHLIGHT }}>
            Faster decisions with clearer signal
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {IMPACT.map((r) => (
              <div key={r.kpi} className="rounded-2xl p-8 shadow-lg border border-slate-200">
                <div className="text-3xl font-black mb-2" style={{ color: ACCENT }}>
                  {r.kpi}
                </div>
                <div className="text-slate-600">{r.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-[#111827] to-[#0b1220] text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Pilot AI Hire with your next roles</h2>
          <p className="text-lg text-slate-300">
            Standardize screening, reduce time-to-decision, and improve candidate experience.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
            <Link
              href="/contact?topic=aihire-coming-soon"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-lg font-semibold text-white hover:-translate-y-0.5 transition"
              style={{ backgroundColor: HIGHLIGHT, boxShadow: `0 8px 24px ${HIGHLIGHT}66` }}
            >
              Coming Soon · Contact
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/contact?topic=build-ai-hiring-bot"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-lg font-semibold bg-white text-slate-900 hover:bg-white/95 border border-white/40 transition"
            >
              Discuss Your Project
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-lg font-semibold text-white hover:-translate-y-0.5 transition"
              style={{ backgroundColor: ACCENT, boxShadow: `0 8px 24px ${ACCENT}40` }}
            >
              View All Case Studies
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </div>
          <div className="mt-6 text-sm text-white/70">
            Case Study path: <code className="bg-white/10 px-2 py-1 rounded">/case-studies/aihire</code>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}

/* ------------------------------ Components ------------------------------- */

function Card({ icon, title, points }: { icon: React.ReactNode; title: string; points: string[] }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-slate-200">
      <div className="flex items-center gap-3 mb-3">
        <div
          className="h-10 w-10 grid place-items-center rounded-xl"
          style={{ backgroundColor: `${HIGHLIGHT}12`, color: HIGHLIGHT }}
        >
          {icon}
        </div>
        <h3 className="text-xl font-bold" style={{ color: HIGHLIGHT }}>{title}</h3>
      </div>
      <ul className="space-y-2 text-slate-700 text-[15px] leading-6">
        {points.map((p) => (
          <li key={p} className="flex gap-2">
            <span className="mt-[7px] h-1.5 w-1.5 rounded-full" style={{ backgroundColor: HIGHLIGHT }} />
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
      <div className="flex items-center gap-3 mb-3">
        <div
          className="h-10 w-10 grid place-items-center rounded-xl"
          style={{ backgroundColor: `${HIGHLIGHT}12`, color: HIGHLIGHT }}
        >
          {icon}
        </div>
        <h3 className="text-xl font-bold" style={{ color: HIGHLIGHT }}>{title}</h3>
      </div>
      <p className="text-slate-600 leading-relaxed mb-4">{desc}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="px-3 py-1 rounded-full text-xs font-semibold"
            style={{ backgroundColor: `${ACCENT}10`, color: ACCENT }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function StackCard({ title, items, icon }: { title: string; items: string[]; icon: React.ReactNode }) {
  return (
    <div className="rounded-2xl p-6 bg-white shadow-sm ring-1 ring-slate-200">
      <div className="flex items-center gap-3 mb-3">
        <div
          className="h-9 w-9 grid place-items-center rounded-lg"
          style={{ backgroundColor: `${HIGHLIGHT}12`, color: HIGHLIGHT }}
        >
          {icon}
        </div>
        <div className="text-lg font-bold" style={{ color: HIGHLIGHT }}>{title}</div>
      </div>
      <ul className="text-slate-600 space-y-1.5 text-[15px] leading-6">
        {items.map((x) => (
          <li key={x} className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4" />
            <span>{x}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* --------------------------------- Data ---------------------------------- */

const FEATURES: FeatureProps[] = [
  {
    icon: <Mic className="h-6 w-6" />,
    title: "Voice & text interviews",
    desc:
      "Automatic speech recognition (ASR) and real-time hints help candidates stay on track. Text-only fallback supported.",
    tags: ["ASR", "Streaming", "Hints"],
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "Competency reasoning",
    desc:
      "LLM evaluates evidence against your rubric (e.g., problem-solving, React/Node depth, leadership) with calibrated scores.",
    tags: ["Rubrics", "Calibration", "Evidence"],
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Fairness & privacy",
    desc:
      "PII redaction, sensitive-attribute filters, and bias checks. Humans review before any automated decisions.",
    tags: ["PII", "EEO", "Human-in-the-loop"],
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Reporting & analytics",
    desc:
      "Role pipelines, pass-through rates, and time-to-decision. Export PDFs or push to ATS.",
    tags: ["Exports", "ATS", "Dashboards"],
  },
  {
    icon: <Workflow className="h-6 w-6" />,
    title: "Playbooks",
    desc:
      "Templates for engineering, product, support, and sales—each with tailored question banks and scoring.",
    tags: ["Templates", "Banks", "Weights"],
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Great candidate UX",
    desc:
      "Clear consent, timeline, and what happens next. Language hints for FR/EN/AR.",
    tags: ["Consent", "Clarity", "Localization"],
  },
];

const STACK = [
  {
    title: "AI Core",
    icon: <Brain className="h-5 w-5" />,
    items: [
      "LLM orchestration (tools, guardrails)",
      "Rubric scorer (few-shot + calibration)",
      "Follow-up planner / chain-of-thought (safe)",
    ],
  },
  {
    title: "Speech & NLP",
    icon: <Mic className="h-5 w-5" />,
    items: [
      "ASR (streaming & batch)",
      "Keyword/entity extraction",
      "Toxicity & PII filters",
    ],
  },
  {
    title: "Product",
    icon: <MessagesSquare className="h-5 w-5" />,
    items: [
      "Next.js front-end (chat + voice)",
      "Realtime hints & timers",
      "PDF/HTML report generator",
    ],
  },
  {
    title: "Data & Storage",
    icon: <Database className="h-5 w-5" />,
    items: [
      "PostgreSQL + Prisma",
      "Object storage (audio/transcripts)*",
      "Encryption at rest + rotation",
    ],
  },
];

const IMPACT = [
  { kpi: "↓ time-to-shortlist", desc: "From days to hours with consistent first-pass screening." },
  { kpi: "↑ signal quality", desc: "Evidence-linked ratings improve human debriefs." },
  { kpi: "↑ candidate fairness", desc: "Standardized interviews reduce variance and bias." },
];
