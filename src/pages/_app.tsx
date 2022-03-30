import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next';
import { compose } from 'redux';
import { wrapper } from '../store';
import { GlobalStyle, theme } from '../styles/globalStyles';
import { ThemeProvider } from 'styled-components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default compose(
  wrapper.withRedux,
  appWithTranslation
)(MyApp)
