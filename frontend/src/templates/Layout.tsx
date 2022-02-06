import React from 'react';
import Helmet from 'react-helmet';
import favicon from '../images/orbit-logo-small.png';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

export const Layout = ({ children }) => (
  <>
    <Helmet>
      <title>Orbit NTNU</title>
      <meta name='description' content='Orbit NTNU' />
      <meta name='keywords' content='ntnu, cubesat, orbit' />
      <meta name='og:title' content='orbitntnu.com' />
      <meta name='og:type' content='website' />
      <meta name='og:description' content='Student satellite organization' />
      <meta name='og:locale' content='en_US' />
      <meta name='og:url' content='https://orbitntnu.com' />
      <link rel='canoical' href='https://orbitntnu.com' />
      <link rel='icon' href={favicon} />
    </Helmet>
    <Navbar />
    {children}
    <Footer />
  </>
);
