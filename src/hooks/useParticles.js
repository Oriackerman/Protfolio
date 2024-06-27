import React, { useEffect } from "react";
import { particlesJS } from "particles.js";


/**
*The useParticles hook is used to create the star effect in the background of the home section.
*/

const useParticles = () => {
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS("particles-container", {
        particles: {
          number: {
            value: 70,
          },
          color: {
            value: "#fff",
          },
          shape: {
            type: "star",
          },
          opacity: {
            value: 0.3,
            random: false,
            anim: {
              enable: false,
            },
          },
          size: {
            value: 4,
            random: true,
            anim: {
              enable: false,
            },
          },
          line_linked: {
            enable: false,
            distance: 120,
            color: "#ffffff",
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
          },
        },
        modes: {
          repulse: {
            distance: 100,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
        },
        retina_detect: true,
      });
    }
  }, []);
};

export default useParticles;
