"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  Brain,
  Wand2,
  Bot,
  FlaskConical,
  Shield,
  Database,
  Search,
  Layers,
  Cable,
  Cloud,
  GitBranch,
  Gauge,
  Rocket,
  Sparkles,
  MessageSquare,
  AudioLines,
  Image as ImageIcon,
  BarChart3,
  Settings2,
  Repeat,
  Code2,
  Puzzle,
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
  Icon = Sparkles,
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
export default function AIDevelopmentClient() {
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
              <Brain className="h-4 w-4" style={{ color: BRAND }} />
              <span className="text-slate-700">RAG • Agents • Evals • Safety</span>
            </div>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              AI Development for{" "}
              <span style={{ color: BRAND }}>Real Business Impact</span>
            </h1>
            <p className="mt-5 text-lg text-slate-700 max-w-3xl">
              We build production-grade AI: retrieval-augmented generation, task-specific agents,
              speech/vision pipelines, and robust evaluations—wired to your data with security and
              observability so results are reliable, safe, and measurable.
            </p>
            <div className="mt-7">
              <Link
                href="/contact?topic=ai"
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
                src="/images/services/ai.jpg"
                alt="AI development"
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
        title="AI Services That Ship Value"
        subtitle="From prototypes to governed production systems, built to scale and stay safe."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Pill title="RAG Systems" text="Ground LLMs in your documents & data with hybrid search, chunking, and re-ranking." Icon={Search} />
          <Pill title="AI Agents & Orchestration" text="Multi-step agents with tools, memory, and guardrails for ops & support." Icon={Bot} />
          <Pill title="Evals & Quality" text="Golden sets, automatic grading, regression gates, and human-in-the-loop." Icon={FlaskConical} />
          <Pill title="Safety & Compliance" text="PII redaction, toxicity filters, policy checks, and audit trails." Icon={Shield} />
          <Pill title="Speech & Vision" text="Transcription, TTS, voice bots, OCR, and image understanding." Icon={AudioLines} />
          <Pill title="Fine-Tuning & Prompting" text="Instruction tuning, LoRA, and prompt optimization for your domain." Icon={Wand2} />
          <Pill title="Knowledge & Vectors" text="Vector DBs, embeddings, and syncers to keep corpora fresh & relevant." Icon={Database} />
          <Pill title="APIs & Integrations" text="CRMs, ticketing, ATS, and internal tools with OAuth/SSO & webhooks." Icon={Cable} />
          <Pill title="MLOps & Cloud" text="Pipelines, feature stores, CI/CD, monitoring, and cost controls." Icon={Cloud} />
        </div>
      </Section>

      {/* Solutions */}
      <Section title="AI Solutions that Broaden Prospects" subtitle="Targeted use-cases with measurable KPIs.">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card title="Support Copilots" text="Deflect tickets with cited answers & workflows." image="/images/cases/3.jpg" href="/case-studies/legalq" />
          <Card title="Sales & CRM AI" text="Summaries, next-best-actions, and pipeline hygiene." />
          <Card title="Voice Interviewers" text="Adaptive questions, structured scoring, ATS sync." image="/images/cases/4.jpg" href="/case-studies/hiresense" />
          <Card title="Ops Automations" text="Agentic bots that read, decide, and execute safely." />
        </div>
        <div className="mt-6">
          <Link href="/contact?topic=ai" className="inline-flex items-center gap-2 rounded-full px-5 py-3 font-semibold text-white" style={{ backgroundColor: BRAND }}>
            Discuss Project Scope
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* Pillars */}
      <Section title="Purpose-Built AI Engineering">
        <div className="grid md:grid-cols-3 gap-6">
          <Pill title="01 · Reliable" text="Deterministic tool use, retries, and fallbacks with eval gates." Icon={Gauge} />
          <Pill title="02 · Governed" text="Safety filters, consent, and data retention controls." Icon={Shield} />
          <Pill title="03 · Scalable" text="Batch & streaming, multi-tenant isolation, cost budgets." Icon={GitBranch} />
        </div>
      </Section>

      {/* Tech stack tabs */}
      <TechStack />

      {/* Process */}
      <Section title="Our Simple, Frictionless AI Delivery Workflow">
        <ol className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            ["Discover & Frame", "Jobs-to-be-done, risks, KPIs.", Layers],
            ["Data & Grounding", "Sources, ETL, embeddings, vector schema.", Database],
            ["Prototype & Eval", "Prompts, tools, and golden sets.", FlaskConical],
            ["Harden & Govern", "Safety, redaction, and policies.", Shield],
            ["Ship & Observe", "CI/CD, tracing, cost & quality dashboards.", BarChart3],
            ["Iterate & Improve", "Feedback loops, AB tests, tuning.", Repeat],
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
            <Stat k="30+" v="AI Specialists" />
            <Stat k="85%" v="Avg Ticket Deflection" />
            <Stat k="50%+" v="Time Saved / Workflow" />
            <Stat k="24/7" v="Agent Coverage" />
          </div>
        </div>
      </section>

      {/* Case study teasers */}
      <Section title="Recent AI Projects">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card title="LegalQ – Law Copilot" text="RAG with citations and guardrails" image="/images/cases/3.jpg" href="/case-studies/legalq" />
          <Card title="HireSense – AI Interviewer" text="Adaptive scoring + ATS" image="/images/cases/4.jpg" href="/case-studies/hiresense" />
          <Card title="Support Summarizer" text="LLM summaries + routing" image="/images/cases/1.jpg" />
          <Card title="Insights Assistant" text="BI queries in plain English" image="/images/cases/2.jpg" />
        </div>
      </Section>

      {/* Industries */}
      <Section title="Domain Coverage">
        <div className="flex flex-wrap gap-2">
          {["Support","Sales","HR/ATS","Fintech","Healthcare","Logistics","eCommerce","Government","Real Estate","Travel","EdTech","Media"].map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>
      </Section>

      {/* Benefits */}
      <Section title="Why AI with Open Lluna">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Pill title="Measured Quality" text="Automatic evals & human review loops." Icon={FlaskConical} />
          <Pill title="Safer Outputs" text="Policy enforcement, redaction, and audit." Icon={Shield} />
          <Pill title="Faster Iteration" text="Feature flags, prompt repos, and OTA configs." Icon={GitBranch} />
          <Pill title="Lower Cost" text="Caching, distillation, and smart routing." Icon={Gauge} />
          <Pill title="Great UX" text="Voice, chat, multimodal, and latency budgets." Icon={MessageSquare} />
          <Pill title="Seamless Integration" text="CRMs, data lakes, queues, and webhooks." Icon={Cable} />
        </div>
      </Section>

      {/* FAQs */}
      <Section title="AI Development FAQs">
        <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 sm:p-6">
          {[
            ["Which models do you use?", "Open-weight and hosted LLMs; we select per task, latency, cost, and quality."],
            ["Can you keep our data private?", "Yes—VPC/private endpoints, encryption, and no data is used for model training unless you opt-in."],
            ["How do you measure quality?", "Golden sets, regression evals, dashboards, and periodic human review."],
            ["Do you support voice/vision?", "Yes—ASR, TTS, and OCR/vision pipelines with guardrails."],
            ["What’s the delivery timeline?", "We start with a short discovery and a milestone plan with options."],
            ["Do you provide maintenance?", "Yes—SLAs, monitoring, prompt ops, and model/version management."],
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
              <h3 className="text-3xl md:text-4xl font-extrabold text-white">Ready to Ship Production AI?</h3>
              <p className="mt-3 text-white/85 max-w-prose">
                Let’s align on use-cases, data, safety, and KPIs—then deliver measurable wins.
              </p>
              <div className="mt-6">
                <div className="flex flex-wrap gap-3">
                  <Chip>RAG</Chip>
                  <Chip>Agents</Chip>
                  <Chip>Evals</Chip>
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

/* ------------------------------- Tech Stack ------------------------------- */
function TechStack() {
  const tabs = ["Models", "Retrieval & Data", "Safety & Evals", "MLOps & Delivery"] as const;
  const [active, setActive] = React.useState<(typeof tabs)[number]>("Models");

  const CONTENT: Record<
    (typeof tabs)[number],
    { label: string; Icon: React.ComponentType<React.SVGProps<SVGSVGElement>> }[]
  > = {
    Models: [
      { label: "Chat / Reasoning LLMs", Icon: Brain },
      { label: "Vision Models", Icon: ImageIcon },
      { label: "Speech (ASR/TTS)", Icon: AudioLines },
      { label: "Prompting / Fine-Tuning", Icon: Wand2 },
    ],
    "Retrieval & Data": [
      { label: "Hybrid Search", Icon: Search },
      { label: "Vector DBs", Icon: Database },
      { label: "Connectors & ETL", Icon: Cable },
      { label: "Metadata & Re-ranking", Icon: Layers },
    ],
    "Safety & Evals": [
      { label: "PII Redaction", Icon: Shield },
      { label: "Policy Filters", Icon: Shield },
      { label: "Golden Sets", Icon: FlaskConical },
      { label: "Dashboards", Icon: BarChart3 },
    ],
    "MLOps & Delivery": [
      { label: "CI/CD Pipelines", Icon: GitBranch },
      { label: "Config & Prompt Ops", Icon: Settings2 },
      { label: "Telemetry & Costs", Icon: Gauge },
      { label: "Canary / Rollbacks", Icon: Repeat },
    ],
  };

  return (
    <Section title="Tech Stack That Powers Our AI Development">
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
