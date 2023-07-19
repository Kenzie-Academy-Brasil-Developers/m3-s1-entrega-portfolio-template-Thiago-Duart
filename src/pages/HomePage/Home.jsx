import { DefaultTemplate } from "../../components/DefaultTemplate/index";
import { Welcome } from "../../components/sections/Welcome/index";
import { MyReadMe } from "../../components/sections/About/index";
import { Technology } from "../../components/sections/Technology/index";
import { Projets } from "../../components/sections/Projects/index";

export const Home = () =>{
    return (
      <>
      <div className="container">
      <DefaultTemplate>
        <Welcome/>
        <MyReadMe/>
        <Technology/>
        <Projets/>
      </DefaultTemplate>
      </div>
      </>
    )
  }