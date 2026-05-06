import React from "react";
import SectionHeader from "@/components/SectionHeader";
import ChapterSections from "@/components/ChapterSections";
import config from "@/config/portfolio.config";

const Introduction = () => (
  <div data-testid="introduction-page">
    <SectionHeader
      eyebrow="The Document"
      chapter="Chapter I"
      title="Introduction."
      lede="The why, the what, and the where — a brief framing of the internship's purpose and setting before the work itself begins."
    />
    <ChapterSections sections={config.introduction.sections} />
  </div>
);

export default Introduction;
