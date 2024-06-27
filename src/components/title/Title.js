import React, { useState, useEffect } from "react";
import style from "./title.module.css";
import DynamicText from "../dynamic/DymanicText";
function Title() {
 

  return (
    <div>
      <h1>Or Ackerman</h1>
      <DynamicText />
    </div>
  );
}

export default Title;
