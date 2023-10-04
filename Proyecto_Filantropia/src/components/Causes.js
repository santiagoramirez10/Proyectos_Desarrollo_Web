import React from "react";
import CauseItem from "./CauseItem";

const causes = [

  {
    id: 1,
    imgURL:
      "https://www.eafit.edu.co/institucional/centro-filantropia/PublishingImages/filantropia/FotoParaMiniaturaEquidadSocial.jpg",
    title: "Equidad social e inclusión",
    content:
      "​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​En C​olombia, más de dos millones de jóvenes ​se inscriben a una Institución de Educación Superior​​,​ pero solo el 41% ​logra matricularse.​ ​En Antioquia, de cada 1​0 jóvene​​s entre los 17 y 21 años, solo 5 ingresan a una Institución de Educación Superior. ​En Medellín, de cada 100 e​​​studiantes qu​​​e culminan el grado 11, solo 48 hacen tránsito inmediato a la Educación Superior.​ ​Con Filantropía EAFIT, la Univ​ersidad, con el apoyo de diversos aliados, ha logrado otorgar más de 2.540 becas cada semestre",
  },

  {
    id: 2,
    imgURL:
      "https://www.eafit.edu.co/institucional/centro-filantropia/PublishingImages/filantropia/FotoParaMiniaturaCienciaTecnologiaInnovacion.jpg",
    title: "Ciencia, tecnología e innovación",
    content:
      "Velamos po el valor social a partir de proyectos de investigación, ​​logrando de una forma eficiente resolver los problemas sociales y contribuir a la generación de conocimiento. Uno de los propósit​​os de nuestra Institución que inspira, crea y transforma es desarrollar la capacidad intelectual de los estudiantes y profesores en todos los programas académicos con la investigación como soporte básico.​Con tus aportes a los proyectos de investigación científica y aplicada, impulsas la producción de respuestas innovadoras que contribuyen a la solución de problemáticas ​de ​nuestra sociedad.",
  },
  {
    id: 3,
    imgURL:
      "https://www.eafit.edu.co/institucional/centro-filantropia/PublishingImages/filantropia/FotoParaMiniaturaTransformacionHumanista.jpg",
    title: "Transformación humanista",
    content:
      "EAFIT es una Universidad que a lo largo de su historia ha promovido el desarrollo del arte, el deporte y la cultura como pa​​​rte fundamental de la institución, adicionalmente en más de medio siglo de existencia, la Universidad se ha preocupado por ofrecer la mejor infraestructura para el desarrollo de las actividades universitarias, en un ambiente que favorece el bienestar de sus estudiantes, empleados, docentes y visitantes. La formación no se da solo en las aulas, también en diferentes espacios deportivos, artísticos y culturales. Con tus aportes a esta causa contribuyes a la creación de un ambiente que favorece el aprendizaje integral de su comunidad.​",
  },
  {
    id: 4,
    imgURL:
      "https://www.eafit.edu.co/institucional/centro-filantropia/PublishingImages/Paginas/inicio/inspiramos.jpg",
    title: "Inspiración - voluntariado",
    content:
      "​​​​​El voluntariado EAFIT es un puente de transformación social y cultural, que inspira a la comunidad eafitense y sus allegados a vincularse con iniciativas ​​​sociales, académicas, comunitarias, culturales y para la filantropía, ​permitiendo asumir responsabilidad y rol en la sociedad y/o al interior de la Universidad a través de la contribución eficaz de tiempo y conocimiento.​​​​​​​",
  },


];

const Causes = () => {
  return (
    <section class="wide-tb-100" id="causas">
      <div class="container">
        <h1 class="heading-main">
          <small>Nuestras</small>
          Causas
        </h1>
        <div class="row">
          {causes?.map((cause) => {
            return (
              <CauseItem
                key={cause.id}
                link={cause.id}
                imgURL={cause.imgURL}
                title={cause.title}
                content={cause.content}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Causes;
