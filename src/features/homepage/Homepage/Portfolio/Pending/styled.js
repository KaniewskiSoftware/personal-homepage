import styled, { keyframes } from "styled-components";

export const Text = styled.p`
  margin: 88px 0 48px;
`;

const spinner = keyframes`
from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
`;

export const Loader = styled.div`
  width: 160px;
  height: 160px;
  margin-bottom: 20px;
  border: 11.375px solid ${({ theme }) => theme.color.buttonBorder};
  border-right-color: ${({ theme }) => theme.color.blue};
  border-radius: 50%;
  animation-name: ${spinner};
  animation-duration: 1.5s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 120px;
    height: 120px;
  }
`;
