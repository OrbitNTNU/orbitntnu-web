import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { OpenNav } from "./OpenNav";
import { FaBars } from "@react-icons/all-files/fa/FaBars";
import { Link } from "gatsby";
import { CSSTransition } from "react-transition-group";
import "./navbar.css";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);

    toggle
      ? (document.body.style.overflow = "unset")
      : (document.body.style.overflow = "hidden");
  };

  const links = [
    { name: "SELFIESAT", url: "/selfiesat" },
    { name: "FRAMSAT", url: "/framsat" },
    { name: "SUBORBITAL", url: "/suborbital" },
    // { name: "NEXTSAT", url: "/nextsat" },
  ];

  return (
    <nav className="text-white p-2 mb-2  w-full z-50 absolute top-0 left-0">
      <Link to="/">
        <StaticImage
          src="../../images/orbit-logo-white.png"
          alt="Orbit"
          className="w-24 ml-4 mt-4"
          placeholder="none"
        />
      </Link>

      <ul className="invisible inline-block mt-5 ml-8 md:visible">
        {links.map((link) => (
          <Link key={link.name} to={link.url}>
            <li className="inline-block mr-4">{link.name}</li>
          </Link>
        ))}
      </ul>

      <Link to="/join" className="invisible absolute right-16 top-7 md:visible">
        Join
      </Link>

      <FaBars
        onClick={handleToggle}
        className="absolute right-8 top-8 cursor-pointer"
      />

      <CSSTransition
        in={toggle}
        timeout={300}
        unmountOnExit
        class-names="alert"
      >
        <OpenNav handleToggle={handleToggle} />
      </CSSTransition>
    </nav>
  );
};
