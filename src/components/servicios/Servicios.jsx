import { ArrowRight, CheckCircle, Globe, Pencil, X } from "phosphor-react";
import { useState } from "react";

const Servicios = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="servicios">
      <h2 className="section-title">Servicios</h2>
      <span className="section-subtitle">Lo que ofrezco</span>

      <div className="services-container container grid">
        <div className="services-content">
          <div>
            <i>
              <Globe className="services-icon" />
            </i>
            <h3 className="services-title">
              Visual <br /> designer
            </h3>
          </div>
          <span className="services-button" onClick={() => toggleTab(1)}>
            Ver mas
            <i>
              <ArrowRight className="services-button-icon" />
            </i>
          </span>
          <div
            className={
              toggleState === 1
                ? "services-modal active-modal"
                : "services-modal"
            }
          >
            <div className="services-modal-content">
              <i onClick={() => toggleTab(0)}>
                <X className="services-modal-close" />
              </i>
              <h3 className="services-modal-title">Visual Designer</h3>
              <p className="services-modal-description">
                Servicio con más de 1 año de experiencia. Brindar un trabajo de
                calidad a clientes y empresas.
              </p>
              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i>
                    <CheckCircle className="services-modal-icon" />
                  </i>
                  <p className="services-modal-info">
                    Desarrollar la interfaz del usuario.
                  </p>
                </li>
                <li className="services-modal-service">
                  <i>
                    <CheckCircle className="services-modal-icon" />
                  </i>
                  <p className="services-modal-info">
                    Desarrollar paginas web.
                  </p>
                </li>
                <li className="services-modal-service">
                  <i>
                    <CheckCircle className="services-modal-icon" />
                  </i>
                  <p className="services-modal-info">
                    Diseño de mockups de los productos para las compañias.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services-content">
          <div>
            <i>
              <Globe className="services-icon" />
            </i>
            <h3 className="services-title">
              Visual <br /> designer
            </h3>
          </div>
          <span className="services-button" onClick={() => toggleTab(1)}>
            Ver mas
            <i>
              <ArrowRight className="services-button-icon" />
            </i>
          </span>
          <div
            className={
              toggleState === 1
                ? "services-modal active-modal"
                : "services-modal"
            }
          >
            <div className="services-modal-content">
              <i onClick={() => toggleTab(0)}>
                <X className="services-modal-close" />
              </i>
              <h3 className="services-modal-title">Visual Designer</h3>
              <p className="services-modal-description">
                Servicio con más de 1 año de experiencia. Brindar un trabajo de
                calidad a clientes y empresas.
              </p>
              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i>
                    <CheckCircle className="services-modal-icon" />
                  </i>
                  <p className="services-modal-info">
                    Desarrollar la interfaz del usuario.
                  </p>
                </li>
                <li className="services-modal-service">
                  <i>
                    <CheckCircle className="services-modal-icon" />
                  </i>
                  <p className="services-modal-info">
                    Desarrollar paginas web.
                  </p>
                </li>
                <li className="services-modal-service">
                  <i>
                    <CheckCircle className="services-modal-icon" />
                  </i>
                  <p className="services-modal-info">
                    Diseño de mockups de los productos para las compañias.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
