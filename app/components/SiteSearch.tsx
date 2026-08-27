"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { SEARCH_INDEX } from "./siteData";

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m21 21-4.35-4.35" />
      <circle cx="11" cy="11" r="7" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

/** Every term the reader types must appear somewhere in the entry. */
function matches(haystack: string, terms: string[]) {
  return terms.every((term) => haystack.includes(term));
}

export function SiteSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const statusId = useId();

  const terms = useMemo(
    () => query.trim().toLowerCase().split(/\s+/).filter(Boolean),
    [query],
  );

  const results = useMemo(() => {
    if (terms.length === 0) {
      return SEARCH_INDEX.slice(0, 6);
    }

    return SEARCH_INDEX.filter((entry) =>
      matches(
        `${entry.title} ${entry.category} ${entry.description} ${entry.keywords}`.toLowerCase(),
        terms,
      ),
    ).slice(0, 8);
  }, [terms]);

  useEffect(() => {
    if (!open) {
      return;
    }

    inputRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    // Keep the page behind the overlay from scrolling under it.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-navy-800/10 text-navy-600 transition-colors hover:border-gold-500 hover:text-navy-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2"
        aria-label="Search this website"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        <SearchIcon className="h-4 w-4" />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[80] bg-navy-950/55 px-4 py-20 backdrop-blur-sm"
          role="presentation"
          onClick={close}
        >
          <div
            className="mx-auto max-w-2xl overflow-hidden rounded-xl bg-white shadow-[0_24px_80px_rgba(2,13,22,0.35)]"
            role="dialog"
            aria-modal="true"
            aria-label="Search this website"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-navy-800/10 px-4 py-3">
              <SearchIcon className="h-5 w-5 shrink-0 text-gold-600" />
              <input
                ref={inputRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search the newsroom, units, partnerships and contacts"
                className="min-h-11 flex-1 border-0 bg-transparent text-[1rem] text-navy-900 outline-none placeholder:text-navy-400"
                type="search"
                aria-describedby={statusId}
              />
              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-navy-500 hover:bg-navy-50 hover:text-navy-900"
                aria-label="Close search"
                onClick={close}
              >
                <CloseIcon />
              </button>
            </div>

            <p
              id={statusId}
              role="status"
              aria-live="polite"
              className="border-b border-navy-800/10 px-4 py-2 text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-navy-400"
            >
              {terms.length === 0
                ? "Suggested sections"
                : `${results.length} ${results.length === 1 ? "result" : "results"}`}
            </p>

            <div className="max-h-[65vh] overflow-y-auto p-3">
              {results.length > 0 ? (
                <ul className="m-0 list-none p-0">
                  {results.map((entry) => (
                    <li key={`${entry.href}-${entry.title}`}>
                      <a
                        href={entry.href}
                        className={cn(
                          "block rounded-lg px-4 py-3 transition-colors",
                          "hover:bg-parchment focus-visible:bg-parchment focus-visible:outline-none",
                        )}
                        onClick={close}
                      >
                        <span className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-gold-600">
                          {entry.category}
                        </span>
                        <span className="mt-1 block font-heading text-[1rem] font-bold leading-tight text-navy-900">
                          {entry.title}
                        </span>
                        <span className="mt-1 block text-[0.86rem] leading-relaxed text-navy-500">
                          {entry.description}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="m-0 px-4 py-8 text-center text-[0.92rem] text-navy-500">
                  No results for &ldquo;{query.trim()}&rdquo;. Try a unit name, a
                  partner institution, or a newsroom category.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
