import { useEffect, useMemo, useState } from "react";

const useOnScreen = (ref: React.RefObject<HTMLElement>): boolean => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting)
      ),
    [ref]
  );

  useEffect(() => {
    observer.observe(ref.current as HTMLElement);
    return () => observer.disconnect();
  }, []);

  return isIntersecting;
};

export default useOnScreen;
