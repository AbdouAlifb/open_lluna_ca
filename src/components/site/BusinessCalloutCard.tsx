"use client";

import Image from "next/image";
import Link from "next/link";

const BRAND = "#28B7D5";

type Props = {
  className?: string;
  ctaHref?: string;
};

export default function BusinessCalloutCard({
  className = "",
  ctaHref = "/contact?topic=consultation",
}: Props) {
  return (
    <section className={`relative ${className}`}>
      {/* container to keep comfy side padding */}
      <div className="mx-auto max-w-7xl px-4">
        <div
          className="
            relative overflow-hidden rounded-[28px] md:rounded-[36px]
            bg-[#0e2230] ring-1 ring-black/10
          "
        >
          {/* soft gradient wash */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_10%_10%,rgba(40,183,213,0.18),transparent_55%)]" />

          <div className="grid md:grid-cols-12 items-center">
            {/* LEFT: text */}
            <div className="px-6 sm:px-8 lg:px-12 py-10 md:py-14 md:col-span-6 lg:col-span-5">
              <h3 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold leading-tight text-white">
                Great Products Start With{" "}
                <span style={{ color: BRAND }}>Bold Decisions</span>{" "}
                And The Right Tech Partner
              </h3>

              <p className="mt-5 text-white/80 text-base sm:text-lg max-w-prose">
                We turn your digital vision into scalable, high-performance
                solutions—on time, on brand, and beyond expectations.
              </p>

              <div className="mt-7">
                <Link
                  href={ctaHref}
                  className="
                    inline-flex items-center justify-center rounded-full
                    px-6 py-3 sm:px-7 sm:py-3.5 font-semibold text-white
                    shadow-lg transition
                  "
                  style={{
                    backgroundColor: BRAND,
                    boxShadow: "0 10px 28px rgba(40,183,213,.28)",
                  }}
                >
                  Book Your Free Consultation Today
                </Link>
              </div>
            </div>

            {/* RIGHT: image (hidden on mobile) */}
            <div className="hidden md:block md:col-span-6 lg:col-span-7">
              <div className="relative h-[320px] sm:h-[380px] md:h-[420px] lg:h-[460px]">
                <Image
                  src="/images/business.png"
                  alt="Business showcase"
                  fill
                  priority={false}
                  sizes="(max-width: 1280px) 50vw, 640px"
                  className="object-contain md:object-right p-6 md:p-8 lg:p-10 rotate-1 md:rotate-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
