import React, { useEffect, useMemo, useRef, useState } from "react";
import Globe from "react-globe.gl";
import { eciToGeodetic, gstime, propagate, twoline2satrec } from "satellite.js";
import * as THREE from "three";

function radiansToDegrees(radians: number) {
  var pi = Math.PI;
  return radians * (180 / pi);
}

const EARTH_RADIUS_KM = 6371;
const SAT_SIZE_KM = 80;
const TIME_STEP = 1000 / 60;

export const GlobeRender = () => {
  const globeEl = useRef();
  const [satData, setSatData] = useState();
  const [globeRadius, setGlobeRadius] = useState();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // time ticker
    (function frameTicker() {
      requestAnimationFrame(frameTicker);
      setTime((time) => new Date(+time + TIME_STEP));
    })();
  }, []);

  useEffect(() => {
    // load satellite data
    fetch(
      "https://gist.githubusercontent.com/isaksolheim/dcf9c4cf430ceb310cf5651fa32b84db/raw/089824d70111902cbee814f354348729cc0bd638/tle.txt"
    )
      .then((r) => r.text())
      .then((rawData) => {
        const tleData = rawData
          .replace(/\r/g, "")
          .split(/\n(?=[^12])/)
          .filter((d) => d)
          .map((tle) => tle.split("\n"));
        const satData = tleData
          .map(([name, ...tle]) => ({
            satrec: twoline2satrec(...tle),
            name: name.trim().replace(/^0 /, ""),
          }))
          .slice(0, 1500);

        setSatData(satData);
      });
  }, []);

  const objectsData = useMemo(() => {
    if (!satData) return [];

    // Update satellite positions
    const gmst = gstime(time);
    return satData.map((d) => {
      const eci = propagate(d.satrec, time);
      if (eci.position) {
        const gdPos = eciToGeodetic(eci.position, gmst);
        const lat = radiansToDegrees(gdPos.latitude);
        const lng = radiansToDegrees(gdPos.longitude);
        const alt = gdPos.height / EARTH_RADIUS_KM;
        return { ...d, lat, lng, alt };
      }
      return d;
    });
  }, [satData, time]);

  const satObject = useMemo(() => {
    if (!globeRadius) return undefined;

    const satGeometry = new THREE.OctahedronGeometry(
      (SAT_SIZE_KM * globeRadius) / EARTH_RADIUS_KM / 2,
      0
    );
    const satMaterial = new THREE.MeshLambertMaterial({
      color: "red",
      transparent: true,
      opacity: 1,
    });

    return new THREE.Mesh(satGeometry, satMaterial);
  }, [globeRadius]);

  useEffect(() => {
    setGlobeRadius(globeEl.current.getGlobeRadius());
    globeEl.current.controls().enableZoom = false;
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 0.2;
    globeEl.current.pointOfView({ lat: 0, lng: 0, altitude: 1.8 });
  }, []);

  return (
    <Globe
      ref={globeEl}
      globeImageUrl="//unpkg.com/three-globe@2.24.5/example/img/earth-night.jpg"
      objectsData={objectsData}
      objectLabel="name"
      objectLat="lat"
      objectLng="lng"
      objectAltitude="alt"
      objectThreeObject={satObject}
    />
  );
};
