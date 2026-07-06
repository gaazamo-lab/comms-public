import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  card,
  cardText,
  container,
  eyebrow,
  eyebrowLight,
  imageZoom,
  section,
  sectionAlt,
  twoColumn,
} from "./styles";

const RESPONSIBILITIES = [
  {
    title: "01. Media & PR",
    text: "Directing media strategy, official public statements, and brand governance.",
  },
  {
    title: "02. International",
    text: "Steering ECOWAS/AU relations, protocol, and cross-border cooperation.",
  },
  {
    title: "03. Partnerships",
    text: "Stewardship of MOUs, donor relations, and stakeholder consulting.",
  },
];

export function Leadership() {
  return (
    <section id="leadership" className={cn(section, sectionAlt)}>
      <div className={cn(container, twoColumn)}>
        <div className="grid gap-4">
          <div className={cn(imageZoom, "aspect-[5/4] rounded-xl")}>
            <Image
              src="/images/FranciscaKakraForson.jpg"
              alt="Ms. Francisca Kakra Forson, Head of Corporate Communications and Partnerships Directorate"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(10,22,40,0.65),transparent_60%)]" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 p-8">
            
              <p className="mt-2 font-heading text-xl font-bold leading-snug text-white">
                Ms. Francisca Kakra Forson
                <br />
                Head of Directorate
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/aerial.jpg"
              alt="Directorate communication materials"
              width={700}
              height={438}
              className="aspect-[16/10] w-full rounded-lg object-cover"
            />
            <Image
              src="/images/contact-us.jpg"
              alt="Council institutional setting"
              width={700}
              height={438}
              className="aspect-[16/10] w-full rounded-lg object-cover"
            />
          </div>
        </div>

        <div>
          <h2 className="mb-6 font-heading text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight text-navy-900">
            Strategic direction for CLET&apos;s public engagement.
          </h2>
          <p className="mb-4 leading-[1.7] text-navy-500">
            Ms. Francisca Kakra Forson leads the Corporate Communications and
            Partnerships (CCP) Directorate, bringing strategic direction to
            CLET&apos;s internal and external engagements. She oversees the
            Directorate&apos;s core units, ensuring a unified and prestigious
            voice for the Council.
          </p>
          <p className="mb-4 leading-[1.7] text-navy-500">
            Under her leadership, the Directorate manages the statutory
            information flow, shapes diplomatic protocols, and fosters bilateral
            relations with regional and international legal education bodies.
          </p>

          <div className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {RESPONSIBILITIES.map((item) => (
              <article className={card} key={item.title}>
                <p className={eyebrow}>{item.title}</p>
                <p className={cn(cardText, "mt-3")}>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
