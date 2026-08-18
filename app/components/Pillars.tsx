import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  card,
  cardText,
  container,
  eyebrow,
  imageZoom,
  section,
  sectionAlt,
  sectionHeading,
  subtitle,
} from "./styles";

const PILLARS = [
  {
    title: " Media & Public Relations",
    eyebrow: "Unit One",
    description:
      "Custodians of the institutional voice, news, press relations, public statements, the official website, social channels, content production and brand management for every corner of CLET.",
    href: "#capabilities",
    image: "/images/micro.avif",
    bullets: [
      "Official press desk & spokesperson coordination",
      "Editorial calendar across web, social, video & podcast",
      "Brand integrity and visual identity governance",
    ],
  },
  {
    title: "Events & Protocols Management",
    eyebrow: "Unit Two",
    description:
      "The diplomatic face of CLET managing intergovernmental engagement, ECOWAS and AU partnerships, VIP visits, protocol, translation and cross-border legal education cooperation.",
    href: "#capabilities",
    image: "/images/dice.jpg",
    bullets: [
      "Diplomatic correspondence & protocol management",
      "Visa, travel and delegation support workflows",
      "Translation and localisation for international audiences",
    ],
  },
  {
    title: " International Relations & Strategic Partnerships",
    eyebrow: "Unit Three",
    description:
      "Stewards of CLET's relationships with the Judiciary, the Bar, accredited universities, donors, ministries and external agencies — managing MOUs, public consultation and the partnership pipeline.",
    href: "#partnerships",
    image: "/images/part.png",
    bullets: [
      "Stakeholder CRM and engagement pipeline",
      "MOU and partnership lifecycle tracking",
      "Public consultation and donor engagement",
    ],
  },
];

export function Pillars() {
  return (
    <section id="pillars" className={cn(section, sectionAlt)}>
      <div className={container}>
        <header className={sectionHeading}>
          <h2 className="mt-3 font-heading text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight text-navy-900">
            Three units. One mandate to inform, engage and represent.
          </h2>
          <p className={subtitle}>
            The CCP Directorate is formally constituted in the CLET organogram
            with three operational units. Together they own the institution&apos;s
            public face, diplomatic engagement and external relationship
            portfolio.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((pillar) => (
            <a
              // href={pillar.href}
              className={cn(card, "group block text-inherit hover:text-inherit")}
              key={pillar.title}
            >
              <div className={cn(imageZoom, "mb-6 aspect-[16/10] rounded-lg")}>
                <Image
                  src={pillar.image}
                  alt=""
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,22,40,0)_40%,rgba(10,22,40,0.45)_100%)]" />
              </div>
              <p className={eyebrow}>{pillar.eyebrow}</p>
              <h3 className="mb-3 mt-3 font-heading text-[1.15rem] font-bold leading-tight text-navy-900 transition-colors duration-200 group-hover:text-gold-600">
                {pillar.title}
              </h3>
              <p className={cn(cardText, "mb-5")}>{pillar.description}</p>
              <ul className="mb-5 flex list-none flex-col gap-4 p-0">
                {pillar.bullets.map((bullet) => (
                  <li
                    className="flex items-center gap-3 text-[0.9rem] font-medium text-navy-800"
                    key={bullet}
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                    {bullet}
                  </li>
                ))}
              </ul>
              {/* <span className="inline-flex items-center gap-1.5 text-[0.8rem] font-semibold text-gold-600 transition-[gap,color] duration-200 group-hover:gap-2.5 group-hover:text-gold-700">
                Learn more
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
              </span> */}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
