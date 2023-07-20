import { BtnDefault } from "../../MyButton";
import imgWelcome from "../../../assets/banner-img.png";
import styles from "./style.module.css";
import { username } from "../../../data/user.js";
export const Welcome = () => {
  return (
    <section className={styles.section}>
      <div className={styles.welcome__container}>
        <a className="link">{username}</a>
        <h2 className="title1">Bem vindo Ao meu Portifolio</h2>

        <p className="paragraph welcome__text">uma fraser qualquer</p>
        <BtnDefault styleClass="btn-default">Saiba mais</BtnDefault>
      </div>
      <div>
        <img src={imgWelcome} alt="#" />
      </div>
    </section>
  );
};
