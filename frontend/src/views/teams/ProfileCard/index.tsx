import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import { Member } from "../../../pages/teams";
import { FaLinkedinIn } from 'react-icons/fa';
import { BsTelephoneFill } from 'react-icons/bs';
import { MdMail } from 'react-icons/md';
import { IconContext } from "react-icons";

const DynamicMemberImage = ({ src, alt }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative w-40 h-40 rounded-full m-auto mb-2 mt-4 overflow-hidden">
      {loading  && (
        <StaticImage
          src="../../../images/badge.png"
          alt="Profile image"
          className="w-40 h-40 rounded-full m-auto"
        />
      )}
      <img
        src={src}
        alt={alt}
        width={10} // Adjust as needed
        height={10} // Adjust as needed
        className={`w-full h-full rounded-full object-cover transition-opacity duration-200 ${loading ? 'opacity-0' : 'opacity-100'}`}
        onLoad={() => setLoading(false)} // Set loading to false when the image has loaded
        style={{ filter: loading ? 'blur(5px)' : 'none' }} // Blur effect while loading
      />
    </div>
  );
};

interface ProfileCardProps {
  member: Member;
  wide?: boolean;
}

export const ProfileCard = ({ member, wide = false }: ProfileCardProps) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <li
      className={`bg-[#181818] ${wide ? "w-[270px]" : "w-64"} flex flex-col m-2 items-center rounded-md shadow hover:bg-[#282828] transition-all h-full min-h-[320px]`} // Set min-height here
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <DynamicMemberImage
        key={member.name}
        src={member.image || '/fallback-image.png'}
        alt={`Image of ${member.name}`}
      />

      <div className="flex-grow h-auto flex flex-col justify-center"> {/* Container for title and name */}
        <p className="text-orange-500 -mb-1 text-center break-words">{member.title.split("_").join(" ")}</p>
        <p className="text-xl flex flex-wrap justify-center items-center break-words text-center mx-8">{member.name}</p>
      </div>

      <div
        className={`flex justify-center bg-[#0e70b6] rounded-full rounded-b-none ${isHovering ? 'w-48 h-11 mt-2' : 'w-32 h-10 mt-3'} ease-in-out duration-150`}
      >
        <div className={`flex items-center ${isHovering ? 'gap-5' : 'gap-2'} ease-in-out duration-150`}>
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
