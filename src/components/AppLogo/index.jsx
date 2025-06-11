import logo from "./hero.png";
import { ImgStyled } from "./style";

const AppLogo = () => {
  return (
    <ImgStyled
      src={logo}
      alt="Logo do Mercado Verde, uma alface verde feita com traços simples, em um fundo verde claro"
    />
  );
};

export default AppLogo;
