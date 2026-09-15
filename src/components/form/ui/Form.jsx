import React from 'react';
import LoadUnload from "../components/LoadUnload";
import PersonalInformation from "../components/PersonalInformation";
import SocialMedias from "../components/socialMedia/ui/SocialMedias";
import Summary from "../components/Summary";
import Educations from "../components/education/ui/Educations";
import WorkExperiences from "../components/workExperience/ui/WorkExperiences";
import Projects from "../components/projects/ui/Projects";
import Skills from "../components/skills/ui/Skills";
import Languages from "../components/languages/ui/Languages";
import TestsAndCertifications from "../components/testsAndCertifications/ui/TestsAndCertifications";
import Achievements from "../components/achievements/ui/Achievements";
import SectionWrapper from "../components/SectionWrapper";

const Form = () => {
  return (
    <form className="p-5 bg-white border-r border-slate-200 exclude-print w-full md:w-[480px] md:min-w-[420px] md:max-w-[500px] h-full overflow-y-auto space-y-3.5 shadow-xs">
      <LoadUnload/>
      <PersonalInformation/>
      <SocialMedias/>
      <SectionWrapper sectionKey="profile">
        <Summary/>
      </SectionWrapper>
      <SectionWrapper sectionKey="skills">
        <Skills/>
      </SectionWrapper>
      <SectionWrapper sectionKey="education">
        <Educations/>
      </SectionWrapper>
      <SectionWrapper sectionKey="certifications">
        <TestsAndCertifications/>
      </SectionWrapper>
      <SectionWrapper sectionKey="experience">
        <WorkExperiences/>
      </SectionWrapper>
      <SectionWrapper sectionKey="projects">
        <Projects/>
      </SectionWrapper>
      <SectionWrapper sectionKey="achievements">
        <Achievements/>
      </SectionWrapper>
      <SectionWrapper sectionKey="languages">
        <Languages/>
      </SectionWrapper>
    </form>
  );
};

export default Form;
