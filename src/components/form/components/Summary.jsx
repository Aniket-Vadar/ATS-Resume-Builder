import React, { useContext } from "react";
import {ResumeContext} from "../../builder";

const Summary = () => {
  const { resumeData, handleChange } = useContext(ResumeContext);
  const charCount = (resumeData.summary || "").length;

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-[11px] text-slate-400">
        <span className="font-semibold uppercase tracking-wider">Professional Summary</span>
        <span className={`font-mono ${charCount > 450 ? "text-amber-400" : "text-slate-500"}`}>
          {charCount}/500 chars
        </span>
      </div>
      <textarea
        placeholder="Brief 2-4 sentence overview of your background, key strengths, core tech stack, and proudest career achievement..."
        name="summary"
        className="w-full other-input text-xs h-32 leading-relaxed font-sans"
        value={resumeData.summary}
        onChange={handleChange}
        maxLength={500}
      />
      <p className="text-[10px] text-slate-500 italic">
        💡 Tip: Keep it under 4 lines for guaranteed 1-page fit. Focus on years of experience, primary tools, and impact metrics.
      </p>
    </div>
  );
};

export default Summary;
