import styled, { css } from "styled-components";

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    grid-template-columns: 1fr;
    grid-gap: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    grid-template-columns: 1fr;
    grid-gap: 16px;
  }
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

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    padding: 24px;
  }
`;

export const Title = styled.h3`
  margin: 0;
  padding: 0;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: ${({ theme }) => theme.color.blue};

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 16px;
  }
`;

export const Text = styled.p`
  margin: 8px 8px 0 0;
  font-weight: 400;
  line-height: 1.4;
  color: ${({ theme }) => theme.color.secondaryText};

  ${({ description }) =>
    description &&
    css`
      margin: 24px 0 16px;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    margin: 16px 0;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.color.blue};
  border-bottom: 1px solid ${({ theme }) => theme.color.blue};
  transition: transform 0.3s;
  margin-left: 8px;

  &:hover {
    color: ${({ theme }) => theme.color.hoverBlue};
    border-bottom: 1px solid ${({ theme }) => theme.color.hoverBlue};
  }

  ${({ code }) =>
    code &&
    css`
      margin-left: 13px;
      @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
        margin-left: 10px;
      }
    `}
`;
