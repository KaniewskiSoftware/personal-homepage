import styled from "styled-components";
import { ReactComponent as danger } from "../../images/danger.svg";

export const Danger = styled(danger)`
  margin-top: 96px;
  width: 37px;
  height: 34px;
  color: ${({ theme }) => theme.color.primaryText};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: 48px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    margin-top: 24px;
  }
`;

export const Header = styled.h3`
  margin: 24px 0 32px;
  font-weight: 700;
  font-size: 24px;
  color: ${({ theme }) => theme.color.primaryText};

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 22px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 18px;
  }
`;

export const Text = styled.p`
  margin: 0 0 32px;
`;
