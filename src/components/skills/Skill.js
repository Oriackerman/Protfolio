import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import styles from "./skill.module.css";

/**
 * 
 * Skill components represent the single skill . 
 * The function gets the name and the rating of the skill.
 * 
 * @returns 
 */


function Skill({ name, rating }) {
  return (
    <Box
      display="flex"
      alignItems="center"
      className={`${styles["spa22"]}`}>
      <Typography component="legend" className={styles["spa13"]}>
        {name}
      </Typography>
      <Rating name="read-only" value={rating} readOnly />
    </Box>
  );
}

export default Skill;
