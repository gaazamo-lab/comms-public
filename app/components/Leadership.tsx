import Image from "next/image";

const RESPONSIBILITIES = [
  {
    title: "01. Media & PR",
    text: "Directing media strategy, official public statements, and brand governance.",
  },
  {
    title: "02. International",
    text: "Steering ECOWAS/AU relations, protocol, and cross-border cooperation.",
  },
  {
    title: "03. Partnerships",
    text: "Stewardship of MOUs, donor relations, and stakeholder consulting.",
  },
];

export function Leadership() {
  return (
    <section id="leadership" className="section section--alt">
      <div className="container featured__grid">
        <div className="featured__media">
          <div className="featured__main zoom-img">
            <Image
              src="/images/FranciscaKakraForson.jpg"
              alt="Ms. Francisca Kakra Forson, Head of Corporate Communications and Partnerships Directorate"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="who__img"
            />
            <div className="featured__overlay" />
            <div className="who__img-caption">
              <p className="eyebrow eyebrow--light">CLET Ghana</p>
              <p className="who__caption-title">
                Ms. Francisca Kakra Forson
                <br />
                Head of Directorate
              </p>
            </div>
          </div>
          <div className="featured__thumbs">
            <Image
              src="/images/aerial.jpg"
              alt="Directorate communication materials"
              width={700}
              height={438}
            />
            <Image
              src="/images/contact-us.jpg"
              alt="Council institutional setting"
              width={700}
              height={438}
            />
          </div>
        </div>

        <div className="featured__text">
          <h2>Strategic direction for CLET&apos;s public engagement.</h2>
          <p>
            Ms. Francisca Kakra Forson leads the Corporate Communications and
            Partnerships (CCP) Directorate, bringing strategic direction to
            CLET&apos;s internal and external engagements. She oversees the
            Directorate&apos;s core units, ensuring a unified and prestigious
            voice for the Council.
          </p>
          <p>
            Under her leadership, the Directorate manages the statutory
            information flow, shapes diplomatic protocols, and fosters bilateral
            relations with regional and international legal education bodies.
          </p>

          <div className="grid grid--3">
            {RESPONSIBILITIES.map((item) => (
              <article className="role-card" key={item.title}>
                <p className="eyebrow">{item.title}</p>
                <p className="pillar__text">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
