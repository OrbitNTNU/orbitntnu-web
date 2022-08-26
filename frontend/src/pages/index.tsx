import React, { useEffect, useRef } from "react";
import { Layout } from "../templates/Layout";
import { LandingHero } from "../components/LandingHero";
import { AboutUsBanner } from "../components/AboutUsBanner";
import { BannerLinkList } from "../components/BannerLinkList";
import { graphql, Link } from "gatsby";
import firebase from "gatsby-plugin-firebase";
import { FadeInSection } from "../components/FadeInSection";
import { GatsbyImage } from "gatsby-plugin-image";
import { Button } from "../components/Button";

const IndexPage = ({ data }) => {
  const { sanityLandingPage, sanityAboutPage } = data;
  const aboutSection = useRef(null);

  useEffect(() => {
    if (!firebase) {
      return;
    }

    firebase.analytics().logEvent("visited_home_page");
  }, [firebase]);

  const executeScroll = () =>
    aboutSection.current.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <Layout>
      <LandingHero
        topText={sanityLandingPage.topText}
        mobileImage={sanityLandingPage.mobileTopImage}
      />
      <div className="bg-gray-900 p-8 text-center flex justify-center">
        <div className="max-w-64 md:max-w-xl">
          <h1 className="text-3xl font-bold">We are recruiting!</h1>
          <p className="mb-4 text-lg">
            Take a look at our open positions, application deadline 30th of
            August!
          </p>
          <Link to="/join">
            <Button label="READ MORE" />
          </Link>
        </div>
      </div>
      <AboutUsBanner
        title={sanityLandingPage.aboutSectionTitle}
        aboutText={sanityLandingPage.aboutSectionText}
        buttonText={sanityLandingPage.aboutSectionButtonText}
        image={sanityLandingPage.aboutSectionImage}
        executeScroll={executeScroll}
      />
      <h2 className="text-center text-2xl mt-8 mb-2 md:text-4xl md:mt-0">
        MISSIONS
      </h2>
      <BannerLinkList links={sanityLandingPage.links} />

      <section
        className="mt-16 px-8 relative md:flex md:flex-col md:max-w-4xl md:justify-center m-auto"
        ref={aboutSection}
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
              className="mt-2 mb-8 md:mt-0 md:mb-0"
            />
          </FadeInSection>
        </div>

        <FadeInSection>
          <GatsbyImage
            image={sanityAboutPage.image2.asset.gatsbyImageData}
            alt="Image 2"
            className="mb-8 md:my-8"
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
              className="md:w-80 mt-4 mb:mt-0"
            />
          </FadeInSection>
        </div>
      </section>
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

export default IndexPage;
