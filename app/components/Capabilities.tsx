import Image from "next/image";

const CAPABILITY_GROUPS = [
  {
    title: "Public Information & Brand",
    description:
      "How CLET speaks to the public, the profession and the press — coherently and at scale.",
    symbol: "/Adinkra Symbols/Gold/Hwemudua (gold).png",
    symbolAlt: "Hwemudua symbol",
    items: [
      "Public-facing website CMS",
      "Newsletter & email marketing",
      "Bulk SMS gateway",
      "Social-media management & listening",
      "Digital asset & brand portal",
      "Press / media monitoring & sentiment",
    ],
  },
  {
    title: "Stakeholder & Partner Engagement",
    description:
      "The relationship infrastructure behind every partnership, MOU and public consultation.",
    symbol: "/Adinkra Symbols/Gold/Epa Gold.png",
    symbolAlt: "Epa symbol",
    items: [
      "Stakeholder / partner CRM",
      "MOU & partnership lifecycle tracker",
      "Public-survey & consultation platform",
      "Influencer & thought-leader tracker",
      "Donor & annual-report microsite",
      "Events management",
    ],
  },
  {
    title: "International & Protocol",
    description:
      "Diplomatic representation, ECOWAS and AU coordination, and multilingual reach.",
    symbol: "/Adinkra Symbols/Gold/Osram ne Nsroma Gold.png",
    symbolAlt: "Osram ne Nsroma symbol",
    items: [
      "International relations workspace",
      "Visa & travel authorisation workflow",
      "Translation & localisation management",
      "VIP visit register & protocol checklists",
      "Diplomatic correspondence & gifts log",
      "ECOWAS / AU partnership desk",
    ],
  },
  {
    title: "Reputation & Crisis",
    description:
      "Pre-staged playbooks, real-time monitoring and disciplined activation when it matters.",
    symbol: "/Adinkra Symbols/Gold/Akoko Nan gold.png",
    symbolAlt: "Akoko Nan symbol",
    items: [
      "Reputation & crisis-comms playbook system",
      "Crisis-flag alerting from social and press",
      "Approval & escalation workflow",
      "Emergency broadcast across email & SMS",
      "Centralised, auditable communication log",
      "Spokesperson briefing pack management",
    ],
  },
  {
    title: "Internal Engagement",
    description:
      "Keeping every directorate and every staff member informed, aligned and heard.",
    symbol: "/Adinkra Symbols/Gold/Akoma Ntoaso Gold.png",
    symbolAlt: "Akoma Ntoaso symbol",
    items: [
      "Intranet & staff engagement portal",
      "Internal newsletter & briefings",
      "Directorate announcements",
      "Board & management communications",
      "Internal audit report distribution",
      "Cross-directorate notification routing",
    ],
  },
  {
    title: "Content & Live Experiences",
    description:
      "Long-form thought leadership, webinars and audio storytelling for the legal community.",
    symbol: "/Adinkra Symbols/Gold/UAC Nkanea gold.png",
    symbolAlt: "UAC Nkanea symbol",
    items: [
      "Webinar & live-streaming platform",
      "Podcast & audio content production",
      "CLE credit attribution for live events",
      "Recordings, transcripts & accessibility",
      "Annual report microsites",
      "Public lectures & convocations",
    ],
  },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="section section--dark people">
      <div className="people__bg">
        <div className="blur blur--gold float-orb" />
        <div className="blur blur--navy float-orb float-orb--slow" />
      </div>

      <div className="container">
        <header className="section-heading section-heading--light">
          <p className="eyebrow eyebrow--light">Capabilities</p>
          <h2 className="text-white!">A 20-system communications backbone for the entire CLET ecosystem.</h2>
          <p className="subtitle">
            Cluster C6 is the only cluster whose systems serve every other
            cluster simultaneously — from accreditation to examinations to
            compliance.
          </p>
        </header>

        <div className="capability-grid">
          {CAPABILITY_GROUPS.map((group) => (
            <article className="capability-card" key={group.title}>
              <div className="capability-card__head">
                <h3>{group.title}</h3>
                <Image
                  src={group.symbol}
                  alt={group.symbolAlt}
                  width={48}
                  height={48}
                />
              </div>
              <p>{group.description}</p>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
