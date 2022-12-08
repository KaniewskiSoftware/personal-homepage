import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *,::after,::before {
        box-sizing: inherit;
    }

    body {
        min-height: 100vh;
        margin: 0;
        background: ${({ theme }) => theme.color.background};
        color: ${({ theme }) => theme.color.primaryText};
        font-family: 'Inter', sans-serif;
        letter-spacing: 0.05em;
        font-weight: 400;
        font-size: 20px;
        line-height: 1.4;
    }
`;
