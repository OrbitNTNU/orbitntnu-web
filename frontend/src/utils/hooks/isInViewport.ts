import { useEffect, useMemo, useState } from "react";

const useOnScreen = (ref: React.RefObject<HTMLElement>): boolean => {
  const [isIntersecting, setIntersecting] = useState(false);

  let observer: IntersectionObserver | null = null;
  observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIntersecting(entry.isIntersecting)
      ),
    [ref]
  );

  useEffect(() => {
    observer?.observe(ref.current as HTMLElement);
    return () => observer?.disconnect();
  }, []);

  return isIntersecting;
};

export default useOnScreen;
