import { GlobalStyleComponent, createGlobalStyle } from "styled-components";

const GlobalStyle: GlobalStyleComponent<{}, {}> = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html, body {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
    }

`;

export default GlobalStyle;
