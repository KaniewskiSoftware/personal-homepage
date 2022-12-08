import styled from "styled-components";

export const Wrapper = styled.footer`
  max-width: 352px;
  margin: 24px 0;
  color: ${({ theme }) => theme.color.headers};
`;

export const Mail = styled.p`
  font-weight: 900;
  font-size: 30px;
`;

export const Text = styled.p`
  word-break: break-word;
  margin-bottom: 56px;
  font-size: 18px;
`;

export const IconContainer = styled.div`
  display: flex;
`;

export const Link = styled.a`
  width: 48px;
  height: 48px;
  margin-right: 24px;
  color: ${({ theme }) => theme.color.headers};
  transition: color 0.3s;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.color.blue};
  }
`;
