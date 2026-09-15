import React, { useContext } from "react";
import { ResumeContext } from "../../builder";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SectionWrapper = ({ sectionKey, children }) => {
  const { resumeData, toggleSection, updateSectionTitle } = useContext(ResumeContext);
  const isHidden = (resumeData.hiddenSections || []).includes(sectionKey);
  const title = (resumeData.sectionTitles || {})[sectionKey] || sectionKey;

  return (
    <div className={`rounded-xl border transition-all duration-200 ${
      isHidden 
        ? "bg-slate-50/60 border-slate-200/80 p-3 opacity-60" 
        : "bg-white border-slate-200 p-4 shadow-xs hover:border-slate-300"
    }`}>
      <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-100">
        <div className="flex items-center gap-2 flex-1">
          <button
            type="button"
            aria-label={isHidden ? `Show ${title}` : `Hide ${title}`}
            className="section-toggle-btn text-slate-400 hover:text-slate-700"
            onClick={() => toggleSection(sectionKey)}
            title={isHidden ? "Show section on resume" : "Hide section from resume"}
          >
            {isHidden ? <FaEyeSlash className="text-slate-400 text-sm" /> : <FaEye className="text-indigo-600 text-sm" />}
          </button>
          <input
            type="text"
            className="section-title-input"
            value={title}
            onChange={(e) => updateSectionTitle(sectionKey, e.target.value)}
            title="Click to rename section heading"
          />
        </div>
        <span className={`text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full ${
          isHidden 
            ? "bg-slate-100 text-slate-500" 
            : "bg-indigo-50 text-indigo-700 border border-indigo-200/70"
        }`}>
          {isHidden ? "Hidden" : "Visible"}
        </span>
      </div>
      {isHidden ? (
        <p className="text-slate-400 text-xs italic py-1">
          Section is hidden from the resume preview. Click the eye icon to enable.
        </p>
      ) : (
        <div className="pt-1">{children}</div>
      )}
    </div>
  );
};

export default SectionWrapper;
