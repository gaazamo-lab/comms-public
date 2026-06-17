import Image from "next/image";



export function About() {
  return (
    <section id="about" className="relative bg-white py-24 sm:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.25em] text-gold-600 font-semibold">
              About the Directorate
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-navy-900 leading-tight">
              A statutory voice — established under Act 1170.
            </h2>

            <div className="mt-8 relative aspect-[4/5] rounded-2xl overflow-hidden bg-navy-900">
              <Image
                src="/images/about_directorate.png"
                alt="CLET Communications and briefing room in Accra, Ghana"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-900/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-[10px] uppercase tracking-[0.25em] text-gold-300 font-semibold">
                  Legal Education Act, 2026 · Act 1170
                </p>
                <p className="mt-2 text-white font-heading text-lg leading-snug">
                  Sections 12(2)(i), 12(2)(j), 12(2)(k), 21, 53, 59 and 85
                  ground the Directorate&apos;s public, partnership and
                  notification mandates.
                </p>
              </div>
              <Image
                src="/Adinkra Symbols/Gold/Akofena gold.png"
                alt=""
                width={120}
                height={120}
                className="absolute top-5 right-5 w-16 h-16 opacity-80"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-[15px] sm:text-base text-navy-700 leading-[1.75]">
            <p>
              The{" "}
              <strong className="text-navy-900">
                Communications, Comms &amp; Partnerships (CCP) Directorate
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
            <p>
              Beyond communications, CCP operates as an{" "}
              <em>enterprise-wide service,</em> we serve as the official notification delivery service for
              every directorate and every other cluster in the digital legal
              education ecosystem.
            </p>



            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border-l-2 border-gold-500 pl-5 py-2">
                <p className="text-[10px] uppercase tracking-[0.2em] text-gold-700 font-semibold">
                  Vision
                </p>
                <p className="mt-2 text-sm text-navy-800 leading-relaxed">
                  Trusted, auditable, scalable and brand-consistent
                  communication and engagement for all of CLET.
                </p>
              </div>
              <div className="border-l-2 border-navy-700 pl-5 py-2">
                <p className="text-[10px] uppercase tracking-[0.2em] text-navy-700 font-semibold">
                  Mandate
                </p>
                <p className="mt-2 text-sm text-navy-800 leading-relaxed">
                  Statutory transparency, public information, stakeholder
                  engagement and international representation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
