import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Leadership } from "./components/Leadership";
import { Pillars } from "./components/Pillars";
import { Capabilities } from "./components/Capabilities";
import { Partnerships } from "./components/Partnerships";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { cn } from "@/lib/utils";
import { container } from "./components/styles";

const STATS = [
  ["01", "Apex Legal Education Council"],
  ["2026", "Legal Education Act"],
  ["03", "Operational CCP Units"],
  ["20", "Communications Systems"],
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <section className="border-b border-navy-800/10 bg-white">
          <div className={container}>
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {STATS.map(([value, label], index) => (
                <div
                  className={cn(
                    "border-navy-800/10 px-5 py-10 text-center",
                    index !== STATS.length - 1 && "border-r",
                    index === 1 && "max-lg:border-r-0",
                    index < 2 && "max-lg:border-b"
                  )}
                  key={label}
                >
                  <p className="m-0 font-heading text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-navy-900">
                    {value}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.1em] text-navy-500">
                    {label}
                  </p>
                </div>
              ))}
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
