import styled, { css } from "styled-components";

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 32px;
  letter-spacing: 0.05em;
`;

export const Tile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 56px;
  max-width: 592px;
  background: ${({ theme }) => theme.color.secondaryBackground};
  border: 6px solid ${({ theme }) => theme.color.buttonBorder};
  box-shadow: 0px -2px 50px ${({ theme }) => theme.color.tileShadow},
    0px 16px 58px ${({ theme }) => theme.color.tileShadowAlpha};

  &:hover {
    border: 6px solid ${({ theme }) => theme.color.tileHover};
  }
`;

export const Title = styled.h3`
  margin: 0;
  padding: 0;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: ${({ theme }) => theme.color.blue};
`;

export const Text = styled.p`
  margin: 8px 8px 0 0;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.4;
  color: ${({ theme }) => theme.color.secondaryText};

  ${({ description }) =>
    description &&
    css`
      margin: 24px 0 16px;
    `}
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.color.blue};
  border-bottom: 1px solid ${({ theme }) => theme.color.blue};
  transition: transform 0.3s;

  &:hover {
    color: ${({ theme }) => theme.color.hoverBlue};
  }
`;
