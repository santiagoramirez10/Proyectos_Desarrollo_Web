import React from "react";
import img from "../images/footer.png";

const Footer = () => {
  return (
    <footer class="wide-tb-70 pb-0 mb-spacer-md" id="contacto">
      <div class="container pos-rel">
        <div class="row">
          <div class="give-us-call">
            <i
              class="fa-solid fa-phone"
              style={{ color: "#29b4aa", fontSize: "25px" }}
            ></i>
            <h4>Llamanos</h4>
            <h3 style={{ color: "#29b4aa", margin: "0 5px" }}>01 8000 515 900</h3>
          </div>
        </div>
        <div class="row">
          {/* <!-- Column First --> */}
          <div class="col-lg-3 col-md-6">
            <div class="logo-footer">
              <img src={img} alt="" />
            </div>
            <p>

            </p>
            <div class="social-icons">
              <ul class="list-unstyled list-group list-group-horizontal">
                <li>
                  <a href="#a">
                    <i class="icofont-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#a">
                    <i class="icofont-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#a">
                    <i class="icofont-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#a">
                    <i class="icofont-behance"></i>
                  </a>
                </li>
                <li>
                  <a href="#a">
                    <i class="icofont-youtube-play"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- Column First --> */}

          {/* <!-- Column Second --> */}
          <div class="col-lg-4 col-md-6">
            <h3 class="footer-heading">Informacion de contacto</h3>

            <div class="footer-widget-contact">
              <ul class="list-unstyled">
                <li>
                  <div>
                    <i data-feather="map-pin"></i>{" "}
                  </div>
                  <div>
                    Carrera 49 N° 7 Sur-50
                  </div>
                </li>
                <li>
                  <div>
                    <i
                      class="fa-solid fa-phone"
                      style={{ color: "#29b4aa" }}
                    ></i>{" "}
                  </div>
                  <div>
                    <a
                      href="tel:+1234567899"
                      style={{ color: "#29b4aa", margin: "0 5px" }}
                    >
                      (57) 604 2619500<p />
                      Whatsapp: (57) 310 8992908
                    </a>
                  </div>
                </li>
                <li>
                  <div>
                    <i
                      class="fa-regular fa-envelope"
                      style={{ color: "#29b4aa" }}
                    ></i>
                  </div>
                  <div>
                    <a
                      href="mailto:info@hoperaise.com"
                      style={{ color: "#29b4aa", margin: "0 5px" }}
                    >
                      cfilant​ropia@eafit.edu.co
                    </a>
                  </div>
                </li>
                <li>
                  <div>
                    <i data-feather="clock"></i>{" "}
                  </div>
                  <div>lunes a viernes  / 8:00 AM - 17:00 PM</div>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- Column Second --> */}

          {/* <!-- Spacer For Medium --> */}
          <div class="w-100 d-none d-md-block d-lg-none spacer-30"></div>
          {/* <!-- Spacer For Medium --> */}

          {/* <!-- Column Third --> */}
          {
            //<!-- Column Third -->
          }

          {
            //<!-- Column Fourth -->
          }
          {
            //<!-- Column Fourth -->
          }
        </div>
      </div>

      <div class="copyright-wrap">
        <div class="container pos-rel">
          <div class="row text-md-start text-center">
            <div class="col-sm-12 col-md-auto copyright-text">
              © Copyright
              <span class="txt-blue"> Team 1 </span>
              2023
            </div>
            <div class="col-sm-12 col-md-auto ml-md-auto text-md-right text-center copyright-links">
              <a href="#a">Terms & Condition </a>
              |
              <a href="#a"> Privacy Policy </a>
              |
              <a href="#a"> Legal</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
