import React from "react";
// import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { Button } from "../Button";
import { Link } from "gatsby";
import { FadeInSection } from "../FadeInSection";

function blogSection(props) {
  return (
    <div className="name">
      {/* <img
        src="C:\Users\tobia\OneDrive\Dokumenter\react course\my-first-react-app\src\imgages\ferdinandsmily.png"
        alt="blog image"
        height="42"
        width="42"
      ></img> */}
      {/* <h3>{props.image}</h3> */}

      <GatsbyImage
        image={props.image}
        alt="Image"
        className="mb-8 md:my-16"
        title={props.title}
      />
      <h3>{props.title}</h3>
    </div>
  );
}

export default blogSection;
