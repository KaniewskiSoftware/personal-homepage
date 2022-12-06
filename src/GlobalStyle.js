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
    font-family: 'Inter', sans-serif;
}
`;
