import Image from "next/image";



export function About() {
  return (
    <section id="about" className="relative bg-white py-24 sm:py-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/3 right-10 w-80 h-80 bg-gold-100/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-navy-50/50 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Content Column */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-gold-600 font-semibold">
                About the Directorate
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-navy-900 leading-tight">
                The public face and strategic voice of CLET.
              </h2>
              <div className="h-0.5 w-16 bg-gold-500 mt-4" />
            </div>

            <div className="space-y-6 text-[15px] sm:text-base text-navy-700 leading-[1.75]">
              <p className="text-base sm:text-lg text-navy-800 leading-[1.7] font-medium">
                The{" "}
                <strong className="text-navy-950 font-bold underline decoration-gold-400 decoration-2 underline-offset-4">
                  Corporate Communications and Partnerships (CCP) Directorate
                </strong>{" "}
                is one of the operating directorates of the Council for Legal
                Education and Training (CLET), the national regulatory and
                coordination body for all legal education and training in Ghana,
                established under the Legal Education Act, 2026.
              </p>
              <p>
                CCP is the public face and stakeholder bridge of the institution.
                We carry CLET&apos;s voice to citizens, students, accredited
                institutions, the Bar, the Judiciary, government, donors and the
                international community — and we carry their voices back into the
                Council.
              </p>
              <p className="bg-institutional-bg/30 p-4 border-l-2 border-gold-500 rounded-r-xl">
                Beyond communications, CCP operates as an{" "}
                <em className="font-semibold text-navy-950 not-italic">enterprise-wide service.</em> We serve as the official notification delivery service for
                every directorate and every other cluster in the digital legal
                education ecosystem.
              </p>
            </div>
          </div>

          {/* Cards Column (Vision & Mandate) */}
          <div className="lg:col-span-5 space-y-6 lg:mt-8">
            {/* Vision Card */}
            <div className="group relative bg-institutional-bg/40 hover:bg-institutional-bg/70 border border-institutional-border rounded-2xl p-6 transition-all duration-300 hover:shadow-md">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold-700 font-bold bg-gold-100/50 px-2.5 py-1 rounded-md">
                  Vision
                </span>
                <div className="w-10 h-10 rounded-xl bg-white border border-institutional-border flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm">
                  <Image
                    src="/Adinkra Symbols/Gold/mate-masie-symbol gold.png"
                    alt="Mate Masie symbol representing wisdom and knowledge"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="text-sm text-navy-850 leading-relaxed font-sans font-medium">
                Trusted, auditable, scalable and brand-consistent
                communication and engagement for all of CLET.
              </p>
            </div>

            {/* Mandate Card */}
            <div className="group relative bg-institutional-bg/40 hover:bg-institutional-bg/70 border border-institutional-border rounded-2xl p-6 transition-all duration-300 hover:shadow-md">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] uppercase tracking-[0.2em] text-navy-750 font-bold bg-navy-100/30 px-2.5 py-1 rounded-md">
                  Mandate
                </span>
                <div className="w-10 h-10 rounded-xl bg-white border border-institutional-border flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm">
                  <Image
                    src="/Adinkra Symbols/Gold/Mmara Krado gold.png"
                    alt="Mmara Krado symbol representing authority and justice"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="text-sm text-navy-850 leading-relaxed font-sans font-medium">
                Statutory transparency, public information, stakeholder
                engagement and international representation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
