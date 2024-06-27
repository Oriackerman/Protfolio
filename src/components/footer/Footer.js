import React from "react";
import style from "./footer.module.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

/**
 * 
 * The footer components represent the footer in the website.
 */

const Footer = () => (
  <footer>
    <p className={style["bak"]}>
      All rights reserved to Or Ackerman &#169;
      <a
        href="https://www.linkedin.com/in/orackerman1997/"
        target="_blank"
        className={style["linkd"]}
        rel="noreferrer">
        <LinkedInIcon />
      </a>
    </p>
  </footer>
);

export default Footer;
