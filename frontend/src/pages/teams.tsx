import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Layout } from "../templates/Layout";
import { graphql } from "gatsby";
import { TeamsContainer } from "../views/teams/TeamsContainer";
import { IGatsbyImageData } from "gatsby-plugin-image";
import firebase from "gatsby-plugin-firebase";

export interface Member {
  name: string;
  title: string;
  email?: string;
  phone?: string;
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
    const teams = allSanityTeam.nodes;
    if (teams.length > 0) {
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
        }
        name
        description
      }
    }
  }
`;

export default Teams;
