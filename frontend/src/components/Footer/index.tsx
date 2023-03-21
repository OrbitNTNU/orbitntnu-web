import React from "react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { graphql, Link, useStaticQuery } from "gatsby";

export const Footer = () => {
  const { sanityFooter } = useStaticQuery(graphql`
    query FooterComponentQuery {
      sanityFooter {
        title
        adress
        room
        postal
        email
        otherLinks {
          title
          url
        }
        missionLinks {
          title
          url
        }
        soMeLinks {
          url
          title
          image {
            asset {
              gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
            }
          }
        }
      }
    }
  `);

  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="bg-gray-900 p-8 mt-8 md:h-80">
        <div className="relative max-w-4xl m-auto">
          <Link to="/">
            <StaticImage
              src="../../images/orbitimage.png"
              alt="Orbit"
              className="w-24 mb-4"
              placeholder="none"
            />
          </Link>

          <div className="mb-4 text-sm md:text-base">
            <p className="font-bold">Orbit NTNU</p>
            <p>{sanityFooter.email}</p>
            <p>{sanityFooter.adress}</p>
            <p>{sanityFooter.room}</p>
            <p>{sanityFooter.postal}</p>
          </div>

          <div className="flex md:absolute md:top-8 md:right-0">
            <ul className="mr-16">
              {sanityFooter.otherLinks.map((link) => (
                <li key={link.title} className="py-2">
                  <Link to={link.url} className="hover:text-yellow-500">{link.title}</Link>
                </li>
              ))}
            </ul>

            <ul>
              {sanityFooter.missionLinks.map((link) => (
                <li key={link.title} className="py-2 uppercase">
                  <Link to={link.url} className="hover:text-yellow-500">{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 py-8 px-4 sm:px-8">
        <div className="max-w-4xl relative m-auto">
          <p>Orbit NTNU © {year}</p>
          <div className="flex absolute -top-1 right-4 sm:gap-4">
            {sanityFooter.soMeLinks.map((link) => (
              <a href={link.url} key={link.title} className="flex flex-col justify-center align-middle w-10 h-10">
                <GatsbyImage
                  image={link.image.asset.gatsbyImageData}
                  alt="SoMe"
                  className="w-8 ml-2 hover:w-9"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
