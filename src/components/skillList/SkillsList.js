import React, { useEffect, useRef, useState } from "react";
import Grid from "@mui/material/Grid";
import Skill from "../skills/Skill";
import style from "./skillList.module.css";
import { v4 as uuidv4 } from "uuid";

/**
 * SkillsList components represent the Skill item below the about.
 * IntersectionObserver is used for the animation to know where the user is to the animation start .
 *Uuidv4 is for a unique key for each item.
 * @returns list of skills
 */

const skills = [
  { name: "WordPress", rating: 5 },
  { name: "NodeJs", rating: 4 },
  { name: "React", rating: 5 },
  { name: "MongoDB", rating: 4 },
  { name: "JavaScript", rating: 5 },
  { name: "SQL", rating: 4 },
  { name: "PHP", rating: 4 },
  { name: "Python", rating: 4 },
];

function SkillsList() {
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
    <div ref={aboutRef} className={`${style["skills-container"]}`}>
      <h2 className={style["skills-title"]}>Skills</h2>
      <Grid
        container
        spacing={5}
        className={`${style["skill224"]}  ${isVisible ? style.visible : ""}`}>
        {skills.map((skill) => (
          <Grid item xs={5} key={uuidv4()}>
            <Skill name={skill.name} rating={skill.rating} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default SkillsList;
