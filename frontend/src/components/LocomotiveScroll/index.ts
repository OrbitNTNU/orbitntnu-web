import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { scroll } from "../../utils/scroll";

export const Scroll = (callbacks) => {
  useEffect(() => {
    let locomotiveScroll;
    locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector(scroll.container),
      ...scroll.options,
    });
    locomotiveScroll.update();

    window.scroll = locomotiveScroll;

    locomotiveScroll.on("scroll", (func) => {
      document.documentElement.setAttribute("data-direction", func.direction);
    });

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, [callbacks]);

  return null;
};
