import { styled } from "styled-components";

const LinkStyled = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;

  border-radius: 16px;
  padding: 8px 24px;
  width: min-content;
  white-space: nowrap;
  cursor: pointer;

  background-color: #26fd02;
  color: #ffffff;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
  text-decoration: none;

  transition: 200ms;

  &:hover {
    opacity: 0.7;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  span {
    font-size: 0.75rem;
  }

  p {
    font-size: 1rem;
  }
`;

export { LinkStyled };
