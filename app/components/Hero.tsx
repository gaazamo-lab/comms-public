import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { HeroTypewriter } from "./HeroTypewriter";
import { container } from "./styles";

export function Hero() {
  return (
    <section className="relative isolate min-h-screen flex items-center overflow-hidden bg-navy-900 text-white">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/GSL_IMAGE.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover opacity-[.35] motion-safe:animate-ken-burns"
        />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(10,22,40,0.88)_0%,rgba(15,30,58,0.82)_50%,rgba(10,22,40,0.95)_100%)]" />
        <div className="pointer-events-none absolute left-[-8rem] top-1/4 h-96 w-96 rounded-full bg-[rgba(201,164,76,0.1)] blur-[120px] motion-safe:animate-float-orb" />
        <div className="pointer-events-none absolute bottom-1/4 right-0 h-[32rem] w-[32rem] rounded-full bg-[rgba(35,65,117,0.3)] blur-[120px] motion-safe:animate-float-orb-slow" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[50rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(201,164,76,0.05)] blur-[200px]" />
      </div>

      <div className={`${container} relative z-10 px-6 py-16 md:py-24`}>
        <div className="max-w-4xl">
          <span className="mb-6 inline-flex items-center gap-[0.85rem] md:mb-8">
            <Image
              src="/logos/CLET DIRECTORATES LOGO-05.png"
              alt=""
              width={56}
              height={56}
              className="h-14 w-14 object-contain"
              priority
            />
            <span className="h-8 w-px bg-white/20" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.25em] text-gold-400">
              CORPORATE COMMUNICATIONS AND PARTNERSHIPS DIRECTORATE
            </span>
          </span>

          <h1
            className="m-0 font-heading text-[30px] font-bold leading-[1.3] tracking-normal text-white md:text-[52px]"
            aria-label="Managing the corporate communications and partnership for the legal education in Ghana"
          >
            <span aria-hidden="true">
              Managing the <br />
              <HeroTypewriter />
              <br />
              for Legal Education in Ghana
            </span>
          </h1>

          <p className="mb-10 mt-8 max-w-2xl font-sans text-[1.125rem] font-[450] leading-relaxed text-white/60 sm:text-[0.875rem] lg:text-[0.875rem]">
            The trusted bridge between the Council for Legal Education and
            Training and the citizens, students, institutions, partners, and
            international community it serves under the Legal Education Act,
            2026 (Act 1170).
          </p>

          <div className="mt-10 flex flex-col flex-wrap gap-4 sm:flex-row">
            <Button
              href="#pillars"
              variant="outline-white"
              size="md"
              className="w-full min-w-40 bg-white text-black/60 backdrop-blur-md sm:w-auto"
            >
              Explore our work
            </Button>
            <Button
              href="#contact"
              variant="gold"
              size="md"
              className="group w-full min-w-40 sm:w-auto"
            >
              Contact the directorate
              <svg
                className="motion-safe:transition-transform motion-safe:group-hover:translate-x-1"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </div>
        </div>
      </div>

    </section>
  );
}
