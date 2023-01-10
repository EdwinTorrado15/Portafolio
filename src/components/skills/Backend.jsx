import { CircleWavyCheck } from "phosphor-react";

const Backend = () => {
  return (
    <div className="skills-content">
      <h3 className="skills-title">Desarrollador Backend</h3>
      <div className="skills-box">
        <div className="skills-group">
          <div className="skills-data">
            <CircleWavyCheck className="skills-icon"/>
            <h3 className="skills-name">Node Js</h3>
          </div>
          <div className="skills-data">
            <CircleWavyCheck className="skills-icon"/>
            <h3 className="skills-name">MySQL</h3>
          </div>
          <div className="skills-data">
            <CircleWavyCheck className="skills-icon"/>
            <h3 className="skills-name">Express</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
