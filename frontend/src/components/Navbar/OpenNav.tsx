import React from "react";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";
import { Link } from "gatsby";

interface OpenNavProps {
  handleToggle: () => void;
}

export const OpenNav = ({ handleToggle }: OpenNavProps) => {
  const links = [
    { text: "Home", slug: "/" },
    { text: "SelfieSat-1", slug: "/selfiesat" },
    { text: "FramSat-1", slug: "/framsat" },
    { text: "SubOrbital", slug: "/suborbital" },
    { text: "Teams", slug: "/teams" },
    { text: "About Us", slug: "/about" },
    { text: "Sponsors", slug: "/sponsors" },
    { text: "Contact", slug: "/contact" },
    { text: "Join", slug: "/join" },
  ];

  const getSelectedStatus = (slug: string) =>
    window.location.pathname === slug ? "border-b-2" : "";

  return (
    <div>
      <div
        className="absolute w-full h-screen top-0 right-0 bg-black opacity-30 z-10"
        onClick={handleToggle}
      />

      <div className="absolute w-1/2 md:w-2/6 h-screen right-0 top-0 bg-black opacity-100 text-right p-8 z-10">
        <FaTimes
          onClick={handleToggle}
          className="absolute top-8 right-8 cursor-pointer"
        />
        <ul className="pt-16">
          {links.map((link) => (
            <li key={link.slug} className="mb-2 text-xl">
              <Link
                to={link.slug}
                className={`font-thin ${getSelectedStatus(link.slug)}`}
                onClick={handleToggle}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
