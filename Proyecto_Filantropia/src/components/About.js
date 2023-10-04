import React from "react";
import { Link } from "react-router-dom";
import img1 from "../images/about_3.jpg";

const About = () => {
  return (
    <section class="wide-tb-100" id="acerca">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-7 col-md-12">
            <div class="text-center">
              <img src={img1} alt="" />
            </div>
          </div>
          <div class="col-lg-5 col-md-12">
            <h1 class="heading-main">
              <small>Acerca de nosotros</small>
              ¿Qué es Filantropía EAFIT?
            </h1>

            <p>
              Hace parte de la Dirección de Desarrollo Institucional y Vínculos,
              y es el área institucional donde se cultiva la transformación
              social por medio de iniciativas filantrópicas, para contribuir al
              desarrollo de la sociedad
            </p>

            <div class="icon-box-1 my-4">
              <i class="charity-volunteer_people"></i>
              <div class="text">
                <h3>¿Qué buscamos?</h3>
                <p>
                  Promovemos la transformación social por medio de vínculos de
                  confianza y solidaridad para generar oportunidades a través de
                  la educación.
                </p>
              </div>
            </div>

            <div class="d-flex">
              <Link
                to={"/donate"}
                class="btn btn-default mr-3"
                href="become-volunteers.html"
              >
                Dona ahora
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
