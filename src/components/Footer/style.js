import styled from "styled-components";

const FooterStyled = styled.footer`
  position: fixed;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);

  p {
    width: min-content;
    position: relative;
    font-size: 0.75rem;
    white-space: nowrap;
  }

  span {
    font-size: 0.5rem;

    position: absolute;
    top: -4px;
    right: -12px;
  }
`;

export { FooterStyled };
