import Image from "next/image";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg">
        <Image
          src="/images/GSL_IMAGE.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero__img kenburns"
        />
        <div className="hero__overlay" />
        <div className="hero__blur hero__blur--gold float-orb" />
        <div className="hero__blur hero__blur--navy float-orb float-orb--slow" />
        <div className="hero__blur hero__blur--soft" />
      </div>

      <div className="container hero__inner">
        <div className="hero__lead">
          <span className="hero__eyebrow-wrap">
            <Image
              src="/logos/CLET CCP Logo .png"
              alt=""
              width={56}
              height={56}
              className="hero__seal"
              priority
            />
            <span className="hero__divider" />
            <span className="hero__eyebrow">
              Corporate Communications and Partnerships
            </span>
          </span>

          <h1 className="hero__title">
            The public voice of
            <br />
            <span className="accent">Ghana&apos;s legal education</span>
            <br />
            ecosystem.
          </h1>

          <p className="hero__subtitle">
            We are the trusted bridge between the Council for Legal Education
            and Training and the citizens, students, institutions, partners and
            international community it serves under the Legal Education Act,
            2026.
          </p>

          <div className="hero__actions">
            <a href="#pillars" className="btn btn--primary">
              Explore our work
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
            <a href="#contact" className="btn btn--outline">
              Contact the directorate
            </a>
          </div>
        </div>
      </div>

      {/* <div className="hero__scroll" aria-hidden="true">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div> */}
    </section>
  );
}
