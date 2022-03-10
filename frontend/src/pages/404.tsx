import React from "react";
import { Layout } from "../templates/Layout";
import { Header } from "../components/Header";

const NotFoundPage = () => (
  <Layout>
    <Header
      title="Orbit NTNU"
      name="404"
      text="We could not find the page you were looking for."
    />
  </Layout>
);

export default NotFoundPage;
