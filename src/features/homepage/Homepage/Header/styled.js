import styled from "styled-components";
import { ReactComponent as message } from "../images/message.svg";

export const Wrapper = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;
  max-width: 1089px;
  margin-bottom: 63px;
  font-size: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 17px;
  }
`;

export const Image = styled.img`
  width: 398px;
  height: 398px;
  margin-right: 66px;
  border-radius: 50%;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    justify-self: center;
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
  }
`;

export const Text = styled.p`
  word-break: break-word;
  margin: 35px 0 0;
  color: ${({ theme }) => theme.color.secondaryText};
`;

export const MessageIcon = styled(message)`
  margin: 0 16px 0 0;
  align-self: center;
`;
