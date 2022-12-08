import styled from "styled-components";
import { ReactComponent as danger } from "../../images/danger.svg";

export const Danger = styled(danger)`
  margin-top: 96px;
  width: 37px;
  height: 34px;
  color: ${({ theme }) => theme.color.primaryText};
`;

export const Header = styled.h3`
  margin: 24px 0 32px;
  font-weight: 700;
  font-size: 24px;
  color: ${({ theme }) => theme.color.primaryText};
`;

export const Text = styled.p`
  margin: 0 0 16px;
`;
