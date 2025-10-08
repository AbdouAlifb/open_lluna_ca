"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Search,
  Brain,
  Database,
  BookText,
  Workflow,
  Link2,
  CheckCircle2,
} from "lucide-react";

/** Brand palette (Legal / Brown theme) */
const BROWN = "#6B4E2E";
const BROWN_DARK = "#523b22";
const ACCENT = "#0F3F2D"; // subtle green accent to pair with brown

/* ----------------------------- Reveal on scroll ---------------------------- */

function useReveal(threshold = 0.18) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(e.target);
          }
        });
      },
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

function Badge({ children, color = BROWN }: { children: React.ReactNode; color?: string }) {
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

export default function LegalQCaseStudy() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO (video-ready) */}
      <section className="relative min-h-[78vh] md:min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background video: replace src with your final file, e.g. /images/cases/legalq-hero.mp4 */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/images/cases/legalq-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ background: "linear-gradient(120deg, rgba(0,0,0,.55), rgba(0,0,0,.25))" }} />

        <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 md:py-28 text-center">
          <h1
            className="text-4xl md:text-6xl font-black leading-[1.05] tracking-tight text-white"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <span style={{ color: BROWN }}>LegalQ</span>  AI Legal Category & Consultant Finder
          </h1>
          <p className="mt-5 text-lg md:text-2xl text-slate-100/95 leading-relaxed max-w-3xl mx-auto">
            A chat-first assistant that understands your situation, classifies the legal matter,
            and recommends the right category and vetted sources to find a consultant or lawyer.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {/* Coming soon → contact */}
            <Link
              href="/contact?topic=legalq-coming-soon"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-white font-semibold hover:-translate-y-0.5 transition"
              style={{ backgroundColor: BROWN, boxShadow: `0 8px 24px ${BROWN}55` }}
              title="Coming soon — talk to us"
            >
              Coming Soon · Contact Us
              <ArrowRight className="h-5 w-5" />
            </Link>

            {/* Discuss your project */}
            <Link
              href="/contact?topic=build-legal-bot"
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
              { value: "85%+", label: "Question Deflection (target)" },
              { value: "PII-Safe", label: "Redaction & Logging" },
              { value: "24/7", label: "Availability" },
              { value: "RAG", label: "Cited Sources" },
            ].map((s, i) => (
              <div key={s.label}>
                <div
                  className="text-2xl md:text-3xl font-black mb-2"
                  style={{ color: i % 2 === 0 ? BROWN : ACCENT }}
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
            <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6" style={{ color: BROWN }}>
              Legal information is fragmented and hard to navigate
            </h2>
            <div className="prose prose-slate max-w-none text-[17px] leading-7">
              <ul className="list-disc pl-5">
                <li>
                  <b>Unclear category:</b> Users don’t know if their case is civil, labor, real estate,
                  business formation, IP, family, or something else.
                </li>
                <li>
                  <b>Discovery fatigue:</b> Searching laws, blogs, and forums yields conflicting answers.
                </li>
                <li>
                  <b>Mismatched experts:</b> Contacting the wrong consultant wastes time and money.
                </li>
                <li>
                  <b>Privacy anxiety:</b> People hesitate to share sensitive details online.
                </li>
              </ul>
            </div>
          </div>

          {/* Image slot for you to add later */}
          <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5">
            <Image
              src="/images/cases/legalq-problem.png" // replace with your image
              alt="Navigating legal questions is confusing — LegalQ streamlines the path"
              fill
              className="object-cover"
              priority
            />
  
          </div>
        </div>
      </AnimatedSection>

      {/* APPROACH */}
      <AnimatedSection className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <Badge color={ACCENT}>Our Approach</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mt-3" style={{ color: BROWN }}>
              Classify first, then guide with sources and next steps
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              We co-designed with legal professionals. The assistant extracts entities from the conversation,
              classifies intent into a legal category, and proposes vetted directories & resources—always with guardrails.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card
              icon={<Search className="h-6 w-6" />}
              title="Understanding the case"
              points={[
                "NER over the chat (parties, dates, locations, contracts)",
                "Intent + category prediction (e.g., labor dispute, tenancy)",
                "Follow-ups to resolve ambiguity",
              ]}
            />
            <Card
              icon={<Link2 className="h-6 w-6" />}
              title="Routes & resources"
              points={[
                "Recommends the right consultant category",
                "Suggests official portals & trusted directories",
                "Explains paperwork & prerequisites",
              ]}
            />
            <Card
              icon={<ShieldCheck className="h-6 w-6" />}
              title="Safety & compliance"
              points={[
                "PII redaction and safe-completion policies",
                "Citations and disclaimers (not legal advice)",
                "Audit logs for moderation",
              ]}
            />
          </div>
        </div>
      </AnimatedSection>

      {/* SOLUTION — FEATURES */}
      <AnimatedSection className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <Badge color={BROWN}>Solution</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mt-3" style={{ color: BROWN }}>
              AI copilot with cited answers and the right next step
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              Built for clarity: short, sourced summaries plus the quickest path to a relevant professional.
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
            <h2 className="text-3xl md:text-5xl font-bold mt-3" style={{ color: BROWN }}>
              LLM + RAG with strict guardrails
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              Practical choices for safety and adaptability across jurisdictions.
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
          <Badge color={BROWN}>Impact</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-8" style={{ color: BROWN }}>
            Help people act faster with confidence
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
      <AnimatedSection className="py-20 bg-gradient-to-br from-[#1f2937] to-[#0b1220] text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Bring LegalQ to your users</h2>
          <p className="text-lg text-slate-300">
            Classify → explain → connect. A better way to start any legal journey.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
            <Link
              href="/contact?topic=legalq-coming-soon"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-lg font-semibold text-white hover:-translate-y-0.5 transition"
              style={{ backgroundColor: BROWN, boxShadow: `0 8px 24px ${BROWN}66` }}
            >
              Coming Soon · Contact
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/contact?topic=build-legal-bot"
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
            Case Study path: <code className="bg-white/10 px-2 py-1 rounded">/case-studies/legalq</code>
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
          style={{ backgroundColor: `${BROWN}12`, color: BROWN }}
        >
          {icon}
        </div>
        <h3 className="text-xl font-bold" style={{ color: BROWN }}>{title}</h3>
      </div>
      <ul className="space-y-2 text-slate-700 text-[15px] leading-6">
        {points.map((p) => (
          <li key={p} className="flex gap-2">
            <span className="mt-[7px] h-1.5 w-1.5 rounded-full" style={{ backgroundColor: BROWN }} />
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
          style={{ backgroundColor: `${BROWN}12`, color: BROWN }}
        >
          {icon}
        </div>
        <h3 className="text-xl font-bold" style={{ color: BROWN }}>{title}</h3>
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
          style={{ backgroundColor: `${BROWN}12`, color: BROWN }}
        >
          {icon}
        </div>
        <div className="text-lg font-bold" style={{ color: BROWN }}>{title}</div>
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
    icon: <Brain className="h-6 w-6" />,
    title: "Domain-tuned reasoning",
    desc:
      "Prompts and classifiers tuned for legal taxonomy. The bot asks clarifying follow-ups before suggesting actions.",
    tags: ["Intent", "NER", "Clarifying questions"],
  },
  {
    icon: <BookText className="h-6 w-6" />,
    title: "Cited, plain-English answers",
    desc:
      "Summaries reference source passages so users can verify. Disclaimers keep the tone helpful but clear: not legal advice.",
    tags: ["Summaries", "Citations", "Disclaimers"],
  },
  {
    icon: <Workflow className="h-6 w-6" />,
    title: "Next best step",
    desc:
      "Maps the case to the right consultant category and links to vetted directories and portals to contact a human when needed.",
    tags: ["Routing", "Directories", "Handoffs"],
  },
];

const STACK = [
  {
    title: "AI Core",
    icon: <Brain className="h-5 w-5" />,
    items: [
      "LLM orchestration (prompt templates, tools)",
      "Zero-/few-shot classifiers (legal taxonomy)",
      "Follow-up question planner",
    ],
  },
  {
    title: "Retrieval (RAG)",
    icon: <Database className="h-5 w-5" />,
    items: [
      "Vector DB (policies, FAQs, laws)*",
      "Hybrid search (keyword + semantic)",
      "Chunk citations & score thresholds",
    ],
  },
  {
    title: "Product",
    icon: <Search className="h-5 w-5" />,
    items: [
      "Next.js front-end (chat UI)",
      "Streaming responses & feedback",
      "Contact handoff + directory links",
    ],
  },
  {
    title: "Safety",
    icon: <ShieldCheck className="h-5 w-5" />,
    items: [
      "PII redaction in logs",
      "Abuse filters & rate limits",
      "Audit trail / safe completions",
    ],
  },
];

const IMPACT = [
  { kpi: "↓ time to action", desc: "Users know their category and what to do next within minutes." },
  { kpi: "↑ consultant fit", desc: "Better matches reduce back-and-forth and no-shows." },
  { kpi: "↑ trust", desc: "Citations and disclaimers make guidance clear and verifiable." },
];
