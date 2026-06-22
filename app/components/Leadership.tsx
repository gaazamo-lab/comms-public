import Image from "next/image";

export function Leadership() {
  return (
    <section id="leadership" className="relative bg-white py-24 sm:py-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none -z-10" aria-hidden="true">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-100/30 rounded-full blur-[100px]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Portrait Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-[400px] aspect-square rounded-2xl overflow-hidden border border-institutional-border bg-institutional-bg shadow-xl">
              {/* Gold decorative border offset */}
              <div className="absolute inset-0 border-[3px] border-gold-400/80 rounded-2xl -m-3 pointer-events-none transition-transform duration-300 group-hover:scale-[1.02]" />
              
              <Image
                src="/images/FranciscaKakraForson.jpg"
                alt="Ms. Francisca Kakra Forson — Head of Corporate Communications and Partnerships Directorate"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/20 to-transparent opacity-80" />
              
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <p className="text-[10px] uppercase tracking-[0.25em] text-gold-300 font-semibold">
                  CLET Ghana
                </p>
                <p className="mt-1 font-heading font-bold text-lg leading-tight">
                  Ms. Francisca Kakra Forson
                </p>
                <p className="text-xs text-white/80 mt-0.5">
                  Head of Directorate
                </p>
              </div>

              {/* Floating Adinkra Symbol: Nyansapo (Wisdom Knot) */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur p-2 rounded-xl shadow-md border border-institutional-border">
                <Image
                  src="/Adinkra Symbols/Gold/Nyansapo-Adinkra gold.png"
                  alt="Nyansapo — symbol of wisdom, ingenuity, and intelligence"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              </div>
            </div>
          </div>
          
          {/* Content Column */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-gold-600 font-semibold">
                Directorate Leadership
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-navy-900 leading-tight">
                Ms. Francisca Kakra Forson
              </h2>
              <p className="text-lg font-medium text-navy-700 mt-2">
                Head of Corporate Communications and Partnerships
              </p>
              <div className="h-0.5 w-20 bg-gold-500 mt-4" />
            </div>

            <div className="space-y-4 text-[15px] sm:text-base text-navy-700 leading-[1.75]">
              <p>
                Ms. Francisca Kakra Forson leads the Corporate Communications and Partnerships (CCP) Directorate, bringing strategic direction to CLET&apos;s internal and external engagements. She oversees the Directorate&apos;s core units, ensuring a unified and prestigious voice for the Council.
              </p>
              <p>
                Under her leadership, the Directorate manages the statutory information flow, shapes diplomatic protocols, and fosters bilateral relations with regional and international legal education bodies.
              </p>
            </div>

            {/* Core Responsibilities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-institutional-bg border border-institutional-border rounded-xl p-4">
                <p className="text-[10px] uppercase tracking-[0.15em] text-gold-700 font-bold">
                  01. Media &amp; PR
                </p>
                <p className="text-xs text-navy-800 mt-1 leading-relaxed">
                  Directing media strategy, official public statements, and brand governance.
                </p>
              </div>
              <div className="bg-institutional-bg border border-institutional-border rounded-xl p-4">
                <p className="text-[10px] uppercase tracking-[0.15em] text-gold-700 font-bold">
                  02. International
                </p>
                <p className="text-xs text-navy-800 mt-1 leading-relaxed">
                  Steering ECOWAS/AU relations, protocol, and cross-border cooperation.
                </p>
              </div>
              <div className="bg-institutional-bg border border-institutional-border rounded-xl p-4">
                <p className="text-[10px] uppercase tracking-[0.15em] text-gold-700 font-bold">
                  03. Partnerships
                </p>
                <p className="text-xs text-navy-800 mt-1 leading-relaxed">
                  Stewardship of MOUs, donor relations, and stakeholder consulting.
                </p>
              </div>
            </div>

            {/* Inspiring quote block */}
            <div className="border-l-4 border-gold-500 pl-6 py-1 bg-gold-50/50 rounded-r-xl">
              <p className="italic text-sm sm:text-base text-navy-800 font-heading leading-relaxed">
                &ldquo;Our commitment is to build a modern, transparent, and auditable communication infrastructure that connects legal education with the citizens and global partners we serve.&rdquo;
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
