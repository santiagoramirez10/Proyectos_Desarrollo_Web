import { useEffect, useState } from "react";

const Cause = ({ title, imgURL, imgCause1, imgCause2, subtitle, content }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
    window.scrollTo({
      top: 0,
    });
  }, []);

  if (loading) {
    return (
      <div id="pageloader">
        <div class="loader-item">
          <div class="loader">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div class="container">
      <div class="row">
        <h1 class="heading-main">
          <small>Ayudanos</small>
          {title}
        </h1>
        <div class="causes-wrap single">
          <div class="img-wrap2">
            <img src={imgURL} alt="" />
          </div>

          <div class="content-wrap-single border-top">
              <h1>{subtitle}</h1>
            <p>
                  {content}
             ​​</p>

            <div class="row my-5">
              <div class="col-md-6">
                <img src={imgCause1} class="rounded" alt="" />
              </div>
              <div class="col-md-6">
                <img src={imgCause2} class="rounded" alt="" />
              </div>
            </div>


            <h3>Conoce el Fondo de becas</h3>
            <p>
              Brind​amos acceso a la Universidad EAFIT ​a jóvenes que cuentan con un excelente desempeño académico y que no disponen de los recursos económicos para asumir el valor de la ma​trícula en la Ins​​titución.
            </p>


            <p>
              Gracias a tus aportes a nuest​​ro​ fondo de becas, lograre​mos qu​​e muchos ​m​ás estudiantes puedan acceder a una ins​​​titución de alta calidad ​que ayud​​ará a que la vida de esto​s jóvenes se transforme ​para siem​​pre ​logrando así una sociedad más equitativa.
            </p>
          </div>

          <div class="share-this-wrap">
            <div class="share-line">
              <div class="pr-4">
                <strong>Share This</strong>
              </div>
              <div class="pl-4">
                <ul class="list-unstyled list-inline mb-0">
                  <li class="list-inline-item">
                    <a href="#a">
                      <i class="fa-brands fa-facebook"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#a">
                      <i class="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#a">
                      <i class="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#a">
                      <i class="fa-brands fa-behance"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#a">
                      <i class="fa-brands fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cause;
