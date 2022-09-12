import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Layout } from "../templates/Layout";
import firebase from "gatsby-plugin-firebase";
import { graphql } from "gatsby";
import { FadeInSection } from "../components/FadeInSection";
import { GatsbyImage } from "gatsby-plugin-image";
import { Team } from "./teams";
import { Members } from "../views/teams/Members";

const NextSat = ({ data }) => {
  const [selectedTeam, setSelectedTeam] = useState<Team>();
  const { sanityNextSatPage, allSanityTeam } = data;

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
      <Header
        title={sanityNextSatPage.fadedTitle}
        name={sanityNextSatPage.title}
        text={sanityNextSatPage.topText}
        image={sanityNextSatPage.topImage}
      />

      <section className="mt-24 px-8 relative md:flex md:flex-col md:max-w-4xl md:justify-center m-auto">
        <div className="md:flex md:gap-8 md:basis-0 mt-8">
          <div>
            <h2 className="text-2xl md:text-4xl">
              {sanityNextSatPage.firstSectionTitle}
            </h2>
            <p className="md:text-lg">{sanityNextSatPage.firstSectionText}</p>
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

        {selectedTeam && (
          <FadeInSection>
            <p className="p-4 my-4 border-t border-b border-yellow-500">
              {selectedTeam.description}
            </p>
            <Members members={selectedTeam.members} wide />
          </FadeInSection>
        )}
      </section>
    </Layout>
  );
};

export const query = graphql`
  query NextSatPageQuery {
    sanityNextSatPage {
      topText
      topImage {
        asset {
          gatsbyImageData
        }
      }
      title
      fadedTitle
      firstSectionTitle
      firstSectionText
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
