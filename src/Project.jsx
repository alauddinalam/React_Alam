import React from "react";
import ProImage from "./assets/pro.jpeg";
import AlambabuuImage from "./assets/alambabuu.avif";
import ERPImage from "./assets/ERP.jpeg";
import ChatAppImage from "./assets/alam02.jpg";
const projects = [
  {
    name: "Portfolio Website",
    image: ProImage,
    link: "https://react-alam.versal.app/",
  },
  {
    name: "CollegeERP",
    image: ERPImage,
    link: "https://alauddinalam.github.io/College-ERP/",
  },
  {
    name: "Electroserve",
    image: AlambabuuImage,
    link: "https://alauddinalam.github.io/ESP/",
  },
  {
    name: "Chat App",
    image: ChatAppImage,
    link: "https://your-chatapp-link.com",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Some of my recent work
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img
                src={project.image}
                alt={project.name}
                className="project-image"
              />
              <h3 className="project-title">{project.name}</h3>
              <div className="project-actions">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-button btn"
                >
                  View
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;