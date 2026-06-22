import Image from "next/image";

const FLOATING_ADINKRA = [
  {
    src: "/Adinkra Symbols/Gold/Akoma Ntoaso Gold.png",
    alt: "Akoma Ntoaso — symbol of unity and shared understanding",
    className:
      "top-[14%] left-[6%] w-24 sm:w-28 lg:w-32 opacity-25 rotate-[-12deg]",
    delay: "0s",
  },
  {
    src: "/Adinkra Symbols/Gold/Nyansapo-Adinkra gold.png",
    alt: "Nyansapo — wisdom knot, symbol of ingenuity and intelligence",
    className:
      "top-[8%] right-[10%] w-28 sm:w-32 lg:w-40 opacity-30 rotate-[8deg]",
    delay: "1.5s",
  },
  {
    src: "/Adinkra Symbols/Gold/mate-masie-symbol gold.png",
    alt: "Mate Masie — symbol of knowledge and discretion",
    className:
      "bottom-[18%] right-[6%] w-20 sm:w-24 lg:w-28 opacity-25 rotate-[-6deg]",
    delay: "3s",
  },
  {
    src: "/Adinkra Symbols/Gold/Mpuannum Gold.png",
    alt: "Mpuannum — symbol of priestly office and loyalty",
    className:
      "bottom-[14%] left-[12%] w-16 sm:w-20 lg:w-24 opacity-20 rotate-[14deg]",
    delay: "4.5s",
  },
  {
    src: "/Adinkra Symbols/Gold/UAC Nkanea gold.png",
    alt: "UAC Nkanea — symbol of progress and brightness",
    className:
      "top-1/2 left-[40%] -translate-x-1/2 -translate-y-1/2 w-40 sm:w-56 lg:w-72 opacity-10",
    delay: "2s",
  },
];

export function Hero() {
  return (
    <section className="relative isolate min-h-[92vh] flex items-center  overflow-hidden ">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/GSL IMAGE.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover "
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950/10 via-navy-900/10 to-navy-950/90" />
        <div
          className="absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage:
              "url('/Adinkra Symbols/Gold/ADINKRA BACKGROUND Gold.png')",
            backgroundSize: "520px",
            backgroundRepeat: "repeat",
          }}
          aria-hidden="true"
        />
      </div>

      <div className="absolute inset-0 pointer-events-none -z-10" aria-hidden="true">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gold-500/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-navy-600/40 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/[0.06] rounded-full blur-[200px]" />
      </div>

      <div
        className="absolute inset-0 pointer-events-none -z-10 "
        aria-hidden="true"
      >
        {FLOATING_ADINKRA.map((sym) => (
          <div
            key={sym.src}
            className={`absolute adinkra-float ${sym.className}`}
            style={{ animationDelay: sym.delay }}
          >
            <Image
              src={sym.src}
              alt=""
              width={320}
              height={320}
              className="w-full h-auto drop-shadow-[0_0_25px_rgba(217,168,43,0.25)]"
            />
          </div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32 w-full flex justify-center text-center">
        <div className="max-w-4xl flex flex-col items-center bg-black/60 p-12 rounded-xl">
          {/* <div className="flex items-center justify-center gap-4 mb-8">
            <Image
              src="/logos/CLET CCP Logo .png"
              alt="CLET CCP Directorate emblem"
              width={72}
              height={72}
              className="w-14 h-14 lg:w-16 lg:h-16 object-contain drop-shadow-[0_0_20px_rgba(217,168,43,0.35)]"
              priority
            />
            <div className="h-10 w-px bg-white/20" />
            <span className="text-gold-400 text-[11px] sm:text-xs uppercase tracking-[0.28em] font-semibold text-left">
              Corporate Communications and Partnerships Directorate
            </span>
          </div> */}

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-white leading-[1.05] tracking-tight">
            The public voice of{" "}
            <span className="text-gold-400">Ghana&apos;s legal education</span>
            <br />
            ecosystem.
          </h1>

          <p className="mt-8 text-lg sm:text-2xl text-white max-w-2xl leading-relaxed mx-auto ">
            We are the trusted bridge between the Council for Legal Education
            and Training and the citizens, students, institutions, partners and
            international community it serves  under the Legal Education Act,
            2026.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a
              href="#pillars"
              className="group inline-flex items-center gap-2 bg-gold-500 text-navy-900 px-7 py-3.5 text-sm font-semibold hover:bg-gold-400 transition-all"
            >
              Explore our work
              <svg
                className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
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
            <a
              href="#contact"
              className="inline-flex items-center border border-white/25 text-white/85 px-7 py-3.5 text-sm font-semibold hover:bg-white/5 hover:border-white/50 hover:text-white transition-all"
            >
              Contact the directorate
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/30 text-[10px] uppercase tracking-[0.3em]">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
