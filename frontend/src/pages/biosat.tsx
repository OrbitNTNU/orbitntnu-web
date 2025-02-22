import React, { useEffect, useState } from "react";
import { Layout } from "../templates/Layout";
import firebase from "gatsby-plugin-firebase";
import { graphql } from "gatsby";
import { FadeInSection } from "../components/FadeInSection";
import { GatsbyImage } from "gatsby-plugin-image";
import { Team } from "./teams";
import { Members } from "../views/teams/Members";
import Countdown from "react-countdown";
import { CountdownRenderer } from "../components/CountdownRenderer";
import { Specs } from "../views/selfiesat/Specs";
import { FramSatHeader } from "../views/framsat/FramSatHeader";
import axios from 'axios';

const NextSat = ({ data }) => {
  const [selectedTeam, setSelectedTeam] = useState<Team>();
  const { sanityNextSatPage, allSanityTeam } = data;
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  
  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get('https://lifesupport.orbitntnu.com/api/trpc/teams.getPublicTeamPageInfo');
  
        if (response.status === 200) {
          // Navigate to the actual data inside the response
          const teamsData = response.data.result.data.json;
          setSelectedTeam(teamsData.find((team) => team.teamID === 17));

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


  return (
    <Layout>
      <FramSatHeader
        title={"Orbit NTNU"}
        name={sanityNextSatPage.title}
        text={sanityNextSatPage.topText}
      />

      <section className="mt-16 px-8 relative md:flex md:flex-col md:max-w-4xl md:justify-center m-auto">
        <div className="flex flex-col justify-center items-center mb-16">
          <Countdown
            date={sanityNextSatPage.launchDate}
            renderer={CountdownRenderer}
          />
          <p className="ml-1 mt-2 font-thin md:font-normal">UNTIL LAUNCH</p>
        </div>

        <FadeInSection>
          <Specs
            name="BIOSAT"
            specs={sanityNextSatPage.specifications}
            image={sanityNextSatPage.specificationsImage.asset.gatsbyImageData}
          />
        </FadeInSection>

        <div className="md:flex md:gap-8 md:basis-0 mt-8">
          <div>
            <h2 className="text-2xl md:text-4xl">
              {sanityNextSatPage.firstSectionTitle}
            </h2>
            <p className="md:text-lg">{sanityNextSatPage.firstSectionText1}</p>
            <p className="md:text-lg mt-4">
              {sanityNextSatPage.firstSectionText2}
            </p>
          </div>

          <FadeInSection>
            <GatsbyImage
              image={sanityNextSatPage.firstSectionImage.asset.gatsbyImageData}
              alt="Image 1"
              className="mt-2 mb-8 md:mt-0 md:mb-0"
            />
          </FadeInSection>
        </div>

        <FadeInSection>
          <GatsbyImage
            image={sanityNextSatPage.midImage.asset.gatsbyImageData}
            alt="Image 2"
            className="mb-8 md:my-8"
          />
        </FadeInSection>

        <div className="md:flex md:gap-8 md:mb-8 md:basis-0 md:my-8">
          <div>
            <h2 className="text-2xl md:text-4xl">
              {sanityNextSatPage.secondSectionTitle}
            </h2>
            <p className="md:text-lg">{sanityNextSatPage.secondSectionText}</p>
          </div>
          <FadeInSection>
            <GatsbyImage
              image={sanityNextSatPage.secondSectionImage.asset.gatsbyImageData}
              alt="Image 3"
              className="my-8 md:my-0"
            />
          </FadeInSection>
        </div>

        <div className="md:flex md:flex-row-reverse md:gap-8 md:my-8">
          <div>
            <p className="md:text-lg">{sanityNextSatPage.thirdSectionText}</p>
          </div>
          <FadeInSection>
            <GatsbyImage
              image={sanityNextSatPage.thirdSectionImage.asset.gatsbyImageData}
              alt="Image 4"
              className="md:w-80 mt-4 mb:mt-0"
            />
          </FadeInSection>
        </div>

        <div className="mt-4 md:flex md:gap-8 md:mb-8 md:basis-0 md:my-8">
          <div>
            <h2 className="text-2xl md:text-4xl">
              {sanityNextSatPage.fourthSectionTitle}
            </h2>
            <p className="md:text-lg">{sanityNextSatPage.fourthSectionText}</p>
          </div>
          <FadeInSection>
            <GatsbyImage
              image={sanityNextSatPage.fourthSectionImage.asset.gatsbyImageData}
              alt="Image 5"
              className="my-8 md:my-0"
            />
          </FadeInSection>
        </div>

        {selectedTeam && (
          <FadeInSection>
            <h2 className="text-center text-4xl font-bold mb-2">
              PROJECT MANAGERS
            </h2>
            <p className="p-4 my-4 border-t border-b border-yellow-500">
              {selectedTeam.description}
            </p>
            <Members
              members={selectedTeam.members.filter((member) =>
                member.title.toLowerCase().includes("biosat") || member.title.toLowerCase().includes("bs")
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
  query NextSatPageQuery {
    sanityNextSatPage {
      title
      topText
      launchDate
      specifications {
        name
        text
      }
      specificationsImage {
        asset {
          gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
        }
      }
      firstSectionTitle
      firstSectionText1
      firstSectionText2
      firstSectionImage {
        asset {
          gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
        }
      }
      midImage {
        asset {
          gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
        }
      }
      secondSectionTitle
      secondSectionText
      secondSectionImage {
        asset {
          gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
        }
      }
      thirdSectionTitle
      thirdSectionText
      thirdSectionImage {
        asset {
          gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
        }
      }
      fourthSectionTitle
      fourthSectionText
      fourthSectionImage {
        asset {
          gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
        }
      }
      bottomImage {
        asset {
          gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
        }
      }
    }
  }
`;

export default NextSat;
