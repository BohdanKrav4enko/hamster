import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    html, body {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        font-family: "Outfit", sans-serif;
        height: 100%;
    }

    #root {
        height: 100%;
    }
`;
