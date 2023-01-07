import {
  Briefcase,
  ChatDots,
  FileText,
  House,
  List,
  SquaresFour,
  User,
  X,
} from "phosphor-react";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav-logo">
          Edwin
        </a>
        <div className={toggle ? 'nav-menu show-menu' : 'nav-menu'}>
          <ul className="nav-list grid">
            <li className="nav-item">
              <a href="#inicio" className="nav-link active-link">
                <i className="uil nav-icon">
                  <House />
                </i>{" "}
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a href="#acerca" className="nav-link">
                <i className="uil nav-icon">
                  <User />
                </i>{" "}
                Acerca
              </a>
            </li>
            <li className="nav-item">
              <a href="#habilidades" className="nav-link">
                <i className="uil nav-icon">
                  <FileText />
                </i>{" "}
                Habilidades
              </a>
            </li>
            <li className="nav-item">
              <a href="#servicios" className="nav-link">
                <i className="uil nav-icon">
                  <Briefcase />
                </i>{" "}
                Servicios
              </a>
            </li>
            <li className="nav-item">
              <a href="#portafolio" className="nav-link">
                <i className="uil nav-icon">
                  <SquaresFour />
                </i>{" "}
                Portafolio
              </a>
            </li>
            <li className="nav-item">
              <a href="#contacto" className="nav-link">
                <i className="uil nav-icon">
                  <ChatDots />
                </i>{" "}
                Contacto
              </a>
            </li>
          </ul>

          <i className="uil nav-close" onClick={() => setToggle(!toggle)}>
            <X />
          </i>
        </div>

        <div className="nav-toggle" onClick={() => setToggle(!toggle)}>
          <i className="uil">
            <List />
          </i>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
