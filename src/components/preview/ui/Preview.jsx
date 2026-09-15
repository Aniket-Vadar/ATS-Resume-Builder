/* eslint-disable react/jsx-no-undef */
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube, FaTelegramPlane,} from "react-icons/fa";
import {CgWebsite} from "react-icons/cg";
import React, {useContext} from "react";
import {ResumeContext} from "../../builder";
import dynamic from "next/dynamic";
import ModalHighlightMenu from "../components/ModalHighlightMenu";
import Header from "../components/Header";
import Skills from "../components/Skills";
import DateRange from "../../utility/DateRange";
import Language from "../components/Language";
import Certification from "../components/Certification";
import Achievements from "../components/Achievements";
import A4PageWrapper from "../components/A4PageWrapper";
import {onDragEndHandler} from "../utils/onDrugEndHandler";

const DragDropContext = dynamic(
  () =>
    import("react-beautiful-dnd").then((mod) => {
      return mod.DragDropContext;
    }),
  {ssr: false}
);

const Droppable = dynamic(
  () => import("react-beautiful-dnd").then((mod) => mod.Droppable),
  {ssr: false}
);

const Draggable = dynamic(
  () => import("react-beautiful-dnd").then((mod) => mod.Draggable),
  {ssr: false}
);

const Preview = () => {
  const {resumeData, setResumeData} = useContext(ResumeContext);
  const icons = [
    {name: "github", icon: <FaGithub/>},
    {name: "linkedin", icon: <FaLinkedin/>},
    {name: "twitter", icon: <FaTwitter/>},
    {name: "facebook", icon: <FaFacebook/>},
    {name: "instagram", icon: <FaInstagram/>},
    {name: "youtube", icon: <FaYoutube/>},
    {name: "telegram", icon: <FaTelegramPlane/>},
    {name: "website", icon: <CgWebsite/>},
  ];

  const hiddenSections = resumeData.hiddenSections || [];
  const sectionTitles = resumeData.sectionTitles || {};
  const isVisible = (key) => !hiddenSections.includes(key);

  return (
    <div className="flex-1 preview rm-padding-print p-4 md:p-6 overflow-y-auto h-full flex justify-center bg-slate-900/40">
      <A4PageWrapper>
        <ModalHighlightMenu/>
        <DragDropContext onDragEnd={(result) => onDragEndHandler(result, resumeData, setResumeData)}>

          {/* HEADER — Name + Contact */}
          <Header resumeData={resumeData} icons={icons}/>
          <hr className="border-solid border-gray-800 my-1" />

          {/* PROFILE */}
          {isVisible("profile") && resumeData.summary && resumeData.summary.length > 0 && (
            <div className="mb-1.5">
              <h2 className="section-title mb-0.5 border-b-2 border-gray-300">
                {sectionTitles.profile || "SUMMARY"}
              </h2>
              <p className="content break-words">{resumeData.summary}</p>
            </div>
          )}

          {/* SKILLS */}
          {isVisible("skills") && resumeData.skills && resumeData.skills.length > 0 && (
            <div className="mb-1.5">
              <Droppable droppableId="skills" type="SKILLS">
                {(provided) => (
                  <div {...provided.droppableProps} ref={provided.innerRef}>
                    <h2 className="section-title mb-1 border-b-2 border-gray-300">
                      {sectionTitles.skills || "SKILLS"}
                    </h2>
                    {resumeData.skills.map((skill, index) => (
                      <Draggable
                        key={`SKILLS-${index}`}
                        draggableId={`SKILLS-${index}`}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={`${
                              snapshot.isDragging &&
                              "outline-dashed outline-2 outline-gray-400 bg-white"
                            }`}
                          >
                            <Skills title={skill.title} skills={skill.skills} />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          )}

          {/* EDUCATION */}
          {isVisible("education") && resumeData.education && resumeData.education.length > 0 && (
            <div className="mb-1.5">
              <h2 className="section-title mb-0.5 border-b-2 border-gray-300">
                {sectionTitles.education || "EDUCATION"}
              </h2>
              {resumeData.education.map((item, index) => {
                const isDegreeInSchool = item.school && (item.school.includes("Bachelor") || item.school.includes("Master") || item.school.includes("B.E.") || item.school.includes("B.Tech") || item.school.includes("Degree"));
                const schoolName = isDegreeInSchool ? item.degree : item.school;
                const degreeName = isDegreeInSchool ? item.school : item.degree;
                const loc = item.location || resumeData.address || "Pune, India";
                return (
                  <div key={index} className="mb-1">
                    <div className="flex flex-row justify-between">
                      <p className="content i-bold">{schoolName}</p>
                      <p className="content italic text-right">{loc}</p>
                    </div>
                    <div className="flex flex-row justify-between">
                      <p className="content">{degreeName}</p>
                      <DateRange
                        startYear={item.startYear}
                        endYear={item.endYear}
                        id={`education-start-end-date-${index}`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* CERTIFICATIONS */}
          {isVisible("certifications") && resumeData.certifications && resumeData.certifications.length > 0 && (
            <div className="mb-1.5">
              <Certification
                title={sectionTitles.certifications || "CERTIFICATIONS"}
                certifications={resumeData.certifications}
              />
            </div>
          )}

          {/* EXPERIENCE */}
          {isVisible("experience") && resumeData.workExperience && resumeData.workExperience.length > 0 && (
            <div className="mb-1.5">
              <Droppable droppableId="work-experience" type="WORK_EXPERIENCE">
                {(provided) => (
                  <div {...provided.droppableProps} ref={provided.innerRef}>
                    <h2 className="section-title mb-0.5 border-b-2 border-gray-300">
                      {sectionTitles.experience || "WORK EXPERIENCE"}
                    </h2>
                    {resumeData.workExperience.map((item, index) => (
                      <Draggable
                        key={`${item.company}-${index}`}
                        draggableId={`WORK_EXPERIENCE-${index}`}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={`mb-1.5 ${
                              snapshot.isDragging &&
                              "outline-dashed outline-2 outline-gray-400 bg-white"
                            }`}
                          >
                            {/* Company + Location */}
                            <div className="flex flex-row justify-between">
                              <p className="content i-bold">{item.company}</p>
                              <p className="content italic text-right">{item.description}</p>
                            </div>
                            {/* Position + Dates */}
                            <div className="flex flex-row justify-between">
                              <p className="content i-bold">{item.position}</p>
                              <DateRange
                                startYear={item.startYear}
                                endYear={item.endYear}
                                id={`work-experience-start-end-date-${index}`}
                              />
                            </div>
                            {/* Key Achievements */}
                            <Droppable
                              droppableId={`WORK_EXPERIENCE_KEY_ACHIEVEMENT-${index}`}
                              type="WORK_EXPERIENCE_KEY_ACHIEVEMENT"
                            >
                              {(provided) => (
                                <ul
                                  className="list-disc ul-padding content"
                                  {...provided.droppableProps}
                                  ref={provided.innerRef}
                                >
                                  {typeof item.keyAchievements === "string" &&
                                    item.keyAchievements
                                      .split("\n")
                                      .filter((achievement) => achievement && achievement.trim().length > 0 && achievement.trim() !== "." && achievement.trim() !== "•")
                                      .map((achievement, subIndex) => (
                                        <Draggable
                                          key={`${item.company}-${index}-${subIndex}`}
                                          draggableId={`WORK_EXPERIENCE_KEY_ACHIEVEMENT-${index}-${subIndex}`}
                                          index={subIndex}
                                        >
                                          {(provided, snapshot) => (
                                            <li
                                              ref={provided.innerRef}
                                              {...provided.draggableProps}
                                              {...provided.dragHandleProps}
                                              className={`
                                                hover:outline-dashed hover:outline-2 hover:outline-gray-400
                                                ${
                                                snapshot.isDragging &&
                                                "outline-dashed outline-2 outline-gray-400 bg-white"
                                              }`}
                                            >
                                              <div
                                                dangerouslySetInnerHTML={{
                                                  __html: achievement,
                                                }}
                                                contentEditable
                                                suppressContentEditableWarning
                                              />
                                            </li>
                                          )}
                                        </Draggable>
                                      ))}
                                  {provided.placeholder}
                                </ul>
                              )}
                            </Droppable>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          )}

          {/* PROJECTS */}
          {isVisible("projects") && resumeData.projects && resumeData.projects.length > 0 && (
            <div className="mb-1.5">
              <Droppable droppableId="projects" type="PROJECTS">
                {(provided) => (
                  <div {...provided.droppableProps} ref={provided.innerRef}>
                    <h2 className="section-title mb-1 border-b-2 border-gray-300">
                      {sectionTitles.projects || "PROJECTS"}
                    </h2>
                    {resumeData.projects.map((item, index) => (
                      <Draggable
                        key={`${item.name}-${index}`}
                        draggableId={`PROJECTS-${index}`}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={`mb-1.5 ${
                              snapshot.isDragging &&
                              "outline-dashed outline-2 outline-gray-400 bg-white"
                            }`}
                          >
                            {/* Project Name + Dates */}
                            <div className="flex flex-row justify-between">
                              <p className="content i-bold">{item.name}</p>
                              <DateRange
                                startYear={item.startYear}
                                endYear={item.endYear}
                                id={`projects-start-end-date-${index}`}
                              />
                            </div>
                            {item.link && (
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="sub-content text-blue-600 underline"
                              >
                                {item.link}
                              </a>
                            )}
                            {item.description && (
                              <p className="content">{item.description}</p>
                            )}
                            {/* Key Achievements */}
                            <Droppable
                              droppableId={`PROJECTS_KEY_ACHIEVEMENT-${index}`}
                              type="PROJECTS_KEY_ACHIEVEMENT"
                            >
                              {(provided) => (
                                <ul
                                  className="list-disc ul-padding content"
                                  {...provided.droppableProps}
                                  ref={provided.innerRef}
                                >
                                  {typeof item.keyAchievements === "string" &&
                                    item.keyAchievements
                                      .split("\n")
                                      .filter((achievement) => achievement && achievement.trim().length > 0 && achievement.trim() !== "." && achievement.trim() !== "•")
                                      .map((achievement, subIndex) => (
                                        <Draggable
                                          key={`${item.name}-${index}-${subIndex}`}
                                          draggableId={`PROJECTS_KEY_ACHIEVEMENT-${index}-${subIndex}`}
                                          index={subIndex}
                                        >
                                          {(provided, snapshot) => (
                                            <li
                                              ref={provided.innerRef}
                                              {...provided.draggableProps}
                                              {...provided.dragHandleProps}
                                              className={`
                                                hover:outline-dashed hover:outline-2 hover:outline-gray-400
                                                ${
                                                snapshot.isDragging &&
                                                "outline-dashed outline-2 outline-gray-400 bg-white"
                                              }`}
                                            >
                                              <div
                                                dangerouslySetInnerHTML={{
                                                  __html: achievement,
                                                }}
                                                contentEditable
                                                suppressContentEditableWarning
                                              />
                                            </li>
                                          )}
                                        </Draggable>
                                      ))}
                                  {provided.placeholder}
                                </ul>
                              )}
                            </Droppable>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          )}

          {/* ACHIEVEMENTS */}
          {isVisible("achievements") && (
            <Achievements
              title={sectionTitles.achievements || "ACHIEVEMENTS"}
              achievements={resumeData.achievements || []}
            />
          )}

          {/* LANGUAGES */}
          {isVisible("languages") && resumeData.languages && resumeData.languages.length > 0 && (
            <Language
              title={sectionTitles.languages || "LANGUAGES"}
              languages={resumeData.languages}
            />
          )}

        </DragDropContext>
      </A4PageWrapper>

      {/* Floating Canvas Quick-Actions (Bottom Center) */}
      <div className="exclude-print fixed bottom-6 right-1/4 translate-x-1/2 z-30 flex items-center gap-2 px-3 py-1.5 bg-slate-950/90 backdrop-blur-md border border-slate-800/90 rounded-full shadow-2xl text-xs text-slate-300">
        <span className="text-[11px] font-mono text-slate-400 px-1">A4 Sheet</span>
        <div className="h-3 w-px bg-slate-800"></div>
        <button
          type="button"
          onClick={() => window.print()}
          className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-colors cursor-pointer shadow-md shadow-indigo-600/20"
          title="Export / Print PDF"
        >
          <span>Export PDF</span>
        </button>
      </div>
    </div>
  );
};

export default Preview;
