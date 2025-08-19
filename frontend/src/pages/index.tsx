import React, { useEffect, useRef, useState } from "react";
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
import SeekingMembers from "../components/SeekingMembers";
import { CollectionBanner } from "../components/CollectionBanner/CollectionBanner";

const IndexPage = ({ data }) => {
  const { sanityLandingPage, sanityAboutPage } = data;
  const aboutSection = useRef(null);
  const aboutUs = useRef(null);

  useEffect(() => {
    if (!firebase) {
      return;
    }

    firebase.analytics().logEvent("visited_home_page");
  }, [firebase]);


  const executeScrollToAboutUs = () =>
    aboutUs.current.scrollIntoView({ behavior: "smooth", blcok: "start" })

  const width = isBrowser() ? useWindowSize().width : 600;
  const height = isBrowser() ? useWindowSize().height : 300;
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [splash, setSplash] = useState(0);
  const [popped, setPopped] = useState(false);
  const [impactVal, setImpactVal] = useState(0);
  const lastYRef = useRef(0);

  useEffect(() => {
    if (!isBrowser()) return;

    let raf = 0;

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const docHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const raw = docHeight > 0 ? window.scrollY / docHeight : 0;
        const t = Math.min(Math.max(raw, 0), 1);

        const easeInOut = (x: number) => (x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2);
        const ARC_SPEED = 1.6;
        const te = easeInOut(Math.min(t * ARC_SPEED, 1));

        const circleSize = Math.min(300, Math.max(200, Math.floor(width * 0.45)));
        const margin = 16;

        const rightX = 600 - circleSize;
        const leftX  = 0;

        const baseY = margin + 64;
        const maxYAvail = window.innerHeight - circleSize - baseY - margin;
        const arcHeight = Math.max(0, Math.min(maxYAvail, Math.max(120, Math.floor(window.innerHeight * 0.3))));

        const arcX = rightX + (leftX - rightX) * te;
        const arcY = baseY + arcHeight * Math.sin(te * Math.PI / 2);

        const IMPACT_START = 0.9;
        const impactRaw = (te - IMPACT_START) / (1 - IMPACT_START);
        const impactClamped = Math.min(Math.max(impactRaw, 0), 1);
        const impact = 1 - Math.pow(1 - impactClamped, 3);

        const snapX = leftX;
        const xWall = arcX + (snapX - arcX) * impact;
        const yWall = arcY;

        const sy = window.scrollY;
        const down = sy > lastYRef.current + 1;
        if (popped && down) setPopped(false);
        lastYRef.current = sy;

        if (popped) {
          const popOffset = Math.max(56, Math.floor(circleSize * 0.38));
          setPos({ x: leftX + popOffset, y: arcY });
          setSplash(0);
        } else {
          setPos({ x: xWall, y: yWall });
          setSplash(impact);
        }

        setImpactVal(impact);
        raf = 0;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [width, height, popped]);

  const circleSize = Math.min(140, Math.max(140, Math.floor(width * 0.45)));


  return (

    <Layout>
      <CollectionBanner
        size={circleSize}
        x={pos.x}
        y={pos.y}
        splashProgress={popped ? 0 : splash}
        onClick={popped || impactVal >= 0.99 ? () => setPopped(true) : undefined}
        style={{ cursor: popped || impactVal >= 0.99 ? "pointer" : "default" }}
      />
      <div className="flex flex-col items-center" id="orbitInfo">

        <div className="">
          <LandingHero
            topText={sanityLandingPage.topText}
            mobileImage={sanityLandingPage.mobileTopImage}
          />

        </div>
        {width > 640 && height < width * 4 / 3 ? (
          <div className={`sticky-bottom scroll-smooth -mt-12 mb-4`}>
            <a
              onClick={executeScrollToAboutUs}
              className="flex flex-col items-center"
            >
              <h2 className="flex text-bold text-sm md:text-lg">
                Scroll down
              </h2>
              <div className="flex text-center width-30px" style={{ width: '15px' }}>
                <StaticImage
                  src="../images/arrow-down.png"
                  alt="Arrow down"
                />
              </div>
            </a>
          </div>
        )
          : false
        }
      </div>
      <div id="about" ref={aboutUs}>
        <AboutUsBanner
          title={sanityLandingPage.aboutSectionTitle}
          aboutText={sanityLandingPage.aboutSectionText}
          buttonText={sanityLandingPage.aboutSectionButtonText}
          image={sanityLandingPage.aboutSectionImage}
        />
      </div>

      <FadeInSection>
        <section
          className={`relative flex flex-col justify-center mb-24 sm:-mt-20 px-4 ${width < 450 && width >= 300 ? "mt-28" : ""
          } ${width < 350 ? "mt-44" : ""}`}
        >
          <SeekingMembers data={data}/>
        </section>
      </FadeInSection>

      <h2 className="text-center mt-16 sm:mt-0 text-2xl mb-2 md:text-4xl">MISSIONS</h2>
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

export default IndexPage;
