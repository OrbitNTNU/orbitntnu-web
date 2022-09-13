import React, { useEffect, useState } from "react";
import { Layout } from "../templates/Layout";
import { FramSatHeader } from "../views/framsat/FramSatHeader";
import firebase from "gatsby-plugin-firebase";
import { FadeInSection } from "../components/FadeInSection";
import { MissionText } from "../views/framsat/MissionText";
import { Specs } from "../views/framsat/Specs";
import { StaticImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { Team } from "./teams";
import { Members } from "../views/teams/Members";

const FramSat = ({ data }) => {
  const [selectedTeam, setSelectedTeam] = useState<Team>();
  const { allSanityTeam } = data;
  useEffect(() => {
    if (!firebase) {
      return;
    }

    firebase.analytics().logEvent("visited_framsat_page");
  }, [firebase]);

  useEffect(() => {
    const teams: Team[] = allSanityTeam.nodes;
    if (teams.length > 0) setSelectedTeam(teams[0]);
  }, []);

  return (
    <Layout>
      <FramSatHeader
        title="Orbit NTNU"
        name="FRAMSAT-1"
        text="Bringing space closer to home"
      />
      <FadeInSection>
        <MissionText />
      </FadeInSection>
      <FadeInSection>
        <Specs />
      </FadeInSection>

      <FadeInSection>
        <div className="flex justify-center mt-4">
          <StaticImage
            src="../images/framsat-image.jpg"
            alt="FRAMSat"
            className="max-w-screen-lg mx-8"
          />
        </div>
      </FadeInSection>

      <section className="mt-6 px-8 relative md:flex md:flex-col md:max-w-4xl md:justify-center m-auto">
        <h2 className="text-center text-4xl font-bold mb-2">
          PROJECT MANAGERS
        </h2>
        {selectedTeam && (
          <FadeInSection>
            <p className="p-4 my-4 border-t border-b border-yellow-500">
              {selectedTeam.description}
            </p>
            <Members
              members={selectedTeam.members.filter(
                (member) => member.title.includes("FRAMSat")
              )}
              wide
            />
          </FadeInSection>
        )}
      </section>
    </Layout>
  );
};

export const query = graphql`
  query FramSatPageQuery {
    allSanityTeam(filter: { name: { eq: "Project Management" } }) {
      nodes {
        description
        members {
          title
          phone
          name
          image {
            asset {
              gatsbyImageData
            }
          }
          email
        }
      }
    }
  }
`;

export default FramSat;
