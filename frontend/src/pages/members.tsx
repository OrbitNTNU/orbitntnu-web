import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Layout } from "../templates/Layout";
import { Link, graphql } from "gatsby";
import { Members } from "../views/teams/Members";
import axios from 'axios';
import { Team } from "./teams";

const MembersPage = ({ data }) => {
  const [teamsData, setTeamsData] = useState<Team[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [galleryView, setGalleryView] = useState<boolean>(false); // State to toggle view mode

  const { sanityTeamsPage } = data;

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        // const response = await axios.get('https://lifesupport.orbitntnu.com/api/trpc/teams.getPublicTeamPageInfo');
        const response = await axios.get('http://localhost:3001/api/trpc/teams.getPublicTeamPageInfo');
  
        if (response.status === 200) {
          // Navigate to the actual data inside the response
          const teamsData = response.data.result.data.json;

          // Sort it so members are last
          teamsData.sort((a: Team, b: Team) => {
            if (a.teamName === 'Mentors' && b.teamName !== 'Mentors') return 1; // a goes after b
            if (a.teamName !== 'Mentors' && b.teamName === 'Mentors') return -1; // a goes before b
            return 0;
          });

          setTeamsData(teamsData);

          // Preload images
          preloadImages(teamsData);
        } else {
          console.error(`Error: Received status code ${response.status}`);
        }

      } catch (error) {
        console.error('Error fetching teams:', error);
      } finally {
        setLoading(false); // Stop loading regardless of success or failure
      }
    };

    fetchTeams();
  }, []);

  // Preload images function
  const preloadImages = (teams) => {
    teams.forEach(team => {
      team.members.forEach(member => {
        if (member.image) {
          const img = new Image();
          img.src = member.image; // This will start loading the image
        }
      });
    });
  };

  const toggleGalleryView = () => {
    setGalleryView(!galleryView);
  };

  if (loading) {
    return <div className="text-center">Loading...</div>; // Loading indicator
  }

  const renderGalleryView = () => {
    // Flatten all members from all teams
    const allMembers = teamsData?.flatMap(team => team.members) || []; 

    // Use a Set to remove duplicate members based on their 'name'
    const uniqueMembers = Array.from(
      new Map(allMembers.map(member => [member.name, member])).values()
    );

    // Sort members alphabetically by their 'name'
    const sortedMembers = uniqueMembers.sort((a, b) => a.name.localeCompare(b.name));

    return (
      <div className="text-center flex flex-col">
        <Members members={sortedMembers} wide/> {/* Render each member individually */}
      </div>
    );
  };

  const renderListView = () => {
    return teamsData?.map((team) => (
      <div key={team.teamName} className="text-center">
        <h1 className="text-3xl my-4 font-bold">{team.teamName}</h1>
        <p className="p-4 my-4 border-t border-b border-yellow-500 md:max-w-4xl md:mx-auto">{team.description}</p>
        <div className="p-4 mt-4 mb-12 md:w-full md:mx-auto">
          <Members members={team.members} wide />
        </div>
      </div>
    ));
  };

  return (
    <Layout>
      <Header
        title={sanityTeamsPage.fadedTitle}
        name={sanityTeamsPage.title}
        text={sanityTeamsPage.topText}
        image={sanityTeamsPage.topImage}
      />

      {teamsData && (
        <div className="pt-12 px-8">
          <section className="items-center mt-16 flex flex-col md:max-w-5xl justify-center m-auto">
            <Link
              to={"/teams"} className="items-center justify-center bg-blue-600 hover:bg-blue-800 py-2 px-4">
              {"Go back to teams view"}
            </Link>
            <div className="text-center my-4">
              <button
                className={`cursor-pointer py-2 px-4 font-bold text-white border-b-2 ${galleryView ? 'border-white' : 'border-transparent'
                  } hover:border-green-500`}
                onClick={toggleGalleryView}
              >
                {'Gallery mode'}
              </button>
            </div>
          </section>

          {galleryView ? renderGalleryView() : renderListView()}

          <section className="items-center mt-16 flex md:flex-col md:max-w-5xl md:justify-center m-auto">
            <Link
              to={"/teams"} className="items-center justify-center bg-blue-600 hover:bg-blue-800 py-2 px-4 m-auto">
              {"Go to teams view"}
            </Link>
          </section>
        </div>
      )}
    </Layout>
  );
};

export const query = graphql`
  query TeamsPageQuery {
    sanityTeamsPage {
      topText
      topImage {
        asset {
          gatsbyImageData
        }
      }
      title
      fadedTitle
    }
  }
`;

export default MembersPage;
