import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Cause from "./components/Cause";
import Donate from "./components/Donate";
import Layout from "./components/Layout";
import DonationComplete from "./components/DonationComplete";

import img_1_cause_1 from "./images/causes/causes1_img_1.png"
import img_2_cause_1 from "./images/causes/causes1_img_2.jpg"

import img_1_cause_2 from "./images/causes/causes2_img_1.jpg"
import img_2_cause_2 from "./images/causes/causes2_img_2.jpeg"

import img_1_cause_3 from "./images/causes/causes3_img_1.jpeg"
import img_2_cause_3 from "./images/causes/causes3_img_2.jpeg"

import img_1_cause_4 from "./images/causes/causes4_img_1.jpeg"
import img_2_cause_4 from "./images/causes/causes4_img_2.jpeg"


const causes = [
  {
    id: 1,
    imgURL:
      "https://www.eafit.edu.co/institucional/centro-filantropia/PublishingImages/filantropia/FotoParaMiniaturaEquidadSocial.jpg",
    title: "Equidad social e inclusión",
    img_1: img_1_cause_1,
    img_2: img_2_cause_1,
    subutitle: "Estudiantes con op​​ortunidades a través de becas y apoyos académicos",
    content: "En C​olombia, más de dos millones de jóvenes ​se inscriben a una Institución de Educación Superior​​,​ pero solo el 41% ​logra matricularse.​ ​En Antioquia, de cada 1​0 jóvene​​s entre los 17 y 21 años, solo 5 ingresan a una Institución de Educación Superior.​​En Medellín, de cada 100 e​​​studiantes qu​​​e culminan el grado 11, solo 48 hacen tránsito inmediato a la Educación Superior.​​Con Filantropía EAFIT, la Univ​ersidad, con el apoyo de diversos aliados, ha logrado otorgar más de 2.540 becas cada semestre.​Fuente: https://snies.mineducaci​​on.gov.co​​ ​y datos propios de la Universidad EAFIT.​​​"
  },
  {
    id: 2,
    imgURL:
      "https://www.eafit.edu.co/institucional/centro-filantropia/PublishingImages/filantropia/FotoParaMiniaturaCienciaTecnologiaInnovacion.jpg",
    title: "Ciencia, tecnología e innovación",
    img_1: img_1_cause_2,
    img_2: img_2_cause_2,
    subutitle: "​Apalancamos​​​ proyectos de investigación ​para ​beneficio de la humanidad​​​​",
    content: "Seamos valor social a partir de proyectos de investigación, ​​logrando de una forma eficiente resolver los problemas sociales y contribuir a la generación de conocimiento. Uno de los propósit​​os de nuestra Institución que inspira, crea y transforma es desarrollar la capacidad intelectual de los estudiantes y profesores en todos los programas académicos con la investigación como soporte básico. ​Con tus aportes a los proyectos de investigación científica y aplicada, impulsas la producción de respuestas innovadoras que contribuyen a la solución de problemáticas ​de ​nuestra sociedad."

  },
  {
    id: 3,
    imgURL:
      "https://www.eafit.edu.co/institucional/centro-filantropia/PublishingImages/filantropia/FotoParaMiniaturaTransformacionHumanista.jpg",
    title: "Transformación humanista",
    img_1: img_1_cause_3,
    img_2: img_2_cause_3,
    subutitle: "​​Un proyect​o h​u​manista​​ y científico para todos",
    content: "EAFIT es una Universidad que a lo largo de su historia ha promovido el desarrollo del arte, el deporte y la cultura como pa​​​rte fundamental de la institución, adicionalmente en más de medio siglo de existencia, la Universidad se ha preocupado por ofrecer la mejor infraestructura para el desarrollo de las actividades universitarias, en un ambiente que favorece el bienestar de sus estudiantes, empleados, docentes y visitantes. La formación no se da solo en las aulas, también en diferentes espacios deportivos, artísticos y culturales. Con tus aportes a esta causa contribuyes a la creación de un ambiente que favorece el aprendizaje integral de su comunidad.​"

  },
  {
    id: 4,
    imgURL:
      "https://www.eafit.edu.co/institucional/centro-filantropia/PublishingImages/Paginas/inicio/inspiramos.jpg",
    title: "Inspiración - voluntariado",
    img_1: img_1_cause_4,
    img_2: img_2_cause_4,
    subutitle: "Conectamos talento ​​para un mayor impacto​",
    content: "​​​​​El voluntariado EAFIT es un puente de transformación social y cultural, que inspira a la comunidad eafitense y sus allegados a vincularse con iniciativas ​​​sociales, académicas, comunitarias, culturales y para la filantropía, ​permitiendo asumir responsabilidad y rol en la sociedad y/o al interior de la Universidad a través de la contribución eficaz de tiempo y conocimiento.​​​​​​​"

  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/" + causes[0].id,
        element: <Cause title={causes[0].title} imgURL={causes[0].imgURL} imgCause1={causes[0].img_1} imgCause2={causes[0].img_2} subtitle={causes[0].subutitle} content={causes[0].content} />,
      },
      {
        path: "/" + causes[1].id,
        element: <Cause title={causes[1].title} imgURL={causes[1].imgURL} imgCause1={causes[1].img_1} imgCause2={causes[1].img_2} subtitle={causes[1].subutitle} content={causes[1].content} />,
      },
      {
        path: "/" + causes[2].id,
        element: <Cause title={causes[2].title} imgURL={causes[2].imgURL} imgCause1={causes[2].img_1} imgCause2={causes[2].img_2} subtitle={causes[2].subutitle} content={causes[2].content} />,
      },
      {
        path: "/" + causes[3].id,
        element: <Cause title={causes[3].title} imgURL={causes[3].imgURL} imgCause1={causes[3].img_1} imgCause2={causes[3].img_2} subtitle={causes[3].subutitle} content={causes[3].content} />,
      },
      {
        path: "/donate",
        element: <Donate />,
      },
      {
        path: "/DonationComplete",
        element: <DonationComplete />
      }
    ],

  },
]);

export default router;
