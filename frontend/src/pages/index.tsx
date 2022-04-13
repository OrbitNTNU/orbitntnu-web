import React, { useEffect } from "react";
import { Layout } from "../templates/Layout";
import { LandingHero } from "../components/LandingHero";
import { AboutUsBanner } from "../components/AboutUsBanner";
import { BannerLinkList } from "../components/BannerLinkList";
import { graphql } from "gatsby";
import firebase from "gatsby-plugin-firebase";

const IndexPage = ({ data }) => {
  const { sanityLandingPage } = data;

  useEffect(() => {
    if (!firebase) {
      return;
    }

    firebase.analytics().logEvent("visited_home_page");
  }, [firebase]);

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
      <h2 className="text-center text-2xl mt-8 mb-2 md:text-4xl md:mt-0">
        MISSIONS
      </h2>
      <BannerLinkList links={sanityLandingPage.links} />
    </Layout>
  );
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
