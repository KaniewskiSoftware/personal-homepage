import styled from "styled-components";
import { ReactComponent as danger } from "../../images/danger.svg";

export const Header = styled.h3`
  font-weight: 700;
  font-size: 24px;
  color: ${({ theme }) => theme.color.headers};
`;

export const Danger = styled(danger)`
  width: 37px;
  height: 34px;
  color: ${({ theme }) => theme.color.headers};
`;
