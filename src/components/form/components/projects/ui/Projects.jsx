import React, {useContext} from "react";
import {ResumeContext} from "../../../../builder";
import {addProject} from "../utils/addProject";
import Project from "../components/Project";
import {MdAddCircle} from "react-icons/md";

const Projects = () => {
  const {resumeData, setResumeData} = useContext(ResumeContext);

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">Projects</h2>
      {resumeData.projects.map((project, index) => (
        <Project
          key={index}
          project={project}
          index={index}
        />
      ))}
      <button
        type="button"
        onClick={() => addProject(resumeData, setResumeData)}
        aria-label="Add Project"
        className="btn-action-add w-fit mt-1"
      >
        <MdAddCircle className="text-sm" />
        <span>Add Project</span>
      </button>
    </div>
  );
};

export default Projects;
