import React from "react";
import { Team } from "../../../pages/teams";

interface FilterProps {
  teams: Team[];
  selectedTeam: Team;
  setSelectedTeam: (Team) => void;
}

export const Filter = ({
  teams,
  selectedTeam,
  setSelectedTeam,
}: FilterProps) => (
  <ul className="flex flex-wrap justify-center">
    {teams.map((team) => {
      const selected = team.name === selectedTeam.name;
      return (
        <li
          key={team.name}
          className={`cursor-pointer text-lg mx-2 ${
            selected ? "text-yellow-500" : "text-white"
          }`}
          onClick={() => setSelectedTeam(team)}
        >
          {team.name}
        </li>
      );
    })}
  </ul>
);
