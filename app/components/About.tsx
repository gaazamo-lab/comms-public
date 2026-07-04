import Image from "next/image";

export function About() {
  return (
    <section id="about" className="section">
      <div className="container who">
        <div className="who__media">
          <div className="who__img-wrap zoom-img">
            <Image
              src="/images/mic.png"
              alt="Corporate communications team workspace"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="who__img"
            />
            <div className="who__img-overlay" />
            <div className="who__img-caption">
              <p className="who__caption-title">
                Clarity in public voice.
                <br />
                Discipline in engagement.
              </p>
            </div>
          </div>
          <div className="who__deco who__deco--br" />
          <div className="who__deco who__deco--tl" />
        </div>

        <div className="who__text">
      
          <h2>The public face and strategic voice of CLET.</h2>
          <p>
            The{" "}
            <strong>
              Corporate Communications and Partnerships (CCP) Directorate
            </strong>{" "}
            is one of the operating directorates of the Council for Legal
            Education and Training (CLET), the national regulatory and
            coordination body for all legal education and training in Ghana,
            established under the Legal Education Act, 2026.
          </p>
          <p>
            CCP is the public face and stakeholder bridge of the institution. We
            carry CLET&apos;s voice to citizens, students, accredited institutions,
            the Bar, the Judiciary, government, donors and the international
            community and we carry their voices back into the Council.
          </p>
          <ul className="dot-list">
            <li>Trusted and auditable institutional communications</li>
            <li>Brand-consistent public information across CLET</li>
            <li>Strategic stakeholder and partner engagement</li>
            <li>International relations, protocol and representation</li>
          </ul>
          <a href="#leadership" className="pillar__link who__cta">
            Meet the directorate lead
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
          </a>
        </div>
      </div>
    </section>
  );
}
