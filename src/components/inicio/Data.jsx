import { PaperPlaneTilt } from "phosphor-react";
import React from "react";

const Data = () => {
  return (
    <div className="home-data">
      <h1 className="home-title">Edwin Torrado</h1>
      <h3 className="home-subtitle">Desarrollador FullStack JS</h3>
      <p className="home-description">
        Soy un joven apasionado y dedicado por el mundo de la tecnologia y el
        desarrollo web.
      </p>
      <a href="#contact" className="button button-flex">
        Conctactame <PaperPlaneTilt className="button-icon"/>
      </a>
    </div>
  );
};

export default Data;
