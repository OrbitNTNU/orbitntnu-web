import React, { useEffect, useState } from "react";
import { Layout } from "../templates/Layout";
import firebase from "gatsby-plugin-firebase";
import { graphql } from "gatsby";
import { FadeInSection } from "../components/FadeInSection";
import { GatsbyImage } from "gatsby-plugin-image";
import { Team } from "./teams";
import { Members } from "../views/teams/Members";
import { LandingHero } from "../components/LandingHero";
import Countdown from "react-countdown";
import { CountdownRenderer } from "../components/CountdownRenderer";
import { Specs } from "../views/selfiesat/Specs";

const NextSat = ({ data }) => {
  const [selectedTeam, setSelectedTeam] = useState<Team>();
  const { sanityLandingPage, sanityNextSatPage, allSanityTeam } = data;

  useEffect(() => {
    if (!firebase) {
      return;
    }

    firebase.analytics().logEvent("visited_nextsat_page");
  }, [firebase]);

  useEffect(() => {
    const teams: Team[] = allSanityTeam.nodes;
    if (teams.length > 0) setSelectedTeam(teams[0]);
  }, []);

  return (
    <Layout>
      <LandingHero
        topText={sanityLandingPage.topText}
        mobileImage={sanityLandingPage.mobileTopImage}
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

        <FadeInSection>
          <GatsbyImage
            image={sanityNextSatPage.bottomImage.asset.gatsbyImageData}
            alt="Bottom Image"
            className="mb-8 md:my-8"
          />
        </FadeInSection>

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
                member.title.includes("NEXTSat")
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
    sanityLandingPage {
      topText
      mobileTopImage {
        asset {
          gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
        }
      }
    }
    sanityNextSatPage {
      title
      topText
      shortTopText
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

export default NextSat;
