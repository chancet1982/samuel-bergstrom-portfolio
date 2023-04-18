import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const useIsTouchingTop = (ref) => {
  const [isTouchingTop, setIsTouchingTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const testIfTouchingTop = () => {
      const { top, bottom } = ref.current.getBoundingClientRect();
      setIsTouchingTop(top <= 0 && bottom >= 0);
    };

    testIfTouchingTop();

    window.addEventListener("scroll", testIfTouchingTop);

    return () => {
      window.removeEventListener("scroll", testIfTouchingTop);
    };
  }, [location, ref]);

  return isTouchingTop;
};

export default useIsTouchingTop;
