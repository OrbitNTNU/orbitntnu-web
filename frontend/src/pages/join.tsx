import React, { useEffect } from "react";
import { Header } from "../components/Header";
import { Layout } from "../templates/Layout";
import firebase from "gatsby-plugin-firebase";
import { graphql } from "gatsby";
import { JoinCards } from "../views/join/JoinCards";
import { NoPositionsSection } from "../views/join/NoPositionsSection";

const Join = ({ data }) => {
  const { allSanityPosition, sanityJoinPage } = data;

  useEffect(() => {
    if (!firebase) {
      return;
    }

    firebase.analytics().logEvent("visited_join_page");
  }, [firebase]);

  return (
    <Layout>
      <Header
        title={sanityJoinPage.fadedTitle}
        name={sanityJoinPage.title}
        text={sanityJoinPage.topText}
        image={sanityJoinPage.topImage}
      />
      {allSanityPosition.nodes.length !== 0 ? (
        <JoinCards
          sectionTitle={sanityJoinPage.sectionTitle}
          positions={allSanityPosition.nodes}
        />
      ) : (
        <NoPositionsSection noPositionsText={sanityJoinPage.noPositionsText} />
      )}
    </Layout>
  );
};

export const query = graphql`
  query JoinPageQuery {
    sanityJoinPage {
      topText
      topImage {
        asset {
          gatsbyImageData
        }
      }
      title
      fadedTitle
      sectionTitle
      noPositionsText
    }
    allSanityPosition {
      nodes {
        title
        text
        positionLink
        image {
          asset {
            gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;

export default Join;
