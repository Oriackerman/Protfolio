// MainContent.js
import React from "react";
import Title from "../title/Title";
import Button from "../button/Button";
import About from "../about/About";
import SkillsList from "../skillList/SkillsList";
import style from "./maincontent.module.css";
import Project from "../project/Project";

/**
 *
 * The MainContent represent the main of the website.
 */

const MainContent = () => (
  <main>
    <div
      id="particles-container"
      style={{ position: "absolute", width: "100%", height: "95%" }}></div>
    <section className={style["space223"]}>
      <Title />
      <Button />
    </section>
    <section className={style["sec33"]} id="about23">
      <About />
    </section>
    <section className={style["skill22"]} id="skill23">
      <SkillsList />
    </section>
    <section className={style["proj"]} id="proj1245">
      <Project />
    </section>
  </main>
);

export default MainContent;
