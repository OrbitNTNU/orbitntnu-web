import React from "react";
import { FadeInSection } from "../../../components/FadeInSection";
import { Specs } from "../Specs";
import { GatsbyImage, IGatsbyImageData, StaticImage } from "gatsby-plugin-image";

export interface FramSatContainerInfo {
    info: {
        title: string,
        topText: string,
        shortTopText: string,
        missionTitle: string,
        missionTextLeft: string,
        missionTextRight: string,
        specifications: {
            name: string,
            text: string,
        }[],
        specificationsImage: {
            asset: {
                gatsbyImageData: IGatsbyImageData | string,
            },
        },
        firstSectionText: string,
        firstSectionImage: {
            asset: {
                gatsbyImageData: IGatsbyImageData,
            },
        }
    }
}

const FramSatContainer = ({info}: FramSatContainerInfo) => {
    return (
        <div>
            <section className="mt-16 px-8 relative md:flex md:flex-col md:max-w-4xl md:justify-center m-auto">
                <FadeInSection>
                <div className="flex flex-col justify-center">
                    <h2 className="text-center text-4xl mb-4 font-bold">
                        MISSION
                    </h2>
                    <div className="flex flex-col px-8 items-start md:flex-row md:max-w-4xl m-auto gap-8 md:-mt-6">
                    <p className="max-w-sm md:pt-6 mb-4 md:mb-0 items-start">
                        {info.missionTextLeft}
                    </p>
                    <p className="max-w-sm md:pt-6 mb-4 md:mb-0 items-start">
                        {info.missionTextRight}
                    </p>
                    </div>
                </div>
                </FadeInSection>
            </section>
            <section>
                <FadeInSection>
                    <div className="mt-16 mb-8">
                        <Specs
                            name={info.title}
                            specs={info.specifications}
                            image={info.specificationsImage.asset.gatsbyImageData}
                        />
                    </div>
                </FadeInSection>
                    <p className="mx-8 md:max-w-2xl md:m-auto">
                        {info.firstSectionText}
                    </p>
                <FadeInSection>
                    <div className="flex justify-center mt-8">
                        {info.firstSectionImage.asset.gatsbyImageData ?
                        <GatsbyImage
                            image= {info.firstSectionImage.asset.gatsbyImageData}
                            alt="Open Framsat"
                            className="max-w-3xl mx-8"
                        />
                        :
                        false
                        }
                    </div>
                </FadeInSection>
            </section>
        </div>
    );
}

export default FramSatContainer;