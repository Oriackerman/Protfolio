// About.js
import React, { useRef, useEffect, useState } from "react";
import style from "./about.module.css";
import Avatar from "@mui/material/Avatar";
import avatarImage from "../../img/avatar333.jpg";

/**
 *
 * The about components represent the about section in the website.
 * The IntersectionObserver is used to trigger the animation based on the user's scroll position.
 * returns the about information.
 */

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={style["about-container"]}>
      <h2 className={style["about-title"]} id="abouts">
        About
      </h2>
      <div
        ref={aboutRef}
        className={`${style["about-content"]} ${
          isVisible ? style.visible : ""
        }`}>
        <div className={style["con2"]}>
          <Avatar
            alt="Remy Sharp"
            src={avatarImage}
            sx={{ width: 250, height: 250 }}
            className={style["pad22"]}
          />

          <div className={style["about-text"]}>
            <h3>About my self</h3>
            <p>
              My name is Or Ackerman, and I have completed my studies in
              Practical Software Engineering. As a web developer, I create
              advanced websites using WordPress and React, combining design with
              functionality. I work with technologies such as PHP, NodeJs,
              JavaScript, jQuery, MySQL, MongoDB and use plugins such as ACF and
              CF7 to enhance functionality. Additionally, I specialize in bug
              fixes, version upgrades, and optimization for Google. With a
              strong motivation to succeed, I tackle technological challenges
              creatively. Though early in my career with a year of experience,
              I'm committed to learning and growing. I look forward to bringing
              my skills to every project I undertake.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
