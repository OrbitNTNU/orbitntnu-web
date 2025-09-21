import React, { useState } from "react";
import { Member } from "../../../pages/teams";
import { FaLinkedinIn } from 'react-icons/fa';
import { BsTelephoneFill } from 'react-icons/bs';
import { MdMail } from 'react-icons/md';
import { IconContext } from "react-icons";

const DynamicMemberImage = ({ src, alt }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative mt-4 md:mt-0 w-1/2 md:w-full aspect-square md:aspect-[2/3] m-auto mb-2 overflow-hidden">
      {loading && (
        <div
          className="flex w-full h-full rounded-full md:rounded-t-lg md:rounded-b-none items-center justify-center border-2 border-[#9ca3af]"
        >
            <svg
            width="60"
            height="60"
            viewBox="0 0 48 48"
            aria-label="Smiling Face"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "60px", height: "60px" }}
            >
            <circle
              cx="17"
              cy="20"
              r="2.5"
              fill="#9ca3af" // Changed to a darker grey
            />
            <circle
              cx="31"
              cy="20"
              r="2.5"
              fill="#9ca3af" // Changed to a darker grey
            />
            <path
              d="M17 29c2 3 12 3 14 0"
              stroke="#9ca3af" // Changed to a darker grey
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            </svg>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        width={10} // Adjust as needed
        height={10} // Adjust as needed
        className={`w-full h-full rounded-full md:rounded-t-lg md:rounded-b-none  object-cover transition-opacity duration-200 ${loading ? 'opacity-0' : 'opacity-100'}`}
        onLoad={() => setLoading(false)} // Set loading to false when the image has loaded
        style={{ filter: loading ? 'blur(5px)' : 'none' }} // Blur effect while loading
      />
    </div>
  );
};

interface ProfileCardProps {
  member: Member;
}

export const ProfileCard = ({ member }: ProfileCardProps) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <li
      className={`bg-[#181818] flex flex-col m-2 items-center rounded-md shadow hover:bg-[#282828] transition-all h-auto min-h-[320px]`} // Set min-height here
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <DynamicMemberImage
        key={member.name}
        src={member.image || '/fallback-image.png'}
        alt={`Image of ${member.name}`}
      />

      <div className="flex-grow h-auto flex flex-col justify-center"> {/* Container for title and name */}
        <p className="text-xl flex flex-wrap justify-center items-center break-words text-center mx-8">{member.name}</p>
        <p className="text-orange-500 -mb-1 text-center break-words">{member.title.split("_").join(" ")}</p>
      </div>

      <div
        className={`flex justify-center bg-[#0e70b6] rounded-full rounded-b-none ${isHovering ? 'w-32 h-10 mt-3 md:w-48 md:h-11 md:mt-2' : 'w-32 h-10 mt-3'} ease-in-out duration-150`}
      >
        <div className={`flex items-center ${isHovering ? 'gap-2 md:gap-5' : 'gap-2'} ease-in-out duration-150`}>
          {member.phoneNumber && (
            <a href={`tel:${member.phoneNumber}`} className="transition-transform duration-150 hover:scale-110">
              <BsTelephoneFill className="transition-transform duration-150" />
            </a>
          )}
          {member.mail && (
            <a href={`mailto:${member.mail}`} className="transition-transform duration-150 hover:scale-110">
              <IconContext.Provider value={{ size: "1.5em" }}>
                <MdMail className="transition-transform duration-150 hover:scale-110" />
              </IconContext.Provider>
            </a>
          )}
          {member.linkedin && (
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="transition-transform duration-150 hover:scale-110">
              <IconContext.Provider value={{ size: "1.3em" }}>
                <FaLinkedinIn className="transition-transform duration-150 hover:scale-110" />
              </IconContext.Provider>
            </a>
          )}
        </div>
      </div>
    </li>
  );
};
