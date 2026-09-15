import React from 'react';
import {handleCertificate} from "../utils/handleCertificate";
import {removeLanguage} from "../../languages/utils/removeLanguage";
import {BsTrash3} from "react-icons/bs";
import {removeCertificate} from "../utils/removeCertificate";

const TestAndCertificateLine = ({resumeData, setResumeData, cert, index}) => {
  return (
    <div
      className="flex gap-5 items-center"
    >
      <input
        type="text"
        placeholder={"Test or certificate"}
        name={"Certificate"}
        className="w-full mb-0 other-input"
        value={cert}
        onChange={(e) => handleCertificate(resumeData, setResumeData, e, index)}
      />
      <button
        type="button"
        onClick={() => {
          removeCertificate(resumeData, setResumeData, index);
        }}
        aria-label="Remove Certificate"
        className="btn-action-del h-fit"
        title="Delete certification"
      >
        <BsTrash3 className="text-sm" />
      </button>
    </div>
  );
};

export default TestAndCertificateLine;
