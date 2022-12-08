import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  max-width: 1216px;
  margin: 115px auto 109px;
  padding: 0 14px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    margin: 56px auto 54px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    margin: 32px auto 31px;
  }
`;
