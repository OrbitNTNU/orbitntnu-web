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
import FramSatContainer, { FramSatContainerInfo } from "../views/framsat/FramSatContainer";
import framsat2 from "../views/framsat/framsat2Info";

const FramSat = ({ data }) => {
  const [selectedTeam, setSelectedTeam] = useState<Team>();
  const { sanityFramsatPage, allSanityTeam } = data;

  const framsat1Info: FramSatContainerInfo = {
    info: sanityFramsatPage,
  }; 
  const framsat2Info: FramSatContainerInfo = framsat2();

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

  const framsats: FramSatContainerInfo[] = [
    framsat1Info,
    framsat2Info
  ];

  const [selectedFramsat, setSelectedFramsat] = useState<FramSatContainerInfo>(framsat1Info);

  return (
    <Layout>
      <FramSatHeader
        title="OrbitNTNU"
        name="FramSat"
        text={sanityFramsatPage.shortTopText}
      />
      <section className="mt-16 px-8 relative md:flex md:flex-col md:max-w-4xl md:justify-center m-auto">
        <FadeInSection>
          <div>
            <div className="flex px-8 justify-center m-auto md:-mt-6">
              <p className="max-w-4xl md:pt-6 mb-8 mt-2 md:mb-0">
                {framsat2Info.info.missionTitle}
              </p>
            </div>
          </div>
        </FadeInSection>
      </section>


      <section className="flex justify-center mt-8">
        <FadeInSection>
          <div className="w-full flex mb-8 h-[2px] bg-gradient-to-r from-black via-blue-500 to-black"/>
          <ul className="flex flex-row flex-wrap gap-8 md:gap-14 mx-2 justify-center md:max-w-4xl md:m-auto">
          {framsats.map((satellite) => (
            <li
              key={satellite.info.title}
              className={`cursor-pointer text-2xl font-bold hover:text-yellow-600 ${
                selectedFramsat.info.title === satellite.info.title ?
                "text-yellow-500"
                :
                false}`}
              onClick={() => setSelectedFramsat(satellite)}>
              {satellite.info.title}
            </li>
          ))}
          </ul>
          <div className="w-full my-8 h-[2px] bg-gradient-to-r from-black via-blue-500 to-black"/>
          <FramSatContainer info={selectedFramsat.info}/>
        </FadeInSection>
      </section>

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
                member.title.includes(selectedFramsat.info.title.substring(0, 9))
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
