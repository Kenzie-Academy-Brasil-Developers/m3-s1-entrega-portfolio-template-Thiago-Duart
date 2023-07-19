import style from "./style.module.css"
import imgGithub from "../../../assets/git-icon.png"
export const Projets = ()=>{
    return(
        <section className={style.section}>
            <h2 className="title1">Projetos</h2>
            <div>
        <div className="cardProjects">
            <div>
            <h2 className="title3">projeto 1</h2>
            <img src={imgGithub} alt="#" />
            </div>
            <p className="paragraph">descriçao</p>
            <p className="link">saiba mais</p>
        </div>
        <div className="cardProjects">
            <div>
            <h2 className="title3">projeto 1</h2>
            <img src={imgGithub} alt="#" />
            </div>
            <p className="paragraph">descriçao</p>
            <p className="link">saiba mais</p>
        </div>
        <div className="cardProjects">
            <div>
            <h2 className="title3">projeto 1</h2>
            <img src={imgGithub} alt="#" />
            </div>
            <p className="paragraph">descriçao</p>
            <p className="link">saiba mais</p>
        </div>
            </div>
        </section>
    )
}