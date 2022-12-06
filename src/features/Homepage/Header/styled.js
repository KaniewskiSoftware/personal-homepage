import styled from "styled-components";
import { ReactComponent as message } from "../images/message.svg";

export const Wrapper = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;
  max-width: 1089px;
`;

export const Image = styled.img`
  height: 398px;
  width: 398px;
  margin-right: 66px;
  border-radius: 50%;
`;

export const Content = styled.div``;

export const MiniText = styled.div`
  margin-top: 64px;
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
`;

export const Title = styled.h1`
  margin: 12px 0 0;
  font-weight: 900;
  font-size: 38px;
  color: ${({ theme }) => theme.color.headers};
`;

export const Text = styled.div`
  margin: 35px 0 0;
  font-size: 20px;
  font-weight: 400;
`;

export const HireButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 154px;
  height: 49px;
  margin: 32px 0 0;
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.color.buttonBorder};
  border-radius: 4px;
  background: ${({ theme }) => theme.color.blue};
  color: ${({ theme }) => theme.color.white};
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
`;
export const MessageIcon = styled(message)`
  margin: 0 16px 0 0;
`;
