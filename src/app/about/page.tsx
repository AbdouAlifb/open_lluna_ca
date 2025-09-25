"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles, Rocket, Shield, Gauge, Users, Layers, Wrench, Globe2,
  Handshake, HeartHandshake, ArrowRight, Building2, MapPin, Phone
} from "lucide-react";

const BRAND = "#28B7D5";

/* ------------------------ tiny scroll-reveal helper ------------------------ */
function useReveal<T extends HTMLElement>(
  opts: IntersectionObserverInit = { rootMargin: "0px 0px -10% 0px", threshold: 0.18 }
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

function Reveal({
  children,
  delay = 0,
  className = "",
}: React.PropsWithChildren<{ delay?: number; className?: string }>) {
  const { ref, show } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out`}
      style={{
        opacity: show ? 1 : 0,
        transform: `translateY(${show ? 0 : 10}px)`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* --------------------------------- page ---------------------------------- */
export default function About() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* right glow */}
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-[520px] w-[520px] rounded-full"
          style={{ background: `radial-gradient(closest-side, ${BRAND}22, transparent 70%)` }}
        />
        {/* centered watermark aligned with title line */}
        <div className="pointer-events-none absolute inset-x-0 top-14 md:top-16 flex justify-center">
          <span className="select-none text-[12vw] md:text-[160px] leading-none font-extrabold tracking-tighter text-slate-900/5">
            About
          </span>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
          {/* breadcrumb */}
          <nav className="mb-6 text-sm text-slate-500">
            <Link href="/" className="hover:text-slate-700">Home</Link>{" "}
            <span className="mx-2">→</span>
            <span className="font-medium text-slate-700">About</span>
          </nav>

          <div className="grid items-start gap-10 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm">
                <Sparkles className="h-4 w-4" style={{ color: BRAND }} />
                <span className="text-slate-700">Product • Engineering • AI • Delivery</span>
              </div>
              <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-slate-900">
                We design & build software that{" "}
                <span style={{ color: BRAND }}>moves businesses forward</span>
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-slate-700 max-w-3xl">
                Open Lluna is a Morocco–Canada software studio crafting high-performance
                web, mobile, and AI products. We combine design clarity with rigorous
                engineering and an obsession for measurable outcomes.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {[
                  ["Reliable Delivery", Rocket],
                  ["Security by Default", Shield],
                  ["Performance First", Gauge],
                  ["Human-Centered", Users],
                ].map(([label, I]) => {
                  const Icon = I as React.ComponentType<React.SVGProps<SVGSVGElement>>;
                  return (
                    <span key={label as string} className="inline-flex items-center gap-2 rounded-full bg-white ring-1 ring-slate-200 px-3 py-1.5 text-sm">
                      <Icon className="h-4 w-4" style={{ color: BRAND }} />
                      <span className="text-slate-700">{label}</span>
                    </span>
                  );
                })}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-white"
                  style={{ backgroundColor: BRAND, boxShadow: "0 8px 22px rgba(40,183,213,.22)" }}
                >
                  See Our Work
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center rounded-full px-6 py-3 font-semibold border bg-transparent text-slate-900 border-slate-200 hover:bg-slate-50 transition"
                >
                  Explore Services
                </Link>
              </div>
            </Reveal>

            {/* brand card / photo collage */}
            <Reveal delay={120} className="md:col-span-5">
              <div className="relative overflow-hidden rounded-3xl ring-1 ring-slate-200 bg-[#0e1620]">
                <div className="grid grid-cols-2 gap-2 p-3">
                  {[ "/images/cases/1.jpg", "/images/cases/2.jpg", "/images/services/web.jpg", "/images/services/ai.jpg" ].map((src, i) => (
                    <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-xl group">
                      <Image
                        src={src}
                        alt="Open Lluna"
                        fill
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        sizes="(max-width:768px) 50vw, 25vw"
                        priority={i===0}
                      />
                    </div>
                  ))}
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/40 via-black/10 to-transparent" />
              </div>
            </Reveal>
          </div>

          {/* divider */}
          <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="py-6">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                ["200+", "Projects Delivered"],
                ["60+", "Engineers & Designers"],
                ["4.9★", "Client Satisfaction"],
                ["10M+", "Monthly Sessions"],
              ].map(([k, v]) => (
                <div key={v} className="rounded-2xl bg-white ring-1 ring-slate-200 p-6 text-center transition hover:shadow-sm">
                  <div className="text-3xl font-extrabold" style={{ color: BRAND }}>{k}</div>
                  <div className="mt-1 text-slate-600">{v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">What We Do</h2>
            <p className="mt-3 text-lg text-slate-700 max-w-3xl">
              From idea to launch—and beyond. We design, engineer, and operate
              products with clear roadmaps, production-grade code, and continuous
              improvement loops.
            </p>
          </Reveal>

          <div className="mt-7 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: "Product & Discovery", d: "Workshops, user research, roadmaps, and rapid validation.", I: Handshake },
              { t: "Design Systems", d: "Consistent UI kits, accessibility, motion & brand cohesion.", I: Layers },
              { t: "Web & Mobile", d: "Next.js / React Native builds with performance baked in.", I: Wrench },
              { t: "AI & Integrations", d: "RAG pipelines, LLM copilots, data contracts & governance.", I: Shield },
              { t: "Cloud & DevOps", d: "CI/CD, infra as code, observability, zero-downtime deploys.", I: Gauge },
              { t: "Support & Growth", d: "SLOs, roadmapping, experiments and analytics-driven iteration.", I: Rocket },
            ].map(({ t, d, I }, idx) => {
              const Icon = I as React.ComponentType<React.SVGProps<SVGSVGElement>>;
              return (
                <Reveal key={t} delay={80 + idx * 50}>
                  <div
                    className="group rounded-2xl border border-slate-200 p-6 bg-white/80 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:bg-[color:var(--brand,#28B7D5)] hover:border-transparent"
                    style={{ ["--brand" as any]: BRAND }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl ring-1 ring-slate-200 bg-white text-[color:var(--brand,#28B7D5)] group-hover:bg-white/10 group-hover:text-white group-hover:ring-white/30">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="text-xl font-semibold text-slate-900 group-hover:text-white">{t}</h3>
                    </div>
                    <p className="mt-2 text-slate-700 group-hover:text-white/90">{d}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUR STORY / TIMELINE */}
      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Our Story</h2>
            <p className="mt-3 text-lg text-slate-700 max-w-3xl">
              We started as a small engineering pod helping founders ship MVPs. Today,
              we run multi-disciplinary squads for scale-ups and enterprise, delivering
              secure, high-impact software across the globe.
            </p>
          </Reveal>

          <div className="relative mt-8">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-200 md:left-1/2 md:-translate-x-1/2" />
            <ul className="space-y-8">
              {[
                { y: "2019", t: "First Launches", d: "Shipped our first marketplaces and on-demand apps." },
                { y: "2021", t: "AI Joins the Stack", d: "Added LLM/RAG projects and data pipelines." },
                { y: "2023", t: "Global Delivery", d: "Hybrid squads across Morocco & Canada for 24/5 coverage." },
                { y: "2024+", t: "Sustained Scale", d: "CI/CD, observability, and SLAs powering steady growth." },
              ].map((n, i) => (
                <Reveal key={n.y} delay={60 + i * 80}>
                  <li className="relative md:grid md:grid-cols-2 md:gap-10">
                    <div className={`pl-10 md:pl-0 md:pr-10 ${i % 2 === 0 ? "md:col-start-1" : "md:col-start-2"}`}>
                      <div className="relative rounded-2xl border border-slate-200 bg-white p-5 transition hover:shadow-md">
                        <span className="text-sm font-semibold text-slate-500">{n.y}</span>
                        <h4 className="mt-1 text-lg font-semibold">{n.t}</h4>
                        <p className="mt-1.5 text-slate-700">{n.d}</p>
                      </div>
                    </div>
                    {/* dot */}
                    <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-3 h-3 w-3 rounded-full" style={{ backgroundColor: BRAND }} />
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* OFFICES */}
      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Our Offices</h2>
            <p className="mt-3 text-lg text-slate-700 max-w-3xl">
              We’re local where it matters and remote where it counts—Ottawa and Casablanca hubs with distributed delivery.
            </p>
          </Reveal>

          <div className="mt-7 grid md:grid-cols-2 gap-6">
            {/* Morocco */}
            <Reveal delay={60}>
              <div className="relative overflow-hidden rounded-3xl ring-1 ring-slate-200 bg-white p-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-[color:var(--brand,#28B7D5)]/12 text-[color:var(--brand,#28B7D5)] flex items-center justify-center" style={{ ["--brand" as any]: BRAND }}>
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Casablanca, Morocco</h3>
                    <p className="text-slate-600">MENA Delivery Hub</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-slate-700">
                  <MapPin className="h-4 w-4 text-slate-500" />
                  <span>Greater Casablanca Area</span>
                </div>
                <div className="mt-2 flex items-center gap-2 text-slate-700">
                  <Phone className="h-4 w-4 text-slate-500" />
                  <span>+212-708129950</span>
                </div>
              </div>
            </Reveal>

            {/* Canada */}
            <Reveal delay={100}>
              <div className="relative overflow-hidden rounded-3xl ring-1 ring-slate-200 bg-white p-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-[color:var(--brand,#28B7D5)]/12 text-[color:var(--brand,#28B7D5)] flex items-center justify-center" style={{ ["--brand" as any]: BRAND }}>
                    <Globe2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Ottawa, Canada</h3>
                    <p className="text-slate-600">North America Delivery Hub</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-slate-700">
                  <MapPin className="h-4 w-4 text-slate-500" />
                  <span>National Capital Region</span>
                </div>
                <div className="mt-2 flex items-center gap-2 text-slate-700">
                  <Phone className="h-4 w-4 text-slate-500" />
                  <span>+1 (873) 822-1800</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* CTA */}
          <Reveal delay={140}>
            <div className="mt-8 rounded-3xl bg-[#0e1620] p-6 sm:p-8 lg:p-12 ring-1 ring-black/10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-white">
                    Let’s build something users love
                  </h3>
                  <p className="mt-3 text-white/85 max-w-prose">
                    Talk to our product & engineering leads about your roadmap, timeline, and KPIs.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <span className="inline-flex items-center rounded-full bg-white/10 text-white px-3 py-1.5 text-sm ring-1 ring-white/10">
                      <Users className="h-4 w-4 mr-1" /> Embedded Squads
                    </span>
                    <span className="inline-flex items-center rounded-full bg-white/10 text-white px-3 py-1.5 text-sm ring-1 ring-white/10">
                      <Shield className="h-4 w-4 mr-1" /> Security-Focused
                    </span>
                    <span className="inline-flex items-center rounded-full bg-white/10 text-white px-3 py-1.5 text-sm ring-1 ring-white/10">
                      <Handshake className="h-4 w-4 mr-1" /> Transparent Delivery
                    </span>
                  </div>
                </div>
                <div className="flex md:justify-end">
                  <Link
                    href="/contact?topic=about"
                    className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-white"
                    style={{ backgroundColor: BRAND, boxShadow: "0 10px 28px rgba(40,183,213,.28)" }}
                  >
                    Book a Free Consultation
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Our Principles</h2>
            <p className="mt-3 text-lg text-slate-700 max-w-3xl">
              We keep the bar high: ship quality, protect users, and measure impact.
            </p>
          </Reveal>

          <div className="mt-7 grid md:grid-cols-3 gap-6">
            {[
              { t: "Outcomes Over Outputs", d: "We align on KPIs and ship the smallest increment that moves the metric.", I: Gauge },
              { t: "Security & Privacy", d: "Principle of least privilege, zero-trust thinking, secure defaults.", I: Shield },
              { t: "Craft & Care", d: "Readable code, great UX, accessible experiences, and helpful docs.", I: HeartHandshake },
            ].map(({ t, d, I }, i) => {
              const Icon = I as React.ComponentType<React.SVGProps<SVGSVGElement>>;
              return (
                <Reveal key={t} delay={60 + i * 60}>
                  <div className="rounded-2xl border border-slate-200 p-6 bg-white/80 transition hover:shadow-sm">
                    <Icon className="h-6 w-6" style={{ color: BRAND }} />
                    <h4 className="mt-3 text-lg font-semibold">{t}</h4>
                    <p className="mt-1.5 text-slate-700">{d}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
