import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import React, { useState }  from "react";
import { Member } from "../../../pages/teams";
import { FaLinkedinIn } from 'react-icons/fa';
import { BsTelephoneFill } from 'react-icons/bs';
import { MdMail } from 'react-icons/md';
import { IconContext } from "react-icons";

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

  return(
  <li
    className={` bg-gray-900 ${
      wide ? "w-[270px]" : "w-64"
    } flex flex-col m-2 items-center`}
    onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>

    {member.image ? (
      <GatsbyImage
        image={member.image.asset.gatsbyImageData}
        alt="Profile image"
        className="w-40 h-40 rounded-full m-auto mb-2 mt-2"
      />
    ) : (
      <StaticImage
        src="../../../images/badge.png"
        alt="Profile image"
        className="w-40 h-40 rounded-full m-auto mb-2 mt-2"
      />
    )}

    <p className="text-orange-500 -mb-1">{member.title}</p>
    <p className="text-xl">{member.name}</p>

    <div style = {{'border-radius': '50% / 100%', 'border-bottom-left-radius': 0, 'border-bottom-right-radius': 0}} class={` flex justify-center bg-[#0e70b6] ${isHovering ? "w-64 h-12 mt-0" : "w-32 h-10 mt-2"} ease-in-out duration-500`}>
      <div class="flex items-center gap-2">
        {member.phone && <a href={`tel:${member.phone}`}> <BsTelephoneFill /> </a> }  
        {member.email &&
        <a href={`mailto:${member.email}`}>
          <IconContext.Provider value={{ size: "1.5em"}}>
            <MdMail />
          </IconContext.Provider>
        </a>}
        {member.linkedin &&
        <a href={member.linkedin} target="_blank">
          <IconContext.Provider value={{ size: "1.3em"}}>
            <FaLinkedinIn />
          </IconContext.Provider>
        </a>}
      </div>
    </div>
  </li>
  );
};
