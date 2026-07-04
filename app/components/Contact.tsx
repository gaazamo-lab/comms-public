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
    <section id="contact" className="section section--alt">
      <div className="container featured__grid">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Get in touch with the directorate.</h2>
          <p>
            The CCP Directorate operates from the offices of the Council for
            Legal Education and Training in Accra. Our front office is open
            Monday to Friday, 08:30 – 17:00 GMT.
          </p>

          <article className="stat-card">
            <p className="eyebrow">Head Office</p>
            <address>
              <strong>Council for Legal Education and Training</strong>
              <br />
              Corporate Communications and Partnerships Directorate
              <br />
              Accra, Greater Accra Region
              <br />
              Republic of Ghana
            </address>
            <p className="contact-card__line">
              <MailIcon />
              <a href="mailto:comms@clet.gov.gh">comms@clet.gov.gh</a>
            </p>
            <p className="contact-card__line">
              <PhoneIcon />
              +233 (0) 302 000 000
            </p>
          </article>
        </div>

        <div className="contact-grid">
          {CONTACTS.map((contact) => (
            <article className="stat-card contact-card" key={contact.label}>
              <p className="eyebrow">{contact.label}</p>
              <h3>{contact.name}</h3>
              <p className="pillar__text">{contact.note}</p>
              <p className="contact-card__line">
                <MailIcon />
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </p>
              <p className="contact-card__line">
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
