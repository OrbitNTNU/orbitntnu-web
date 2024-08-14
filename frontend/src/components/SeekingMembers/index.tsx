import React from "react";
import { FadeInSection } from "../FadeInSection";
import { isBrowser } from "../../utils/isBrowser";
import { useWindowSize } from "../../utils/hooks/useWindowSize";
import { graphql } from "gatsby";

const SeekingMembers = ({ data }) => {

    const { sanityLandingPage } = data;

    const width = isBrowser() ? useWindowSize().width : 600;
    const height = isBrowser() ? useWindowSize().height : 300;

    return (
        <>
            {sanityLandingPage.newMembers ?
                <section
                    className={`relative flex flex-col justify-center`}
                >
                    <h2 className="text-3xl text-center md:text-4xl font-bold mb-2">
                    We are seeking new members
                    </h2>
                    <div className="flex gap-3 mt-2 justify-center">
                    <a
                        href="https://forms.gle/VeDNJRUBqwZgXS8g9"
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
                :
                null
            }
        </>
    )
}

export const query = graphql`
    query LandingPageQuery {
        sanityLandingPage {
            newMembers
        }
    }
`;

export default SeekingMembers;