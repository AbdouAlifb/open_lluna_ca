"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";

function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = React.useRef<T | null>(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduce) {
      setInView(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.unobserve(entry.target); // fire once
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.2, ...options }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [options]);

  return { ref, inView };
}

export default function LlunaAIPanel() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
          What’s New at{" "}
          <span className="text-[color:var(--brand,#28B7D5)]">Open Lluna</span>
        </h2>

        {/* Card */}
        <div
          ref={ref}
          className={[
            "relative overflow-hidden rounded-[28px] md:rounded-[32px] bg-[#0e1620]",
            // entrance of the whole card (subtle pop)
            "transition-transform duration-700 ease-out",
            inView ? "translate-y-0" : "translate-y-2",
          ].join(" ")}
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />

          <div className="grid md:grid-cols-2 items-stretch">
            {/* LEFT: text */}
            <div
              className={[
                "relative z-10 p-6 sm:p-8 lg:p-12",
                // text block reveal
                "transition-all duration-700 ease-out",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
              ].join(" ")}
            >
              <h3
                className={[
                  "text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white",
                  // headline slight delay
                  "transition-transform duration-700 ease-out",
                  inView ? "translate-y-0" : "translate-y-2",
                ].join(" ")}
                style={{ transitionDelay: inView ? "80ms" : "0ms" }}
              >
                Discover What{" "}
                <span className="text-[color:var(--brand,#28B7D5)]">Lluna&nbsp;AI</span>{" "}
                Can Do For You
              </h3>

              <div
                className={[
                  "mt-5 space-y-4 text-white/85 text-base sm:text-lg",
                  "transition-all duration-700 ease-out",
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
                ].join(" ")}
                style={{ transitionDelay: inView ? "160ms" : "0ms" }}
              >
                <p>
                  A groundbreaking initiative designed to supercharge productivity by
                  merging human creativity with AI precision.
                </p>
                <p>
                  Whether it’s automating tasks or making smarter decisions faster,
                  Lluna&nbsp;AI is built to empower your teams like never before.
                </p>
              </div>

              {/* CTAs */}
              <div
                className={[
                  "mt-8 flex flex-wrap gap-3",
                  "transition-all duration-700 ease-out",
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
                ].join(" ")}
                style={{ transitionDelay: inView ? "240ms" : "0ms" }}
              >
                <Link
                  href="/services#lluna-ai"
                  className="inline-flex items-center rounded-full px-6 py-3 font-medium border transition
                             bg-[color:var(--brand,#28B7D5)] text-white border-[color:var(--brand,#28B7D5)]
                             hover:bg-transparent hover:text-[color:var(--brand,#28B7D5)]"
                >
                  Explore Lluna AI
                </Link>

                <Link
                  href="/contact?topic=lluna-ai"
                  className="inline-flex items-center rounded-full px-6 py-3 font-medium border transition
                             bg-transparent text-white border-white/30
                             hover:border-white/50 hover:bg-white/5"
                >
                  Talk To Our Innovators
                </Link>
              </div>
            </div>

            {/* RIGHT: image (hidden on phones) */}
            <div
              className={[
                "hidden md:block relative min-h-[300px] lg:min-h-[360px]",
                // image slide-in from right + slight scale
                "transition-all duration-800 ease-out",
                inView ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-6 scale-[1.03]",
              ].join(" ")}
              style={{ transitionDelay: inView ? "160ms" : "0ms" }}
            >
              <Image
                src="/images/ai.png"
                alt="Lluna AI"
                fill
                className="object-contain p-6"
                sizes="(max-width: 767px) 0px, (max-width: 1024px) 45vw, 40vw"
                loading="lazy"
                priority={false}
              />
              <div className="pointer-events-none absolute inset-0 rounded-[28px] md:rounded-[32px] ring-1 ring-white/5" />
            </div>
          </div>

          {/* subtle ambient glow that fades in */}
          <div
            className={[
              "pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full",
              "bg-[radial-gradient(circle_at_center,rgba(40,183,213,0.15),transparent_60%)] blur-2xl",
              "transition-opacity duration-700 ease-out",
              inView ? "opacity-100" : "opacity-0",
            ].join(" ")}
          />
        </div>
      </div>
    </section>
  );
}
