"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Code2, Smartphone, Cpu, Brain, Users } from "lucide-react";
import "@/styles/hero.css";
import SectionTitle from "./SectionTitle";

type Item = {
  title: string;
  description: string;
  imageSrc?: string;
  icon: "code" | "mobile" | "software" | "ai" | "staff";
  href: string;           // <-- NEW
};

const ICONS = {
  code: Code2,
  mobile: Smartphone,
  software: Cpu,
  ai: Brain,
  staff: Users,
} as const;

const SERVICES: Item[] = [
  {
    title: "Web Development",
    description:
      "Responsive, high-speed websites with secure, scalable back-ends, optimized for engagement and efficiency.",
    imageSrc: "/images/services/web.jpg",
    icon: "code",
    href: "/services/web-development",         // <-- NEW
  },
  {
    title: "Mobile Development (iOS & Android)",
    description:
      "Native-quality apps with React Native/Expo, smooth releases, OTA updates, and robust telemetry.",
    imageSrc: "/images/services/mobile.jpg",
    icon: "mobile",
    href: "/services/mobile-development",
  },
  {
    title: "Software Development",
    description:
      "Custom software to enhance processes with strong integrations, security, and scalable designs.",
    imageSrc: "/images/services/software.jpg",
    icon: "software",
    href: "/services/software-development",
  },
  {
    title: "AI Development",
    description:
      "RAG pipelines, LLM integrations, evaluations, and domain-specific copilots wired to your data.",
    imageSrc: "/images/services/ai.jpg",
    icon: "ai",
    href: "/services/ai-development",
  },
  {
    title: "IT Staff Augmentation",
    description:
      "Flexible squads—engineers, designers, QA, DevOps—embedded in your team with delivery SLAs.",
    imageSrc: "/images/services/staff.jpg",
    icon: "staff",
    href: "/services/staff-augmentation",
  },
];

export default function ServicesCarousel() {
  const ref = React.useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = React.useState(false);
  const [canRight, setCanRight] = React.useState(false);

  const update = React.useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  React.useEffect(() => {
    update();
    const el = ref.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, [update]);

  const scrollByCard = (dir: "left" | "right") => {
    const el = ref.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const delta = (card?.offsetWidth ?? 360) * 1.1 * (dir === "left" ? -1 : 1);
    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <section className="py-12 md:py-16">
      <SectionTitle title="Services We Provide" watermark="Services" />

      <div className="mx-auto max-w-7xl px-4 mt-6">
        <div
          ref={ref}
          className="overflow-x-auto no-scrollbar scroll-smooth overscroll-x-contain snap-x snap-mandatory px-2 pb-1"
        >
          <div className="inline-flex gap-5 pr-6">
            {SERVICES.map((s) => {
              const Icon = ICONS[s.icon];
              return (
                <Link
                  key={s.title}
                  href={s.href}
                  className="
                    group relative w-[340px] sm:w-[380px] md:w-[400px] lg:w-[420px]
                    snap-start overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-black/5
                    transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
                  "
                  aria-label={`${s.title} – View details`}
                >
                  {/* Hover image layer */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {s.imageSrc ? (
                      <>
                        <Image
                          src={s.imageSrc}
                          alt=""
                          fill
                          sizes="(max-width: 768px) 80vw, 33vw"
                          className="object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,.28),rgba(0,0,0,.6))]" />
                      </>
                    ) : (
                      <div className="absolute inset-0 bg-[#0E1620]" />
                    )}
                  </div>

                  {/* CONTENT */}
                  <div className="relative z-10 p-7 md:p-8 flex flex-col min-h-[320px]">
                    <div
                      className="
                        inline-flex items-center justify-center w-16 h-16 rounded-xl border
                        text-[var(--brand,#28B7D5)] border-[var(--brand,#28B7D5)]
                        group-hover:text-white group-hover:border-white transition-colors
                      "
                    >
                      <Icon className="w-8 h-8" strokeWidth={2.1} />
                    </div>

                    <h3
                      className="
                        mt-6 text-2xl font-semibold tracking-tight text-[#1B2B3A]
                        group-hover:text-white transition-colors
                      "
                    >
                      {s.title}
                    </h3>

                    <p
                      className="
                        mt-3 text-[#5C6B7A] leading-relaxed
                        group-hover:text-white/90 transition-colors
                      "
                    >
                      {s.description}
                    </p>

                    <div className="mt-auto pt-6 flex justify-end">
                      <span
                        className="
                          inline-flex items-center justify-center w-11 h-11 rounded-full border
                          border-[#D9E3EA] text-[#2F3D4A]
                          group-hover:border-[var(--brand,#28B7D5)]
                          group-hover:text-[var(--brand,#28B7D5)]
                          bg-white/95 group-hover:bg-white/10 transition-colors
                        "
                        aria-hidden
                      >
                        <ArrowRight className="w-5 h-5" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Arrows BELOW the track */}
        <div className="mt-4 flex items-center justify-center gap-4">
          <button
            aria-label="Scroll left"
            onClick={() => scrollByCard("left")}
            disabled={!canLeft}
            className="
              inline-flex items-center justify-center rounded-full border px-3 py-2
              bg-white text-[var(--brand,#28B7D5)] shadow
              disabled:opacity-40 disabled:cursor-not-allowed
            "
          >
            <ArrowLeft />
          </button>

        <button
          aria-label="Scroll right"
          onClick={() => scrollByCard("right")}
          disabled={!canRight}
          className="
              inline-flex items-center justify-center rounded-full border px-3 py-2
              bg-white text-[var(--brand,#28B7D5)] shadow
              disabled:opacity-40 disabled:cursor-not-allowed
            "
        >
          <ArrowRight />
        </button>
        </div>
      </div>
    </section>
  );
}
