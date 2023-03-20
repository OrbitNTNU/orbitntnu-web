import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React, { useEffect, useRef, useState } from "react";
import shortid from "shortid";
import {
  FaCircle,
  FaCircleNotch,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import "./Gallery.css";
import Modal from "./Modal";
import useOnScreen from "../../../utils/hooks/isInViewport";

interface IGallery {
  images: {
    asset: {
      gatsbyImageData: IGatsbyImageData;
    };
  }[];
}

const Gallery = ({ images }: IGallery) => {
  const [imgIdx, setImgIdx] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [moveable, setMoveable] = useState(true);

  const galleryEl = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(galleryEl);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setImgIdx((prevImgIdx) => {
          if (moveable) {
            if (prevImgIdx === images.length - 1) return 0;
            else return prevImgIdx + 1;
          } else return prevImgIdx;
        });
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [imgIdx, moveable, isVisible]);

  const handleRightClick = () => {
    if (imgIdx === images.length - 1) {
      setImgIdx(0);
    } else {
      setImgIdx(imgIdx + 1);
    }
  };

  const handleLeftClick = () => {
    if (imgIdx === 0) {
      setImgIdx(images.length - 1);
    } else {
      setImgIdx(imgIdx - 1);
    }
  };

  const handleClose = () => {
    setShowModal((current: boolean) => false);
    setMoveable((current: boolean) => true);
  };

  const circles = images.map((_, idx) => {
    if (imgIdx === idx) {
      return (
        <FaCircle key={`circle:${idx}`} className="text-xs cursor-pointer" />
      );
    }
    return (
      <FaCircleNotch
        key={`circle:${idx}`}
        className="text-xs cursor-pointer"
        onClick={() => setImgIdx(idx)}
      />
    );
  });

  const renderedImages = images
    ? images.map((image, idx) => {
        return (
          <li
            key={shortid.generate()}
            className="animate-click flex justify-center"
            onDoubleClick={() => {
              setShowModal((current: boolean) => true);
              setMoveable((current: boolean) => false);
            }}
          >
            <GatsbyImage
              className="w-full md:w-4/5 cursor-pointer"
              image={image.asset.gatsbyImageData}
              alt={`image ${idx + 1}`}
            />
          </li>
        );
      })
    : null;

  const modal = (
    <Modal className="flex justify-center" onClose={handleClose}>
      <GatsbyImage
        className="w-auto md:max-w-3xl"
        image={images[imgIdx].asset.gatsbyImageData}
        alt={`image ${imgIdx + 1}`}
      />
    </Modal>
  );

  const renderedGallery = (
    <div className="flex mt-10">
      <button className="md:px-8" onClick={handleLeftClick}>
        <FaChevronLeft className="text-2xl" />
      </button>
      <ul className="h-full">
        {renderedImages ? renderedImages[imgIdx] : null}
        <div className="flex justify-center gap-3 py-2">{circles}</div>
      </ul>
      <button className="md:px-8" onClick={handleRightClick}>
        <FaChevronRight className="text-2xl" />
      </button>
      {showModal && modal}
    </div>
  );

  return <div ref={galleryEl}>{isVisible && renderedGallery}</div>;
};

export default Gallery;
