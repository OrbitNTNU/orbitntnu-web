import React from "react";
import { Member } from "../../../pages/teams";
import { ProfileCard } from "../ProfileCard";

interface MembersProps {
  members: Member[];
  wide?: boolean;
}

export const Members = ({ members, wide = false }: MembersProps) => {
  // Sort members based on title priority: CEO and COO first, NTNU_REP last
  const sortedMembers = members.sort((a, b) => {
    return a.title.localeCompare(b.title); // Alphabetical sort for others
  });

  return (
    <ul className="flex flex-wrap justify-center">
      {sortedMembers.map((member) => (
        <ProfileCard
          key={`${member.name}-${member.title}`}
          member={member}
          wide={wide}
        />
      ))}
    </ul>
  );
};
