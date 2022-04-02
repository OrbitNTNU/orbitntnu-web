import React, { useEffect } from "react";
import { Header } from "../components/Header";
import { Layout } from "../templates/Layout";
import firebase from "gatsby-plugin-firebase";
import { JoinCard } from "../components/JoinCard";
import { graphql } from "gatsby";

const Join = ({ data }) => {
  const { allSanityPosition } = data;

  useEffect(() => {
    if (!firebase) {
      return;
    }

    firebase.analytics().logEvent("visited_join_page");
  }, [firebase]);

  console.log(allSanityPosition);

  return (
    <Layout>
      <Header
        title="Orbit NTNU"
        name="Join"
        text="Orbit is run with both technical and non-technical support from our sponsors. 
      We are very grateful for the support we receive, and are always looking for new companies 
      to work with. Want to be a part of our journey? Send an email to cmo@orbitntnu.com!"
      />
      <h2 className="mt-16 text-2xl text-center md:text-3xl">
        Available Positions
      </h2>
      <div className="md:flex md:flex-wrap justify-center">
        {allSanityPosition.nodes.map((node) => (
          <JoinCard
            title={node.title}
            text={node.text}
            applyLink={node.positionLink}
            image={node.image}
          />
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query JoinPageQuery {
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
