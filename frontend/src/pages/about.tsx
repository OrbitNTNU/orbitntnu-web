import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import React, { useEffect } from "react";
import { FadeInSection } from "../components/FadeInSection";
import { Header } from "../components/Header";
import { Layout } from "../templates/Layout";
import firebase from "gatsby-plugin-firebase";
import { graphql } from "gatsby";

const AboutUs = ({ data }) => {
  const { sanityAboutPage } = data;

  useEffect(() => {
    if (!firebase) {
      return;
    }

    firebase.analytics().logEvent("visited_about_page");
  }, [firebase]);

  return (
    <Layout>
      <Header
        title={sanityAboutPage.fadedTitle}
        name={sanityAboutPage.title}
        text={sanityAboutPage.topText}
        image={sanityAboutPage.topImage}
      />
      <section
        className="mt-24 px-8 relative md:flex md:flex-col md:max-w-4xl md:justify-center m-auto"
        data-scroll-section
      >
        <div className="md:flex md:gap-8 md:basis-0">
          <div>
            <h2 className="text-2xl md:text-4xl">{sanityAboutPage.header1}</h2>
            <p className="md:text-lg">{sanityAboutPage.text1}</p>
          </div>
          <FadeInSection>
            <GatsbyImage
              image={sanityAboutPage.image1.asset.gatsbyImageData}
              alt="Image 1"
              className="mb-8 md:mb-0"
            />
          </FadeInSection>
        </div>

        <FadeInSection>
          <GatsbyImage
            image={sanityAboutPage.image2.asset.gatsbyImageData}
            alt="Image 2"
            className="mb-8 md:my-16"
          />
        </FadeInSection>

        <div className="md:flex md:gap-8 md:mb-8 md:basis-0 md:my-8">
          <div>
            <h2 className="text-2xl md:text-4xl">{sanityAboutPage.header2}</h2>
            <p className="md:text-lg">{sanityAboutPage.text2}</p>
          </div>
          <FadeInSection>
            <GatsbyImage
              image={sanityAboutPage.image3.asset.gatsbyImageData}
              alt="Image 3"
              className="my-8 md:my-0"
            />
          </FadeInSection>
        </div>

        <div className="md:flex md:flex-row-reverse md:gap-8 md:my-8">
          <div>
            <h2 className="text-2xl md:text-4xl">{sanityAboutPage.header3}</h2>
            <p className="md:text-lg">{sanityAboutPage.text3}</p>
          </div>
          <FadeInSection>
            <GatsbyImage
              image={sanityAboutPage.image4.asset.gatsbyImageData}
              alt="Image 4"
            />
          </FadeInSection>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query AboutPageQuery {
    sanityAboutPage {
      topText
      topImage {
        asset {
          gatsbyImageData
        }
      }
      title
      text3
      text2
      text1
      image4 {
        asset {
          gatsbyImageData
        }
      }
      image3 {
        asset {
          gatsbyImageData
        }
      }
      image2 {
        asset {
          gatsbyImageData
        }
      }
      image1 {
        asset {
          gatsbyImageData
        }
      }
      header3
      header2
      header1
      fadedTitle
    }
  }
`;

export default AboutUs;
