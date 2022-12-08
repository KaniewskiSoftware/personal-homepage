import styled from "styled-components";

export const Wrapper = styled.footer`
  max-width: 352px;
  margin: 24px 0;
`;

export const Mail = styled.p`
  font-weight: 900;
  font-size: 30px;

  &:hover {
    color: ${({ theme }) => theme.color.hoverBlue};
  }
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
  color: ${({ theme }) => theme.color.primaryText};
  transition: color 0.3s;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.color.blue};
  }
`;
