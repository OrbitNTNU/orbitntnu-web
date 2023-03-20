import { useEffect, useMemo, useState } from "react";

const useOnScreen = (ref: React.RefObject<HTMLElement>): boolean => {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIntersecting(entry.isIntersecting)
      ),
    [ref]
  );

  useEffect(() => {
    observer.observe(ref.current as Element);
    return () => observer.disconnect();
  }, []);

  return isIntersecting;
};

export default useOnScreen;
