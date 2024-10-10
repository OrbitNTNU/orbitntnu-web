import React, { useState } from "react";
import { Team } from "../../../pages/teams";

interface FilterProps {
  teams: Team[];
  selectedTeam: number;
  setSelectedTeam: (team: number) => void;
}

export const Filter = ({
  teams,
  selectedTeam,
  setSelectedTeam,
}: FilterProps) => {
  const [selectedGroup, setSelectedGroup] = useState<string | null>("ALL");

  // Group teams by their group property
  const groupedTeams = teams.reduce((acc, team) => {
    if (!acc[team.group]) {
      acc[team.group] = [];
    }
    acc[team.group].push(team);
    return acc;
  }, {} as Record<string, Team[]>);

  // Sort groups alphabetically
  const sortedGroups = Object.keys(groupedTeams).sort((a, b) =>
    a.localeCompare(b)
  );

  const handleGroupClick = (group: string) => {
    // Sort the teams in the selected group by team name
    const sortedTeamsInGroup = groupedTeams[group].slice().sort((a, b) => 
      a.teamName.localeCompare(b.teamName)
    );
  
    const firstTeamInGroup = sortedTeamsInGroup[0]?.teamID; // Get the first team ID in the sorted group
    setSelectedGroup(group);
    if (firstTeamInGroup) {
      setSelectedTeam(firstTeamInGroup); // Set the first team as the selected team
    }
  };
  
  return (
    <div className="flex flex-col gap-5 w-full">
      <ul className="flex flex-wrap justify-center w-full m-auto gap-3">
        <li
          key="ALL"
          className={`cursor-pointer text-lg p-2 font-bold ${
            selectedGroup === "ALL" ? "border-b-2 border-white" : "text-white"
          } hover:border-green-500 hover:border-b-2`}
          onClick={() => {
            if (selectedGroup !== "ALL") {
              setSelectedGroup("ALL");
              setSelectedTeam(teams[0]?.teamID); // Set the first team as the selected team if "ALL" is clicked
            }
          }}
        >
          ALL
        </li>
        {sortedGroups.map((group) => (
          <li
            key={group}
            className={`cursor-pointer text-lg p-2 font-bold ${
              selectedGroup === group ? "border-b-2 border-white" : "text-white"
            } hover:border-green-500 hover:border-b-2`}
            onClick={() => {
              if (selectedGroup !== group) {
                handleGroupClick(group);
              }
            }}
          >
            {group.split("_").join(" ")}
          </li>
        ))}
      </ul>

      {selectedGroup && (
        <ul className="flex flex-wrap justify-center items-center m-auto w-full overflow-hidden" > 
          {(selectedGroup === "ALL" ? teams : groupedTeams[selectedGroup])
            .slice()
            .sort((a, b) => a.teamName.localeCompare(b.teamName)) // Sort teams by teamName
            .sort((a, b) => (a.teamName.toLowerCase() === 'board' ? -1 : 1)) // Prioritize 'Board' team
            .map((team) => {
              const selected = team.teamID === selectedTeam;

              return (
                <li
                  key={team.teamID}
                  className={`cursor-pointer text-lg p-2 h-12 overflow-hidden transition-all duration-150 ${
                    selected ? "text-yellow-500" : "text-white"
                  } hover:text-yellow-600`}
                  onClick={() => setSelectedTeam(team.teamID)}
                >
                  {team.teamName}
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
};
