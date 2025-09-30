"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

const BRAND = "#28B7D5";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isCaseStudy = pathname?.startsWith("/case-studies/");
  const shouldStartTransparent = isHome || isCaseStudy;
  
  const [solid, setSolid] = React.useState<boolean>(!shouldStartTransparent);

  React.useEffect(() => {
    if (!shouldStartTransparent) {
      setSolid(true); // always solid off-home and off-case-study
      return;
    }
    const onScroll = () => setSolid(window.scrollY > 16);
    // Check scroll position on mount (client-side only)
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [shouldStartTransparent]);

  // styles
  const headerBg     = solid ? "bg-white/95" : "bg-transparent";
  const headerBorder = solid ? "border-b border-black/10" : "";
  // absolute over hero at top of home/case-study; sticky after scroll/off-home
  const headerPos    = shouldStartTransparent && !solid ? "absolute inset-x-0 top-0" : "sticky top-0";

  const linkIdle   = solid ? "text-slate-700 hover:text-slate-900" : "text-white/90 hover:text-white";
  const linkActive = solid ? "text-slate-900" : "text-white";

  return (
    <header
      className={[
        headerPos,
        "z-50 transition-colors duration-300",
        headerBg,
        headerBorder,
      ].join(" ")}
      style={!solid ? ({ background: "transparent" } as React.CSSProperties) : undefined}
    >
      <div className="mx-auto max-w-[1200px] px-5 h-20 flex items-center justify-between">
        {/* Logo (white at rest on home/case-study) */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="Open Lluna — Home">
          <Image
            src={shouldStartTransparent && !solid ? "/logo-white.png" : "/logo.png"}
            alt="Open Lluna"
            width={180}
            height={28}
            priority
            className={!solid ? "drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]" : ""}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2">
          {NAV.map((i) => {
            const active = pathname === i.href || (i.href !== "/" && pathname?.startsWith(i.href));
            return (
              <Link
                key={i.href}
                href={i.href}
                className={[
                  "relative px-3 py-2 rounded-md text-[15px] transition-colors",
                  active ? linkActive : linkIdle,
                  // top indicator bar
                  "after:absolute after:left-2 after:right-2 after:-top-[11px] after:h-[3px] after:rounded-full",
                  active
                    ? "after:bg-[color:var(--brand)]"
                    : "after:scale-x-0 hover:after:scale-x-100 after:origin-center after:bg-[color:var(--brand)] after:transition-transform",
                ].join(" ")}
                style={{ ["--brand" as any]: BRAND }}
              >
                {i.label}
              </Link>
            );
          })}

          {/* Get A Quote CTA (brand-filled at rest; outline on solid) */}
          <Link
            href="/contact"
            className={[
              "ml-2 rounded-2xl px-4 py-2.5 text-[15px] font-medium border transition",
              solid
                ? "bg-[color:var(--brand)] text-white border-[color:var(--brand)] hover:bg-transparent hover:text-[color:var(--brand)]"
                : "bg-[color:var(--brand)] text-white border-[color:var(--brand)] hover:brightness-110",
            ].join(" ")}
            style={{ ["--brand" as any]: BRAND }}
          >
            Get A Quote
          </Link>
        </nav>

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger className="md:hidden inline-flex items-center justify-center rounded-lg p-2 hover:bg-black/5">
            <Menu className={solid ? "" : "text-white"} />
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-72 pr-0 [&>button.absolute.right-4.top-4]:hidden"
          >
            <div className="pl-1 pr-5 pt-4 pb-3 flex items-center justify-between border-b">
              <Link href="/" className="flex items-center gap-3" aria-label="Open Lluna — Home">
                <Image src="/logo.png" alt="Open Lluna" width={36} height={36} />
              </Link>
              <SheetClose asChild>
                <button className="rounded-lg p-2 hover:bg-black/5" aria-label="Close menu">
                  <X />
                </button>
              </SheetClose>
            </div>

            <div className="pl-1 pr-5 py-6 grid gap-1.5">
              {NAV.map((i) => {
                const active = pathname === i.href || (i.href !== "/" && pathname?.startsWith(i.href));
                return (
                  <SheetClose asChild key={i.href}>
                    <Link
                      href={i.href}
                      className={[
                        "relative block text-[15px] px-3 py-2 rounded-lg transition",
                        active
                          ? "bg-[rgba(40,183,213,0.08)] text-[color:var(--brand)]"
                          : "hover:bg-[rgba(40,183,213,0.08)] hover:text-[color:var(--brand)]",
                        "before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-6 before:w-[3px] before:rounded-full",
                        active ? "before:bg-[color:var(--brand)]" : "before:bg-transparent hover:before:bg-[color:var(--brand)]",
                      ].join(" ")}
                      style={{ ["--brand" as any]: BRAND }}
                    >
                      {i.label}
                    </Link>
                  </SheetClose>
                );
              })}

              <SheetClose asChild>
                <Link
                  href="/contact"
                  className="mt-3 inline-flex items-center justify-center rounded-2xl px-5 py-3
                             text-[15px] font-medium border transition
                             bg-[color:var(--brand)] text-white border-[color:var(--brand)]
                             hover:bg-transparent hover:text-[color:var(--brand)]"
                  style={{ ["--brand" as any]: BRAND }}
                >
                  Get A Quote
                </Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}