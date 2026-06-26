import Image from "next/image";

export function Leadership() {
  return (
    <section id="leadership" className="relative bg-white py-24 sm:py-28 overflow-hidden">
      <div className="max-w-8xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Portrait Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-[400px] aspect-square rounded-2xl overflow-hidden border border-institutional-border bg-institutional-bg">
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
              
              <div className="absolute bottom-5 left-5 right-5 text-white!">
                <p className="text-[10px] text-white! uppercase tracking-[0.25em]  font-semibold">
                  CLET Ghana
                </p>
                <p className="mt-1 font-heading font-bold text-lg text-white! leading-tight">
                  Ms. Francisca Kakra Forson
                </p>
                <p className="text-xs text-white! mt-0.5">
                  Head of Directorate 
                </p>
              </div>

            
            </div>
          </div>
          
          {/* Content Column */}
          <div className="lg:col-span-7 space-y-6">
          

            <div className="space-y-4 text-base text-navy-700 leading-relaxed">
              <p>
                Ms. Francisca Kakra Forson leads the Corporate Communications and Partnerships (CCP) Directorate, bringing strategic direction to CLET&apos;s internal and external engagements. She oversees the Directorate&apos;s core units, ensuring a unified and prestigious voice for the Council.
              </p>
              <p>
                Under her leadership, the Directorate manages the statutory information flow, shapes diplomatic protocols, and fosters bilateral relations with regional and international legal education bodies.
              </p>
            </div>

            {/* Core Responsibilities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="card p-4">
                <p className="text-[10px] uppercase tracking-[0.15em] text-gold-700 font-bold">
                  01. Media &amp; PR
                </p>
                <p className="text-xs text-navy-800 mt-1 leading-relaxed">
                  Directing media strategy, official public statements, and brand governance.
                </p>
              </div>
              <div className="card p-4">
                <p className="text-[10px] uppercase tracking-[0.15em] text-gold-700 font-bold">
                  02. International
                </p>
                <p className="text-xs text-navy-800 mt-1 leading-relaxed">
                  Steering ECOWAS/AU relations, protocol, and cross-border cooperation.
                </p>
              </div>
              <div className="card p-4">
                <p className="text-[10px] uppercase tracking-[0.15em] text-gold-700 font-bold">
                  03. Partnerships
                </p>
                <p className="text-xs text-navy-800 mt-1 leading-relaxed">
                  Stewardship of MOUs, donor relations, and stakeholder consulting.
                </p>
              </div>
            </div>

            {/* Inspiring quote block */}
            <div className=" pl-6 py-3 bg-navy-100/30 rounded-r-2xl">
              <p className="italic text-sm sm:text-base text-navy-800 font-heading leading-relaxed">
                Our commitment is to build a modern, transparent, and auditable communication infrastructure that connects legal education with the citizens and global partners we serve.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
