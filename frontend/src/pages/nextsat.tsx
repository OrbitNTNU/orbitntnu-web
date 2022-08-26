import React, { useEffect } from "react";
import { Header } from "../components/Header";
import { Layout } from "../templates/Layout";
import firebase from "gatsby-plugin-firebase";
import { graphql } from "gatsby";
import { FadeInSection } from "../components/FadeInSection";
import { GatsbyImage } from "gatsby-plugin-image";

const NextSat = ({ data }) => {
  const { sanityNextSatPage } = data;

  useEffect(() => {
    if (!firebase) {
      return;
    }

    firebase.analytics().logEvent("visited_nextsat_page");
  }, [firebase]);

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
  }
`;

export default NextSat;
