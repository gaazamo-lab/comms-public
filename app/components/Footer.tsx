import Image from "next/image";
import Link from "next/link";

const FOOTER_NAV = [
  {
    title: "Directorate",
    links: [
      { label: "About CCP", href: "#about" },
      { label: "Our Units", href: "#pillars" },
      { label: "Capabilities", href: "#capabilities" },
      { label: "Newsroom", href: "#newsroom" },
    ],
  },
  {
    title: "Engagement",
    links: [
      { label: "Partnerships", href: "#partnerships" },
      { label: "International & Protocol", href: "#contact" },
      { label: "Public Consultations", href: "#partnerships" },
    ],
  },
  {
    title: "Institution",
    links: [
      { label: "Council for Legal Education and Training", href: "#" },
      { label: "Legal Education Act, 2026", href: "#" },
      { label: "Other Directorates", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div>
          <Link href="/" className="footer-brand">
            <Image
              src="/logos/CLET logo.png"
              alt=""
              width={56}
              height={56}
              className="seal"
            />
            <span>
              <span className="footer-eyebrow">CLET Ghana</span>
              <span className="footer-title">
                Corporate Communications
                <br />
                and Partnerships
              </span>
            </span>
          </Link>
          <p className="muted" style={{ marginTop: "1.5rem", maxWidth: "24rem" }}>
            The Corporate Communications and Partnerships Directorate is one of
            the operating directorates of CLET, established under the Legal
            Education Act, 2026 (Act 1170).
          </p>
        </div>

        <div className="footer-grid">
          {FOOTER_NAV.map((column) => (
            <div key={column.title}>
              <h4>{column.title}</h4>
              <ul>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom__inner">
          <span>
            &copy; {new Date().getFullYear()} Council for Legal Education and
            Training, Republic of Ghana
          </span>
          <span className="muted">Legal Education Act, 2026 (Act 1170)</span>
        </div>
      </div>
    </footer>
  );
}
