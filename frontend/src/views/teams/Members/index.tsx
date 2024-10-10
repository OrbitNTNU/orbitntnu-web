import React from "react";
import { Member } from "../../../pages/teams";
import { ProfileCard } from "../ProfileCard";

interface MembersProps {
  members: Member[];
  wide?: boolean;
}

export const Members = ({ members, wide = false }: MembersProps) => (
  <ul className="flex flex-wrap justify-center">
    {members?.map((member) => (
      <ProfileCard
        key={`${member.name}-${member.title}`}
        member={member}
        wide
      />
    ))}
  </ul>
);
