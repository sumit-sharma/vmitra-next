import { useEffect, useState } from "react";

export function useWindowScrollPercentage() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setScrollPercent(scrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initialize on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollPercent;
}
