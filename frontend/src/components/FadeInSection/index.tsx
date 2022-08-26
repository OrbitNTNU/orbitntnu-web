import React, { useEffect, useRef, useState } from "react";
import "./FadeInSection.css";

interface FadeInSectionProps {
  dissapear?: boolean;
  children?: React.ReactNode;
}

export const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  dissapear,
}) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(
        (entry) =>
          (entry.isIntersecting || dissapear) &&
          setVisible(entry.isIntersecting)
      );
    });
    observer.observe(domRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {children}
    </div>
  );
};
