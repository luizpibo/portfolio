import { GlobalStyleComponent, createGlobalStyle } from "styled-components";

const GlobalStyle: GlobalStyleComponent<{}, {}> = createGlobalStyle`

   * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;   
    }

    html, body {
        font-size: 1rem;
        background-color: #121212;
        scroll-behavior: smooth;
        overflow-x: hidden;
        *:target {
            scroll-margin-top: 5rem;
        }
    }

`;

export default GlobalStyle;
