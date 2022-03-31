import React, { useEffect } from "react";
import { Layout } from "../templates/Layout";
import { Header } from "../components/Header";
import firebase from "gatsby-plugin-firebase";

const NotFoundPage = () => {
  useEffect(() => {
    if (!firebase) {
      return;
    }

    firebase.analytics().logEvent("visited_404_page");
  }, [firebase]);

  return (
    <Layout>
      <Header
        title="Orbit NTNU"
        name="404"
        text="We could not find the page you were looking for."
      />
    </Layout>
  );
};
export default NotFoundPage;
