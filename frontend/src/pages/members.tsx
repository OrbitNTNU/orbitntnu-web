import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Layout } from "../templates/Layout";
import { Link, graphql } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import firebase from "gatsby-plugin-firebase";
import { Members } from "../views/teams/Members";

export interface Member {
    name: string;
    title: string;
    email?: string;
    phone?: string;
    linkedin?: string;
    image?: {
        asset: {
            gatsbyImageData: IGatsbyImageData;
        };
    };
}

export interface Team {
    members: Member[];
    name: string;
    description: string;
}

const MembersPage = ({ data }) => {
    const [allTeams, setAllTeams] = useState<Team[]>(null);

    const { sanityTeamsPage, allSanityTeam } = data;

    useEffect(() => {
        const teams: Team[] = allSanityTeam.nodes;
        if (teams.length > 0) {
            teams.sort((a, b) => (a.name > b.name ? -1 : 1));
            teams.sort((a, b) => (a.name === "Mentors" ? 1 : -1));
            teams.sort((a, b) => (a.name === "The Board" ? -1 : 1));

            setAllTeams(teams);
        }
    }, []);

    useEffect(() => {
        if (!firebase) {
            return;
        }

        firebase.analytics().logEvent("visited_teams_page");
    }, [firebase]);

    console.log(allTeams);

    return (
        <Layout>
            <Header
                title={sanityTeamsPage.fadedTitle}
                name={sanityTeamsPage.title}
                text={sanityTeamsPage.topText}
                image={sanityTeamsPage.topImage}
            />
            {allTeams && (
                <div className="pt-12 px-8">
                    <section className="items-center mt-16 flex md:flex-col md:max-w-5xl md:justify-center m-auto">
                        <Link
                            to={"/teams"} className="items-center justify-center bg-blue-600 hover:bg-blue-800 py-2 px-4 m-auto">
                            {"Go to teams view"}
                        </Link>
                    </section>
                    {allTeams.map((team) => (
                        <div key={team.name} className="text-center">
                            <p className="p-4 mb-4 md:max-w-4xl md:mx-auto"></p>
                            <h1 className="text-3xl my-4 font-bold">
                                {team.name}
                            </h1>
                            <p className="p-4 my-4 border-t border-b border-yellow-500 md:max-w-4xl md:mx-auto">
                                {team.description}
                            </p>
                            <div className="p-4 mt-4 mb-12 md:w-full md:mx-auto">
                                <Members members={team.members} />
                            </div>
                        </div>
                    ))}
                    <section className="items-center mt-16 flex md:flex-col md:max-w-5xl md:justify-center m-auto">
                        <Link
                            to={"/teams"} className="items-center justify-center bg-blue-600 hover:bg-blue-800 py-2 px-4 m-auto">
                            {"Go to teams view"}
                        </Link>
                    </section>
                </div>
            )}
        </Layout>

    );
};

export const query = graphql`
  query TeamsPageQuery {
    sanityTeamsPage {
      topText
      topImage {
        asset {
          gatsbyImageData
        }
      }
      title
      fadedTitle
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
    allSanityTeam {
      nodes {
        members {
          image {
            asset {
              gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
            }
          }
          name
          title
          phone
          email
          linkedin
        }
        name
        description
      }
    }
  }
`;

export default MembersPage;
