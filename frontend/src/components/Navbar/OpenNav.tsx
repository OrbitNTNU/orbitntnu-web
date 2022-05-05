import React from "react";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";
import { graphql, Link, useStaticQuery } from "gatsby";

interface OpenNavProps {
  handleToggle: () => void;
}

export const OpenNav = ({ handleToggle }: OpenNavProps) => {
  const { sanityFooter } = useStaticQuery(graphql`
    query OpenNavComponentQuery {
      sanityFooter {
        missionLinks {
          title
          url
        }
        otherLinks {
          title
          url
        }
      }
    }
  `);

  const links = [...sanityFooter.missionLinks, ...sanityFooter.otherLinks];

  const getSelectedStatus = (url: string) => {
    return window.location.pathname === url ? "border-b-2" : "";
  };

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
          <li className="mb-2 text-xl">
            <Link
              to="/"
              className={`font-thin ${getSelectedStatus("/")}`}
              onClick={handleToggle}
            >
              Home
            </Link>
          </li>
          {links.map((link) => {
            if (link.url !== "/") {
              return (
                <li key={link.url} className="mb-2 text-xl">
                  <Link
                    to={link.url}
                    className={`font-thin ${getSelectedStatus(link.url)}`}
                    onClick={handleToggle}
                  >
                    {link.title}
                  </Link>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
};
