import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  container,
  eyebrow,
  eyebrowLight,
  section,
  sectionDark,
  sectionHeading,
  subtitle,
  subtitleLight,
} from "./styles";

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
    <section
      id="capabilities"
      className={cn(section, sectionDark, "relative overflow-hidden")}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8rem] top-[10%] h-96 w-96 rounded-full bg-gold-500/10 blur-[120px] motion-safe:animate-float-orb" />
        <div className="absolute bottom-[10%] right-[-6rem] h-[28rem] w-[28rem] rounded-full bg-[rgba(35,65,117,0.25)] blur-[120px] motion-safe:animate-float-orb-slow" />
      </div>

      <div className={cn(container, "relative")}>
        <header className={sectionHeading}>
          <p className={cn(eyebrow, eyebrowLight)}>Capabilities</p>
          <h2 className="mt-3 font-heading text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight text-white">
            A 20-system communications backbone for the entire CLET ecosystem.
          </h2>
          <p className={cn(subtitle, subtitleLight)}>
            Cluster C6 is the only cluster whose systems serve every other
            cluster simultaneously — from accreditation to examinations to
            compliance.
          </p>
        </header>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITY_GROUPS.map((group) => (
            <article
              className="bg-navy-950 p-7 transition-colors duration-200 hover:bg-navy-900"
              key={group.title}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="m-0 font-heading text-[1.05rem] font-bold leading-tight text-white">
                  {group.title}
                </h3>
                <Image
                  src={group.symbol}
                  alt={group.symbolAlt}
                  width={48}
                  height={48}
                  className="h-10 w-10 object-contain opacity-80 transition-[transform,opacity] duration-200 hover:scale-110 hover:opacity-100"
                />
              </div>
              <p className="mt-3 text-[0.88rem] leading-relaxed text-white/65">
                {group.description}
              </p>
              <ul className="mt-5 flex list-none flex-col gap-2.5 p-0">
                {group.items.map((item) => (
                  <li
                    className="flex gap-2.5 text-[0.82rem] leading-snug text-white/80"
                    key={item}
                  >
                    <svg
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {item}
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
