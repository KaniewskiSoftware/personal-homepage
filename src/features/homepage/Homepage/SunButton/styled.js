import styled, { css } from "styled-components";

export const Container = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  right: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    margin: 0;
    justify-self: center;
    top: -12px;
  }
`;

export const Text = styled.p`
  margin: 0 12px 0 0;
  padding: 0;
  font-weight: 700;
  font-size: 12px;
  color: ${({ theme }) => theme.color.secondaryText};
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const Content = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  width: 47px;
  height: 25px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.color.secondaryText};
  background: ${({ theme }) => theme.color.sunButtonBackground};
  cursor: pointer;
`;

export const Circle = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 2px;
  background: ${({ theme }) => theme.color.secondaryText};
  transition: transform 0.3s;

  ${({ active }) =>
    active &&
    css`
      transform: translateX(21px);
    `}
`;

export const SunContainer = styled.div`
  display: flex;
  align-items: center;
  width: 14px;
  height: 14px;
  color: ${({ theme }) => theme.color.secondaryBackground};
`;
