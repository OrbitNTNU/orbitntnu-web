import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Layout } from "../templates/Layout";
import { Link, graphql } from "gatsby";
import { TeamsContainer } from "../views/teams/TeamsContainer";
import axios from 'axios';

export interface Member {
  name: string;
  title: string;
  mail?: string;
  phoneNumber?: string;
  linkedin?: string;
  showPhoneNrOnWebsite: boolean;
  privilege: string;
  image?: string;
}

export interface Team {
  teamID: number;
  group: string;
  description: string;
  teamName: string;
  members: Member[];
}

const Teams = ({ data }) => {
  const [teamsData, setTeamsData] = useState<Team[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const { sanityTeamsPage } = data;
  
  useEffect(() => {
    const fetchTeams = async () => {
      try {
        // const response = await axios.get('https://lifesupport.orbitntnu.com/api/trpc/teams.getPublicTeamPageInfo');
        const response = await axios.get('http://localhost:3001/api/trpc/teams.getPublicTeamPageInfo');
  
        if (response.status === 200) {
          // Navigate to the actual data inside the response
          const teamsData = response.data.result.data.json;
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
  const preloadImages = (teams: Team[]) => {
    teams.forEach(team => {
      team.members.forEach(member => {
        if (member.image) {
          const img = new Image();
          img.src = member.image;
        }
      });
    });
  };

  if (loading) {
    return <div className="text-center">Loading...</div>; // Loading indicator
  }

  return (
    <Layout>
      <Header
        title={sanityTeamsPage.fadedTitle}
        name={sanityTeamsPage.title}
        text={sanityTeamsPage.topText}
        image={sanityTeamsPage.topImage}
      />
      {teamsData && (
        <TeamsContainer
          teams={teamsData}
        />
      )}
      <section className="items-center mt-16 flex md:flex-col md:max-w-5xl md:justify-center m-auto">
        <Link
          to={"/members"} className="items-center justify-center bg-blue-600 hover:bg-blue-800 py-2 px-4 m-auto">
          {"Go to list view"}
        </Link>
      </section>
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

export default Teams;
