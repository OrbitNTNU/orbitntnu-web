import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React, { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import './style.css';
import {
  FaCircle,
  FaCircleNotch,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";


interface Section {
  header: string;
  text: string;
  image: {
    asset: {
      gatsbyImageData: IGatsbyImageData;
    }
  }
}

interface InfoGallery {
  section: Section[];
}


export const InfoSection = ({ section }: InfoGallery) => {
  const [imgIdx, setImgIdx] = useState(0);
  const [showMessage, setShowMessage] = useState(0);
  const nodeRef = useRef(null);

  const handleRightClick = () => {
    if (imgIdx === section.length - 1) {
      setImgIdx(0);
      setShowMessage(0);
    } else {
      setImgIdx(imgIdx + 1);
      setShowMessage(imgIdx + 1)
    }
  };

  const handleLeftClick = () => {
    if (imgIdx === 0) {
      setImgIdx(section.length - 1);
      setShowMessage(section.length - 1)
    } else {
      setImgIdx(imgIdx - 1);
      setShowMessage(imgIdx - 1);
    }
  };

  const handleCircleClick = (idx) => {
    setImgIdx(idx);
    setShowMessage(idx)
  }


  const circles = section.map((_, idx) => {
    if (imgIdx === idx) {
      return (
        <FaCircle key={`circle:${idx}`} className="text-xs cursor-pointer" />
      );
    }
    return (
      <FaCircleNotch
        key={`circle:${idx}`}
        className="text-xs cursor-pointer"
        onClick={() => handleCircleClick(idx)}
      />
    );
  });

  const renderedSections = section
    ? section.map((_, idx) => {
      return (
        <div className="md:flex md:gap-8 md:basis-0 mt-16 px-8 md:max-w-4xl transition-all duration-500">
          <div>
            <h2 className="text-2xl md:text-4xl">{section[imgIdx].header}</h2>
            <p className="md:text-lg">{section[imgIdx].text}</p>
          </div>
          <GatsbyImage
            className="mt-2 mb-8 md:mt-0 md:mb-0"
            image={section[imgIdx].image.asset.gatsbyImageData}
            alt={`image ${idx + 1}`}
          />
        </div>
      );
    })
    : null;

  const renderedInfoGallery = (
    <div className="flex mt-10">
      <button className="md:px-8" onClick={handleLeftClick}>
        <FaChevronLeft className="text-2xl" />
      </button>
      <ul className="h-full">
        <CSSTransition
          in={(showMessage == imgIdx)}
          nodeRef={nodeRef}
          timeout={300}
          classNames="alert"
          unmountOnExit
        >
          {renderedSections ? renderedSections[imgIdx] : null}
        </CSSTransition>
        <div className="flex justify-center gap-3 py-2">{circles}</div>
      </ul>
      <button className="md:px-8" onClick={handleRightClick}>
        <FaChevronRight className="text-2xl" />
      </button>
    </div>
  );

  return renderedInfoGallery;
};

export default InfoSection;
