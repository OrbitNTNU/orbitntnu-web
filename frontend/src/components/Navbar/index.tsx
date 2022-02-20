import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { OpenNav } from "./OpenNav";
import { FaBars } from "@react-icons/all-files/fa/FaBars";
import { Link } from "gatsby";
import { LinkList } from "./LinkList";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <nav className="text-white p-4 m-4 fixed top-0 left-0 w-full">
      <div className="bg-black opacity-80 w-full h-full absolute top-0 left-0 z-0" />

      <Link to="/">
        <StaticImage
          src="../../images/orbitimage.png"
          alt="Orbit"
          className="w-32"
          placeholder="none"
        />
      </Link>

      <LinkList />

      {toggle ? (
        <OpenNav handleToggle={handleToggle} />
      ) : (
        <FaBars
          onClick={handleToggle}
          className="absolute right-16 top-8 cursor-pointer"
        />
      )}
    </nav>
  );
};
