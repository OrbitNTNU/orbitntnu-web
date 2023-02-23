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
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

const FramSat = ({ data }) => {
  const [selectedTeam, setSelectedTeam] = useState<Team>();
  const { sanityFramsatPage, allSanityTeam } = data;
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

  console.log(data);

  return (
    <Layout>
      <FramSatHeader
        title={sanityFramsatPage.title}
        name={sanityFramsatPage.topText}
        text={sanityFramsatPage.shortTopText}
      />
      <section className="mt-16 px-8 relative md:flex md:flex-col md:max-w-4xl md:justify-center m-auto">
        <FadeInSection>
          <div>
            <h2 className="text-center text-4xl font-bold mb-2">
              {sanityFramsatPage.missionTitle}
            </h2>
            <div className="flex flex-col px-8 md:flex-row md:max-w-4xl m-auto gap-8 md:-mt-6">
              <p className="max-w-sm m-auto md:pt-6 mb-4 md:mb-0">
                {sanityFramsatPage.missionTextLeft}
              </p>
              <p className="max-w-sm m-auto md:pt-6 mb-4 md:mb-0">
                {sanityFramsatPage.missionTextRight}
              </p>
            </div>
          </div>
        </FadeInSection>
      </section>

      <FadeInSection>
        <div className="mt-16">
          <Specs
            name="FRAMSAT-1"
            specs={sanityFramsatPage.specifications}
            image={sanityFramsatPage.specificationsImage.asset.gatsbyImageData}
          />
        </div>
        <p className="mt-8 mx-8 md:max-w-2xl md:m-auto">
          {sanityFramsatPage.firstSectionText}
        </p>
      </FadeInSection>

      <FadeInSection>
        <div className="flex justify-center mt-8">
          <GatsbyImage
            image= {sanityFramsatPage.firstSectionImage.asset.gatsbyImageData}
            alt="Open Framsat"
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
              members={selectedTeam.members.filter((member) =>
                member.title.includes("FramSat")
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
    sanityFramsatPage {
      title
      topText
      shortTopText
      missionTitle
      missionTextLeft
      missionTextRight
      specifications {
        name
        text
      }
      specificationsImage {
        asset {
          gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
        }
      }
      firstSectionText
      firstSectionImage {
        asset {
          gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
        }
      }
    }
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
