import styled from "styled-components";

export const Wrapper = styled.footer`
  max-width: 670px;
  margin: 0;
  word-break: break-word;
`;

export const Mail = styled.a`
  display: block;
  margin: 24px 0;
  font-weight: 900;
  font-size: 30px;
  text-decoration: none;
  color: ${({ theme }) => theme.color.primaryText};
  transition: color 0.3s;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.color.hoverBlue};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 28px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    margin: 12px 0;
    font-size: 18px;
  }
`;

export const Text = styled.p`
  word-break: break-word;
  margin-bottom: 56px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    margin-bottom: 40px;
  }
`;

export const IconsList = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  gap: 24px;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    gap: 16px;
  }
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.color.primaryText};
  transition: color 0.3s;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.color.blue};
  }
`;

export const styleIcon = (Icon) => styled(Icon)`
  width: 48px;
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 32px;
  }
`;
