import { List, X } from "phosphor-react";
import { navItems } from "../data/data";
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
            {navItems.map((item) => (
              <li className="nav-item" key={item.id}>
                <a
                  href={item.ref}
                  className={
                    activeNav === item.ref ? "nav-link active-link" : "nav-link"
                  }
                  onClick={() => setActiveNav(item.ref)}
                >
                  {item.name}
                </a>
              </li>
            ))}
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
