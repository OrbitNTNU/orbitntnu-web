import React, { useEffect } from "react";
import { Header } from "../components/Header";
import { Layout } from "../templates/Layout";
import firebase from "gatsby-plugin-firebase";
import { JoinCard } from "../components/JoinCard";

const Join = () => {
  useEffect(() => {
    if (!firebase) {
      return;
    }

    firebase.analytics().logEvent("visited_join_page");
  }, [firebase]);

  return (
    <Layout>
      <Header
        title="Orbit NTNU"
        name="Join"
        text="Orbit is run with both technical and non-technical support from our sponsors. 
      We are very grateful for the support we receive, and are always looking for new companies 
      to work with. Want to be a part of our journey? Send an email to cmo@orbitntnu.com!"
      />
      <h2 className="mt-16 text-2xl text-center md:text-3xl">
        Available Positions
      </h2>
      <div className="md:flex md:flex-wrap justify-center">
        <JoinCard
          title="Social Media Manager"
          text="Do you have a passion for communication and interaction through social medias, and want first-hand experience with managing an organization's image in the new Norwegian space race? Orbit is now looking for someone who knows their way around medias such as Snapchat, Instagram and TikTok, and wishes to develop their communication skills further. As our Social Media Manager at orbit you will get to join in shaping the image of a quickly growing organization as a part of our marketing team."
          applyLink="mailto:mail@isaks.io"
        />
        <JoinCard
          title="Film and Photo Producer"
          text="Do you want to take part in the team covering Europe's first orbital launch in world history? Do you want to gain hands-on experience with photographing and filming space flight hardware, and support NTNU's largest technical student organization on its journey towards space? Orbit NTNU is now looking for another Film and Photo Producer to join our marketing team this spring."
          applyLink="mailto:mail@isaks.io"
        />
      </div>
    </Layout>
  );
};

export default Join;
