import Image from "next/image";

const PARTNERS = [
  "The Judiciary of Ghana",
  "Ghana Bar Association",
  "General Legal Council",
  "Ghana School of Law",
  "Accredited Faculties of Law",
  "Ministry of Education",
  "Ministry of Justice & Attorney-General",
  "Office of the President",
  "Parliament of Ghana",
  "Bilateral & Development Partners",
  "ECOWAS Court of Justice",
  "African Union institutions",
];

export function Partnerships() {
  return (
    <section
      id="partnerships"
      className="relative bg-white py-24 sm:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.25em] text-gold-600 font-semibold">
              Partnerships & Engagement
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-navy-900 leading-tight">
              Convening the institutions of Ghana&apos;s legal community.
            </h2>
            <p className="mt-6 text-base sm:text-lg text-institutional-muted leading-relaxed">
              CCP maintains the institutional relationship portfolio of CLET —
              from the Judiciary and the Bar to accredited universities,
              ministries, donors and the international legal community.
            </p>

            <div className="mt-8 relative bg-navy-900 rounded-2xl p-8 overflow-hidden">
              <Image
                src="/Adinkra Symbols/Gold/Nkyimu Gold.png"
                alt=""
                width={140}
                height={140}
                className="absolute -bottom-6 -right-6 w-36 h-36 opacity-20"
              />
              <p className="text-[10px] uppercase tracking-[0.25em] text-gold-300 font-semibold">
                Partner with CCP
              </p>
              <h3 className="mt-3 text-2xl font-heading font-bold text-white leading-snug">
                Propose an MOU, joint event or research collaboration.
              </h3>
              <p className="mt-4 text-sm text-white/70 leading-relaxed">
                Strategic Partnerships handles MOU lifecycle, joint
                programming, donor engagement, public consultation and
                stakeholder convening across the legal education sector.
              </p>
              <a
                href="#contact"
                className="relative mt-6 inline-flex items-center gap-2 bg-gold-500 text-navy-900 px-5 py-3 text-sm font-semibold hover:bg-gold-400 transition-colors"
              >
                Start a conversation
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
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-institutional-border border border-institutional-border rounded-xl overflow-hidden">
              {PARTNERS.map((p) => (
                <div
                  key={p}
                  className="bg-white p-5 flex items-center gap-3 hover:bg-institutional-bg transition-colors"
                >
                  <span className="inline-block w-2 h-2 bg-gold-500 shrink-0" />
                  <span className="text-sm font-medium text-navy-900">{p}</span>
                </div>
              ))}
            </div>

            <div
              id="newsroom"
              className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <article className="group bg-institutional-bg border border-institutional-border rounded-xl p-6 hover:border-gold-400 transition-colors">
                <p className="text-[10px] uppercase tracking-[0.25em] text-gold-700 font-semibold">
                  Newsroom
                </p>
                <h4 className="mt-3 text-lg font-heading font-bold text-navy-900">
                  Press releases, statements and announcements
                </h4>
                <p className="mt-3 text-sm text-institutional-muted leading-relaxed">
                  Official CLET press materials, Director-General statements,
                  examination notices and accreditation announcements will be
                  published here from vesting day, 1 July 2026.
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-gold-700 group-hover:gap-2.5 transition-all">
                  Coming July 2026 →
                </span>
              </article>
              <article className="group bg-institutional-bg border border-institutional-border rounded-xl p-6 hover:border-gold-400 transition-colors">
                <p className="text-[10px] uppercase tracking-[0.25em] text-gold-700 font-semibold">
                  Media Resources
                </p>
                <h4 className="mt-3 text-lg font-heading font-bold text-navy-900">
                  Logos, biographies and brand assets
                </h4>
                <p className="mt-3 text-sm text-institutional-muted leading-relaxed">
                  Approved CLET and CCP brand assets, leadership biographies,
                  Director-General photography and the institutional brand book
                  available on request from the press desk.
                </p>

              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
