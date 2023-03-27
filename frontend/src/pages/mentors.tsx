import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Layout } from "../templates/Layout";
import { SelfieSatHeader } from "../views/selfiesat/SelfieSatHeader";
import firebase from "gatsby-plugin-firebase";
import { graphql } from "gatsby";
import { Team } from "./teams";
import { Member } from "./teams";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { ProfileCard } from "../views/teams/ProfileCard";
import { FadeInSection } from "../components/FadeInSection";

interface Mentor {
  name: string;
  thankYouText: string;
  image?: {
    asset: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
}

interface MentorProps {
  mentors: Mentor[];
  wide?: boolean;
}

const Mentor = ({ mentors, wide = false }: MentorProps) => (
  <ul>
    {mentors.map((mentor) => (
      <FadeInSection>
        <div className="flex flex-col md:flex-row md:gap-8 md:basis-0 mt-8 items-center">
          <div className="flex items-center">
            <GatsbyImage
              className={`${wide ? "w-[270px]" : "w-64"}`}
              image={mentor.image.asset.gatsbyImageData}
              alt={`image`}
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-4xl">
              {`${mentor.name}`}
            </h2>
            <p className="md:text-lg">
              {`${mentor.thankYouText}`}
            </p>
          </div>
        </div>
      </FadeInSection>
    ))}
  </ul>
);


const Mentors = ({ data }) => {
  // const [selectedTeam, setSelectedTeam] = useState<Team>();
  const { sanityMentorsPage, allSanityTeam } = data;

  useEffect(() => {
    if (!firebase) {
      return;
    }

    firebase.analytics().logEvent("visited_mentors_page");
  }, [firebase]);

  // useEffect(() => {
  //     const teams: Team[] = allSanityTeam.nodes;
  //     if (teams.length > 0) setSelectedTeam(teams[0]);
  //   }, []);

  return (
    <Layout>
      <SelfieSatHeader
        title={sanityMentorsPage.fadedTitle}
        name={sanityMentorsPage.title}
        text={sanityMentorsPage.topText} />
      {/* <Header
                title={"sanityMentorsPage.fadedTitle"}
                name={"sanityMentorsPage.title"}
                text={"sanityMentorsPage.topText"}
                image="../../../images/16_selfie.png"
            /> */}
      <section className="mt-6 px-8 relative md:flex md:flex-col md:max-w-4xl md:justify-center m-auto items-center">
        <Mentor
          mentors={sanityMentorsPage.mentors}
          wide={true}
        />

      </section>
    </Layout>
  );
};

export const query = graphql`
  query MentorsPageQuery {
    sanityMentorsPage {
      title
      fadedTitle
      topText
      mentors {
        name
        image {
          asset {
            gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
          }
        }
        thankYouText
      }
    }
  }
`;

export default Mentors;
