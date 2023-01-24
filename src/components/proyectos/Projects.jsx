import { ArrowRight } from "phosphor-react";
import { cardProject } from "../../data/data";

const Projects = () => {
  return (
    <section className="projects section" id="proyectos">
      <h1 className="section-title">Proyectos</h1>
      <span className="section-subtitle">Mis proyectos hasta el momento</span>

      <div className="projects-container container grid">
        {cardProject.map((card) => (
          <>
            <div className="projects-content">
              <img src={card.image} alt="Foto" className="projects-image" />
              <div className="projects-data">
                <h3 className="projects-card-title">{card.name}</h3>
                <a href={card.link} target="_blank" className="projects-button">
                  Ver repositorio
                  <ArrowRight className="projects-button-icon" />
                </a>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default Projects;
