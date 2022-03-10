import React from "react";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { Layout } from "../templates/Layout";

const AboutUs = () => (
  <Layout>
    <Header
      title="Orbit NTNU"
      name="About Us"
      text="Orbit is run with both technical and non-technical support from our sponsors. 
      We are very grateful for the support we receive, and are always looking for new companies 
      to work with. Want to be a part of our journey? Send an email to cmo@orbitntnu.com!"
    />
  </Layout>
);

export default AboutUs;
