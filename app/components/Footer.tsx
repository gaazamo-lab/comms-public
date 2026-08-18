import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { container } from "./styles";

const FOOTER_NAV = [
  {
    title: "Directorate",
    links: [
      { label: "About CCP", href: "#about" },
      { label: "Our Units", href: "#pillars" },
      { label: "Capabilities", href: "#capabilities" },
      { label: "Partnerships", href: "#partnerships" },
      { label: "International & Protocol", href: "#contact" },

    ],
  },

  {
    title: "Institution",
    links: [
      { label: "Council for Legal Education and Training", href: "#" },
      { label: "Legal Education Act, 2026", href: "#" },
      { label: "Other Directorates", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-0 bg-navy-950 text-white/65">
      <div className={cn(container, "grid grid-cols-1 gap-12 px-6 py-16 md:grid-cols-[1fr_2fr]")}>
        <div>
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/logos/CLET logo.png"
              alt=""
              width={56}
              height={56}
              className="h-14 w-14 object-contain"
            />
            <span>
              <span className="block text-[10px] font-semibold uppercase leading-none tracking-[0.2em] text-gold-400">
                CLET Ghana
              </span>
              <span className="mt-1 block font-heading text-[1.05rem] leading-tight text-white">
                Corporate Communications
                <br />
                and Partnerships
              </span>
            </span>
          </Link>
          <p className="mt-6 max-w-sm text-[0.875rem] leading-relaxed text-white/50">
            The Corporate Communications and Partnerships Directorate is one of
            the operating directorates of CLET, established under the Legal
            Education Act, 2026 (Act 1170).
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {FOOTER_NAV.map((column) => (
            <div key={column.title}>
              <h4 className="mb-4 border-b border-white/10 pb-3 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-400">
                {column.title}
              </h4>
              <ul className="m-0 list-none p-0">
                {column.links.map((link) => (
                  <li className="mb-2.5 text-[0.875rem] leading-snug" key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/70 transition-colors duration-150 hover:text-gold-400"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/[0.08] py-5 text-xs">
        <div className={cn(container, "flex flex-wrap justify-between gap-4 text-white/55")}>
          <span>
            &copy; {new Date().getFullYear()} Council for Legal Education and
            Training, Republic of Ghana
          </span>
          <span className="text-[0.875rem] leading-relaxed text-white/50">
            Legal Education Act, 2026 (Act 1170)
          </span>
        </div>
      </div>
    </footer>
  );
}
