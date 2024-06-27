import React from "react";
import style from "./button.module.css";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ContactButton from "../contact/Contact";

/**
 * 
 * The button components represent the button of the CV.
 * returns the button of the CV and the button of the form.
 */

function Button() {
  return (
    <div className="d-flex justify-content-start mt-3">
      <a
        href="https://drive.google.com/file/d/1DdwG4FAtEgVpWD6gJBWmxYDD95G0Bo9u/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer">
        <button type="button" className={style["custom-button"]}>
          View CV <ZoomInIcon />
        </button>
      </a>
      <ContactButton />
    </div>
  );
}

export default Button;
