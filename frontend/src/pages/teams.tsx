import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Layout } from "../templates/Layout";
import { Link, graphql } from "gatsby";
import { TeamsContainer } from "../views/teams/TeamsContainer";
import { IGatsbyImageData } from "gatsby-plugin-image";
import firebase from "gatsby-plugin-firebase";
import { Button } from "../components/Button";

export interface Member {
  name: string;
  title: string;
  email?: string;
  phone?: string;
  linkedin?: string;
  image?: {
    asset: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
}

export interface Team {
  members: Member[];
  name: string;
  description: string;
}

const Teams = ({ data }) => {
  const [selectedTeam, setSelectedTeam] = useState<Team>(null);
  const { sanityTeamsPage, allSanityTeam } = data;

  useEffect(() => {
    const teams: Team[] = allSanityTeam.nodes;
    if (teams.length > 0) {
      teams.sort((a, b) => (a.name > b.name ? -1 : 1));
      teams.sort((a, b) => (a.name === "Mentors" ? 1 : -1));
      teams.sort((a, b) => (a.name === "The Board" ? -1 : 1));

      setSelectedTeam(teams[0]);
    }
  }, []);

  useEffect(() => {
    if (!firebase) {
      return;
    }

    firebase.analytics().logEvent("visited_teams_page");
  }, [firebase]);

  return (
    <Layout>
      <Header
        title={sanityTeamsPage.fadedTitle}
        name={sanityTeamsPage.title}
        text={sanityTeamsPage.topText}
        image={sanityTeamsPage.topImage}
      />
      {selectedTeam && (
        <TeamsContainer
          teams={allSanityTeam.nodes}
          selectedTeam={selectedTeam}
          setSelectedTeam={setSelectedTeam}
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
    allSanityPosition {
      nodes {
        title
        text
        positionLink
        image {
          asset {
            gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
          }
        }
      }
    }
    allSanityTeam {
      nodes {
        members {
          image {
            asset {
              gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
            }
          }
          name
          title
          phone
          email
          linkedin
        }
        name
        description
      }
    }
  }
`;

export default Teams;
