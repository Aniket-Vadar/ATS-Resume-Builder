import React, { useContext, useRef } from "react";
import { ResumeContext } from "../builder";
import DefaultResumeData from "../utility/DefaultResumeData";
import { 
  MdPictureAsPdf, 
  MdCloudUpload, 
  MdCloudDownload, 
  MdRestartAlt, 
  MdViewSidebar,
  MdCheckCircle,
  MdWarning
} from "react-icons/md";
import { HiSparkles } from "react-icons/hi";

const HeaderNav = ({ formClose, setFormClose }) => {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const fileInputRef = useRef(null);

  // Load JSON
  const handleLoadJSON = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const loaded = JSON.parse(event.target.result);
        setResumeData({
          ...loaded,
          achievements: loaded.achievements || [],
          sectionTitles: {
            profile: "PROFILE",
            skills: "SKILLS",
            education: "EDUCATION",
            certifications: "CERTIFICATIONS",
            experience: "WORK EXPERIENCE",
            projects: "PROJECTS",
            achievements: "ACHIEVEMENTS",
            languages: "LANGUAGES",
            ...(loaded.sectionTitles || {}),
          },
          hiddenSections: loaded.hiddenSections || [],
        });
      } catch (err) {
        alert("Invalid JSON resume file.");
      }
    };
    reader.readAsText(file);
  };

  // Save JSON
  const handleSaveJSON = () => {
    const jsonData = JSON.stringify(resumeData, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${(resumeData.name || "Resume").replace(/\s+/g, "_")}_ATS_Data.json`;
    link.click();
  };

  // Reset to default
  const handleReset = () => {
    if (confirm("Reset resume to default demo template? Any unsaved changes will be replaced.")) {
      setResumeData(DefaultResumeData);
    }
  };

  // Print PDF
  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="exclude-print sticky top-0 z-40 w-full h-14 bg-white/95 backdrop-blur border-b border-slate-200 px-4 flex items-center justify-between shadow-xs">
      {/* Left: Brand + Badge */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => setFormClose(!formClose)}
          aria-label="Toggle editor sidebar"
          className="p-1.5 text-slate-500 hover:text-slate-800 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors md:flex items-center justify-center cursor-pointer"
          title={formClose ? "Expand editor sidebar" : "Collapse editor sidebar"}
        >
          <MdViewSidebar className="text-lg" />
        </button>

        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-600 shadow-sm shadow-indigo-600/30 font-black text-white text-xs tracking-wider">
            ATS
          </div>
          <div>
            <span className="font-bold text-slate-900 text-sm tracking-tight flex items-center gap-1.5">
              ATSResume <span className="text-[10px] font-semibold text-indigo-600 bg-indigo-50 border border-indigo-200/80 px-1.5 py-0.2 rounded">Studio</span>
            </span>
          </div>
        </div>
      </div>

      {/* Center: Live Status / Title */}
      <div className="hidden md:flex items-center gap-2">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs text-slate-700">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="font-semibold text-slate-800">
            {resumeData.name ? `${resumeData.name}` : "Resume"}
          </span>
          <span className="text-slate-300">|</span>
          <span className="text-slate-500 flex items-center gap-1">
            <HiSparkles className="text-indigo-600 text-xs" /> ATS 100% Optimized
          </span>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2">
        {/* Hidden File Input */}
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept=".json"
          onChange={handleLoadJSON}
        />

        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg shadow-2xs transition-colors cursor-pointer"
          title="Import resume JSON file"
        >
          <MdCloudUpload className="text-sm text-indigo-600" />
          <span>Import</span>
        </button>

        <button
          type="button"
          onClick={handleSaveJSON}
          className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg shadow-2xs transition-colors cursor-pointer"
          title="Export resume JSON data"
        >
          <MdCloudDownload className="text-sm text-indigo-600" />
          <span>Export</span>
        </button>

        <button
          type="button"
          onClick={handleReset}
          className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg shadow-2xs transition-colors cursor-pointer"
          title="Reset to sample resume data"
        >
          <MdRestartAlt className="text-sm text-slate-500" />
          <span>Reset</span>
        </button>

        {/* Primary CTA: Download PDF */}
        <button
          type="button"
          onClick={handlePrint}
          className="flex items-center gap-2 px-4 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs tracking-wide rounded-lg shadow-sm shadow-indigo-600/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          title="Download PDF (Select 'Save as PDF' in print destination)"
        >
          <MdPictureAsPdf className="text-base" />
          <span>Download PDF</span>
        </button>
      </div>
    </header>
  );
};

export default HeaderNav;
