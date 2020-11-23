import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  #__next {
    height: 100%;
  }
`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
