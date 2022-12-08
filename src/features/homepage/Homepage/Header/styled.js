import styled from "styled-components";
import { ReactComponent as message } from "../images/message.svg";

export const Wrapper = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;
  max-width: 1089px;
  margin-bottom: 63px;
`;

export const Image = styled.img`
  height: 398px;
  width: 398px;
  margin-right: 66px;
  border-radius: 50%;
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
  color: ${({ theme }) => theme.color.headers};
`;

export const Text = styled.div`
  word-break: break-word;
  margin: 35px 0 0;
  font-size: 20px;
  font-weight: 400;
`;

export const MessageIcon = styled(message)`
  margin: 0 16px 0 0;
  align-self: center;
`;
