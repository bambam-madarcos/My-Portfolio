import React from "react";

/**
 * Page-level section header used at the top of each chapter.
 */
const SectionHeader = ({ eyebrow, chapter, title, lede }) => {
  return (
    <header className="border-b border-rule" data-testid="section-header">
      <div className="max-w-canvas mx-auto px-6 lg:px-12 pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-3 rise rise-1">
            {eyebrow && (
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                {eyebrow}
              </p>
            )}
            {chapter && (
              <p className="font-mono text-sm mt-3 text-accent tracking-widest">
                {chapter}
              </p>
            )}
          </div>
          <div className="lg:col-span-9 rise rise-2">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
              {title}
            </h1>
            {lede && (
              <p className="mt-8 text-lg text-ink-soft max-w-prose leading-relaxed">
                {lede}
              </p>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default SectionHeader;
