import React from "react";
import { Member } from "../../../pages/teams";
import { ProfileCard } from "../ProfileCard";

interface MembersProps {
  members: Member[];
}

export const Members = ({ members }: MembersProps) => (
  <ul className="flex flex-wrap gap-4 justify-center">
    {members.map((member) => (
      <ProfileCard key={member.name} member={member} />
    ))}
  </ul>
);
