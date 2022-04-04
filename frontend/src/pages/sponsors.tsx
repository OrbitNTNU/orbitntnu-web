import React, { useEffect } from "react";
import { Header } from "../components/Header";
import { Layout } from "../templates/Layout";
import firebase from "gatsby-plugin-firebase";
import { graphql } from "gatsby";
import { MainSponsorSection } from "../views/sponsors/MainSponsorSection";

const Sponsors = ({ data }) => {
  const { sanitySponsorsPage } = data;

  useEffect(() => {
    if (!firebase) {
      return;
    }

    firebase.analytics().logEvent("visited_sponsors_page");
  }, [firebase]);

  return (
    <Layout>
      <Header
        title={sanitySponsorsPage.fadedTitle}
        name={sanitySponsorsPage.title}
        text={sanitySponsorsPage.topText}
        image={sanitySponsorsPage.topImage}
      />
      <MainSponsorSection {...sanitySponsorsPage} />
    </Layout>
  );
};

export const query = graphql`
  query SponsorsPageQuery {
    sanitySponsorsPage {
      title
      fadedTitle
      topText
      mainSponsorName
      mainSponsorDescription
      topImage {
        asset {
          gatsbyImageData
        }
      }
      sponsors {
        type
        title
        sponsor {
          caption
          asset {
            gatsbyImageData
          }
        }
      }
      mainSponsorLargeImage {
        caption
        asset {
          gatsbyImageData
        }
      }
      mainSponsorImage {
        caption
        asset {
          gatsbyImageData
        }
      }
    }
  }
`;

export default Sponsors;
