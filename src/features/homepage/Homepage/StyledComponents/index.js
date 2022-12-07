import styled from "styled-components";

export const TitleIcon = styled.img`
  width: 27px;
  height: 32px;
`;

export const MediaIcon = styled.img`
  width: 48px;
  height: 48px;
  background: ${({ theme }) => theme.color.headers};
  color: ${({ theme }) => theme.color.iconsContent};
  transition: background-color 0.3s;

  &:hover {
    background: ${({ theme }) => theme.color.blue};
  }
`;
