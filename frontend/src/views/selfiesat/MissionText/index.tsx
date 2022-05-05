import React from "react";

export const MissionText = () => (
  <article className="mt-16">
    <h2 className="text-center text-4xl font-bold mb-2">MISSION</h2>
    <div className="flex flex-col px-8 md:flex-row md:max-w-4xl m-auto gap-4">
      <p className="max-w-64 m-auto mb-4 md:mb-0">
        SelfieSat will take the world’s first selfie from a satellite in space.
        The external screen displays pictures sent in by the public. A camera
        mounted on a measuring tape arm photographs the screen with the Earth in
        the background. The project has inspired and brought space closer to us
        and proves how accessible the space industry has become.
      </p>
      <p className="max-w-64 m-auto mb-4 md:mb-0">
        SelfieSat, is set to launch in summer of 2022 on a SpaceX Falcon 9. The
        final orbit will be a low Earth orbit in the range 500-550km. After
        being launched into space, SelfieSat will be moved to its correct orbit
        by a Momentus Vigoride. Vigorides are transfer and service vehicles that
        carry satellites and hosted payloads between orbits in space.
      </p>
      <p className="max-w-64 m-auto">
        After launch, we will operate SelfieSat through our own ground station,
        a radio tower, at our office at Gløshaugen in Trondheim. From here, we
        will send and receive space-selfies, status updates, and positioning
        information at regular intervals. We have a specially trained operations
        team, that will handle all commands and tasks of the satellite.
      </p>
    </div>
  </article>
);
