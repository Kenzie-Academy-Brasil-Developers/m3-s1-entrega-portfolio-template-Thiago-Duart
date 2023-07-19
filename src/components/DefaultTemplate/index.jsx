import { HeaderC } from "../Header/index";
import { Footer } from "../Footer/index";


export const DefaultTemplate = ({children}) => {
  return (
    <>
      <HeaderC/>
      <main>{children}</main>
      <Footer/>
    </>
  );
};
