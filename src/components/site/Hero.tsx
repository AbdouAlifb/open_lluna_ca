"use client";
import * as React from "react";

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

  // load & play when index changes (no poster image between clips)
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
        {/* Fallback (reduced motion): neutral color instead of image to avoid flashes */}
        <div
          className="absolute inset-0 bg-black motion-safe:hidden"
          aria-hidden="true"
        />

        {/* Single <video> that swaps sources to create a playlist */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover motion-reduce:hidden"
          autoPlay
          muted
          playsInline
          preload="auto"
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
          <h1
            className="font-extrabold leading-tight text-white text-shadow-lg
                       text-2xl sm:text-2xl md:text-5xl"
          >
            Full-Stack Tech Enablement For Future-Ready Businesses
          </h1>

          {/* Supporting copy */}
          <p className="mt-5 text-white/90 text-lg md:text-xl text-shadow-sm">
            From adaption to expansion, we are your partners throughout the digital growth cycle.
          </p>

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
        </div>
      </div>
    </section>
  );
}
