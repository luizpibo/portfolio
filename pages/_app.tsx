import type { AppProps } from "next/app";
import GlobalStyle from "../src/theme/global";
import "./_app.css";

import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = {
    colors: {
      blue: "#00D2DF",
      gradientPink: "linear-gradient(to right, #D24074, #6518B4)",
      gradientPurple: "linear-gradient(to right, #9358F7, #10D7E2)",
    },
    neutralColors: {
      dark: "#121212",
      dark200: "#151515",
      grayLight: "#C4C4C4",
      light: "#FFFFFF",
    },
  };

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
