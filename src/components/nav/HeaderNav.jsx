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
    <header className="exclude-print sticky top-0 z-40 w-full h-14 bg-slate-950/95 backdrop-blur border-b border-slate-800/80 px-4 flex items-center justify-between shadow-sm">
      {/* Left: Brand + Badge */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => setFormClose(!formClose)}
          aria-label="Toggle editor sidebar"
          className="p-1.5 text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors md:flex items-center justify-center"
          title={formClose ? "Expand editor sidebar" : "Collapse editor sidebar"}
        >
          <MdViewSidebar className="text-lg" />
        </button>

        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 via-indigo-600 to-violet-700 shadow-md shadow-indigo-600/30 font-black text-white text-xs tracking-wider">
            ATS
          </div>
          <div>
            <span className="font-bold text-slate-100 text-sm tracking-tight flex items-center gap-1.5">
              ATSResume <span className="text-[10px] font-semibold text-indigo-400 bg-indigo-950/80 border border-indigo-800/60 px-1.5 py-0.2 rounded">Studio</span>
            </span>
          </div>
        </div>
      </div>

      {/* Center: Live Status / Title */}
      <div className="hidden md:flex items-center gap-2">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-medium text-slate-200">
            {resumeData.name ? `${resumeData.name}` : "Resume"}
          </span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400 flex items-center gap-1">
            <HiSparkles className="text-indigo-400 text-xs" /> ATS 100% Optimized
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
          className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-lg transition-colors"
          title="Import resume JSON file"
        >
          <MdCloudUpload className="text-sm text-indigo-400" />
          <span>Import</span>
        </button>

        <button
          type="button"
          onClick={handleSaveJSON}
          className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-lg transition-colors"
          title="Export resume JSON data"
        >
          <MdCloudDownload className="text-sm text-indigo-400" />
          <span>Export</span>
        </button>

        <button
          type="button"
          onClick={handleReset}
          className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-lg transition-colors"
          title="Reset to sample resume data"
        >
          <MdRestartAlt className="text-sm text-slate-400" />
          <span>Reset</span>
        </button>

        {/* Primary CTA: Download PDF */}
        <button
          type="button"
          onClick={handlePrint}
          className="flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-indigo-600 via-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-semibold text-xs tracking-wide rounded-lg shadow-md shadow-indigo-600/25 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
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
