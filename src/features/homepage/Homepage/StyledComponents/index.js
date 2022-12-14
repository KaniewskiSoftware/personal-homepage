import styled, { css } from "styled-components";

export const TitleIcon = styled.img`
  width: 27px;
  height: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 18px;
    height: 21px;
  }
`;

export const MiniText = styled.p`
  font-weight: 700;
  font-size: 12px;
  margin: 0;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.secondaryText};
`;

export const ButtonLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin: 0;
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.color.buttonBorder};
  border-radius: 4px;
  background: ${({ theme }) => theme.color.blue};
  color: ${({ theme }) => theme.color.buttonText};
  transition: box-shadow 0.3s;
  cursor: pointer;

  &:hover {
    box-shadow: 2px -2px 0px ${({ theme }) => theme.color.buttonHover},
      -2px 2px 0px ${({ theme }) => theme.color.buttonHover},
      2px 2px 0px ${({ theme }) => theme.color.buttonHover},
      -2px -2px 0px ${({ theme }) => theme.color.buttonHover};
  }

  &:active {
    box-shadow: inset 0px 2px 0px ${({ theme }) => theme.color.buttonActive};
  }

  ${({ github }) =>
    github &&
    css`
      margin-bottom: 20px;
    `}
`;
