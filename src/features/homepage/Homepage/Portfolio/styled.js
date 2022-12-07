import styled from "styled-components";

export const Header = styled.div`
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.color.headers};
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 900;
  margin: 13px 0 8px;
  letter-spacing: 0.05em;
`;

export const Text = styled.p`
  margin: 0;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0.05em;
`;