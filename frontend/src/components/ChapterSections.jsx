import React from "react";
import DTRCalendar from "./DTRCalendar";
import WeeklyCalendar from "./WeeklyCalendar";
import AppendicesViewer from "./AppendicesViewer";

/**
 * Renders an array of {label, title, body[], list?} as a scholarly two-column layout.
 */
const ChapterSections = ({ sections }) => {
  return (
    <div className="max-w-canvas mx-auto px-6 lg:px-12 py-20 lg:py-28">
      <div className="space-y-24">
        {sections.map((s, idx) => (
          <article
            key={s.id || idx}
            className="grid lg:grid-cols-12 gap-10 rise"
            style={{ animationDelay: `${0.05 + idx * 0.08}s` }}
            data-testid={`chapter-section-${s.id || idx}`}
          >
            <div className="lg:col-span-3">
              <div className="sticky top-28">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                  Section {s.label}
                </p>
                <h2 className="font-display text-2xl mt-3 leading-tight tracking-tight">
                  {s.title}
                </h2>
                <span className="accent-rule mt-5" />
              </div>
            </div>
            <div className="lg:col-span-9">
              {s.list ? (
                <>
                  <ul className="space-y-4">
                    {(s.body || []).map((line, i) => (
                      <li
                        key={i}
                        className="flex gap-4 text-ink-soft leading-relaxed text-lg"
                      >
                        <span className="font-mono text-accent text-sm pt-1 shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                  {s.image && (
                    <img
                      src={s.image}
                      alt={s.title}
                      className="mt-6 rounded-lg w-full"
                    />
                  )}
                </>
                ) : (
                <div className="space-y-6 max-w-prose">
                  {(s.body || []).map((p, i) => (
                    <p key={i} className="text-lg text-ink-soft leading-relaxed">
                      {p}
                    </p>
                  ))}
                  {s.image && (
                    <img
                      src={s.image}
                      alt={s.title}
                      className="mt-6 rounded-lg w-full"
                    />
                  )}
                </div>
              )}
              {s.id === "dtr" && s.dtr && (
                <DTRCalendar dtr={s.dtr} />
              )}
              {s.id === "weekly" && s.weekly && (
              <WeeklyCalendar data={s.weekly} />
              )}
              {s.id === "appendices" && s.appendices && (
              <AppendicesViewer data={s.appendices} />
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ChapterSections;
