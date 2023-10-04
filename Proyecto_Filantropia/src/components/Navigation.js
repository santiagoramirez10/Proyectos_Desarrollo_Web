import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../images/LOGO.png";

const Navigation = () => {
  const [nav, setNav] = useState(false);
  const [fixed, setFixed] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  });

  return (
    <div>
      <header class="homestyle-third">
        <nav
          class={
            fixed
              ? "navbar navbar-expand-lg header-fullpage navbarFixed"
              : nav
              ? "navbar navbar-expand-lg header-fullpage navbarFixed"
              : "navbar navbar-expand-lg header-fullpage"
          }
        >
          <div class="container text-nowrap">
            <div class="d-flex align-items-center w-100 col p-0 logo-brand">
              <Link
                to={"/"}
                class="navbar-brand rounded-bottom light-bg"
                href="index.html"
              >
                <img src={img} alt="" className="logo_brand" />
              </Link>
            </div>
            <div class="d-inline-flex request-btn order-lg-last col-auto p-0 align-items-center">
              <Link
                to={"/donate"}
                class="nav-link btn btn-primary ml-3 donate-btn"
                href="donation-page.html"
              >
                Donar
              </Link>

              <button
                class="navbar-toggler x collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={() => setNav(!nav)}
              >
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
            </div>

            <div
              class={nav ? "navbar-collapse" : "collapse navbar-collapse"}
              id="navbarCollapse"
            >
              <ul class="navbar-nav ml-auto">
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle-mob"
                    href="#inicio"
                    id="dropdown03"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Inicio
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#acerca">
                    Acerca de nosotros
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle-mob"
                    href="#causas"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Causas
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle-mob"
                    href="#testimonios"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Testimonios
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle-mob"
                    href="#aliados"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Aliados
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#contacto">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navigation;
