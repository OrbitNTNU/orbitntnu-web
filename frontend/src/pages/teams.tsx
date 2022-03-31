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
  image: {
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
  const { allSanityTeam } = data;

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
        title="Orbit NTNU"
        name="Teams"
        text="Orbit is run with both technical and non-technical support from our sponsors. 
      We are very grateful for the support we receive, and are always looking for new companies 
      to work with. Want to be a part of our journey? Send an email to cmo@orbitntnu.com!"
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
