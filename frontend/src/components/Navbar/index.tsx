import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { OpenNav } from "./OpenNav";
import { FaBars } from "@react-icons/all-files/fa/FaBars";
import { Link } from "gatsby";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <nav className="text-white p-4 relative m-4">
      <div className="bg-black opacity-80 w-full h-full absolute top-0 left-0 z-0" />

      <Link to="/">
        <StaticImage
          src="../../images/orbitimage.png"
          alt="Orbit"
          className="w-32"
          placeholder="none"
        />
      </Link>

      <ul className="text-white absolute top-7 left-44 text-lg">
        <li className="inline-block mr-4">
          <Link to="/selfiesat">SelfieSat</Link>
        </li>
        <li className="inline-block mr-4">
          <Link to="/selfiesat">FRAMSAT-1</Link>
        </li>
        <li className="inline-block mr-4">
          <Link to="/selfiesat">Sub-Orbital</Link>
        </li>
      </ul>

      {toggle ? (
        <OpenNav handleToggle={handleToggle} />
      ) : (
        <FaBars
          onClick={handleToggle}
          className="absolute right-4 top-8 cursor-pointer"
        />
      )}
    </nav>
  );
};
