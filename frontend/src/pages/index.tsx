import * as React from "react";
import { graphql } from "gatsby";
import { Layout } from "../templates/Layout";
import { LandingHero } from "../components/LandingHero";
import { AboutUsBanner } from "../components/AboutUsBanner";
import { BannerLinkList } from "../components/BannerLinkList";

const IndexPage = ({ data, errors }) => (
  <Layout>
    <LandingHero />
    <AboutUsBanner />
    <BannerLinkList />
  </Layout>
);

export default IndexPage;
