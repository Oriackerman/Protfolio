import React, { useState, useEffect } from "react";
import style from "./dynamic.module.css";

/**
 * DynamicText components represent the DynamicText below the H1
 * The useEffect is affected and works when subIndex or index or reverse are changing . 
 * 
 */


const texts = [
  "WordPress Developer",
  "React Developer",
  "FullStack Developer",
  "NodeJs Developer",
  "Php Developer",
  "JavaScript Developer",
];

function DynamicText() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1000);
    } else if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((index + 1) % texts.length);
    }

    const timeout = setTimeout(() => {
      setSubIndex((currentSubIndex) => currentSubIndex + (reverse ? -1 : 1));
    }, 120);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <div className={style["space22"]}>
      <h2 className={style.typing}>{texts[index].substring(0, subIndex)}</h2>
      <span className={style.cursor}>|</span>
    </div>
  );
}

export default DynamicText;
