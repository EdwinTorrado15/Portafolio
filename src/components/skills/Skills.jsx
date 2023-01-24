import { Frontend, Backend } from "..";

const Skills = () => {
  return (
    <section className="skills section" id="habilidades">
      <h2 className="section-title">Habilidades</h2>
      <span className="section-subtitle">Todas mis habilidades</span>

      <div className="skills-container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};

export default Skills;
