import { LinkStyled } from "./style";

const Button = ({ icon, upText, downText, link }) => {
  return (
    <LinkStyled href={link}>
      <img src={icon} />
      <div>
        <span>{upText}</span>
        <p>{downText}</p>
      </div>
    </LinkStyled>
  );
};

export default Button;
