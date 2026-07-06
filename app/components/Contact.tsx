import { cn } from "@/lib/utils";
import {
  card,
  cardText,
  container,
  eyebrow,
  section,
  sectionAlt,
  twoColumn,
} from "./styles";

const CONTACTS = [
  {
    label: "General Inquiries",
    name: "CCP Front Office",
    email: "comms@clet.gov.gh",
    phone: "+233 (0) 302 000 000",
    note: "For routine correspondence, public requests and stakeholder enquiries.",
  },
  {
    label: "Press & Media",
    name: "Media & Public Relations Unit",
    email: "press@clet.gov.gh",
    phone: "+233 (0) 302 000 011",
    note: "For accredited press, interview requests and official statements.",
  },
  {
    label: "International & Protocol",
    name: "International Relations & Protocols Unit",
    email: "protocol@clet.gov.gh",
    phone: "+233 (0) 302 000 022",
    note: "For diplomatic correspondence, VIP visits and travel coordination.",
  },
  {
    label: "Partnerships",
    name: "Strategic Partnerships Unit",
    email: "partnerships@clet.gov.gh",
    phone: "+233 (0) 302 000 033",
    note: "For MOUs, donor engagement, public consultation and joint programmes.",
  },
];

function MailIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0 text-gold-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0 text-gold-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.74 2.96a2 2 0 01-.45 1.85L8.09 10.91a11.05 11.05 0 005 5l1.585-1.42a2 2 0 011.85-.45l2.96.74A2 2 0 0121 16.72V19a2 2 0 01-2 2h-1C9.61 21 3 14.39 3 6V5z"
      />
    </svg>
  );
}

export function Contact() {
  return (
    <section id="contact" className={cn(section, sectionAlt)}>
      <div className={cn(container, twoColumn)}>
        <div>
          <p className={eyebrow}>Contact</p>
          <h2 className="mb-6 mt-3 font-heading text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight text-navy-900">
            Get in touch with the directorate.
          </h2>
          <p className="mb-4 leading-[1.7] text-navy-500">
            The CCP Directorate operates from the offices of the Council for
            Legal Education and Training in Accra. Our front office is open
            Monday to Friday, 08:30 – 17:00 GMT.
          </p>

          <article className={cn(card, "mt-8")}>
            <p className={eyebrow}>Head Office</p>
            <address className="my-4 text-[0.9rem] not-italic leading-[1.7] text-navy-900">
              <strong>Council for Legal Education and Training</strong>
              <br />
              Corporate Communications and Partnerships Directorate
              <br />
              Accra, Greater Accra Region
              <br />
              Republic of Ghana
            </address>
            <p className="my-1 flex items-center gap-2 text-[0.9rem] text-navy-900">
              <MailIcon />
              <a href="mailto:comms@clet.gov.gh">comms@clet.gov.gh</a>
            </p>
            <p className="my-1 flex items-center gap-2 text-[0.9rem] text-navy-900">
              <PhoneIcon />
              +233 (0) 302 000 000
            </p>
          </article>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {CONTACTS.map((contact) => (
            <article className={card} key={contact.label}>
              <p className={eyebrow}>{contact.label}</p>
              <h3 className="mb-3 mt-3 font-heading text-[1.15rem] font-bold leading-tight text-navy-900">
                {contact.name}
              </h3>
              <p className={cn(cardText, "mb-4")}>{contact.note}</p>
              <p className="my-1 flex items-center gap-2 text-[0.9rem] text-navy-900">
                <MailIcon />
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </p>
              <p className="my-1 flex items-center gap-2 text-[0.9rem] text-navy-900">
                <PhoneIcon />
                {contact.phone}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
