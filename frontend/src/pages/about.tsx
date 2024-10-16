import React, { useEffect, useRef } from "react";
import { Layout } from "../templates/Layout";
import { LandingHero } from "../components/LandingHero";
import { AboutUsBanner } from "../components/AboutUsBanner";
import { BannerLinkList } from "../components/BannerLinkList";
import { graphql } from "gatsby";
import firebase from "gatsby-plugin-firebase";
import { FadeInSection } from "../components/FadeInSection";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { useWindowSize } from "../utils/hooks/useWindowSize";
import { isBrowser } from "../utils/isBrowser";
import { Header } from "../components/Header";

const AboutPage = ({ data }) => {
    const { sanityLandingPage, sanityAboutPage } = data;
    const aboutSection = useRef(null);
    const aboutUs = useRef(null);

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

            <div className="mt-8" id="about" ref={aboutUs}>
                <AboutUsBanner
                    title={sanityLandingPage.aboutSectionTitle}
                    aboutText={sanityLandingPage.aboutSectionText}
                    image={sanityLandingPage.aboutSectionImage}
                />
            </div>

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

                <h2 className="text-center mt-16 sm:mt-0 text-2xl mb-2 md:text-4xl">OUR MISSIONS</h2>
                <BannerLinkList links={sanityLandingPage.links} />

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
      newMembers
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

export default AboutPage;
