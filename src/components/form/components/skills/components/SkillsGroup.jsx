import React, {useContext} from "react";
import {ResumeContext} from "../../../../builder";
import {addSkill} from "../utlis/addSkill";
import SkillLine from "./SkillLine";
import {MdAddCircle} from "react-icons/md";

const SkillsGroup = ({title}) => {
  const {resumeData, setResumeData} = useContext(ResumeContext);

  const skillType = resumeData.skills.find(
    (skillType) => skillType.title === title
  );

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">{title}</h2>
      {skillType.skills.map((skill, index) => (
        <SkillLine key={index} skill={skill} title={title} index={index}/>
      ))}
      {/* Add new skill button */}
      <button
        type="button"
        onClick={() => addSkill(title, setResumeData)}
        aria-label={`Add ${title}`}
        className="btn-action-add w-fit mt-1"
      >
        <MdAddCircle className="text-sm" />
        <span>Add {title}</span>
      </button>
    </div>
  );
};

export default SkillsGroup;
