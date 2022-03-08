import React from "react";
import { Layout } from "../templates/Layout";
import { LandingHero } from "../components/LandingHero";
import { AboutUsBanner } from "../components/AboutUsBanner";
import { BannerLinkList } from "../components/BannerLinkList";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  const { sanityLandingPage } = data;

  return null;

  /**
  return (
    <Layout>
      <LandingHero
        topText={sanityLandingPage.topText}
        mobileImage={sanityLandingPage.mobileTopImage}
      />
      <AboutUsBanner
        title={sanityLandingPage.aboutSectionTitle}
        aboutText={sanityLandingPage.aboutSectionText}
        buttonText={sanityLandingPage.aboutSectionButtonText}
        image={sanityLandingPage.aboutSectionImage}
      />
      <BannerLinkList links={sanityLandingPage.links} />
    </Layout>
  );
   * 
   */
};

export const query = graphql`
  query LandingPageQuery {
    sanityLandingPage {
      topText
      mobileTopImage {
        asset {
          gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
        }
      }
      aboutSectionTitle
      aboutSectionText
      aboutSectionButtonText
      aboutSectionImage {
        asset {
          gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
        }
      }
      links {
        url
        title
        image {
          asset {
            gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;

export default IndexPage;
