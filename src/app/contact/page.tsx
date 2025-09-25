"use client";

import * as React from "react";
import Link from "next/link";
import {
  User2,
  Mail,
  Phone,
  MessageSquareText,
  MapPin,
  Clock,
  Shield,
  CheckCircle2,
  XCircle,
  X,
} from "lucide-react";

const BRAND = "#28B7D5";

/* ------------------------------- Scroll reveal ------------------------------- */
function useReveal<T extends HTMLElement>(
  opts: IntersectionObserverInit = { rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
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
  className = "",
  delay = 0,
}: React.PropsWithChildren<{ className?: string; delay?: number }>) {
  const { ref, show } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`${className} transform transition-all duration-700 ease-out`}
      style={{
        opacity: show ? 1 : 0,
        translate: show ? "0 0" : "0 12px",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ------------------------------ Result Modal ------------------------------ */
function ResultModal({
  open,
  onClose,
  ok,
  message,
}: {
  open: boolean;
  onClose: () => void;
  ok: boolean;
  message: string;
}) {
  return (
    <div
      className={`fixed inset-0 z-[60] ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          open ? "bg-black/40 opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Sheet-like modal (starts a bit lower for safe top spacing) */}
      <div
        className={`absolute left-1/2 top-10 w-[min(640px,92vw)] -translate-x-1/2
        rounded-2xl bg-white shadow-2xl ring-1 ring-black/10 overflow-hidden
        transition-all duration-300 ${
          open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
        }`}
        role="dialog"
        aria-modal="true"
      >
        {/* Colored top border */}
        <div
          className="h-1.5"
          style={{ background: ok ? BRAND : "#ef4444" /* red-500 */ }}
        />

        {/* Header */}
        <div className="flex items-start justify-between p-5">
          <div className="flex items-center gap-3">
            <span
              className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${
                ok ? "bg-[color:var(--brand,#28B7D5)]/10 text-[color:var(--brand,#28B7D5)]" : "bg-red-50 text-red-600"
              }`}
              style={{ ["--brand" as any]: BRAND }}
            >
              {ok ? <CheckCircle2 className="h-6 w-6" /> : <XCircle className="h-6 w-6" />}
            </span>
            <div>
              <h3 className="text-xl font-semibold">
                {ok ? "Thanks! Your message is on its way." : "We couldn’t send your message"}
              </h3>
              <p className="text-slate-600 text-sm">
                {ok ? "We’ll get back to you within 24–48 hours." : "Please review the form and try again."}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-slate-100 transition"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body (scrollable) */}
        <div className="px-5 pb-5 max-h-[60vh] overflow-auto">
          <div className="rounded-xl border border-slate-200 p-4 bg-slate-50/60">
            <p className="text-slate-700 leading-relaxed">{message}</p>
          </div>

          {ok ? (
            <div className="mt-4 text-sm text-slate-600">
              Tip: Feel free to also email us at{" "}
              <a href="mailto:contact@openlluna.com" className="underline" style={{ color: BRAND }}>
                contact@openlluna.com
              </a>{" "}
              if it’s time-sensitive.
            </div>
          ) : (
            <div className="mt-4 text-sm text-slate-600">
              If this keeps happening, email us at{" "}
              <a href="mailto:contact@openlluna.com" className="underline" style={{ color: BRAND }}>
                contact@openlluna.com
              </a>{" "}
              and we’ll jump on it.
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="p-5 border-t bg-white/80 flex items-center justify-end gap-2">
          <button
            onClick={onClose}
            className="rounded-full px-4 py-2 text-slate-700 hover:bg-slate-100 transition"
          >
            Close
          </button>
          {ok && (
            <Link
              href="/services"
              className="rounded-full px-4 py-2 text-white"
              style={{ backgroundColor: BRAND }}
            >
              Explore Services
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

/* --------------------------------- Page ---------------------------------- */
export default function Contact() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalOk, setModalOk] = React.useState(true);
  const [modalMsg, setModalMsg] = React.useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    const body = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement)?.value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      // website: (form.elements.namedItem("website") as HTMLInputElement)?.value, // honeypot
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const json = await res.json().catch(() => ({}));
      if (res.ok) {
        form.reset();
        setModalOk(true);
        setModalMsg("Your message has been sent successfully. Our team will reply within 24–48 hours.");
      } else {
        setModalOk(false);
        setModalMsg(json?.error ?? "Something went wrong while sending your message. Please try again.");
      }
    } catch (err) {
      setModalOk(false);
      setModalMsg("Network error. Please check your connection and try again.");
    } finally {
      setModalOpen(true);
    }
  }

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-[460px] w-[460px] rounded-full opacity-70"
          style={{ background: `radial-gradient(closest-side, ${BRAND}22, transparent 70%)` }}
        />
        <div className="mx-auto max-w-7xl px-4 pt-12 md:pt-16 pb-6">
          <Reveal>
            <p className="text-sm text-slate-500">We’d love to hear from you</p>
            <h1 className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight">
              Get in <span style={{ color: BRAND }}>Touch</span>
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-slate-700">
              Tell us about your project and goals. We typically reply within 24–48 hours.
            </p>
          </Reveal>
        </div>
      </section>

      {/* GRID: Form + Offices */}
      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-12 gap-8">
          {/* LEFT: Form */}
          <div className="md:col-span-7 lg:col-span-8">
            <Reveal className="h-full">
              <div className="relative rounded-3xl bg-white ring-1 ring-slate-200 shadow-sm p-6 sm:p-8">
                {/* subtle right shimmer */}
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 rounded-r-3xl bg-[linear-gradient(to_left,rgba(40,183,213,0.10),transparent)]" />
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
                  Tell us about your project
                </h2>
                <p className="mt-1.5 text-slate-600">A quick brief is enough — we’ll follow up for details.</p>

                <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
                  {/* Name */}
                  <div className="relative">
                    <User2 className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Full Name"
                      className="h-12 w-full rounded-xl border border-slate-200 pl-11 pr-3 text-[15px] outline-none focus:border-[color:var(--brand,#28B7D5)]"
                      style={{ ["--brand" as any]: BRAND }}
                    />
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Email"
                      className="h-12 w-full rounded-xl border border-slate-200 pl-11 pr-3 text-[15px] outline-none focus:border-[color:var(--brand,#28B7D5)]"
                      style={{ ["--brand" as any]: BRAND }}
                    />
                  </div>

                  {/* Phone (optional) */}
                  <div className="relative">
                    <Phone className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone (optional)"
                      className="h-12 w-full rounded-xl border border-slate-200 pl-11 pr-3 text-[15px] outline-none focus:border-[color:var(--brand,#28B7D5)]"
                      style={{ ["--brand" as any]: BRAND }}
                    />
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <MessageSquareText className="pointer-events-none absolute left-3 top-3 h-5 w-5 text-slate-400" />
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Project description, timelines, goals…"
                      className="w-full rounded-xl border border-slate-200 pl-11 pr-3 py-3 text-[15px] outline-none focus:border-[color:var(--brand,#28B7D5)]"
                      style={{ ["--brand" as any]: BRAND }}
                    />
                  </div>

                  {/* Honeypot (optional, hidden) */}
                  {/* <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" /> */}

                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <p className="text-xs text-slate-500">
                      By submitting, you agree to our{" "}
                      <Link href="/privacy" className="font-medium underline" style={{ color: BRAND }}>
                        Privacy Policy
                      </Link>
                      .
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center h-11 rounded-full px-6 font-semibold text-white transition hover:shadow-lg"
                      style={{ backgroundColor: BRAND, boxShadow: "0 8px 22px rgba(40,183,213,.22)" }}
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </Reveal>
          </div>

          {/* RIGHT: Offices */}
          <div className="md:col-span-5 lg:col-span-4">
            <div className="grid gap-6">
              <Reveal delay={50}>
                <div className="rounded-3xl border border-slate-200 p-6 bg-white/90">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5" style={{ color: BRAND }} />
                    <h3 className="text-lg font-semibold">Casablanca, Morocco</h3>
                  </div>
                  <p className="mt-2 text-slate-700">
                    Boulevard d’Anfa, Casablanca 20000
                  </p>
                  <div className="mt-3 flex items-center gap-3">
                    <Phone className="h-4 w-4 text-slate-500" />
                    <a className="font-medium" href="tel:+212708129950" style={{ color: BRAND }}>
                      +212-708129950
                    </a>
                  </div>
                  <div className="mt-2 flex items-center gap-3">
                    <Clock className="h-4 w-4 text-slate-500" />
                    <span className="text-sm text-slate-600">Mon–Fri · 9:00–18:00</span>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="rounded-3xl border border-slate-200 p-6 bg-white/90">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5" style={{ color: BRAND }} />
                    <h3 className="text-lg font-semibold">Ottawa, Canada</h3>
                  </div>
                  <p className="mt-2 text-slate-700">ByWard Market, Ottawa, ON</p>
                  <div className="mt-3 flex items-center gap-3">
                    <Phone className="h-4 w-4 text-slate-500" />
                    <a className="font-medium" href="tel:+18738221800" style={{ color: BRAND }}>
                      +1 (873) 822-1800
                    </a>
                  </div>
                  <div className="mt-2 flex items-center gap-3">
                    <Clock className="h-4 w-4 text-slate-500" />
                    <span className="text-sm text-slate-600">Mon–Fri · 9:00–18:00 (ET)</span>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={150}>
                <div className="rounded-3xl border border-slate-200 p-6 bg-[#0e1620] text-white ring-1 ring-black/10">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-white/90" />
                    <h3 className="text-lg font-semibold">Why Teams Choose Us</h3>
                  </div>
                  <ul className="mt-3 space-y-2 text-white/85 text-sm">
                    <li>• Fast, transparent communication</li>
                    <li>• Senior engineering standards</li>
                    <li>• Security & privacy first</li>
                    <li>• Results, not just deliverables</li>
                  </ul>
                  <div className="mt-5">
                    <Link
                      href="/services"
                      className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold text-white"
                      style={{ backgroundColor: BRAND, boxShadow: "0 8px 22px rgba(40,183,213,.22)" }}
                    >
                      Explore Services
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA strip */}
      <section className="pb-12 md:pb-16">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="rounded-3xl bg-[#0e1620] p-6 sm:p-8 lg:p-12 ring-1 ring-black/10">
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div className="md:col-span-2">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                    Prefer email? We’re quick on replies.
                  </h3>
                  <p className="mt-2 text-white/85">
                    Reach us directly at{" "}
                    <a href="mailto:contact@openlluna.com" className="underline">
                      contact@openlluna.com
                    </a>
                    . We’ll route your message to the right expert.
                  </p>
                </div>
                <div className="flex md:justify-end">
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center rounded-full px-6 py-3 text-white font-semibold"
                    style={{ backgroundColor: BRAND, boxShadow: "0 8px 22px rgba(40,183,213,.22)" }}
                  >
                    See What We Do
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Modals */}
      <ResultModal
        open={modalOpen}
        ok={modalOk}
        message={modalMsg}
        onClose={() => setModalOpen(false)}
      />
    </main>
  );
}
