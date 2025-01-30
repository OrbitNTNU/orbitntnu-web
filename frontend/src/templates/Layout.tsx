import React from "react";
import Helmet from "react-helmet";
import favicon from "../images/orbit-logo-small.png";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { graphql, useStaticQuery } from "gatsby";

export const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: "en"
        }}
      >
        <title>Orbit NTNU</title>
        <meta name="description" content="Orbit NTNU" />
        <meta name="keywords" content="ntnu, cubesat, orbit" />
        <meta name="og:title" content="orbitntnu.com" />
        <meta name="og:type" content="website" />
        <meta name="og:description" content="Student satellite organization" />
        <meta name="og:locale" content="en_US" />
        <meta name="og:url" content="https://orbitntnu.com" />
        <meta name="google-site-verification" content="MiNvJKNigehQ-p3UdBvBr5b92q8YGJgmB1ij5WJq-D8" />
        <link rel="canoical" href="https://orbitntnu.com" />
        <link rel="icon" href={favicon} />
      </Helmet>
      <Navbar />
      <div>
        {children}
        <Footer />
      </div>
    </>
  );
};
