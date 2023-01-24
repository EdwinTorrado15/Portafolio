import { Briefcase, Headset, Medal } from "phosphor-react";
import React from "react";

const Info = () => {
  return (
    <div className="about-info grid">
      <div className="about-box">
        <i>
          <Medal className="about-icon" />
        </i>
        <h3 className="about-title">Experiencia</h3>
        <span className="about-subtitle">1 año trabajando (Freelancer)</span>
      </div>
      <div className="about-box">
        <i>
          <Briefcase className="about-icon" />
        </i>
        <h3 className="about-title">Completados</h3>
        <span className="about-subtitle">5 Proyectos</span>
      </div>
      <div className="about-box">
        <Headset className="about-icon" />
        <h3 className="about-title">Atención</h3>
        <span className="about-subtitle">Disponible 24/7</span>
      </div>
    </div>
  );
};

export default Info;
