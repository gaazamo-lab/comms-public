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
