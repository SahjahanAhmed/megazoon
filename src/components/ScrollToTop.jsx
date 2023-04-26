import { document } from "postcss";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};
export const ScrollToBottom = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 420);
  }, [pathname]);
};

export default ScrollToTop;
