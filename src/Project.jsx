import React from "react";
import ProImage from "./assets/pro.jpeg";
import AlambabuuImage from "./assets/alambabuu.avif";
import ERPImage from "./assets/ERP.jpeg";
import ChatAppImage from "./assets/Excel.png";
const projects = [
  {
    name: "Portfolio Website",
    image: ProImage,
    link: "https://react-alam.vercel.app/",
  },
  {
    name: "CollegeERP",
    image: ERPImage,
    link: "https://alam-erp-1.onrender.com",
  },
  {
    name: "Electroserve",
    image: AlambabuuImage,
    link: "https://alauddinalam.github.io/ESP/",
  },
  {
    name: "Sales Dashboard",
    image: ChatAppImage,
    link: "https://1drv.ms/x/c/C693C33045802DAC/IQC9EDafTc4ARZrmVfwhfGZSAa6We8bAHBsN3oqnJkSBHHM?e=cLkuAB",
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