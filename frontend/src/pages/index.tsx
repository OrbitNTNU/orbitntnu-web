import React, { useEffect, useRef, useState } from "react";
import { Layout } from "../templates/Layout";
import { AboutUsBanner } from "../components/AboutUsBanner";
import { BannerLinkList } from "../components/BannerLinkList";
import { InfoSection } from "../components/ScrollToSection";
import { graphql } from "gatsby";
import { Container, Button, Alert } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import '../styles/indexStyle.css';
import {
  FaCircle,
  FaCircleNotch,
  FaChevronDown,
  FaChevronUp
} from "react-icons/fa";
import firebase from "gatsby-plugin-firebase";
import { FadeInSection } from "../components/FadeInSection";
import { GatsbyImage } from "gatsby-plugin-image";
import { useWindowSize } from "../utils/hooks/useWindowSize";
import { isBrowser } from "../utils/isBrowser";


const IndexPage = ({ data }) => {
  const { sanityLandingPage, sanityAboutPage } = data;
  const aboutSection = useRef(null);
  const positionSection = useRef(null);
  const missionSection = useRef(null);
  const infoSection = useRef(null);
  const sections = [aboutSection, positionSection, missionSection, infoSection]
  const [currentSection, setCurrentSection] = useState(0)

  const executeScroll = (sectionId) => {
    sections[sectionId].current.scrollIntoView({ behavior: "smooth", block: "center" });
    setCurrentSection(sectionId)
  }

  // function DisplayScroll() {
  //   return(
  //     {currentSection == 0
  //       ? <button onClick={() => executeScroll(0)}>
  //         <FaCircle className="text-xs" />
  //       </button>
  //       : <button onClick={() => executeScroll(0)}>
  //         <FaCircleNotch className="text-xs" />
  //       </button>
  //     }
  //   )
  // }


  useEffect(() => {
    if (!firebase) {
      return;
    }

    firebase.analytics().logEvent("visited_home_page");
  }, [firebase]);

  const handleBottomClick = () => {
    if (currentSection === sections.length - 1) {
      sections[0].current.scrollIntoView({ behavior: "smooth", block: "center" });
      setCurrentSection(0);
    } else {
      sections[currentSection + 1].current.scrollIntoView({ behavior: "smooth", block: "center" });
      setCurrentSection(currentSection + 1);
    }
  };

  const handleTopClick = () => {
    if (currentSection === 0) {
      sections[0].current.scrollIntoView({ behavior: "smooth", block: "center" });
      setCurrentSection(0);
    } else {
      sections[currentSection - 1].current.scrollIntoView({ behavior: "smooth", block: "center" });
      setCurrentSection(currentSection - 1);
    }
  }



  const width = (isBrowser()) ? useWindowSize().width : 600;

  return (
    <Layout>
      <section ref={aboutSection} className={`relative flex flex-col items-center`}>
        <AboutUsBanner
          title={sanityLandingPage.aboutSectionTitle}
          aboutText={sanityLandingPage.aboutSectionText}
          buttonText={sanityLandingPage.aboutSectionButtonText}
          image={sanityLandingPage.aboutSectionImage}
          executeScroll={() => executeScroll(missionSection)}
        />
      </section>

      <FadeInSection>
        <section ref={positionSection} className={`relative flex flex-col items-center sm:-mt-20 px-4 ${width < 450 && width >= 300 ? "mt-28" : ""} ${width < 350 ? "mt-44" : ""}`}>
          <h2 className="text-3xl text-center md:text-4xl font-bold mb-2">We are seeking a new Chief Marketing Officer</h2>
          <p className="text-center md:text-lg">
            Do you have a passion for communication, creativity, and outreach?
          </p>
          <p className="text-center mb-4 md:text-xl">
            We are also seeking project manager and team leaders.
          </p>
          <div className="flex gap-3 justify-center">
            <a
              href="https://forms.gle/UwdrNMdT25Gus3sPA"
              className="bg-blue-600 py-2 px-4 sm:w-40 text-center md:text-lg block hover:bg-blue-800"
            >
              Apply
            </a>
            <a
              href="/join"
              className="bg-blue-600 py-2 px-4 sm:w-40 text-center md:text-lg block hover:bg-blue-800"
            >
              More information
            </a>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <h2 className="text-center text-2xl mt-24 mb-2 md:text-4xl" ref={missionSection}>
          MISSIONS
        </h2>

        <BannerLinkList links={sanityLandingPage.links} />

      </FadeInSection>

      <section ref={infoSection} className="relative md:flex md:flex-col md:justify-center m-auto items-center">
        <InfoSection section={sanityAboutPage.infoSectionGallery} />
      </section>
      {/* <section
        className="mt-16 px-8 relative md:flex md:flex-col md:max-w-4xl md:justify-center m-auto"
        ref={infoSection}
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
      </section> */}

      <div className={`fixed top-[50%] h-max right-4 flex flex-col gap-4 items-center p-4`}>

        <button onClick={() => handleTopClick()}>
          <FaChevronUp className="text-2xl" />
        </button>

        {sections.map(function (_, i) {
          if (currentSection == i) {
            return (
              <button onClick={() => executeScroll(i)}>
                <FaCircle className="text-xs" key={i} />
              </button>
            );
          }
          return (
            <button onClick={() => executeScroll(i)}>
              <FaCircleNotch className="text-xs" key={i} />
            </button>
          );
        })}

        <button onClick={() => handleBottomClick()}>
          <FaChevronDown className="text-2xl" />
        </button>
      </div>
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
      infoSectionGallery {
        image {
          asset {
            gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
          }
        }
        header
        text
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
