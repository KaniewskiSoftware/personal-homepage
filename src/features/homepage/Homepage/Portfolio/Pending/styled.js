import styled from "styled-components";

export const Text = styled.p`
  margin-top: 88px 0 48px;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.4;
  color: ${({ theme }) => theme.color.headers};
`;

export const Loader = styled.div`
  width: 160px;
  height: 160px;
  border: 11.375px solid ${({ theme }) => theme.color.buttonBorder};
  border-right-color: ${({ theme }) => theme.color.blue};
  border-radius: 50%;
  animation-name: rotation;
  animation-duration: 1s;
  animation-timing-function: ease-in;
  animation-iteration-count: infinite;

  @keyframes rotatation {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
