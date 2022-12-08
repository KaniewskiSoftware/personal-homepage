import styled from "styled-components";

export const Wrapper = styled.section`
  margin-bottom: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    margin-bottom: 72px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    margin-bottom: 48px;
  }
`;

export const Icon = styled.div`
  height: 40px;
  width: 40px;
  color: ${({ theme }) => theme.color.blue};

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 32px;
    height: 32px;
  }
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 900;
  margin: 13px 0 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 22px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 18px;
  }
`;

export const Text = styled.p`
  margin: 0 0 24px;
`;
