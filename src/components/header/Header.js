import React from "react";
import NavigationBar from "../nav/Navigation";
import style from "./header.module.css";
/**
 * 
 * The Header of the website
 */

const Header = ({ isScrolled, activeSection }) => (
  <header
    className={`${style.header} ${isScrolled ? style["header-scrolled"] : ""}`}>
    <NavigationBar activeSection={activeSection} />
  </header>
);

export default Header;
