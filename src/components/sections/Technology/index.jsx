import teste from "../../../assets/js-icon.png"
import style from "./style.module.css"
export const Technology = ()=>{
    return(
        <section className={style.section}>
        <h2 className="title1">Tecnologias</h2>
        <div>
            <div className="cardTecnology"><img src={teste} alt="#" /> <p className="title3">tecnologia</p></div>
            <div className="cardTecnology"><img src={teste} alt="#" /> <p className="title3">tecnologia</p></div>
            <div className="cardTecnology"><img src={teste} alt="#" /> <p className="title3">tecnologia</p></div>
            <div className="cardTecnology"><img src={teste} alt="#" /> <p className="title3">tecnologia</p></div>
        </div>
    </section>
    )
}