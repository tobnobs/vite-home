import React, { useEffect, useState } from "react";

import down from "./down.avif";
import up from "./up.avif";
import styles from "./Mistress.module.scss";

const Mistress = () => {
  const [isTouched, setTouched] = useState(false);

  useEffect(() => {
    const handleKeyDown = () => {
      setTouched(true);
    };
    const handleKeyUp = () => {
      setTouched(false);
    };

    const handleMouseDown = () => {
      setTouched(true);
    };
    const handleMouseUp = () => {
      setTouched(false);
    };

    const handleTouchStart = () => {
      setTouched(true);
    };
    const handleTouchEnd = () => {
      setTouched(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  });

  return (
    <img
      className={styles.mistress}
      src={isTouched ? up : down}
    />
  );
};

export default Mistress;
