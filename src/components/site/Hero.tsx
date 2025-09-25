// src/components/site/Hero.tsx
export default function Hero() {
  return (
    <section
      className="relative w-full min-h-[70vh] md:min-h-[80vh] lg:min-h-[88vh] overflow-hidden"
      aria-label="Hero"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-[center_right_20%]"
        style={{ backgroundImage: "url(/hero/home.jpg)" }}
      />

      {/* Dark gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/10" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="py-16 md:py-24 lg:py-32 max-w-3xl">
          {/* Badge / Kicker */}
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

          {/* Subcopy */}
          <p className="mt-5 text-white/90 text-lg md:text-xl text-shadow-sm">
            From adoption to expansion, we partner with you throughout the digital growth cycle.
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
