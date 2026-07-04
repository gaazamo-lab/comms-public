import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Leadership } from "./components/Leadership";
import { Pillars } from "./components/Pillars";
import { Capabilities } from "./components/Capabilities";
import { Partnerships } from "./components/Partnerships";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <section className="stats">
          <div className="container">
            <div className="stats__grid">
              <div className="stat">
                <p className="stat__num">01</p>
                <p className="stat__label">Apex Legal Education Council</p>
              </div>
              <div className="stat">
                <p className="stat__num">2026</p>
                <p className="stat__label">Legal Education Act</p>
              </div>
              <div className="stat">
                <p className="stat__num">03</p>
                <p className="stat__label">Operational CCP Units</p>
              </div>
              <div className="stat">
                <p className="stat__num">20</p>
                <p className="stat__label">Communications Systems</p>
              </div>
            </div>
          </div>
        </section>
        <About />
        <Leadership />
        <Pillars />
        <Capabilities />
        <Partnerships />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
