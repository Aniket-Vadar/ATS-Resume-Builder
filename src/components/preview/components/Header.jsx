import ContactInfo from "../components/ContactInfo";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";

const Header = ({ resumeData, icons }) => {
  return (
    <div className="f-col items-center mb-1">
      <h1 className="name">{resumeData.name}</h1>

      {/* Contact info as a single-line pipe-separated row */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 contact">
        {resumeData.contactInformation && (
          <>
            <a
              className="inline-flex items-center gap-1"
              aria-label="Phone Number"
              href={`tel:${resumeData.contactInformation}`}
            >
              <MdPhone className="contact-icon" /> {resumeData.contactInformation}
            </a>
            <span className="text-gray-400"> | </span>
          </>
        )}
        {resumeData.email && (
          <>
            <a
              className="inline-flex items-center gap-1"
              aria-label="Email Address"
              href={`mailto:${resumeData.email}`}
            >
              <MdEmail className="contact-icon" /> {resumeData.email}
            </a>
          </>
        )}
        {resumeData.socialMedia.map((socialMedia, index) => {
          const icon = icons.find(
            (i) => i.name === socialMedia.socialMedia.toLowerCase()
          );
          return (
            <span key={index} className="inline-flex items-center gap-1">
              <span className="text-gray-400"> | </span>
              <a
                href={`http://${socialMedia.link}`}
                aria-label={socialMedia.socialMedia}
                title={socialMedia.socialMedia}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1"
              >
                {icon && <span className="contact-icon">{icon.icon}</span>}
                {socialMedia.link}
              </a>
            </span>
          );
        })}
        {resumeData.address && (
          <>
            <span className="text-gray-400"> | </span>
            <span className="inline-flex items-center gap-1">
              <MdLocationOn className="contact-icon" /> {resumeData.address}
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
