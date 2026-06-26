import Image from "next/image";

export function Hero() {
  return (
    <section className="relative isolate min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/GSL_IMAGE.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950/10 via-navy-900/10 to-navy-950/10" />
      </div>

      <div className="absolute inset-0 pointer-events-none -z-10" aria-hidden="true">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gold-500/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-navy-600/40 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/[0.06] rounded-full blur-[200px]" />
      </div>

      <div className="relative max-w-8xl mx-auto px-6 py-24 lg:py-32 w-full flex justify-start text-left">
        <div className="flex flex-col items-start p-8 sm:p-12 rounded-2xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white leading-[1.4] sm:leading-[1.4] lg:leading-[1.3] tracking-tight animate-fade-up bg-black/60 backdrop-blur-md p-4">
            The public voice of{" "}
            <span className="text-gold-400">Ghana&apos;s</span>
            <br />
            <span className="text-gold-400">legal education</span> ecosystem.
          </h1>


          <p className=" mt-4 text-white! font-[450] text-lg sm:text-sm lg:text-sm font-sans leading-relaxed max-w-2xl mb-10 animate-fade-up delay-200 bg-black/60 backdrop-blur-md p-4">
            We are the trusted bridge between the Council for Legal Education
            and Training and the citizens, students, institutions, partners and
            international community it serves under the Legal Education Act,
            2026.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16 mt-8 animate-fade-up delay-300 justify-center">
            <a
              href="#pillars"
              className="group button-gold w-full sm:w-auto border border-gold-500"
            >
              Explore our work
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
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
              className="button-outline-white button-white w-full sm:w-auto backdrop-blur-md"
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
