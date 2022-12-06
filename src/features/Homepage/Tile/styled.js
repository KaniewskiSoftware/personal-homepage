import styled from "styled-components";

export const Wrapper = styled.section`
  margin: 0 0 72px;
  max-height: 404px;
  padding: 32px 32px 24px;
  border-radius: 4px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0px -2px 50px ${({ theme }) => theme.color.tileShadow},
    0px 16px 58px ${({ theme }) => theme.color.tileShadowAlpha};
`;

export const Title = styled.h2`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 16px;
  padding: 0 0 15px;
  margin: 0;
  font-size: 30px;
  font-weight: 900;
  letter-spacing: 0.05em;
  border-bottom: 1px solid ${({ theme }) => theme.color.buttonBorder};
  color: ${({ theme }) => theme.color.headers};
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0;
  margin: 32px 0 0;
  list-style: none;
  line-height: 1.4;
  font-weight: 400;
  font-size: 18px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 0 0 8px;

  &::before {
    content: "";
    display: inline-block;
    height: 9px;
    width: 9px;
    margin-right: 16px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.blue};
  }
`;
