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
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 560) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  const [toggle, setToggle] = useState(false);
  const [activeNav, setActiveNav] = useState("#inicio");

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav-logo">
          Edwin
        </a>
        <div className={toggle ? "nav-menu show-menu" : "nav-menu"}>
          <ul className="nav-list grid">
            <li className="nav-item">
              <a
                href="#inicio"
                className={
                  activeNav === "#inicio" ? "nav-link active-link" : "nav-link"
                }
                onClick={() => setActiveNav("#inicio")}
              >
                <i className="nav-icon">
                  <House />
                </i>{" "}
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#acerca"
                className={
                  activeNav === "#acerca" ? "nav-link active-link" : "nav-link"
                }
                onClick={() => setActiveNav("#acerca")}
              >
                <i className="nav-icon">
                  <User />
                </i>{" "}
                Acerca
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#habilidades"
                className={
                  activeNav === "#habilidades"
                    ? "nav-link active-link"
                    : "nav-link"
                }
                onClick={() => setActiveNav("#habilidades")}
              >
                <i className="nav-icon">
                  <FileText />
                </i>{" "}
                Habilidades
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#servicios"
                className={
                  activeNav === "#servicios"
                    ? "nav-link active-link"
                    : "nav-link"
                }
                onClick={() => setActiveNav("#servicios")}
              >
                <i className="nav-icon">
                  <Briefcase />
                </i>{" "}
                Servicios
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#proyectos"
                className={
                  activeNav === "#proyectos"
                    ? "nav-link active-link"
                    : "nav-link"
                }
                onClick={() => setActiveNav("#proyectos")}
              >
                <i className="nav-icon">
                  <SquaresFour />
                </i>{" "}
                Proyectos
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contacto"
                className={
                  activeNav === "#contacto"
                    ? "nav-link active-link"
                    : "nav-link"
                }
                onClick={() => setActiveNav("#contacto")}
              >
                <i className="nav-icon">
                  <ChatDots />
                </i>{" "}
                Contacto
              </a>
            </li>
          </ul>

          <i className=" nav-close" onClick={() => setToggle(!toggle)}>
            <X />
          </i>
        </div>

        <div className="nav-toggle" onClick={() => setToggle(!toggle)}>
          <i className="">
            <List />
          </i>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
