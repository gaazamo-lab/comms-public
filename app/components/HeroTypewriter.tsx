"use client";

import { useEffect, useState } from "react";

const words = ["Corporate", "Communications", "and Partnerships"];
const typeDelay = 85;
const deleteDelay = 45;
const holdDelay = 900;

export function HeroTypewriter() {
  const [wordIndex, setWordIndex] = useState(0);
  const [letterCount, setLetterCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = window.setTimeout(
      () => {
        if (!isDeleting && letterCount < currentWord.length) {
          setLetterCount((count) => count + 1);
          return;
        }

        if (!isDeleting && letterCount === currentWord.length) {
          setIsDeleting(true);
          return;
        }

        if (isDeleting && letterCount > 0) {
          setLetterCount((count) => count - 1);
          return;
        }

        setIsDeleting(false);
        setWordIndex((index) => (index + 1) % words.length);
      },
      !isDeleting && letterCount === currentWord.length
        ? holdDelay
        : isDeleting
          ? deleteDelay
          : typeDelay,
    );

    return () => window.clearTimeout(timeout);
  }, [isDeleting, letterCount, wordIndex]);

  return (
    <span className="hero-typewriter text-gold-400">
      <span>{words[wordIndex].slice(0, letterCount)}</span>
      <span className="hero-typewriter-cursor" aria-hidden="true" />
    </span>
  );
}
