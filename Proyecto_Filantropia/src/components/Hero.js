import React from "react";
import { Link } from "react-router-dom";
import img from "../images/banner.png";

const Hero = () => {
  return (
    <section class="static-banner">
      <div class="container">
        <div class="row align-items-end">
          <div class="col-lg-5">
            <div class="banner-text">
              <h1>Ingresa a nuestra plataforma de donaciones</h1>
              <div>
                <Link
                  to={"/donate"}
                  class="btn btn-primary mr-3"
                  href="causes-list.html"
                  role="button"
                >
                  Dona aquí
                </Link>
              </div>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="banner-img">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
