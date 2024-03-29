import perfil from "../../assets/perfil.jpeg";
import EdwinCV from "../../assets/EdwinCV.pdf";
import { Info } from "..";
import { FilePdf } from "phosphor-react";

const Acerca = () => {
  return (
    <section className="about section" id="acerca">
      <h2 className="section-title">Acerca de mí</h2>
      <span className="section-subtitle">Mi introducción</span>

      <div className="about-container container grid">
        <img src={perfil} alt="" className="about-img" />
        <div className="about-data">
          <Info />

          <p className="about-description">
            Desarrollador FullStack JS, creo landings y plataformas web con las
            habilidades de UI/UX para crear interfaces de usuario atractivas y
            de alta calidad.
          </p>

          <a download="" href={EdwinCV} className="button button-flex">
            Descargar CV
            <FilePdf className="button-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Acerca;
