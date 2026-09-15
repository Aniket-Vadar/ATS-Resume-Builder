import React, {useContext} from 'react';
import {handleSkill} from "../utlis/handleSkill";
import {ResumeContext} from "../../../../builder";
import { BsTrash3 } from 'react-icons/bs';
import {removeSkill} from "../utlis/removeSkill";

;

const SkillLine = ({skill, title, index}) => {
  const {resumeData, setResumeData} = useContext(ResumeContext);

  return (
    <div
      className="flex gap-5 items-center"
    >
      <input
        type="text"
        placeholder={title}
        name={title}
        className="w-full mb-0 other-input"
        value={skill}
        onChange={(e) => handleSkill(e, index, title, resumeData, setResumeData)}
      />
      <button
        type="button"
        onClick={() => removeSkill(title, setResumeData, index)}
        aria-label={`Remove ${skill}`}
        className="btn-action-del h-fit"
        title="Delete skill"
      >
        <BsTrash3 className="text-sm" />
      </button>
    </div>
  );
};

export default SkillLine;
