import React, { useEffect, useState } from "react";
import { Team } from "../../../pages/teams";
import { Filter } from "../Filter";
import { Members } from "../Members";

interface TeamsContainerProps {
  teams: Team[] | null; // Allow null to handle loading state
}

export const TeamsContainer = ({
  teams,
}: TeamsContainerProps) => {
  const [currentTeam, setCurrentTeam] = useState<number | null>(null); // Start with null
  const [loading, setLoading] = useState<boolean>(true); // Loading state

  useEffect(() => {
    if (teams && teams.length > 0) {
      // Set current team to the first team if not already set
      if (currentTeam === null) {
        setCurrentTeam(teams[0].teamID);
      }
      setLoading(false); // Stop loading when teams data is ready
    }
  }, [teams, currentTeam]);

  if (loading) {
    return <p className="text-center">Loading...</p>; // Display loading message
  }

  if (!teams || teams.length === 0) {
    return <p className="text-center">No teams available.</p>; // Handle no teams case
  }

  const currentTeamData = teams.find((team) => team.teamID === currentTeam);

  return (
    <section className="mt-16 px-8 relative md:flex md:flex-col md:max-w-6xl md:justify-center m-auto">
      <Filter
        teams={teams}
        selectedTeam={currentTeam!} // Non-null assertion since we have loading checks
        setSelectedTeam={setCurrentTeam}
      />
      {currentTeamData ? (
        <>
          <p className="p-4 my-4 border-t border-b border-yellow-500 md:max-w-4xl md:mx-auto h-auto md:h-[150px]">
            {currentTeamData.description}
          </p>
          <Members members={currentTeamData.members ?? []}/>
        </>
      ) : (
        <p className="text-center">No team found.</p> // Handle missing current team data
      )}
    </section>
  );
};
