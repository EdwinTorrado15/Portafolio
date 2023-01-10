import { ArrowCircleDown } from "phosphor-react";
import React from "react";

const ScrollDown = () => {
  return (
    <div className="home-scroll">
      <a href="#about" className="home-scroll-button button-flex">
        <ArrowCircleDown className="wheel"/>
        <span className="home-scroll-name">Desplazate hacia abajo</span>
      </a>
    </div>
  );
};

export default ScrollDown;
