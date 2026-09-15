import { FaCloudUploadAlt, FaCloudDownloadAlt } from "react-icons/fa";
import React, { useContext } from "react";
import {ResumeContext} from "../../builder";

const LoadUnload = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  // load backup resume data (with backward compatibility for new fields)
  const handleLoad = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const loaded = JSON.parse(event.target.result);
      // Ensure new fields exist for backward compatibility
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
    };
    reader.readAsText(file);
  };

  // download resume data
  const handleDownload = (data, filename, event) => {
    event.preventDefault();
    const jsonData = JSON.stringify(data);
    const blob = new Blob([jsonData], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  };

  return (
    <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-3 flex items-center justify-between text-xs shadow-sm">
      <span className="text-slate-400 font-medium flex items-center gap-1.5">
        <span>Quick Data Backup</span>
      </span>
      <div className="flex items-center gap-2">
        <label className="flex items-center gap-1 px-2.5 py-1.5 text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg cursor-pointer transition-colors" title="Load JSON backup">
          <FaCloudUploadAlt className="text-indigo-400 text-sm" />
          <span>Import</span>
          <input
            aria-label="Load Data"
            type="file"
            className="hidden"
            onChange={handleLoad}
            accept=".json"
          />
        </label>
        <button
          type="button"
          aria-label="Save Data"
          className="flex items-center gap-1 px-2.5 py-1.5 text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors cursor-pointer"
          title="Download JSON backup"
          onClick={(event) =>
            handleDownload(
              resumeData,
              (resumeData.name || "Resume").replace(/\s+/g, "_") + "_ATS_Data.json",
              event
            )
          }
        >
          <FaCloudDownloadAlt className="text-indigo-400 text-sm" />
          <span>Export</span>
        </button>
      </div>
    </div>
  );
};

export default LoadUnload;
