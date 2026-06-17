import Image from "next/image";

const FOOTER_NAV = [
  {
    title: "Directorate",
    links: [
      { label: "About CCP", href: "#about" },
      { label: "Our Units", href: "#pillars" },
      { label: "Capabilities", href: "#capabilities" },
      { label: "Newsroom", href: "#newsroom" },
    ],
  },
  {
    title: "Engagement",
    links: [
      // { label: "Press Desk", href: "#contact" },
      { label: "Partnerships", href: "#partnerships" },
      { label: "International & Protocol", href: "#contact" },
      { label: "Public Consultations", href: "#partnerships" },
    ],
  },
  {
    title: "CLET",
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
    <footer className="relative bg-navy-950 text-white/80">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "url('/Adinkra Symbols/Gold/ADINKRA BACKGROUND Gold.png')",
          backgroundSize: "380px",
        }}
        aria-hidden="true"
      />
      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logos/CLET logo.png"
                alt="Council for Legal Education and Training emblem"
                width={56}
                height={56}
                className="h-12 w-auto"
              />
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-gold-400 font-semibold">
                  Republic of Ghana
                </p>
                <p className="text-sm font-heading font-bold text-white leading-tight mt-1">
                  Council for Legal Education and Training
                </p>
              </div>
            </div>
            <p className="mt-6 text-sm text-white/60 leading-relaxed max-w-sm">
              The Communications, Comms &amp; Partnerships Directorate is one
              of the operating directorates of CLET, established under the
              Legal Education Act, 2026 (Act 1170).
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Image
                src="/logos/CLET CCP Logo .png"
                alt="CLET CCP Directorate emblem"
                width={44}
                height={44}
                className="h-10 w-auto"
              />
              <span className="text-[11px] uppercase tracking-[0.25em] text-gold-400 font-semibold">
                CCP Directorate
              </span>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {FOOTER_NAV.map((col) => (
              <div key={col.title}>
                <p className="text-[11px] uppercase tracking-[0.25em] text-gold-400 font-semibold">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-white/70 hover:text-gold-300 transition-colors"
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

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} Council for Legal Education and
            Training, Republic of Ghana. All rights reserved.
          </p>
          <p className="tracking-wide">
            Established under the Legal Education Act, 2026 · Act 1170
          </p>
        </div>
      </div>
    </footer>
  );
}
