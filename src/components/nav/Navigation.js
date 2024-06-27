import { Navbar, Nav, Container } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import styles from "./nav.module.css";

/**
 *
 * The NavigationBar components represent the navigation of the website.
 * The function gets activeSection and if the user is in this section so the link color will be change.
 * returns the navigation of the website.
 */

function NavigationBar({ activeSection }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    const mobileWidth = 768;
    const isMobile = window.innerWidth <= mobileWidth;

    if (section) {
      if (isMobile) {
        const offset = 80;
        const sectionTop =
          section.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: sectionTop, behavior: "smooth" });
      } else {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Navbar expand="lg" className={`${styles["bg-light"]}`}>
      <Container className={styles["cont"]}>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className={styles["custom-toggler"]}
        />
        <Navbar.Collapse id="basic-navbar-nav" className={styles["links"]}>
          <Nav className={`me-auto ${isMobile ? "flex-column-reverse" : ""}`}>
            <Nav.Link
              onClick={() => scrollToSection("proj1245")}
              className={
                activeSection === "proj1245"
                  ? styles.activeLink
                  : styles.linkMargin
              }>
              Projects
            </Nav.Link>
            <Nav.Link
              onClick={() => scrollToSection("skill23")}
              className={
                activeSection === "skill23"
                  ? styles.activeLink
                  : styles.linkMargin
              }>
              Skills
            </Nav.Link>
            <Nav.Link
              onClick={() => scrollToSection("about23")}
              className={
                activeSection === "about23"
                  ? styles.activeLink
                  : styles.linkMargin
              }>
              About
            </Nav.Link>
            <Nav.Link onClick={scrollToTop} className={styles.linkMargin}>
              Home
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
