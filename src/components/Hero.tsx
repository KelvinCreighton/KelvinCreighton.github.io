"use client";

import { useEffect, useState } from "react";

export function Hero() {
  const [typedText, setTypedText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const phrases = [
    "VP of Events @ UofA Cybersecurity Club (CHADS)",
    "Chapter Leader @ OWASP Edmonton",
    "4th Year Computer Science Student",
    "Web Exploitation & Network Security Enthusiast",
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentPhrase = phrases[phraseIndex];
    const typingSpeed = isDeleting ? 30 : 60;

    if (!isDeleting && typedText === currentPhrase) {
      // Pause at full text
      timer = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && typedText === "") {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    } else {
      timer = setTimeout(() => {
        setTypedText(
          isDeleting
            ? currentPhrase.substring(0, typedText.length - 1)
            : currentPhrase.substring(0, typedText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, phraseIndex]);

  const scrollToContent = () => {
    const element = document.getElementById("main-content");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-[100dvh] flex flex-col items-center justify-center text-center px-4 -mt-20 md:-mt-24 lg:-mt-28">
      {/* Title */}
      <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 animate-fade-in-up">
        Kelvin Creighton
      </h1>

      {/* Typewriter Subtitle */}
      <div className="h-10 md:h-12 flex items-center justify-center animate-fade-in-up animation-delay-300">
        <p className="font-mono text-base sm:text-lg md:text-2xl text-violet-600 dark:text-violet-400 font-medium">
          {typedText}
          <span className="inline-block w-[3px] h-[18px] md:h-[24px] bg-violet-600 dark:bg-violet-400 ml-1 animate-pulse">
            |
          </span>
        </p>
      </div>

      {/* Down Chevron */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-10 cursor-pointer text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-300 transform hover:scale-110 focus:outline-none animate-bounce"
        aria-label="Scroll to content"
      >
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-10 h-10 md:w-12 md:h-12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
    </section>
  );
}
