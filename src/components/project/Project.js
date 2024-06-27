import React, { useEffect, useState, useRef } from "react";
import Modal from "../modal/Modal";
import style from "./project.module.css";
import { Button } from "@mui/material";
import data2 from "./data"; 

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [openProjectId, setOpenProjectId] = useState(null);
  const projectRefs = useRef(new Array());

  const openModal = (id) => setOpenProjectId(id);
  const closeModal = () => setOpenProjectId(null);

  
  useEffect(() => {
    setProjects(data2); 
    projectRefs.current = projectRefs.current.slice(0, data2.length);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(style.visible);
          }
        });
      },
      { threshold: 0.2 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [projects]); 

  return (
    <div>
      <h2 className={style["title2"]}>Projects</h2>
      <div className={style["projectsContainer"]}>
        {projects.map((project, index) => (
          <div
            key={project._id}
            className={`${style.project} ${
              index % 2 === 0 ? style.even : style.odd
            }`}>
            <div className={style["projectImageContainer"]}>
              <img
                ref={(el) => (projectRefs.current[index] = el)}
                src={project.imageUrls[0]}
                alt={project.name}
                className={`${style.projectImage} ${
                  index === 0 ? style.cont34 : style.odd
                }`}
              />
            </div>
            <div className={style["projectText"]}>
              <h3>{project.name}</h3>
              <p>{project.shortDescription}</p>
              <p className={style["tech"]}>Technology: {project.technology}</p>
              <Button
                variant="outlined"
                onClick={() => openModal(project._id)}
                className={style["button-30"]}>
                See More
              </Button>
              {openProjectId === project._id && (
                <Modal
                  isOpen={Boolean(openProjectId)}
                  onClose={closeModal}
                  title={project.name}
                  imageUrls={project.imageUrls}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
