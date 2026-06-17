import Image from "next/image";

const CAPABILITY_GROUPS = [
  {
    title: "Public Information & Brand",
    description:
      "How CLET speaks to the public, the profession and the press — coherently and at scale.",
    symbol: "/Adinkra Symbols/Gold/Hwemudua (gold).png",
    symbolAlt: "Hwemudua — symbol of examination, quality control and integrity",
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
    symbolAlt: "Epa — symbol of law, justice and accountability",
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
    symbolAlt: "Osram ne Nsroma — symbol of faithfulness and harmony",
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
    symbolAlt:
      "Akoko Nan — symbol of mercy, nurturing and protective leadership",
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
    symbolAlt: "Akoma Ntoaso — symbol of unity and shared understanding",
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
    symbolAlt: "UAC Nkanea — symbol of progress, brightness and clarity",
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
    <section
      id="capabilities"
      className="relative bg-navy-950 text-white py-24 sm:py-28 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "url('/Adinkra Symbols/Gold/ADINKRA BACKGROUND Gold.png')",
            backgroundSize: "420px",
          }}
        />
        <div className="absolute -top-32 right-0 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-[150px]" />
        <div className="absolute -bottom-32 left-0 w-[600px] h-[600px] bg-navy-700/40 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 max-w-5xl">
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-gold-400 font-semibold">
              Capabilities
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-heading font-bold leading-tight">
              A 20-system communications backbone for the entire CLET ecosystem.
            </h2>
          </div>
          <p className="text-white/65 text-base sm:text-lg max-w-md leading-relaxed">
            Cluster C6 is the only cluster whose systems serve every other
            cluster simultaneously — from accreditation to examinations to
            compliance.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {CAPABILITY_GROUPS.map((g) => (
            <article
              key={g.title}
              className="group bg-navy-950 p-7 hover:bg-navy-900 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-heading font-bold text-white leading-tight">
                  {g.title}
                </h3>
                <Image
                  src={g.symbol}
                  alt={g.symbolAlt}
                  width={48}
                  height={48}
                  className="w-10 h-10 object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all"
                />
              </div>
              <p className="mt-3 text-sm text-white/65 leading-relaxed">
                {g.description}
              </p>
              <ul className="mt-5 space-y-2.5">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-start gap-2.5 text-[13px] text-white/85"
                  >
                    <svg
                      className="w-3.5 h-3.5 mt-1 shrink-0 text-gold-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 5.29a1 1 0 010 1.42l-8 8a1 1 0 01-1.42 0l-4-4a1 1 0 011.42-1.42L8 12.59l7.29-7.3a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {it}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
