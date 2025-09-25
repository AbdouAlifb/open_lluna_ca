"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

  return (
    <header className="sticky top-0 z-50 bg-[var(--bg,#fff)]/80 backdrop-blur-md border-b border-black/10">
      <div className="mx-auto max-w-[1200px] px-5 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="Open Lluna — Home">
          <Image src="/logo.png" alt="Open Lluna" width={180} height={28} priority />
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
                  active ? "text-slate-900" : "text-slate-600 hover:text-slate-900",
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

          {/* Get A Quote CTA */}
          <Link
            href="/contact"
            className="ml-2 rounded-2xl px-4 py-2.5 text-[15px] font-medium border transition
                       bg-[color:var(--brand)] text-white border-[color:var(--brand)]
                       hover:bg-transparent hover:text-[color:var(--brand)]"
            style={{ ["--brand" as any]: BRAND }}
          >
            Get A Quote
          </Link>
        </nav>

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger className="md:hidden inline-flex items-center justify-center rounded-lg p-2 hover:bg-black/5">
            <Menu />
          </SheetTrigger>

          {/* Hide the default X inside SheetContent and make drawer a bit narrower */}
          <SheetContent
            side="right"
            className="w-72 pr-0 [&>button.absolute.right-4.top-4]:hidden" /* hides default close */
          >
            {/* Drawer header */}
            <div className="pl-1 pr-5 pt-4 pb-3 flex items-center justify-between border-b">
              <Link href="/" className="flex items-center gap-3" aria-label="Open Lluna — Home">
                <Image src="/logo.png" alt="Open Lluna" width={36} height={36} />
                <span className="font-semibold">Open Lluna</span>
              </Link>

              {/* Keep only this custom close button */}
              <SheetClose asChild>
                <button className="rounded-lg p-2 hover:bg-black/5" aria-label="Close menu">
                  <X />
                </button>
              </SheetClose>
            </div>

            {/* Drawer body */}
            <div className="pl-1 pr-5 py-6 grid gap-1.5">
              {NAV.map((i) => {
                const active = pathname === i.href || (i.href !== "/" && pathname?.startsWith(i.href));
                return (
                  <SheetClose asChild key={i.href}>
                    <Link
                      href={i.href}
                      className={[
                        "relative block text-[15px] px-3 py-2 rounded-lg transition",
                        active ? "bg-[rgba(40,183,213,0.08)] text-[color:var(--brand)]" : "hover:bg-[rgba(40,183,213,0.08)] hover:text-[color:var(--brand)]",
                        // left indicator bar
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

              {/* CTA full-width on mobile */}
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
