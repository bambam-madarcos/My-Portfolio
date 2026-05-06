import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import config from "@/config/portfolio.config";
import { Menu, X } from "lucide-react";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col paper-grain" data-testid="app-layout">
      
      {/* HEADER */}
      <header
        className="sticky top-0 z-10 backdrop-blur-md bg-paper/75 border-b border-rule"
        data-testid="site-header"
      >
        <div className="max-w-canvas mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
          
          {/* BRAND */}
          <NavLink
            to="/"
            className="group flex items-baseline gap-3"
            data-testid="brand-link"
          >
            <span className="font-display text-3xl tracking-tight">
              {config.student.fullName}
            </span>
            <span className="hidden sm:inline text-xs font-display uppercase tracking-[0.18em] text-ink-muted">
              · {config.brand.accentLabel}
            </span>
          </NavLink>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-8" data-testid="desktop-nav">
            {config.nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `link-underline text-sm tracking-wide ${
                    isActive
                      ? "text-ink active"
                      : "text-ink-soft hover:text-ink"
                  }`
                }
                data-testid={`nav-${item.to.replace("/", "") || "home"}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 -mr-2"
            aria-label="Toggle menu"
            data-testid="mobile-menu-toggle"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* MOBILE NAV */}
        {open && (
          <div className="lg:hidden border-t border-rule bg-paper" data-testid="mobile-nav">
            <nav className="px-6 py-6 flex flex-col gap-4">
              {config.nav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `text-base ${
                      isActive ? "text-ink" : "text-ink-soft"
                    }`
                  }
                  data-testid={`mobile-nav-${item.to.replace("/", "") || "home"}`}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 relative z-0" data-testid="main-content">
        {children}
      </main>

      {/* FOOTER */}
      <footer
        className="border-t border-rule mt-32 relative z-0"
        data-testid="site-footer"
      >
        <div className="max-w-canvas mx-auto px-6 lg:px-12 py-12 grid md:grid-cols-3 gap-10">
          
          {/* BRAND INFO */}
          <div>
            <div className="font-display text-2xl tracking-tight mb-2">
              {config.brand.siteTitle}
            </div>
            <p className="text-sm text-ink-muted max-w-xs">
              {config.brand.tagline}
            </p>
          </div>

          {/* DOCUMENT LINKS */}
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-muted mb-3">
              Document
            </div>
            <ul className="space-y-2 text-sm">
              {config.nav.slice(0, 4).map((n) => (
                <li key={n.to}>
                  <NavLink
                    to={n.to}
                    className="link-underline text-ink-soft hover:text-ink"
                  >
                    {n.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* AUTHOR INFO */}
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-muted mb-3">
              Author
            </div>
            <p className="text-sm text-ink-soft">
              {config.student.fullName}
            </p>
            <p className="text-sm text-ink-muted">
              {config.student.studentId}
            </p>
            <p className="text-sm text-ink-muted">
              {config.student.school}
            </p>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="border-t border-rule">
          <div className="max-w-canvas mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <p className="text-xs text-ink-muted">
              © {new Date().getFullYear()} {config.student.fullName}. All documentation rendered in good faith.
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-muted">
              {config.student.internshipPeriod}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;