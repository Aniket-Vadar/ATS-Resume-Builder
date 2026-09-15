import React, {useContext} from "react";
import {ResumeContext} from "../../builder";
import { FaUserCircle } from "react-icons/fa";

const PersonalInformation = ({}) => {
  const {resumeData, setResumeData, handleProfilePicture, handleChange} =
    useContext(ResumeContext);

  return (
    <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-xs hover:border-slate-300 transition-all">
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-100">
        <FaUserCircle className="text-indigo-600 text-sm" />
        <h2 className="text-sm font-bold text-slate-800 tracking-wide uppercase">Personal Information</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-[11px] font-semibold text-slate-400 mb-1 tracking-wider uppercase">Full Name</label>
          <input
            type="text"
            placeholder="e.g. Alex Morgan"
            name="name"
            className="pi w-full"
            value={resumeData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-[11px] font-semibold text-slate-400 mb-1 tracking-wider uppercase">Target Job Title</label>
          <input
            type="text"
            placeholder="e.g. AI Engineer / Full Stack"
            name="position"
            className="pi w-full"
            value={resumeData.position}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-[11px] font-semibold text-slate-400 mb-1 tracking-wider uppercase">Phone Number</label>
          <input
            type="text"
            placeholder="+1 (555) 000-0000"
            name="contactInformation"
            className="pi w-full"
            value={resumeData.contactInformation}
            onChange={handleChange}
            maxLength="25"
          />
        </div>
        <div>
          <label className="block text-[11px] font-semibold text-slate-400 mb-1 tracking-wider uppercase">Email Address</label>
          <input
            type="email"
            placeholder="alex@example.com"
            name="email"
            className="pi w-full"
            value={resumeData.email}
            onChange={handleChange}
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-[11px] font-semibold text-slate-400 mb-1 tracking-wider uppercase">Location</label>
          <input
            type="text"
            placeholder="City, State / Country (e.g. San Francisco, CA)"
            name="address"
            className="pi w-full"
            value={resumeData.address}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
