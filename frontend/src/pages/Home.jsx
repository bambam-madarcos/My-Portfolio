import React from "react";
import { Link } from "react-router-dom";
import config from "@/config/portfolio.config";
import { ArrowUpRight } from "lucide-react";

const Field = ({ label, value }) => (
  <div className="grid grid-cols-12 gap-4 py-5 border-b border-rule">
    <div className="col-span-12 sm:col-span-4 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-muted pt-1">
      {label}
    </div>
    <div className="col-span-12 sm:col-span-8 text-ink text-base">
      {value}
    </div>
  </div>
);

const Home = () => {
  const s = config.student;

  return (
    <div data-testid="home-page">
      {/* ============== HERO / TITLE PAGE ============== */}
      <section className="border-b border-rule" data-testid="title-hero">
        <div className="max-w-canvas mx-auto px-6 lg:px-12 pt-20 pb-24 lg:pt-32 lg:pb-32">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7 rise rise-1">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink-muted mb-8">
                {s.school} · {s.college}
              </p>
              <h1 className="font-display font-bold text-[42px] sm:text-6xl lg:text-[88px] leading-[0.95] tracking-tight">
                E-PORTFOLIO
                <br />
                <span className="italic font-normal">On-the-job Training</span>,
                <br />
                <span className="text-ink-muted">documented.</span>
              </h1>
              <p className="mt-10 max-w-prose text-lg text-ink-soft leading-relaxed">
                {config.brand.tagline}
              </p>
              <div className="mt-12 flex flex-wrap gap-3">
                <Link
                  to="/introduction"
                  className="group inline-flex items-center gap-2 bg-ink text-paper px-5 py-3 text-sm tracking-wide hover:bg-ink-soft transition-colors"
                  data-testid="cta-start-reading"
                >
                  Start reading
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <a
                  href="#profile"
                  className="inline-flex items-center gap-2 border border-rule px-5 py-3 text-sm text-ink-soft hover:border-ink hover:text-ink transition-colors"
                  data-testid="cta-view-profile"
                >
                  View profile
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 rise rise-3">
              <div className="border border-rule p-8 bg-card/60">
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted mb-6">
                  Document index
                </div>
                <ol className="space-y-3 text-sm">
                  {[
                    ["I", "Introduction", "/introduction"],
                    ["II", "Company Profile", "/company"],
                    ["III", "Work Experience", "/work"],
                    ["IV", "Assessment", "/assessment"],
                    ["·", "Appendices A–Q", "/appendices"],
                  ].map(([n, t, to]) => (
                    <li key={t}>
                      <Link
                        to={to}
                        className="flex items-baseline gap-4 py-2 hover:text-ink text-ink-soft group"
                      >
                        <span className="font-mono text-xs text-accent w-6">{n}</span>
                        <span className="flex-1 link-underline">{t}</span>
                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== STUDENT PROFILE ============== */}
      <section
        id="profile"
        className="max-w-canvas mx-auto px-6 lg:px-12 py-24 lg:py-32 scroll-mt-20"
        data-testid="student-profile"
      >
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              01 — The Trainee
            </p>
            <h2 className="font-display text-4xl mt-4 leading-tight tracking-tight">
              Student profile.
            </h2>
            <img
              src="/images/Profile1.png"
              alt="Student Profile"
              className="mt-6 rounded-xl w-full object-cover"
            />
            <p className="mt-6 text-ink-soft leading-relaxed">
              The credentials, period, and supervisory roles that frame the entirety of this documentation.
            </p>
          </div>
          <div className="lg:col-span-8">
            <div className="border-t border-rule">
              <Field label="Full name" value={s.fullName} />
              <Field label="Student ID" value={s.studentId} />
              <Field label="Course & year" value={`${s.course} · ${s.year}`} />
              <Field label="School" value={s.school} />
              <Field label="Internship period" value={s.internshipPeriod} />
              <Field label="Host company" value={s.hostCompany} />
              <Field label="Adviser" value={s.adviser} />
            </div>
          </div>
        </div>
      </section>

      {/* ============== ACKNOWLEDGMENT ============== */}
      <section className="bg-paper-2/60 border-y border-rule" data-testid="ack-section">
        <div className="max-w-canvas mx-auto px-6 lg:px-12 py-24 lg:py-32 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              02 — Acknowledgment
            </p>
            <h2 className="font-display text-4xl mt-4 leading-tight tracking-tight">
              With gratitude.
            </h2>
          </div>
          <div className="lg:col-span-8 max-w-prose">
            <p className="text-xl text-ink leading-relaxed font-display italic">
              {config.acknowledgment.intro}
            </p>
            <div className="mt-8 space-y-5">
              {config.acknowledgment.paragraphs.map((p, i) => (
                <p key={i} className="text-ink-soft leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
            <p className="mt-10 text-ink leading-relaxed border-l-2 border-accent pl-5">
              {config.acknowledgment.closing}
            </p>
          </div>
        </div>
      </section>

      {/* ============== TRAINEE PRAYER ============== */}
      <section className="max-w-canvas mx-auto px-6 lg:px-12 py-24 lg:py-32" data-testid="prayer-section">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              03 — Prayer
            </p>
            <h2 className="font-display text-4xl mt-4 leading-tight tracking-tight">
              {config.prayer.title}
            </h2>
          </div>
          <div className="lg:col-span-8">
            <div className="max-w-prose space-y-5">
              {config.prayer.body.map((line, i) => (
                <p
                  key={i}
                  className={`leading-relaxed ${
                    i === 0
                      ? "font-display text-2xl text-ink"
                      : i === config.prayer.body.length - 1
                      ? "font-display italic text-xl text-accent pt-3"
                      : "text-ink-soft text-lg"
                  }`}
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============== PHILOSOPHY ============== */}
      <section className="bg-ink text-paper" data-testid="philosophy-section">
        <div className="max-w-canvas mx-auto px-6 lg:px-12 py-24 lg:py-32 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              04 — Personal philosophy
            </p>
            <h2 className="font-display text-4xl mt-4 leading-tight tracking-tight text-paper">
              What I believe.
            </h2>
          </div>
          <div className="lg:col-span-8">
            <p className="font-display italic text-3xl sm:text-4xl leading-tight text-paper max-w-prose">
              &ldquo;{config.philosophy.motto}.&rdquo;
            </p>
            <div className="mt-10 space-y-5 max-w-prose">
              {config.philosophy.paragraphs.map((p, i) => (
                <p key={i} className="text-paper/75 leading-relaxed text-lg">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============== CAREER PLAN ============== */}
      <section className="max-w-canvas mx-auto px-6 lg:px-12 py-24 lg:py-32" data-testid="career-section">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              05 — Career plan
            </p>
            <h2 className="font-display text-4xl mt-4 leading-tight tracking-tight">
              The road ahead.
            </h2>
          </div>
          <div className="lg:col-span-8 max-w-prose">
            <p className="text-lg text-ink-soft leading-relaxed">
              A short, honest map of where this work is meant to lead — broken into immediate steps, sustained skill-building, and long-term direction.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-rule border border-rule">
          {config.career.pillars.map((p) => (
            <div key={p.index} className="bg-paper p-8 lg:p-10" data-testid={`career-pillar-${p.index}`}>
              <div className="font-display text-7xl text-accent/30 leading-none">{p.index}</div>
              <h3 className="font-display text-xl mt-4 leading-tight tracking-tight">
                {p.title}
              </h3>
              <ul className="mt-6 space-y-3">
                {p.items.map((it, i) => (
                  <li key={i} className="text-sm text-ink-soft leading-relaxed flex gap-3">
                    <span className="text-accent shrink-0">→</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 grid lg:grid-cols-12 gap-12 border-t border-rule pt-16">
          <div className="lg:col-span-4">
            <h3 className="font-display text-2xl tracking-tight">
              {config.career.commitment.title}
            </h3>
            <span className="accent-rule mt-4" />
          </div>
          <div className="lg:col-span-8 max-w-prose space-y-5">
            {config.career.commitment.paragraphs.map((p, i) => (
              <p key={i} className="text-lg text-ink-soft leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ============== JUMP TO CHAPTERS ============== */}
      <section className="border-t border-rule" data-testid="jump-section">
        <div className="max-w-canvas mx-auto px-6 lg:px-12 py-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted mb-10">
            Continue reading
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-rule border border-rule">
            {config.nav.slice(1).map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="bg-paper p-8 group hover:bg-paper-2 transition-colors"
                data-testid={`jump-${n.to.replace("/", "")}`}
              >
                <ArrowUpRight
                  size={18}
                  className="text-ink-muted group-hover:text-accent transition-colors"
                />
                <h4 className="font-display text-lg tracking-tight mt-8 leading-tight">
                  {n.label}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
