import styled from "styled-components";

export const Wrapper = styled.section`
  margin-bottom: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.color.headers};
`;

export const Icon = styled.div`
  height: 40px;
  width: 40px;
  color: ${({ theme }) => theme.color.blue};
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 900;
  margin: 13px 0 8px;
`;

export const Text = styled.p`
  margin: 0;
`;
