import Image from "next/image";

const PILLARS = [
  {
    title: "Media & Public Relations",
    eyebrow: "Unit One",
    description:
      "Custodians of the institutional voice — news, press relations, public statements, the official website, social channels, content production and brand management for every corner of CLET.",
    href: "#capabilities",
    bullets: [
      "Official press desk & spokesperson coordination",
      "Editorial calendar across web, social, video & podcast",
      "Brand integrity and visual identity governance",
    ],
    symbol: "/Adinkra Symbols/Navy/Sepow Navy.png",
    symbolAlt: "Sepow — symbol of judicial authority and truth",
    accent: "from-gold-500/25 to-gold-500/5",
  },
  {
    title: "International Relations & Protocols",
    eyebrow: "Unit Two",
    description:
      "The diplomatic face of CLET — managing intergovernmental engagement, ECOWAS and AU partnerships, VIP visits, protocol, translation and cross-border legal education cooperation.",
    href: "#capabilities",
    bullets: [
      "Diplomatic correspondence & protocol management",
      "Visa, travel and delegation support workflows",
      "Translation and localisation for international audiences",
    ],
    symbol: "/Adinkra Symbols/Navy/Adinkra Hene navy.png",
    symbolAlt: "Adinkra Hene — symbol of greatness and leadership",
    accent: "from-navy-600/25 to-navy-600/5",
  },
  {
    title: "Strategic Partnerships",
    eyebrow: "Unit Three",
    description:
      "Stewards of CLET's relationships with the Judiciary, the Bar, accredited universities, donors, ministries and external agencies — managing MOUs, public consultation and the partnership pipeline.",
    href: "#partnerships",
    bullets: [
      "Stakeholder CRM and engagement pipeline",
      "MOU and partnership lifecycle tracking",
      "Public consultation and donor engagement",
    ],
    symbol: "/Adinkra Symbols/Navy/Nkyimkyim Navy.png",
    symbolAlt: "Nkyimkyim — symbol of adaptability and dynamism",
    accent: "from-gold-500/15 to-navy-600/15",
  },
];

export function Pillars() {
  return (
    <section
      id="pillars"
      className="bg-institutional-bg py-24 sm:py-28 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "url('/Adinkra Symbols/Navy/ADINKRA BACKGROUND Navy.png')",
          backgroundSize: "420px",
        }}
        aria-hidden="true"
      />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.25em] text-gold-600 font-semibold">
            Our Pillars
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-navy-900 leading-tight">
            Three units. One mandate to inform, engage and represent.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-institutional-muted leading-relaxed">
            The CCP Directorate is formally constituted in the CLET organogram
            with three operational units. Together they own the institution&apos;s
            public face, diplomatic engagement and external relationship
            portfolio.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PILLARS.map((p) => (
            <a
              key={p.title}
              href={p.href}
              className="group relative block bg-white border border-institutional-border border-l-[3px] border-l-gold-500 hover:border-gold-400 rounded-xl p-8 h-full transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div
                className={`relative w-full h-32 rounded-lg bg-gradient-to-br ${p.accent} mb-6 flex items-center justify-center overflow-hidden`}
              >
                <Image
                  src={p.symbol}
                  alt={p.symbolAlt}
                  width={120}
                  height={120}
                  className="w-20 h-20 object-contain opacity-90 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-3 left-4 w-10 h-1 bg-gold-500 rounded-full" />
              </div>

              <p className="text-[10px] uppercase tracking-[0.25em] text-gold-600 font-semibold">
                {p.eyebrow}
              </p>
              <h3 className="mt-2 text-xl font-heading font-bold text-navy-900 group-hover:text-gold-700 transition-colors">
                {p.title}
              </h3>
              <p className="mt-3 text-sm text-institutional-muted leading-relaxed">
                {p.description}
              </p>

              <ul className="mt-5 space-y-2">
                {p.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 text-[13px] text-navy-700"
                  >
                    <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-gold-700 group-hover:gap-2.5 transition-all">
                Learn more
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
