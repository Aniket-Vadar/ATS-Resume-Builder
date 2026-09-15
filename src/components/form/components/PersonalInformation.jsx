import React, {useContext} from "react";
import {ResumeContext} from "../../builder";
import { FaUserCircle } from "react-icons/fa";

const PersonalInformation = ({}) => {
  const {resumeData, setResumeData, handleProfilePicture, handleChange} =
    useContext(ResumeContext);

  return (
    <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl shadow-sm hover:border-slate-700/80 transition-all">
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-800/80">
        <FaUserCircle className="text-indigo-400 text-sm" />
        <h2 className="text-sm font-semibold text-slate-200 tracking-wide uppercase">Personal Information</h2>
      </div>
      <div className="grid-4">
        <input
          type="text"
          placeholder="Full Name"
          name="name"
          className="pi"
          value={resumeData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Job Title"
          name="position"
          className="pi"
          value={resumeData.position}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Phone Number"
          name="contactInformation"
          className="pi"
          value={resumeData.contactInformation}
          onChange={handleChange}
          minLength="10"
          maxLength="20"
        />
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          className="pi"
          value={resumeData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Location (City, State/Country)"
          name="address"
          className="pi"
          value={resumeData.address}
          onChange={handleChange}
        />
        <input
          type="file"
          name="profileImage"
          accept="image/*"
          className="profileInput"
          onChange={handleProfilePicture}
          placeholder="Profile Picture"
        />
      </div>
    </div>
  );
};

export default PersonalInformation;
