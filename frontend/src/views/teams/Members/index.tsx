import React from "react";
import { Member } from "../../../pages/teams";
import { ProfileCard } from "../ProfileCard";

interface MembersProps {
  members: Member[];
  wide?: boolean;
}

export const Members = ({ members, wide = false }: MembersProps) => {
  return (
    <ul
      className={`grid gap-2 md:gap-4 justify-center ${
      wide
        ? "grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 3xl:grid-cols-8"
        : "grid-cols-1 sm:grid-cols-3 lg:grid-cols-4"
      }`}
    >
      {members.map((member) => (
      <ProfileCard
        key={`${member.name}-${member.title}`}
        member={member}
      />
      ))}
    </ul>
  );
};
