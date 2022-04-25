import React, { useEffect } from "react";
import { Header } from "../components/Header";
import { Layout } from "../templates/Layout";
import firebase from "gatsby-plugin-firebase";
import { graphql } from "gatsby";
import { MainSponsorSection } from "../views/sponsors/MainSponsorSection";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { SponsorSection } from "../views/sponsors/SponsorSection";

interface Sponsors {
  partner: Sponsor[];
  rank1: Sponsor[];
  rank2: Sponsor[];
}

export interface Sponsor {
  title: string;
  type: string;
  url: string;
  sponsor: {
    caption: string;
    asset: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
}

const Sponsors = ({ data }) => {
  const { sanitySponsorsPage } = data;

  let sponsors: { partner: Sponsor[]; rank1: Sponsor[]; rank2: Sponsor[] } = {
    partner: [],
    rank1: [],
    rank2: [],
  };

  for (const key in sponsors) {
    sponsors[key] = sanitySponsorsPage.sponsors.filter(
      (sponsor: Sponsor) => sponsor.type === key
    );
  }

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

      <SponsorSection sponsors={sponsors.partner} type="Partners" />
      <SponsorSection sponsors={sponsors.rank1} type="Rank 1" />
      <SponsorSection sponsors={sponsors.rank2} type="Rank 2" />
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
        url
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
