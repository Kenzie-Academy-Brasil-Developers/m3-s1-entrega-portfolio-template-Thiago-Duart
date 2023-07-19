import { HeaderC } from "../../components/header"
import { Footer } from "../../components/Footer"
import { Projets } from "../../components/Projects"
import { ReadMe } from "../../components/About"
import { Technology } from "../../components/Technology"
import { Welcome } from "../../components/Welcome"

export const Home = () =>{

    return (
      <>
      <header>
        <HeaderC/>
      </header>
      <main>
        <Welcome/>
        <ReadMe/>
        <Technology/>
        <Projets/>
      </main>
      <footer>
        <Footer/>
      </footer>
      </>
    )
  }