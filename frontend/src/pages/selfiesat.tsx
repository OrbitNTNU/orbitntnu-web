import React, { useEffect, useState } from "react";
import { Layout } from "../templates/Layout";
import { MissionText } from "../views/selfiesat/MissionText";
import { SelfieSatHeader } from "../views/selfiesat/SelfieSatHeader";
import { Specs } from "../views/selfiesat/Specs";
import { FadeInSection } from "../components/FadeInSection";
import firebase from "gatsby-plugin-firebase";
import blogComponent from "../components/BlogComponent";

const SelfieSat = () => {
  useEffect(() => {
    if (!firebase) {
      return;
    }

    firebase.analytics().logEvent("visited_selfiesat_page");
  }, [firebase]);

  const makePost = (BaseComponent) => (props) => {
    const newProps = { ...props };
    return <BaseComponent {...newProps} />;
  };
  const BlogPost = makePost(blogComponent);

  const initialBlogs = [
    {
      title: "hello world",
      image: "sanityAboutPage.image2.asset.gatsbyImageData",
    },
    {
      title: "fghhfhghg",
      image: "sanityAboutPage.image1.asset.gatsbyImageData",
    },
    { title: "bek", image: "sanityAboutPage.image2.asset.gatsbyImageData" },
  ];

  const [posts, setPosts] = useState(initialBlogs);

  return (
    <Layout>
      <SelfieSatHeader
        title="Orbit NTNU"
        name="SELFIESAT-1"
        text="The worlds first selfie taking satellitte."
      />
      <FadeInSection>
        <MissionText />
      </FadeInSection>
      <FadeInSection>
        <Specs />
      </FadeInSection>

      <BlogPost title={posts[0].title} image={posts[0].image}></BlogPost>
    </Layout>
  );
};

export default SelfieSat;
