import React from "react";
import { Team } from "../../../pages/teams";
import { Filter } from "../Filter";

interface TeamsContainerProps {
  teams: Team[];
  selectedTeam: Team;
  setSelectedTeam: (Team) => void;
}

export const TeamsContainer = ({
  teams,
  selectedTeam,
  setSelectedTeam,
}: TeamsContainerProps) => (
  <section className="mt-24 px-8 relative md:flex md:flex-col md:max-w-4xl md:justify-center m-auto">
    <Filter
      teams={teams}
      selectedTeam={selectedTeam}
      setSelectedTeam={setSelectedTeam}
    />
    <p className="py-4 my-4 border-t border-b border-yellow-500">
      {selectedTeam.description}
    </p>
  </section>
);
