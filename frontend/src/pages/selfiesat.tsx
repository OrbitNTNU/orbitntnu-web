import React, { useEffect } from "react";
import { Layout } from "../templates/Layout";
import { MissionText } from "../views/selfiesat/MissionText";
import { SelfieSatHeader } from "../views/selfiesat/SelfieSatHeader";
import { Specs } from "../views/selfiesat/Specs";
import { FadeInSection } from "../components/FadeInSection";
import firebase from "gatsby-plugin-firebase";
import { StaticImage } from "gatsby-plugin-image";
import Countdown from "react-countdown";
import { CountdownRenderer } from "../components/CountdownRenderer";

const SelfieSat = () => {
  const launchDate = new Date(2022, 4, 25, 18, 35);

  useEffect(() => {
    if (!firebase) {
      return;
    }

    firebase.analytics().logEvent("visited_selfiesat_page");
  }, [firebase]);

  return (
    <Layout>
      <SelfieSatHeader
        title="Orbit NTNU"
        name="SELFIESAT"
        text="The worlds first selfie taking satellitte."
      />

      <section className="mt-16 px-8 relative md:flex md:flex-col md:max-w-4xl md:justify-center m-auto">
        <div className="flex">
          <div className="z-10 mb-16 m-auto">
            <Countdown date={launchDate} renderer={CountdownRenderer} />
            <p className="ml-1 mt-2 md:font-normal text-gray-300 text-center">
              UNTIL LAUNCH
            </p>
          </div>
        </div>

        <FadeInSection>
          <Specs />
        </FadeInSection>

        <div className="md:flex md:gap-8 md:basis-0 mt-8">
          <div>
            <h2 className="text-2xl md:text-4xl">Mission</h2>
            <p className="md:text-lg">
              SelfieSat will take the world’s first selfie from a satellite in
              space. The external LCD-display displays pictures sent in by the
              public. A camera mounted on a measuring tape arm photographs the
              screen with the Earth in the background. The project has inspired
              and brought space closer to us and proves how accessible the space
              industry has become.
            </p>

            <p className="md:text-lg mt-4">
              SelfieSat will launch in May 2022 on a SpaceX Falcon 9 as a part
              of the Transporter 5 rideshare mission. The final orbit will be a
              low Earth orbit in the range 530-558km. After being launched into
              space, SelfieSat will be moved to its correct orbit by a Momentus
              Vigoride. Vigorides are transfer and service vehicles that carry
              satellites and hosted payloads between orbits in space.
            </p>
          </div>

          <FadeInSection>
            <StaticImage
              src="../images/selfie_better_shot.jpg"
              alt="Image 1"
              className="mt-2 mb-8 md:mt-0 md:mb-0"
            />
          </FadeInSection>
        </div>

        <FadeInSection>
          <StaticImage
            src="../images/selfie_team.jpg"
            alt="Image 2"
            className="mb-8 md:my-8"
          />
        </FadeInSection>

        <div className="md:flex md:gap-8 md:mb-8 md:basis-0 md:my-8">
          <div>
            <h2 className="text-2xl md:text-4xl">Operations</h2>
            <p className="md:text-lg">
              After launch, we will operate SelfieSat through our own ground
              station, a radio tower, at our office at Gløshaugen in Trondheim.
              From here we will send and receive space-selfies, status updates,
              and positioning information at regular intervals. We have a
              specially trained operations team, that will handle all commands
              and tasks of the satellite.
            </p>
          </div>
          <FadeInSection>
            <StaticImage
              src="../images/selfie_liggende.jpg"
              alt="Image 3"
              className="my-8 md:my-0"
            />
          </FadeInSection>
        </div>

        <div className="md:flex md:flex-row-reverse md:gap-8 md:my-8">
          <div>
            <p className="md:text-lg">
              SelfieSat is a 2U (10x10x20 cm) satellite – Orbit NTNUs first ever
              satellite. We have designed, developed and tested many of the
              subsystems, including OBC (On-Board Computer), ADCS (Attitude
              Determination and Control System) and Selfie-module. This gives us
              total control of our system and lets us tailor the hardware and
              software to our specific needs. The satellite is also equipped
              with a Raspberry Pi as our payload computer, further pushing the
              limits for component availability and possibilities. SelfieSat is
              equipped with 5 cameras; one selfie-camera, two on the sides (x-
              and y-) and one one the antennas-side.
            </p>
          </div>
          <FadeInSection>
            <StaticImage
              src="../images/selfiesat-image.jpg"
              alt="Image 4"
              className="md:w-80 mt-4 mb:mt-0"
            />
          </FadeInSection>
        </div>

        <div className="mt-4 md:flex md:gap-8 md:mb-8 md:basis-0 md:my-8">
          <div>
            <h2 className="text-2xl md:text-4xl">Momentus</h2>
            <p className="md:text-lg">
              The project started out in 2018 as Orbit NTNUs pilot-project. Four
              years later, we are launching our first satellite to space! March
              2022 we delivered SelfieSat to Momentus for integration in Santa
              Clara, California. Here it will remain powered off until it is
              deployed in space.
            </p>
          </div>
          <FadeInSection>
            <StaticImage
              src="../images/momentus.jpg"
              alt="Image 3"
              className="my-8 md:my-0"
            />
          </FadeInSection>
        </div>

        <FadeInSection>
          <StaticImage
            src="../images/natanael.jpg"
            alt="Image 2"
            className="mb-8 md:my-8"
          />
        </FadeInSection>
      </section>

      {/**
      <FadeInSection>
        <MissionText />
      </FadeInSection>
       */}
    </Layout>
  );
};

export default SelfieSat;
