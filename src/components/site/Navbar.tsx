"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const BRAND = "#28B7D5";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[var(--bg)]/80 backdrop-blur-md border-b border-black/10">
      {/* wider container + taller bar */}
      <div className="mx-auto max-w-[1280px] px-6 h-20 flex items-center justify-between">
        {/* Logo + brand */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="Open Lluna — Home">
          <Image src="/logo.png" alt="Open Lluna" width={40} height={40} priority />
          <span className="font-semibold tracking-tight group-hover:text-[var(--foreground)]">
            Open Lluna
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="transition-colors hover:text-[rgb(40,183,213)]"
            >
              {i.label}
            </Link>
          ))}

          {/* Get A Quote CTA */}
          <Link
            href="/contact"
            className="rounded-2xl px-5 py-2.5 font-medium border transition
                     bg-[rgb(40,183,213)] text-white border-[rgb(40,183,213)]
                     hover:bg-transparent hover:text-[rgb(40,183,213)]"
          >
            Get A Quote
          </Link>
        </nav>

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger className="md:hidden inline-flex items-center justify-center rounded-lg p-2 hover:bg-black/5">
            <Menu />
          </SheetTrigger>
          <SheetContent side="right" className="w-80 pr-0">
            {/* Drawer header */}
            <div className="pl-1 pr-5 pt-4 pb-3 flex items-center justify-between border-b">
              <Link href="/" className="flex items-center gap-3" aria-label="Open Lluna — Home">
                <Image src="/logo.png" alt="Open Lluna" width={36} height={36} />
                <span className="font-semibold">Open Lluna</span>
              </Link>
              <SheetClose asChild>
                <button className="rounded-lg p-2 hover:bg-black/5" aria-label="Close menu">
                  <X />
                </button>
              </SheetClose>
            </div>

            {/* Drawer body */}
            <div className="pl-1 pr-5 py-6 grid gap-2">
              {NAV.map((i) => (
                <SheetClose asChild key={i.href}>
                  <Link
                    href={i.href}
                    className="block text-base px-3 py-2 rounded-lg transition
                               hover:bg-[rgb(40,183,213,0.08)] hover:text-[rgb(40,183,213)]"
                  >
                    {i.label}
                  </Link>
                </SheetClose>
              ))}

              {/* CTA full-width on mobile */}
              <SheetClose asChild>
                <Link
                  href="/contact"
                  className="mt-3 inline-flex items-center justify-center rounded-2xl px-5 py-3
                             font-medium border transition
                             bg-[rgb(40,183,213)] text-white border-[rgb(40,183,213)]
                             hover:bg-transparent hover:text-[rgb(40,183,213)]"
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
