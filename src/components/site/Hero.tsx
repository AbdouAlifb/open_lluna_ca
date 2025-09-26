"use client";
import * as React from "react";
import { Rocket, ShieldCheck, Cloud } from "lucide-react";

export default function Hero() {
  // --- video playlist (3 clips, loops in order) ---
  const PLAYLIST = React.useMemo(
    () => [
      { src: "/hero/hero-video-1080.mp4", type: "video/mp4" },
      { src: "/hero/hero-video2.mp4",    type: "video/mp4" },
      { src: "/hero/hero-video3.mp4",    type: "video/mp4" },
    ],
    []
  );

  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const [idx, setIdx] = React.useState(0);

  // advance to next clip on "ended"
  React.useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onEnded = () => setIdx((i) => (i + 1) % PLAYLIST.length);
    v.addEventListener("ended", onEnded);
    return () => v.removeEventListener("ended", onEnded);
  }, [PLAYLIST.length]);

  // load & play when index changes
  React.useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.src = PLAYLIST[idx].src;
    v.load();
    v.play().catch(() => {});
  }, [idx, PLAYLIST]);

  return (
    <section
      className="relative w-full
               min-h-[60vh] md:min-h-[60vh] lg:min-h-[78vh]
                 overflow-hidden"
      aria-label="Hero"
    >
      {/* Background video area */}
      <div className="absolute inset-0">
        {/* Fallback image & reduced motion */}
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-[center_right_20%] motion-safe:hidden"
          style={{ backgroundImage: "url(/hero/home.jpg)" }}
          aria-hidden="true"
        />

        {/* Single <video> that swaps sources to create a playlist */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover motion-reduce:hidden"
          autoPlay
          muted
          playsInline
          // no loop; we loop manually by switching index on 'ended'
          preload="auto"
          poster="/hero/home.jpg"
        />
      </div>

      {/* Dark gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/10" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="py-16 md:py-24 lg:py-32 max-w-3xl">
          {/* Kicker */}
          <p className="tracking-wide text-[1.3rem] font-semibold text-[#4CBED9] mb-3 text-shadow-sm">
            Digital Transformation Company
          </p>

          {/* Headline */}
          <h1 className="font-extrabold leading-tight text-white text-shadow-lg
                         text-2xl sm:text-2xl md:text-5xl">
            Full-Stack Tech Enablement
            <br className="hidden md:block" />
            For Future-Ready Businesses
          </h1>

          {/* Supporting copy (slightly longer, easier cadence) */}
          <p className="mt-5 text-white/90 text-lg md:text-xl text-shadow-sm">
            We design, build, and scale high-performing web & mobile products—then keep them healthy
            with automation, observability, and rapid releases. From MVP to enterprise rollout,
            our squads plug into your roadmap and ship value every sprint.
          </p>

          {/* Feature pills */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-2 text-white/90">
              <Rocket className="h-4 w-4" />
              <span className="text-sm">Product/MVP to Scale</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-2 text-white/90">
              <ShieldCheck className="h-4 w-4" />
              <span className="text-sm">QA · Security · 99.9% uptime</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-2 text-white/90">
              <Cloud className="h-4 w-4" />
              <span className="text-sm">AWS/DO · CI/CD · DevOps</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="/contact"
              className="inline-flex items-center rounded-full px-6 py-3
                         bg-[#4CBED9] text-white font-medium shadow-md hover:brightness-110
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              Schedule a Call
            </a>

            <a
              href="/services"
              className="inline-flex items-center rounded-full px-6 py-3
                         bg-white/10 text-white backdrop-blur-sm border border-white/20
                         hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              Our Services
            </a>
          </div>

          {/* Micro-trust strip (subtle) */}
          <div className="mt-4 text-white/70 text-sm">
            <span className="mr-3">• 2-week sprints</span>
            <span className="mr-3">• MERN / PERN experts</span>
            <span>• Audits & rescue missions welcome</span>
          </div>

          {/* Optional microcopy under CTA (remove if you prefer tighter look)
          <p className="mt-2 text-white/60 text-sm">
            No sales pitch — a quick 15-minute technical walkthrough of your goals.
          </p>
          */}
        </div>
      </div>
    </section>
  );
}
