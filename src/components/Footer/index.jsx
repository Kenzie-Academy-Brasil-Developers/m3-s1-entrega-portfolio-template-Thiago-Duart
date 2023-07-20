import WhatsApp from "../../assets/whatsApp-icon.png";
import linkedin from "../../assets/linkedin-icon.png";
import github from "../../assets/github-icon.png";
import style from "./style.module.css";
import { user } from "../../data/user";
export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div>
        <h2 className="title1">Contato</h2>
        <div>
          <img src={WhatsApp} alt="" />
          <img src={linkedin} alt="" />
          <img src={github} alt="" />
        </div>
      </div>
      <div>
        <p className="paragraph">Todos os direitos reservados - {user}</p>
      </div>
    </footer>
  );
};
