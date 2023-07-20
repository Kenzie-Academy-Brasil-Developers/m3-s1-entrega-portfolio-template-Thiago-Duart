import style from "./style.module.css";
import { technologies } from "../../../data/technologies.js";
export const Technology = () => {
  const technologiesContent = technologies.map((technology, id) => {
    return (
      <div key={id} className="cardTecnology">
        <img src={technology.img} alt="#" />{" "}
        <p className="title3">{technology.name}</p>
      </div>
    );
  });
  return (
    <section className={style.section}>
      <h2 className="title1">Tecnologias</h2>
      <div>{technologiesContent}</div>
    </section>
  );
};
