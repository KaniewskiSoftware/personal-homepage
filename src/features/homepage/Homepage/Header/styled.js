import styled from "styled-components";
import { ReactComponent as message } from "../images/message.svg";

export const Wrapper = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 66px;
  max-width: 1089px;
  margin-bottom: 63px;
  font-size: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    grid-template-columns: 1fr;
    grid-gap: 48px;
    margin-bottom: 56px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 17px;
    grid-gap: 12px;
    margin-bottom: 48px;
  }
`;

export const Image = styled.img`
  width: 398px;
  height: 398px;
  border-radius: 50%;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    justify-self: center;
    margin-right: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 256px;
    height: 256px;
    justify-self: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 132px;
    height: 132px;
    justify-self: start;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-top: 0px;
  }
`;

export const Title = styled.h1`
  margin: 12px 0 0;
  font-weight: 900;
  font-size: 38px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 24px;
    margin-top: 8px;
  }
`;

export const Text = styled.p`
  word-break: break-word;
  margin: 35px 0 32px;
  color: ${({ theme }) => theme.color.secondaryText};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 26px 0 26px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    margin: 16px 0 24px;
  }
`;

export const MessageIcon = styled(message)`
  margin: 0 16px 0 0;
  align-self: center;
`;
