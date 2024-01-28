import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { OpenNav } from "./OpenNav";
import { FaBars } from "@react-icons/all-files/fa/FaBars";
import { Link } from "gatsby";
import { CSSTransition } from "react-transition-group";
import "./navbar.css";
import { isBrowser } from "../../utils/isBrowser";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleToggle = () => {
    setToggle(!toggle);

    toggle
      ? (document.body.style.overflow = "unset")
      : (document.body.style.overflow = "hidden");
  };

  const satelliteLinks = [
    { name: "SELFIESAT", url: "/selfiesat" },
    { name: "FRAMSAT", url: "/framsat" },
    { name: "BIOSAT", url: "/biosat" },
    { name: "SUBORBITAL", url: "/suborbital" },
  ];

  const links = [
    { name: "WHO ARE WE", url: "/about" },
    // { name: "WHY ORBIT", url: "/" },
  ];

  const getSelectedStatus = (url: string) => {
    return isBrowser() && (window.location.pathname === url || window.location.pathname === url + "/") ? "border-white" : "border-transparent";
  };

  const isSatelliteSelected = (satelliteLinks: Record<string, string>[]) => {
    return isBrowser() && satelliteLinks.some(link => (
      window.location.pathname === link.url ||
      window.location.pathname === link.url + "/"
    )) ? "border-white" : "border-transparent";
  };

  return (
    <nav className="text-white p-2 mb-2 w-full z-50 absolute top-0 left-0">
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
            <li
              key={link.name}
              className={`inline-block border-b-2 mr-4 hover:border-yellow-500 ${getSelectedStatus(
                link.url
              )}`}
            >
              {link.name}
            </li>
          </Link>
        ))}
      </ul>

      <ul className="invisible inline-block mt-5 md:visible mr-4">
        <button onClick={toggleDropdown}>
          <li
              className={`inline-block border-b-2 hover:border-yellow-500 ${isDropdownOpen ? "border-yellow-500" : isSatelliteSelected(
                satelliteLinks
              )}`}
            >
              {"OUR SATELLITES"}
            </li>
        </button>
        {isDropdownOpen && (
          <ul className="absolute mt-2 bg-black border rounded-md shadow-lg">
            {satelliteLinks.map((link) => (
              <li
                key={link.name}
                className="block px-4 py-2 text-sm text-white cursor-pointer"
              >
                <Link key={link.name} to={link.url}>
                  <li
                    className={`inline-block border-b-2 hover:border-green-500 ${getSelectedStatus(
                      link.url
                    )}`}
                  >
                    {link.name}
                  </li>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </ul>

      <ul className="invisible inline-block mt-5 md:visible">
        <Link
          to="/join"
          className={`inline-block border-b-2 hover:border-yellow-500 ${getSelectedStatus(
            "/join"
          )}`}
        >
          JOIN
        </Link>
      </ul>

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
