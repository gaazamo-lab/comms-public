import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { container, imageZoom, section } from "./styles";

const POINTS = [
  "Trusted and auditable institutional communications",
  "Brand-consistent public information across CLET",
  "Strategic stakeholder and partner engagement",
  "International relations, protocol and representation",
];

export function About() {
  return (
    <section id="about" className={section}>
      <div className={cn(container, "grid grid-cols-1 items-center gap-16 lg:grid-cols-2")}>
        <div className="relative">
          <div className={cn(imageZoom, "aspect-[4/3] rounded-xl")}>
            <Image
              src="/images/mic.png"
              alt="Corporate communications team workspace"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(10,22,40,0.95),rgba(15,30,58,0.35)_50%,transparent)]" />
            {/* <div className="pointer-events-none absolute inset-x-0 bottom-0 p-8">
              <p className="m-0 font-heading text-xl font-bold leading-snug text-white">
                Clarity in public voice.
                <br />
                Discipline in engagement.
              </p>
            </div> */}
          </div>
          <div className="absolute -bottom-4 -right-4 -z-10 h-24 w-24 rounded-xl bg-gold-500/10" />
          <div className="absolute -left-4 -top-4 -z-10 h-16 w-16 rounded-xl bg-navy-700/10" />
        </div>

        <div>
          <h2 className="mb-6 font-heading text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight text-navy-900">
            The public face and strategic voice of CLET.
          </h2>
          <p className="mb-4 leading-[1.7] text-navy-500">
            The{" "}
            <strong>
              Corporate Communications and Partnerships (CCP) Directorate
            </strong>{" "}
            is one of the operating directorates of the Council for Legal
            Education and Training (CLET), the national regulatory and
            coordination body for all legal education and training in Ghana,
            established under the Legal Education Act, 2026.
          </p>
          <p className="mb-4 leading-[1.7] text-navy-500">
            CCP is the public face and stakeholder bridge of the institution. We
            carry CLET&apos;s voice to citizens, students, accredited institutions,
            the Bar, the Judiciary, government, donors and the international
            community and we carry their voices back into the Council.
          </p>
          <ul className="m-0 flex list-none flex-col gap-4 p-0">
            {POINTS.map((point) => (
              <li
                className="flex items-center gap-3 text-[0.9rem] font-medium text-navy-800"
                key={point}
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                {point}
              </li>
            ))}
          </ul>
          <Button
            href="#leadership"
            variant="outline-gold"
            size="md"
            className="mt-6"
          >
            Meet the directorate lead
            <svg
              width="14"
              height="14"
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
    </section>
  );
}
