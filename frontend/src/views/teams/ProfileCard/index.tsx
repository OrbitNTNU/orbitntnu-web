import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Member } from "../../../pages/teams";

interface ProfileCardProps {
  member: Member;
}

export const ProfileCard = ({ member }: ProfileCardProps) => (
  <li className="bg-gray-900 w-40 p-4 flex flex-col">
    <GatsbyImage
      image={member.image.asset.gatsbyImageData}
      alt="Profile image"
      className="w-32 h-32 rounded-full m-auto mb-2"
    />

    <p className="text-yellow-500 text-sm">{member.title}</p>
    <p className="text-lg">{member.name}</p>
    {member.email && <p className="text-sm font-thin">{member.email}</p>}
    {member.phone && <p className="text-sm font-thin">{member.phone}</p>}
  </li>
);
