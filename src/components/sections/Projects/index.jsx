import style from "./style.module.css";
import imgGithub from "../../../assets/git-icon.png";
import { projects } from "../../../data/projects.js";

export const Projets = () => {
  const ProjectsContent = projects.map((project, id) => {
    const projectId = id + 10;
    return (
      <div className="cardProjects" key={projectId}>
        <div>
          <h2 className="title3">{project.name}</h2>
          <img src={imgGithub} alt="GitHub" />
        </div>
        <p className="paragraph">{project.description}</p>
        <p className="link">saiba mais</p>
      </div>
    );
  });
  return (
    <section className={style.section}>
      <h2 className="title1">Projetos</h2>
      <div>{ProjectsContent}</div>
    </section>
  );
};
