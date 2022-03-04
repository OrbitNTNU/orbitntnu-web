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
    <nav className="text-white p-2  w-full z-50">
      <Link to="/">
        <StaticImage
          src="../../images/orbitimage.png"
          alt="Orbit"
          className="w-24 ml-4 mt-4"
          placeholder="none"
        />
      </Link>

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
