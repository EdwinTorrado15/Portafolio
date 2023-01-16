import { GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <h1 className="footer-title">Edwin</h1>
        <ul className="footer-list">
          <li>
            <a href="#acerca" className="footer-link">
              Acerca
            </a>
          </li>
          <li>
            <a href="#proyectos" className="footer-link">
              Proyectos
            </a>
          </li>
        </ul>

        <div className="footer-social">
          <a
            href="https://www.instagram.com/edwintorrado/"
            className="footer-social-link"
            target="_blank"
          >
            <InstagramLogo />
          </a>

          <a
            href="https://www.linkedin.com/in/edwintorrado15/"
            className="footer-social-link"
            target="_blank"
          >
            <LinkedinLogo />
          </a>

          <a
            href="https://github.com/EdwinTorrado15"
            className="footer-social-link"
            target="_blank"
          >
            <GithubLogo />
          </a>
        </div>
        <span className="footer-copy">
          &#169; EdwinTorrado. Todos los derechos reservados
        </span>
      </div>
    </footer>
  );
};

export default Footer;
