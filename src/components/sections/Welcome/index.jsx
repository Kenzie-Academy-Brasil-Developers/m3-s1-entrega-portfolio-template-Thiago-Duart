import { BtnDefault } from "../../MyButton";
import imgWelcome from "../../../assets/banner-img.png"
import styles from "./style.module.css"
export const Welcome = ()=>{
    return(
        <section className={styles.section}>
            <div className={styles.welcome__container}>
                
                <p className="link">meu nome</p>
                <h2 className="title1">Bem vindo Ao meu Portifolio</h2>
                
                <p className="paragraph welcome__text">uma fraser qualquer</p>
                <BtnDefault styleClass="btn-default">Saiba mais</BtnDefault>
            </div>
            <div>
                <img src={imgWelcome} alt="#" />
            </div>
        </section>
    )
}