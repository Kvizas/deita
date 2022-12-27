import { useState, useEffect, useRef } from "react";

export default function useComponentVisible() {
  const [isComponentVisible, setIsComponentVisible] = useState(false);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside, !isComponentVisible);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside,
        !isComponentVisible
      );
    };
  });

  return { ref, isComponentVisible, setIsComponentVisible };
}