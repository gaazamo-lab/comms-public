import Image from "next/image";

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
    <section id="partnerships" className="section">
      <div className="container featured__grid">
        <div>
          <p className="eyebrow">Partnerships & Engagement</p>
          <h2>Convening the institutions of Ghana&apos;s legal community.</h2>
          <p>
            CCP maintains the institutional relationship portfolio of CLET —
            from the Judiciary and the Bar to accredited universities,
            ministries, donors and the international legal community.
          </p>

          <div className="partner-card">
          
            <h3>Propose an MOU, joint event or research collaboration.</h3>
            <p>
              Strategic Partnerships handles MOU lifecycle, joint programming,
              donor engagement, public consultation and stakeholder convening
              across the legal education sector.
            </p>
            <a href="#contact" className="btn btn--primary">
              Start a conversation
              <svg
                className="arrow"
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
            </a>
          </div>
        </div>

        <div>
          <div className="partner-grid">
            {PARTNERS.map((partner) => (
              <div className="partner-item" key={partner}>
                <span />
                <span>{partner}</span>
              </div>
            ))}
          </div>

          <div id="newsroom" className="news-grid">
            <article className="stat-card">
              <p className="eyebrow">Newsroom</p>
              <h3>Press releases, statements and announcements</h3>
              <p className="pillar__text">
                Official CLET press materials, Director-General statements,
                examination notices and accreditation announcements will be
                published here from vesting day, 1 July 2026.
              </p>
              <span className="tag">Coming July 2026</span>
            </article>
            <article className="stat-card">
              <p className="eyebrow">Media Resources</p>
              <h3>Logos, biographies and brand assets</h3>
              <p className="pillar__text">
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
