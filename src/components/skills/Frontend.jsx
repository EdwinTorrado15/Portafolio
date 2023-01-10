import { CircleWavyCheck } from "phosphor-react";
import React from "react";

const Frontend = () => {
  return (
    <div className="skills-content">
      <h3 className="skills-title">Desarrollador Frontend</h3>
      <div className="skills-box">
        <div className="skills-group">
          <div className="skills-data">
            <CircleWavyCheck className="skills-icon"/>
            <h3 className="skills-name">HTML</h3>
          </div>
          <div className="skills-data">
            <CircleWavyCheck className="skills-icon"/>
            <h3 className="skills-name">CSS</h3>
          </div>
          <div className="skills-data">
            <CircleWavyCheck className="skills-icon"/>
            <h3 className="skills-name">JavaScript</h3>
          </div>
        </div>

        <div className="skills-group">
          <div className="skills-data">
            <CircleWavyCheck className="skills-icon"/>
            <h3 className="skills-name">TailwindCSS</h3>
          </div>
          <div className="skills-data">
            <CircleWavyCheck className="skills-icon"/>
            <h3 className="skills-name">ReactJs</h3>
          </div>
          <div className="skills-data">
            <CircleWavyCheck className="skills-icon"/>
            <h3 className="skills-name">Git</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
