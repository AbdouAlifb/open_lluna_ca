"use client";

import Link from "next/link";
import { User2, Mail, Phone, MessageSquareText } from "lucide-react";

const BRAND = "#28B7D5";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden">
      {/* soft right glow */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(80%_60%_at_100%_40%,rgba(40,183,213,0.14),transparent_60%)]" />

      <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
        {/* Breadcrumb */}
        <nav className="mb-5 text-sm text-slate-500">
          <Link href="/" className="hover:text-slate-700">
            Home
          </Link>{" "}
          <span className="mx-2">→</span>
          <span className="font-medium text-slate-700">Services</span>
        </nav>

        <div className="grid items-start gap-10 md:grid-cols-12">
          {/* LEFT: heading & bullets */}
          <div className="md:col-span-8">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-slate-900">
              Transform Business Growth with{" "}
              <span className="px-1 rounded" style={{ color: BRAND }}>
                Revolutionary Services
              </span>
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-slate-700 max-w-3xl">
              Our unwavering commitment to innovation and customer satisfaction
              drives us to deliver transformative services that meet the
              ever-evolving demands of modern businesses—ensuring exceptional
              results and measurable impact.
            </p>

            <div className="mt-7 grid gap-x-10 gap-y-3 sm:grid-cols-2">
              {[
                "Strategic roadmap planning",
                "Process automation implementation",
                "Cloud-based solutions",
                "Data-driven insights",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span
                    className="mt-2 inline-flex h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: BRAND }}
                    aria-hidden
                  />
                  <span className="text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: compact consultation card */}
          <div className="md:col-span-4">
            <div className="md:sticky md:top-10">
              <div className="relative ml-auto max-w-[420px] rounded-2xl bg-white/90 backdrop-blur ring-1 ring-slate-200 shadow-sm p-5 sm:p-6">
                {/* subtle vertical glow on right */}
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-[linear-gradient(to_left,rgba(40,183,213,0.1),transparent)] rounded-r-2xl" />

                <h2 className="text-2xl font-bold leading-tight text-slate-900">
                  Book a Free <span style={{ color: BRAND }}>Consultation</span>
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                  Quick chat to scope goals, timelines, and fit.
                </p>

                <form
                  className="mt-3 grid gap-3"
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  {/* Name */}
                  <div className="relative">
                    <User2 className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
                    <input
                      type="text"
                      required
                      className="h-10 w-full rounded-lg border border-slate-200 pl-10 pr-3 text-[15px] outline-none focus:border-[color:var(--brand,#28B7D5)]"
                      placeholder="Full name"
                      style={{ ["--brand" as any]: BRAND }}
                    />
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
                    <input
                      type="email"
                      required
                      className="h-10 w-full rounded-lg border border-slate-200 pl-10 pr-3 text-[15px] outline-none focus:border-[color:var(--brand,#28B7D5)]"
                      placeholder="Work email"
                      style={{ ["--brand" as any]: BRAND }}
                    />
                  </div>

                  {/* Phone (Optional) */}
                  <div className="relative">
                    <Phone className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
                    <input
                      type="tel"
                      className="h-10 w-full rounded-lg border border-slate-200 pl-10 pr-3 text-[15px] outline-none focus:border-[color:var(--brand,#28B7D5)]"
                      placeholder="Phone (optional)"
                      style={{ ["--brand" as any]: BRAND }}
                    />
                  </div>

                  {/* Brief */}
                  <div className="relative">
                    <MessageSquareText className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
                    <textarea
                      rows={3}
                      className="w-full rounded-lg border border-slate-200 pl-10 pr-3 py-2 text-[15px] outline-none focus:border-[color:var(--brand,#28B7D5)]"
                      placeholder="Briefly describe timeline, scope, goals"
                      style={{ ["--brand" as any]: BRAND }}
                    />
                  </div>

                  <p className="text-[11px] leading-5 text-slate-500">
                    By submitting, you agree to our{" "}
                    <Link
                      href="/privacy"
                      className="font-medium underline"
                      style={{ color: BRAND }}
                    >
                      Privacy Policy
                    </Link>
                    .
                  </p>

                  <button
                    type="submit"
                    className="mt-0.5 h-11 w-full rounded-full font-semibold text-white transition"
                    style={{
                      backgroundColor: BRAND,
                      boxShadow: "0 8px 22px rgba(40,183,213,.22)",
                    }}
                    onMouseEnter={(e) => {
                      const btn = e.currentTarget as HTMLButtonElement;
                      btn.style.backgroundColor = "white";
                      btn.style.color = BRAND;
                      btn.style.boxShadow = `inset 0 0 0 1px ${BRAND}`;
                    }}
                    onMouseLeave={(e) => {
                      const btn = e.currentTarget as HTMLButtonElement;
                      btn.style.backgroundColor = BRAND;
                      btn.style.color = "white";
                      btn.style.boxShadow = "0 8px 22px rgba(40,183,213,.22)";
                    }}
                  >
                    Get In Touch
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
