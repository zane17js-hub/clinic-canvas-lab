// src/components/ScrollToTop.jsx

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // This scrolls the window to the top-left corner (0, 0)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // ✨ This creates the smooth transition effect!
    });

    // The effect runs every time the pathname (route) changes
  }, [pathname]);

  // This component doesn't render anything visually
  return null;
};

export default ScrollToTop;
