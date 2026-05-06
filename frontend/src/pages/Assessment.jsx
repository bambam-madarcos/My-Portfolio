import React from "react";
import SectionHeader from "@/components/SectionHeader";
import ChapterSections from "@/components/ChapterSections";
import config from "@/config/portfolio.config";

const Assessment = () => (
  <div data-testid="assessment-page">
    <SectionHeader
      eyebrow="The Reflection"
      chapter="Chapter IV"
      title="Assessment."
      lede="The supervisor's evaluation and the trainee's self-assessment — measuring growth, performance, and the program's overall outcome."
    />
    <ChapterSections sections={config.assessment.sections} />
  </div>
);

export default Assessment;
