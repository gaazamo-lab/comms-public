import { cn } from "@/lib/utils";
import {
  card,
  cardText,
  container,
  eyebrow,
  section,
  sectionAlt,
  sectionHeading,
  subtitle,
} from "./styles";
import {
  NEWSROOM_CATEGORIES,
  NEWSROOM_ITEMS,
  formatNewsroomDate,
  newsroomItemsIn,
} from "./siteData";

export function Newsroom() {
  return (
    <section id="newsroom" className={cn(section, sectionAlt)}>
      <div className={container}>
        <header className={sectionHeading}>
          <p className={eyebrow}>Newsroom</p>
          <h2 className="mt-3 font-heading text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight text-navy-900">
            Official updates from the Directorate.
          </h2>
          <p className={subtitle}>
            Every press release, announcement, speech, event notice and item of
            institutional news issued by CLET is published here and nowhere
            else. Each entry carries its date and the unit that issued it.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-navy-800/10 bg-navy-800/10 sm:grid-cols-2 lg:grid-cols-5">
          {NEWSROOM_CATEGORIES.map((category) => {
            const count = newsroomItemsIn(category.name).length;

            return (
              <div
                className={cn(
                  "bg-white p-6",
                  // Five streams in a two-column grid leaves a hole in the
                  // last row; let the final stream span it.
                  "sm:max-lg:last:col-span-2",
                )}
                key={category.name}
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="m-0 font-heading text-[0.95rem] font-bold leading-tight text-navy-900">
                    {category.plural}
                  </h3>
                  <span
                    className={cn(
                      "shrink-0 text-[0.72rem] font-semibold uppercase tracking-[0.03em]",
                      count > 0 ? "text-gold-700" : "text-navy-400",
                    )}
                  >
                    {count > 0 ? `${count} published` : "None yet"}
                  </span>
                </div>
                <p className="mt-2 text-[0.82rem] leading-relaxed text-navy-500">
                  {category.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12">
          <h3 className="m-0 font-heading text-[1.05rem] font-bold text-navy-900">
            Latest updates
          </h3>
          <p className="mt-1 text-[0.86rem] text-navy-500">
            {NEWSROOM_ITEMS.length}{" "}
            {NEWSROOM_ITEMS.length === 1 ? "entry" : "entries"} published, most
            recent first.
          </p>

          <ol className="mt-6 grid list-none grid-cols-1 gap-5 p-0 lg:grid-cols-3">
            {NEWSROOM_ITEMS.map((item) => (
              <li id={item.id} className="scroll-mt-28" key={item.id}>
                <article className={cn(card, "flex h-full flex-col p-7")}>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <span className="rounded-full bg-gold-500/15 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.03em] text-gold-700">
                      {item.category}
                    </span>
                    <time
                      dateTime={item.date}
                      className="text-[0.8rem] font-semibold text-navy-400"
                    >
                      {formatNewsroomDate(item.date)}
                    </time>
                  </div>
                  <h4 className="mt-4 font-heading text-[1.2rem] font-bold leading-snug text-navy-900">
                    {item.title}
                  </h4>
                  <p className={cn(cardText, "mt-3 flex-1")}>{item.summary}</p>
                  <p className="mt-5 border-t border-navy-800/10 pt-4 text-[0.8rem] text-navy-400">
                    Issued by{" "}
                    <span className="font-semibold text-navy-600">
                      {item.unit}
                    </span>
                  </p>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
