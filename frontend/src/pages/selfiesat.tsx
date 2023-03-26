import React, { useEffect } from "react";
import { Layout } from "../templates/Layout";
import { SelfieSatHeader } from "../views/selfiesat/SelfieSatHeader";
import { Specs } from "../views/selfiesat/Specs";
import { FadeInSection } from "../components/FadeInSection";
import firebase from "gatsby-plugin-firebase";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { SelfiesatCountdown } from "../views/selfiesat/Countdown";
import Gallery from "../views/selfiesat/Gallery";

const SelfieSat = ({ data }) => {
  const { sanitySelfiesatPage } = data;
  const launchDate = new Date(sanitySelfiesatPage.launchDate);

  useEffect(() => {
    if (!firebase) {
      return;
    }

    firebase.analytics().logEvent("visited_selfiesat_page");
  }, [firebase]);

  return (
    <Layout>

      <SelfieSatHeader
        title={sanitySelfiesatPage.title}
        name={sanitySelfiesatPage.topText}
        text={sanitySelfiesatPage.shortTopText}
      />

      <section className="mt-16 px-8 relative md:flex md:flex-col md:max-w-4xl md:justify-center m-auto">
        <div className="flex">
          <SelfiesatCountdown launchDate={launchDate} />
        </div>

        <FadeInSection>
          <Specs
            name="SELFIESAT-1"
            specs={sanitySelfiesatPage.specifications}
            image={
              sanitySelfiesatPage.specificationsImage.asset.gatsbyImageData
            }
          />
        </FadeInSection>

        <Gallery images={sanitySelfiesatPage.gallery} />

        <div className="md:flex md:gap-8 md:basis-0 mt-8">
          <div>
            <h2 className="text-2xl md:text-4xl">
              {sanitySelfiesatPage.firstSectionTitle}
            </h2>
            <p className="md:text-lg">
              {sanitySelfiesatPage.firstSectionText1}
            </p>
            <p className="md:text-lg mt-4">
              {sanitySelfiesatPage.firstSectionText2}
            </p>
          </div>

          <FadeInSection>
            <GatsbyImage
              image={
                sanitySelfiesatPage.firstSectionImage.asset.gatsbyImageData
              }
              alt="Image 1"
              className="mt-2 mb-8 md:mt-0 md:mb-0"
            />
          </FadeInSection>
        </div>

        <FadeInSection>
          <GatsbyImage
            image={sanitySelfiesatPage.midImage.asset.gatsbyImageData}
            alt="Image 2"
            className="mb-8 md:my-8"
          />
        </FadeInSection>

        <div className="md:gap-8 md:mb-8 md:basis-0 md:my-8">
          <h2 className="text-2xl md:text-4xl">
            {sanitySelfiesatPage.secondSectionTitle}
          </h2>

          <div className="md:flex">
            <p className="md:text-lg">
              {sanitySelfiesatPage.secondSectionText}
            </p>
            <FadeInSection>
              <GatsbyImage
                image={
                  sanitySelfiesatPage.secondSectionImage.asset.gatsbyImageData
                }
                alt="Image 3"
                className=" md:w-80 my-8 md:my-0"
              />
            </FadeInSection>
          </div>
        </div>

        <div className="md:flex md:flex-row-reverse md:gap-8 md:my-8">
          <div>
            <p className="md:text-lg">{sanitySelfiesatPage.thirdSectionText}</p>
          </div>
          <FadeInSection>
            <GatsbyImage
              image={
                sanitySelfiesatPage.thirdSectionImage.asset.gatsbyImageData
              }
              alt="Image 4"
              className="md:w-80 mt-4 mb:mt-0"
            />
          </FadeInSection>
        </div>

        <div className="mt-4 md:flex md:gap-8 md:mb-8 md:basis-0 md:my-8">
          <div>
            <h2 className="text-2xl md:text-4xl">
              {sanitySelfiesatPage.fourthSectionTitle}
            </h2>
            <p className="md:text-lg">
              {sanitySelfiesatPage.fourthSectionText}
            </p>
          </div>
          <FadeInSection>
            <GatsbyImage
              image={
                sanitySelfiesatPage.fourthSectionImage.asset.gatsbyImageData
              }
              alt="Image 5"
              className="my-8 md:my-0"
            />
          </FadeInSection>
        </div>

        <FadeInSection>
          <GatsbyImage
            image={sanitySelfiesatPage.bottomImage.asset.gatsbyImageData}
            alt="Bottom Image"
            className="mb-8 md:my-8"
          />
        </FadeInSection>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query SelfiesatPageQuery {
    sanitySelfiesatPage {
      title
      topText
      shortTopText
      launchDate
      specifications {
        name
        text
      }
      specificationsImage {
        asset {
          gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
        }
      }
      gallery {
        asset {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      firstSectionTitle
      firstSectionText1
      firstSectionText2
      firstSectionImage {
        asset {
          gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
        }
      }
      midImage {
        asset {
          gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
        }
      }
      secondSectionTitle
      secondSectionText
      secondSectionImage {
        asset {
          gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
        }
      }
      thirdSectionTitle
      thirdSectionText
      thirdSectionImage {
        asset {
          gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
        }
      }
      fourthSectionTitle
      fourthSectionText
      fourthSectionImage {
        asset {
          gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
        }
      }
      bottomImage {
        asset {
          gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
        }
      }
    }
  }
`;

export default SelfieSat;
