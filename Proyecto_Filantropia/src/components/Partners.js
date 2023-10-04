import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import PartnerItem from "./PartnerItem";

const images = [
  "https://www.eafit.edu.co/institucional/centro-filantropia/PublishingImages/Paginas/landing_principal_filantropia/logos-aliados/logos-aliados%20%281%29.png",
  "https://www.eafit.edu.co/institucional/centro-filantropia/PublishingImages/Paginas/landing_principal_filantropia/logos-aliados/logos-aliados%20%282%29.png",
  "https://www.eafit.edu.co/institucional/centro-filantropia/PublishingImages/Paginas/landing_principal_filantropia/logos-aliados/logos-aliados-%2818%29.png",
  "https://www.eafit.edu.co/institucional/centro-filantropia/PublishingImages/Paginas/landing_principal_filantropia/logos-aliados/logos-aliados-%2819%29.png",
  "https://www.eafit.edu.co/institucional/centro-filantropia/PublishingImages/Paginas/landing_principal_filantropia/logos-aliados/logos-aliados%20%283%29.png",
  "https://www.eafit.edu.co/institucional/centro-filantropia/PublishingImages/Paginas/landing_principal_filantropia/logos-aliados/logos-aliados%20%284%29.png",
  "https://www.eafit.edu.co/institucional/centro-filantropia/PublishingImages/Paginas/landing_principal_filantropia/logos-aliados/logos-aliados%20%285%29.png",
  "https://www.eafit.edu.co/institucional/centro-filantropia/PublishingImages/Paginas/landing_principal_filantropia/logos-aliados/logos-aliados-%2820%29.png",
  "https://www.eafit.edu.co/institucional/centro-filantropia/PublishingImages/Paginas/landing_principal_filantropia/logos-aliados/logos-aliados%20%286%29.png",
  "https://www.eafit.edu.co/institucional/centro-filantropia/PublishingImages/Paginas/landing_principal_filantropia/logos-aliados/logos-aliados%20%287%29.png",
  "https://www.eafit.edu.co/institucional/centro-filantropia/PublishingImages/Paginas/landing_principal_filantropia/logos-aliados/logos-aliados%20%288%29.png",
  "https://www.eafit.edu.co/institucional/centro-filantropia/PublishingImages/Paginas/landing_principal_filantropia/logos-aliados/logos-aliados%20%289%29.png",
  "https://www.eafit.edu.co/institucional/centro-filantropia/PublishingImages/Paginas/landing_principal_filantropia/logos-aliados/logos-aliados%20%2810%29.png",
  "https://www.eafit.edu.co/institucional/centro-filantropia/PublishingImages/Paginas/landing_principal_filantropia/logos-aliados/logos-aliados%20%2811%29.png",
  "https://www.eafit.edu.co/institucional/centro-filantropia/PublishingImages/Paginas/landing_principal_filantropia/logos-aliados/logos-aliados%20%2812%29.png",
  "https://www.eafit.edu.co/institucional/centro-filantropia/PublishingImages/Paginas/landing_principal_filantropia/logos-aliados/logos-aliados%20%2813%29.png",
  "https://www.eafit.edu.co/institucional/centro-filantropia/PublishingImages/Paginas/landing_principal_filantropia/logos-aliados/logos-aliados%20%2814%29.png",
  "https://www.eafit.edu.co/institucional/centro-filantropia/PublishingImages/Paginas/landing_principal_filantropia/logos-aliados/logos-aliados%20%2815%29.png",
  "https://www.eafit.edu.co/institucional/centro-filantropia/PublishingImages/Paginas/landing_principal_filantropia/logos-aliados/logos-aliados%20%2816%29.png",
  "https://www.eafit.edu.co/institucional/centro-filantropia/PublishingImages/Paginas/landing_principal_filantropia/logos-aliados/logos-aliados%20%2817%29.png",
];

const Partners = () => {
  return (
    <section class="wide-tb-100" id="aliados">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-12">
            <h1 class="heading-main">
              <small>Conoce nuestros principales</small>
              Aliados
            </h1>
          </div>
          <div class="col-sm-12">
            <Swiper
              modules={[Autoplay]}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
              autoplay={{ delay: 3000 }}
            >
              {images.map((image, i) => (
                <SwiperSlide key={i}>
                  <PartnerItem img={image} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
