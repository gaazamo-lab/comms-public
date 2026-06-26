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
    <header className="sticky top-0 z-50 w-full bg-white/95 p-[10px] backdrop-blur-md transition-all duration-300 border-b border-navy-50">
      <div className="max-w-8xl mx-auto px-6">
        <div className="flex items-center justify-between h-[4.5rem] gap-8">
            <Link
              href="/"
              className="flex items-center gap-3 shrink-0"
              aria-label="Corporate Communications and Partnerships Directorate — Home"
            >
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shrink-0 overflow-hidden">
                <Image
                  src="/logos/CLET CCP Logo .png"
                  alt="CLET CCP Directorate emblem"
                  width={80}
                  height={80}
                  className="h-full w-full object-contain"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                
                <p className="text-base font-heading font-bold text-navy-800 leading-tight mt-1">
                   CCP CLET
                </p>
              </div>
            </Link>

            <nav className="hidden lg:flex flex-1 justify-center" aria-label="Primary">
              <ul className="flex items-center gap-6">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="nav-link py-1"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <a href="#contact" className="hidden md:inline-flex button-gold px-4 py-2 text-sm">
              Contact CCP
            </a>
          </div>
        </div>
      </header>
  );
}
