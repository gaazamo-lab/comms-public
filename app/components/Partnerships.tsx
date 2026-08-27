import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { card, cardText, container, eyebrow, section, twoColumn } from "./styles";

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
    <section id="partnerships" className={section}>
      <div className={cn(container, twoColumn)}>
        <div>
          <p className={eyebrow}>Partnerships & Engagement</p>
          <h2 className="mb-6 mt-3 font-heading text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight text-navy-900">
            Convening the institutions of Ghana&apos;s legal community.
          </h2>
          <p className="mb-4 leading-[1.7] text-navy-500">
            CCP maintains the institutional relationship portfolio of CLET —
            from the Judiciary and the Bar to accredited universities,
            ministries, donors and the international legal community.
          </p>

          <div className="relative mt-8 overflow-hidden rounded-xl bg-navy-900 p-8">
            <h3 className="relative mt-3 font-heading text-2xl font-bold leading-tight text-white">
              Propose an MOU, joint event or research collaboration.
            </h3>
            <p className="relative mb-4 text-[0.9rem] leading-relaxed text-white/70">
              Strategic Partnerships handles MOU lifecycle, joint programming,
              donor engagement, public consultation and stakeholder convening
              across the legal education sector.
            </p>
            <Button href="#contact" variant="gold" size="md" className="group">
              Start a conversation
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

        <div>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-navy-800/10 bg-navy-800/10 sm:grid-cols-2">
            {PARTNERS.map((partner) => (
              <div
                className="flex items-center gap-3 bg-white p-5 transition-colors duration-150 hover:bg-parchment"
                key={partner}
              >
                <span className="h-2 w-2 shrink-0 bg-gold-500" />
                <span className="text-[0.9rem] font-medium text-navy-900">
                  {partner}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <article className={card}>
              <p className={eyebrow}>Consultation Desk</p>
              <h3 className="mb-3 mt-3 font-heading text-[1.15rem] font-bold leading-tight text-navy-900">
                Public engagement and feedback
              </h3>
              <p className={cardText}>
                Stakeholders can route policy feedback, partnership proposals
                and consultation responses through the Directorate for tracking
                and formal acknowledgement.
              </p>
            </article>
            <article className={card}>
              <p className={eyebrow}>Media Resources</p>
              <h3 className="mb-3 mt-3 font-heading text-[1.15rem] font-bold leading-tight text-navy-900">
                Logos, biographies and brand assets
              </h3>
              <p className={cardText}>
                Approved CLET and CCP brand assets, leadership biographies,
                Director-General photography and the institutional brand book
                available on request from the press desk.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
