import React from "react";
import SectionHeader from "@/components/SectionHeader";
import config from "@/config/portfolio.config";
import AppendicesViewer from "@/components/AppendicesViewer";

const Appendices = () => {
  return (
    <div data-testid="appendices-page">
      
      {/* HEADER */}
      <SectionHeader
        eyebrow="The Evidence"
        chapter="Appendices"
        title="Records & attachments."
        lede="The supporting documents — forms, certificates, photographs, and references — that substantiate this portfolio."
      />

      {/* CONTENT */}
      <div className="max-w-canvas mx-auto px-6 lg:px-12 py-20 lg:py-28">

        {/* 🔥 ADVANCED VIEWER (GRID + MODAL) */}
        <AppendicesViewer data={config.appendices} />

        {/* FOOTNOTE */}
        <p className="mt-12 max-w-prose text-sm text-ink-muted">
          Add scanned attachments, photos, or PDF links for each appendix as they
          become available — every entry above is a slot ready to hold its
          corresponding document.
        </p>

      </div>
    </div>
  );
};

export default Appendices;