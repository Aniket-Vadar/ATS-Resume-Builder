import React, {useContext} from 'react';
import {handleProject} from "../utils/handleProject";
import {ResumeContext} from "../../../../builder";
import {removeLanguage} from "../../languages/utils/removeLanguage";
import {BsTrash3} from "react-icons/bs";
import {removeProject} from "../utils/removeProject";

const Project = ({project, index}) => {
  const {resumeData, setResumeData} = useContext(ResumeContext);
  // TODO add a title for each input
  // TODO change the "start year" to the "start date" for clarity (also in the name of variable)
  // TODO change the "end year" to the "end date" for clarity  (also in the name of variable)

  return (
    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg space-y-2.5 mb-3 relative group">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-indigo-600">
          Project #{index + 1} {project.name ? `• ${project.name}` : ""}
        </span>
        <button
          type="button"
          onClick={() => {
            removeProject(resumeData, setResumeData, index);
          }}
          aria-label="Remove Project"
          className="btn-action-del"
          title="Delete project"
        >
          <BsTrash3 className="text-xs" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div>
          <label className="block text-[10px] font-semibold text-slate-500 mb-0.5 tracking-wider uppercase">Project Name</label>
          <input
            type="text"
            placeholder="e.g. Autonomous Multi-Agent System"
            name="name"
            className="w-full other-input mb-0 text-xs"
            value={project.name}
            onChange={(e) => handleProject(resumeData, setResumeData, e, index)}
          />
        </div>
        <div>
          <label className="block text-[10px] font-semibold text-slate-500 mb-0.5 tracking-wider uppercase">Project / Repo Link</label>
          <input
            type="text"
            placeholder="github.com/user/project"
            name="link"
            className="w-full other-input mb-0 text-xs"
            value={project.link}
            onChange={(e) => handleProject(resumeData, setResumeData, e, index)}
          />
        </div>
        <div>
          <label className="block text-[10px] font-semibold text-slate-500 mb-0.5 tracking-wider uppercase">Start Date</label>
          <input
            type="date"
            name="startYear"
            className="w-full other-input mb-0 text-xs py-2"
            value={project.startYear}
            onChange={(e) => handleProject(resumeData, setResumeData, e, index)}
          />
        </div>
        <div>
          <label className="block text-[10px] font-semibold text-slate-500 mb-0.5 tracking-wider uppercase">End Date</label>
          <input
            type="date"
            name="endYear"
            className="w-full other-input mb-0 text-xs py-2"
            value={project.endYear}
            onChange={(e) => handleProject(resumeData, setResumeData, e, index)}
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-0.5">
          <label className="text-[10px] font-semibold text-slate-500 tracking-wider uppercase">
            Project Description / Key Highlights
          </label>
          <span className="text-[10px] text-slate-400">1 bullet per line</span>
        </div>
        <textarea
          placeholder="• Built multimodal pipeline with computer vision and LLMs...&#10;• Orchestrated parallel agent workflows using Gemini 2.0 Flash..."
          name="keyAchievements"
          className="w-full other-input text-xs h-24 leading-relaxed font-sans"
          value={project.keyAchievements}
          onChange={(e) => handleProject(resumeData, setResumeData, e, index)}
        />
      </div>
    </div>
  );
};

export default Project;
