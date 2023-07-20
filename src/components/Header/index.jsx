import { BtnDefault } from "../MyButton";
import styles from "./style.module.css";
export const HeaderC = () => {
  return (
    <header className={styles.header}>
      <div>
        <p className="title3">Portifolio</p>
      </div>
      <div className={styles.myHooks}>
        <p className="title3">Sobre</p>
        <p className="title3">Stacks</p>
        <p className="title3">Projetos</p>
      </div>
      <div>
        <BtnDefault styleClass="btn-default">Contato</BtnDefault>
      </div>
    </header>
  );
};
