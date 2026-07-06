"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { container } from "./styles";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#leadership", label: "Leadership" },
  { href: "#pillars", label: "Our Units" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#partnerships", label: "Partnerships" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50">
      <header className="bg-white/95 shadow-[inset_0_-1px_0_0_rgba(5,27,44,0.1)] backdrop-blur-sm transition-shadow duration-300">
        <div className={cn(container, "flex h-[72px] items-center justify-between")}>
          <Link
            href="/"
            className="flex shrink-0 items-center gap-[0.85rem] text-navy-900 hover:text-navy-900"
            aria-label="Corporate Communications and Partnerships Directorate home"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/logos/CLET CCP Logo .png"
              alt="CLET CCP Directorate emblem"
              width={64}
              height={64}
              className="h-12 w-auto shrink-0 object-contain"
              priority
            />
            <span className="hidden sm:block">
              <span className="m-0 block text-[10px] font-semibold uppercase leading-none tracking-[0.2em] text-gold-600">
                CLET Ghana
              </span>
              <span className="mt-px block font-heading text-[0.9rem] font-bold leading-[1.1] text-navy-900">
                <br />
                Corporate Communications
                <br />
                and Partnerships
              </span>
            </span>
          </Link>

          <nav
            className={cn(
              "hidden lg:block",
              open &&
                "absolute inset-x-0 top-full block border-b border-navy-800/10 bg-white shadow-[0_8px_24px_rgba(10,22,40,0.08)] lg:static lg:border-0 lg:bg-transparent lg:shadow-none"
            )}
            aria-label="Primary"
          >
            <ul className="flex list-none items-center gap-0.5 p-0 max-lg:flex-col max-lg:gap-0 max-lg:px-6 max-lg:pb-4 max-lg:pt-2">
              {NAV_LINKS.map((link) => (
                <li className="max-lg:w-full" key={link.href}>
                  <a
                    href={link.href}
                    className="relative inline-block px-[0.9rem] py-[0.55rem] text-[13px] font-medium text-slate-600 transition-colors duration-150 after:absolute after:bottom-0 after:left-[0.9rem] after:right-[0.9rem] after:h-0.5 after:origin-left after:scale-x-0 after:bg-gold-500 after:transition-transform after:duration-200 hover:text-navy-900 hover:after:scale-x-100 max-lg:block max-lg:w-full max-lg:border-b max-lg:border-navy-800/10 max-lg:px-0 max-lg:py-[0.85rem] max-lg:text-[15px] max-lg:after:hidden max-lg:last:border-b-0"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            className="-mr-2 inline-flex h-9 w-9 cursor-pointer flex-col items-center justify-center gap-[5px] bg-transparent p-0 lg:hidden"
            aria-expanded={open}
            aria-label="Toggle navigation menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span
              className={cn(
                "block h-[1.5px] w-5 origin-center bg-navy-900 transition-[transform,opacity] duration-200",
                open && "translate-y-[6.5px] rotate-45"
              )}
            />
            <span
              className={cn(
                "block h-[1.5px] w-5 origin-center bg-navy-900 transition-[transform,opacity] duration-200",
                open && "opacity-0"
              )}
            />
            <span
              className={cn(
                "block h-[1.5px] w-5 origin-center bg-navy-900 transition-[transform,opacity] duration-200",
                open && "-translate-y-[6.5px] -rotate-45"
              )}
            />
          </button>
        </div>
      </header>
    </div>
  );
}
