import { graphql } from "gatsby";
import firebase from "gatsby-plugin-firebase";
import { GatsbyImage } from "gatsby-plugin-image";
import React, { useEffect } from "react";
import { BlogLink } from "../components/BlogLink";
import { FadeInSection } from "../components/FadeInSection";
import { Header } from "../components/Header";
import { Layout } from "../templates/Layout";
import { MissionText } from "../views/suborbital/MissionText";
import SeekingMembers from "../components/SeekingMembers";

const SubOrbital = ({ data }) => {
  const { sanitySuborbitalPage, sanityLandingPage } = data;

  useEffect(() => {
    if (!firebase) {
      return;
    }

    firebase.analytics().logEvent("visited_suborbital_page");
  }, [firebase]);

  return (
    <Layout>
      <Header
        title={sanitySuborbitalPage.fadedTitle}
        name={sanitySuborbitalPage.title}
        text={sanitySuborbitalPage.topText}
        image={sanitySuborbitalPage.topImage}
      />
      <section className="mt-24 px-8 relative md:flex md:flex-col md:max-w-4xl md:justify-center m-auto">

        <div className="pb-20">
          <SeekingMembers data={data}/>
        </div>

        <div className="md:flex md:gap-8 md:basis-0">
          <div>
            <h2 className="text-2xl md:text-4xl">
              {sanitySuborbitalPage.firstSectionTitle}
            </h2>
            <p className="md:text-base">
              {sanitySuborbitalPage.firstSectionText}
            </p>
          </div>

          <FadeInSection>
            <GatsbyImage
              image={
                sanitySuborbitalPage.firstSectionImage.asset.gatsbyImageData
              }
              alt="Image 1"
              className="mt-2 mb-8 md:mt-0 md:mb-0"
            />
          </FadeInSection>
        </div>

        <FadeInSection>
          <GatsbyImage
            image={sanitySuborbitalPage.midImage.asset.gatsbyImageData}
            alt="Image 2"
            className="mb-8 md:my-8 md:mb-0"
          />
        </FadeInSection>

        <div className="md:flex md:flex-row-reverse md:gap-8 md:my-8">
          <div className="md:text-base md:min-w-64">
            <p>{sanitySuborbitalPage.secondSectionText1}</p>
            <p>{sanitySuborbitalPage.secondSectionText2}</p>
          </div>

          <FadeInSection>
            <GatsbyImage
              image={
                sanitySuborbitalPage.secondSectionImage.asset.gatsbyImageData
              }
              alt="Image 3"
              className="mt-2 md:mt-0"
            />
          </FadeInSection>
        </div>
      </section>

      {/* <div className="flex gap-8 flex-wrap bg-white p-16">
        <BlogLink linkUrl="/selfiesat" />
      </div> */}
    </Layout>
  );
};

export const query = graphql`
  query SuborbitalPageQuery {
    sanitySuborbitalPage {
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
      secondSectionText1
      secondSectionText2
      secondSectionImage {
        asset {
          gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
        }
      }
    }
    sanityLandingPage {
      newMembers
    }
  }
`;

export default SubOrbital;
