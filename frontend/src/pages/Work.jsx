import React, { useState, useEffect } from "react";
import SectionHeader from "@/components/SectionHeader";
import ChapterSections from "@/components/ChapterSections";
import config from "@/config/portfolio.config";

const images = [
  "/images/background.jpg",
  "/images/background1.jpg",
  "/images/background2.jpg",
  "/images/background4.jpg",
  "/images/background5.jpg",
];

const Work = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  // ✅ AUTO PLAY
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // change slide every 4s

    return () => clearInterval(interval);
  }, []);

  return (
    <div data-testid="work-page">

      {/* HEADER (FIRST PAGE) */}
      <SectionHeader
        eyebrow="The Practice"
        chapter="Chapter III"
        title="Work experience."
        lede="The day-to-day record — weekly accomplishments, attendance, progress, and an honest analysis of what the work has taught."
      />

      {/* 🔥 CLEAN CAROUSEL CARD */}
<div className="relative w-full aspect-[16/9] mt-6 rounded-2xl overflow-hidden shadow-lg">

  {/* IMAGE */}
  <img
    src={images[index]}
    alt="Work preview"
    className="w-full h-full object-cover transition-all duration-700"
  />

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-black/20"></div>

  {/* LEFT BUTTON */}
  <button
    onClick={prev}
    className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 px-3 py-1 rounded-full"
  >
    ‹
  </button>

  {/* RIGHT BUTTON */}
  <button
    onClick={next}
    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 px-3 py-1 rounded-full"
  >
    ›
  </button>

  {/* INDICATORS */}
  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
    {images.map((_, i) => (
      <div
        key={i}
        className={`h-2 w-2 rounded-full transition-all ${
          i === index ? "bg-white scale-125" : "bg-white/50"
        }`}
      />
    ))}
  </div>
</div>

      {/* CONTENT */}
      <ChapterSections sections={config.work.sections} />
    </div>
  );
};

export default Work;