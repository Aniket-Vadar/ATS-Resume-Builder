import React, {useContext} from 'react';
import {handleEducation} from "../units/handleEducation";
import {ResumeContext} from "../../../../builder";
import {BsTrash3} from "react-icons/bs";
import {removeEducation} from "../units/removeEducation";

const Education = ({education, index}) => {
  const {resumeData, setResumeData} = useContext(ResumeContext);

  return (
    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg space-y-2.5 mb-3 relative group">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-indigo-600">
          Education #{index + 1} {education.school ? `• ${education.school}` : ""}
        </span>
        <button
          type="button"
          onClick={() => {
            removeEducation(resumeData, setResumeData, index);
          }}
          aria-label="Remove Education"
          className="btn-action-del"
          title="Delete education entry"
        >
          <BsTrash3 className="text-xs" />
        </button>
      </div>

      <div className="space-y-2">
        <div>
          <label className="block text-[10px] font-semibold text-slate-500 mb-0.5 tracking-wider uppercase">School / University</label>
          <input
            type="text"
            placeholder="e.g. University of California, Berkeley"
            name="school"
            className="w-full other-input mb-0 text-xs"
            value={education.school}
            onChange={(e) =>
              handleEducation(resumeData, setResumeData, e, index)
            }
          />
        </div>
        <div>
          <label className="block text-[10px] font-semibold text-slate-500 mb-0.5 tracking-wider uppercase">Degree & Field of Study</label>
          <input
            type="text"
            placeholder="e.g. Bachelor of Science in Computer Science"
            name="degree"
            className="w-full other-input mb-0 text-xs"
            value={education.degree}
            onChange={(e) =>
              handleEducation(resumeData, setResumeData, e, index)
            }
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-[10px] font-semibold text-slate-500 mb-0.5 tracking-wider uppercase">Start Date</label>
            <input
              type="date"
              name="startYear"
              className="w-full other-input mb-0 text-xs py-2"
              value={education.startYear}
              onChange={(e) =>
                handleEducation(resumeData, setResumeData, e, index)
              }
            />
          </div>
          <div>
            <label className="block text-[10px] font-semibold text-slate-500 mb-0.5 tracking-wider uppercase">Graduation / End Date</label>
            <input
              type="date"
              name="endYear"
              className="w-full other-input mb-0 text-xs py-2"
              value={education.endYear}
              onChange={(e) =>
                handleEducation(resumeData, setResumeData, e, index)
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
