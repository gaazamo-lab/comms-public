import Image from "next/image";

const PILLARS = [
  {
    title: "Media & Public Relations",
    eyebrow: "Unit One",
    description:
      "Custodians of the institutional voice — news, press relations, public statements, the official website, social channels, content production and brand management for every corner of CLET.",
    href: "#capabilities",
    image: "/images/micro.avif",
    bullets: [
      "Official press desk & spokesperson coordination",
      "Editorial calendar across web, social, video & podcast",
      "Brand integrity and visual identity governance",
    ],
  },
  {
    title: "International Relations & Protocols",
    eyebrow: "Unit Two",
    description:
      "The diplomatic face of CLET — managing intergovernmental engagement, ECOWAS and AU partnerships, VIP visits, protocol, translation and cross-border legal education cooperation.",
    href: "#capabilities",
    image: "/images/dice.jpg",
    bullets: [
      "Diplomatic correspondence & protocol management",
      "Visa, travel and delegation support workflows",
      "Translation and localisation for international audiences",
    ],
  },
  {
    title: "Strategic Partnerships",
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
    <section id="pillars" className="section section--alt">
      <div className="container">
        <header className="section-heading section-heading--center">
          <h2>Three units. One mandate to inform, engage and represent.</h2>
          <p className="subtitle">
            The CCP Directorate is formally constituted in the CLET organogram
            with three operational units. Together they own the institution&apos;s
            public face, diplomatic engagement and external relationship
            portfolio.
          </p>
        </header>

        <div className="grid grid--3">
          {PILLARS.map((pillar) => (
            <a href={pillar.href} className="pillar" key={pillar.title}>
              <div className="pillar__image zoom-img">
                <Image
                  src={pillar.image}
                  alt=""
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
                <div className="pillar__image-overlay" />
              </div>
              <p className="eyebrow">{pillar.eyebrow}</p>
              <h3 className="pillar__title">{pillar.title}</h3>
              <p className="pillar__text">{pillar.description}</p>
              <ul className="dot-list">
                {pillar.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <span className="pillar__link">
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
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
