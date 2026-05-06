import React from "react";
import SectionHeader from "@/components/SectionHeader";
import ChapterSections from "@/components/ChapterSections";
import config from "@/config/portfolio.config";

const Company = () => (
  <div data-testid="company-page">
    <SectionHeader
      eyebrow="The Place"
      chapter="Chapter II"
      title="Chapter profile."
      lede="A close look at the host chapter — its character, mission, history, and the people that make the daily work possible."
    />
    <ChapterSections sections={config.company.sections} />
  </div>
);

export default Company;
