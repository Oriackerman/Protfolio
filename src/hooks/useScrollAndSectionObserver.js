// useScrollAndSectionObserver.js for Scrolling nav
import { useEffect, useState } from "react";

/**
 *
 *The UseScrollAndSectionObserver hook is used to activate links during scrolling and to change the background color of the sticky header.
 */

const useScrollAndSectionObserver = (setActiveSection) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            console.log(entry);
          }
        });
      },
      { rootMargin: "-15% 0px -25% 0px", threshold: 0.1 }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [setActiveSection]);

  return isScrolled;
};

export default useScrollAndSectionObserver;
