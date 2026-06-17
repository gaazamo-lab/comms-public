import Image from "next/image";

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

export function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-institutional-bg py-24 sm:py-28 overflow-hidden"
    >
      <Image
        src="/Adinkra Symbols/Navy/Mmara Krado.png"
        alt=""
        width={320}
        height={320}
        className="absolute -top-16 -right-16 w-72 h-72 opacity-[0.07]"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.25em] text-gold-600 font-semibold">
              Contact
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-navy-900 leading-tight">
              Get in touch with the directorate.
            </h2>
            <p className="mt-6 text-base text-institutional-muted leading-relaxed">
              The CCP Directorate operates from the offices of the Council for
              Legal Education and Training in Accra. Our front office is open
              Monday to Friday, 08:30 – 17:00 GMT.
            </p>

            <div className="mt-8 bg-white border border-institutional-border rounded-xl p-6">
              <p className="text-[10px] uppercase tracking-[0.25em] text-gold-700 font-semibold">
                Head Office
              </p>
              <address className="not-italic mt-3 text-sm text-navy-900 leading-relaxed">
                <strong>Council for Legal Education and Training</strong>
                <br />
                Communications, Comms &amp; Partnerships Directorate
                <br />
                Accra, Greater Accra Region
                <br />
                Republic of Ghana
              </address>
              <dl className="mt-5 space-y-2 text-sm">
                <div className="flex gap-3">
                  <dt className="text-institutional-muted w-16 shrink-0">
                    Email
                  </dt>
                  <dd>
                    <a
                      href="mailto:comms@clet.gov.gh"
                      className="text-navy-900 font-medium hover:text-gold-700"
                    >
                      comms@clet.gov.gh
                    </a>
                  </dd>
                </div>
                <div className="flex gap-3">
                  <dt className="text-institutional-muted w-16 shrink-0">
                    Phone
                  </dt>
                  <dd className="text-navy-900 font-medium">
                    +233 (0) 302 000 000
                  </dd>
                </div>
                <div className="flex gap-3">
                  <dt className="text-institutional-muted w-16 shrink-0">
                    Hours
                  </dt>
                  <dd className="text-navy-900 font-medium">
                    Mon – Fri · 08:30 – 17:00 GMT
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CONTACTS.map((c) => (
                <article
                  key={c.label}
                  className="bg-white border border-institutional-border border-l-[3px] border-l-gold-500 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <p className="text-[10px] uppercase tracking-[0.25em] text-gold-700 font-semibold">
                    {c.label}
                  </p>
                  <h3 className="mt-2 text-base font-heading font-bold text-navy-900">
                    {c.name}
                  </h3>
                  <p className="mt-3 text-[13px] text-institutional-muted leading-relaxed">
                    {c.note}
                  </p>
                  <div className="mt-4 space-y-1.5 text-sm">
                    <a
                      href={`mailto:${c.email}`}
                      className="flex items-center gap-2 text-navy-900 font-medium hover:text-gold-700"
                    >
                      <svg
                        className="w-4 h-4 text-gold-600"
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
                      {c.email}
                    </a>
                    <p className="flex items-center gap-2 text-navy-700">
                      <svg
                        className="w-4 h-4 text-gold-600"
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
                      {c.phone}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 bg-navy-900 text-white rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-gold-300 font-semibold">
                  After-hours press emergencies
                </p>
                <p className="mt-2 text-base sm:text-lg font-heading">
                  Crisis-comms duty line:{" "}
                  <span className="text-gold-300">+233 (0) 302 000 911</span>
                </p>
              </div>
              <a
                href="mailto:duty.press@clet.gov.gh"
                className="inline-flex items-center justify-center gap-2 bg-gold-500 text-navy-900 px-5 py-3 text-sm font-semibold hover:bg-gold-400 transition-colors"
              >
                duty.press@clet.gov.gh
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
