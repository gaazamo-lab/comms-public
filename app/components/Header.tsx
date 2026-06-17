import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#leadership", label: "Leadership" },
  { href: "#pillars", label: "Our Units" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#newsroom", label: "Newsroom" },
  { href: "#partnerships", label: "Partnerships" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <>
      <div className="bg-navy-950 text-white/70 text-[11px] py-1.5 relative z-50">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <span className="tracking-[0.2em] uppercase font-medium">
            Republic of Ghana
          </span>
          <span className="hidden sm:inline tracking-wide">
            Council for Legal Education and Training · CCP Directorate
          </span>
        </div>
      </div>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-shadow duration-300 shadow-[inset_0_-1px_0_0_#e5e7eb]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <Link
              href="/"
              className="flex items-center gap-3 shrink-0"
              aria-label="Communications, Comms & Partnerships Directorate — Home"
            >
              <Image
                src="/logos/CLET CCP Logo .png"
                alt="CLET CCP Directorate emblem"
                width={56}
                height={56}
                className="h-12 w-auto"
                priority
              />
              <div className="hidden sm:block">
                <p className="text-[10px] uppercase tracking-[0.2em] text-gold-600 font-semibold leading-none">
                  CLET Ghana
                </p>
                <p className="text-sm font-heading font-bold text-navy-900 leading-tight mt-1">
                  Communications, Comms &amp; Partnerships
                </p>
              </div>
            </Link>

            <nav className="hidden lg:block" aria-label="Primary">
              <ul className="flex items-center gap-0.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="relative px-3 py-2 text-[13px] text-navy-700 hover:text-navy-900 transition-colors after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[2px] after:bg-gold-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>


          </div>
        </div>
      </header>
    </>
  );
}
