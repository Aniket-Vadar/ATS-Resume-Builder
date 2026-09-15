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
        ? "bg-slate-900/40 border-slate-800/60 p-3 opacity-60" 
        : "bg-slate-900/90 border-slate-800 p-4 shadow-sm hover:border-slate-700/80"
    }`}>
      <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-800/80">
        <div className="flex items-center gap-2 flex-1">
          <button
            type="button"
            aria-label={isHidden ? `Show ${title}` : `Hide ${title}`}
            className="section-toggle-btn text-slate-400 hover:text-white"
            onClick={() => toggleSection(sectionKey)}
            title={isHidden ? "Show section on resume" : "Hide section from resume"}
          >
            {isHidden ? <FaEyeSlash className="text-slate-500 text-sm" /> : <FaEye className="text-indigo-400 text-sm" />}
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
            ? "bg-slate-800 text-slate-500" 
            : "bg-indigo-950/80 text-indigo-300 border border-indigo-800/50"
        }`}>
          {isHidden ? "Hidden" : "Visible"}
        </span>
      </div>
      {isHidden ? (
        <p className="text-slate-500 text-xs italic py-1">
          Section is hidden from the resume preview. Click the eye icon to enable.
        </p>
      ) : (
        <div className="pt-1">{children}</div>
      )}
    </div>
  );
};

export default SectionWrapper;
