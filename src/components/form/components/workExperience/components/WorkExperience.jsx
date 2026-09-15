import React, {useContext} from 'react';
import {handleWorkExperience} from "../units/handleWorkExperience";
import {ResumeContext} from "../../../../builder";
import {BsTrash3} from "react-icons/bs";
import {removeWorkExperience} from "../units/removeResumeExperience";

const WorkExperience = ({workExperience, index}) => {
  const {resumeData, setResumeData,} = useContext(ResumeContext);

  return (
    <div className="p-3.5 bg-slate-950/60 border border-slate-800/90 rounded-lg space-y-2.5 mb-3 relative group">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-indigo-400">
          Position #{index + 1} {workExperience.company ? `• ${workExperience.company}` : ""}
        </span>
        <button
          type="button"
          onClick={() => {
            removeWorkExperience(resumeData, setResumeData, index);
          }}
          aria-label="Remove Position"
          className="btn-action-del"
          title="Delete this position"
        >
          <BsTrash3 className="text-xs" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div>
          <label className="block text-[10px] font-semibold text-slate-400 mb-0.5 tracking-wider uppercase">Company Name</label>
          <input
            type="text"
            placeholder="e.g. Apex Solutions Inc."
            name="company"
            className="w-full other-input mb-0 text-xs"
            value={workExperience.company}
            onChange={(e) =>
              handleWorkExperience(resumeData, setResumeData, e, index)
            }
          />
        </div>
        <div>
          <label className="block text-[10px] font-semibold text-slate-400 mb-0.5 tracking-wider uppercase">Role / Job Title</label>
          <input
            type="text"
            placeholder="e.g. AI Engineer"
            name="position"
            className="w-full other-input mb-0 text-xs"
            value={workExperience.position}
            onChange={(e) =>
              handleWorkExperience(resumeData, setResumeData, e, index)
            }
          />
        </div>
        <div>
          <label className="block text-[10px] font-semibold text-slate-400 mb-0.5 tracking-wider uppercase">Location</label>
          <input
            type="text"
            placeholder="e.g. San Francisco, CA"
            name="description"
            className="w-full other-input mb-0 text-xs"
            value={workExperience.description}
            onChange={(e) =>
              handleWorkExperience(resumeData, setResumeData, e, index)
            }
          />
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          <div>
            <label className="block text-[10px] font-semibold text-slate-400 mb-0.5 tracking-wider uppercase">Start Date</label>
            <input
              type="date"
              name="startYear"
              className="w-full other-input mb-0 text-xs py-2"
              value={workExperience.startYear}
              onChange={(e) =>
                handleWorkExperience(resumeData, setResumeData, e, index)
              }
            />
          </div>
          <div>
            <label className="block text-[10px] font-semibold text-slate-400 mb-0.5 tracking-wider uppercase">End Date</label>
            <input
              type="date"
              name="endYear"
              className="w-full other-input mb-0 text-xs py-2"
              value={workExperience.endYear}
              onChange={(e) =>
                handleWorkExperience(resumeData, setResumeData, e, index)
              }
            />
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-0.5">
          <label className="text-[10px] font-semibold text-slate-400 tracking-wider uppercase">
            Key Achievements & Bullets
          </label>
          <span className="text-[10px] text-slate-500">1 bullet per line</span>
        </div>
        <textarea
          placeholder="• Designed and deployed...&#10;• Reduced latency by 83%...&#10;• Automated PO extraction saving 160 hrs..."
          name="keyAchievements"
          className="w-full other-input text-xs h-28 leading-relaxed font-sans"
          value={workExperience.keyAchievements}
          onChange={(e) =>
            handleWorkExperience(resumeData, setResumeData, e, index)
          }
        />
      </div>
    </div>
  );
};

export default WorkExperience;
