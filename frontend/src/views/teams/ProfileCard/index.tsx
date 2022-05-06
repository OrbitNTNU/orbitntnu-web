import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Member } from "../../../pages/teams";

interface ProfileCardProps {
  member: Member;
}

export const ProfileCard = ({ member }: ProfileCardProps) => (
  <li className="bg-gray-900 w-60 p-4 flex flex-col">
    {member.image ? (
      <GatsbyImage
        image={member.image.asset.gatsbyImageData}
        alt="Profile image"
        className="w-40 h-40 rounded-full m-auto mb-2"
      />
    ) : (
      <StaticImage
        src="../../../images/badge.png"
        alt="Profile image"
        className="w-40 h-40 rounded-full m-auto mb-2"
      />
    )}

    <p className="text-orange-500 -mb-2">{member.title}</p>
    <p className="text-xl">{member.name}</p>
    <p className="font-thin">
      {member.email ? (
        <a
          className="text-blue-400"
          href={`mailto:${member.email}`}
        >{`${member.email}`}</a>
      ) : (
        "-"
      )}
    </p>
    <p className="font-thin">{member.phone ? `${member.phone}` : "-"}</p>
  </li>
);
