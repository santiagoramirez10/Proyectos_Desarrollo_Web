import React from "react";
import TestimonialItem from "./TestimonialItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import imgTestimonial1 from "../images/testimonial1.png";
import imgTestimonial2 from "../images/testimonial2.png";
import imgTestimonial3 from "../images/testimonial3.png";

const testimonios = [

  {
    content:
      "Estudiar en EAFIT fue una de las etapas más bonita de mi vida. En cada paso, en cada tropiezo y en cada victoria ustedes siempre estuvieron ahí, Me siento profundamente orgulloso de que la universidad  apueste por los jóvenes, por abrirse a darlo todo y más por aquellos que no tienen recursos propios para estudiar, Me siento honrado de haber sido becado y espero haber cumplido las expetativas que implica estudiar bajo esta maravillosa condición.!",
    name: "Sergio Danilo Gil Vélez",
    avatarImg: imgTestimonial2,
    position: "Egresado beneficiario del pregrado en Comunicación Social"
  },
  {
    content:
      "Mi experiencia con la beca y sobre todo en esta Universidad ha sido maravillosa en todo aspecto de mi vida, porque gracias a los que aportaron para el povenir de mi futuro puedo cumplir esos sueños que tenia cuando estaba en el colegio y pensaba que nunca harian realidad.",
    name: "Sebastian Vanegas Rendon",
    avatarImg: imgTestimonial1,
    position: "Estudiante beneficiario del pregrado en Ingeniería Mecánica"
  },
  {
    content:
      "Estoy muy agradecida con la U y con las personas que eligieron invertir en mis sueños e impactar mi vida. Esa es la mejor forma de transformar la ciudad, el pais y el mundo. ",
    name: "Maria Isabel Garcia Garcia",
    avatarImg: imgTestimonial3,
    position: "Estudiante beneficiaria del pregrado en Comunicación Social"
  },


];

const Testimonials = () => {
  return (
    <section class="wide-tb-100 bg-white" id="testimonios">
      <div class="container">
        <h1 class="heading-main">
          <small>Nuestros </small>
          Testimonios
        </h1>
        <div class="row">
          <div class="col-md-12">
            <div class="    owl-theme" id="home-client-testimonials">
              <Swiper
                modules={[Autoplay]}
                slidesPerView={1}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                }}
                autoplay={{ delay: 3000 }}
              >
                {testimonios.map((testimonio, i) => (
                  <SwiperSlide key={i}>
                    <TestimonialItem
                      content={testimonio.content}
                      name={testimonio.name}
                      avatarImg={testimonio.avatarImg}
                      position={testimonio.position}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
