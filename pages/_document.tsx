// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import cookies from 'next-cookies';
import { CookiesProvider } from 'react-cookie';

const isBrowser = () => typeof window !== 'undefined';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        cookies: cookies(ctx),
        styles: [
          ...React.Children.toArray(initialProps.styles),
          sheet.getStyleElement(),
        ],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          <link
            href={`https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap`}
            rel="stylesheet"
          />
          <link
            href={`https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap`}
            rel="stylesheet"
          />
          <link
            rel="shortcut icon"
            type="image/png"
            href="/images/favicon-16x16.png"
            key="favicon"
          />
          <link
            rel="alternate"
            type="application/rss+xml"
            href="/rss-feed.xml"
          />
          <meta charSet="utf-8" key="charset" />
          <meta property="og:type" content="website" />
          <meta name="theme-color" content="#333333" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link
            rel="apple-touch-icon-precomposed"
            href="/images/favicon-16x16.png"
          />
          <meta name="msapplication-TileColor" content="#FFFFFF" />
          <meta
            name="msapplication-TileImage"
            content="/images/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <CookiesProvider cookies={isBrowser() ? null : this.props['cookies']}>
            <Main />
            <script src="//developers.kakao.com/sdk/js/kakao.min.js" />
            <script
              type="text/javascript"
              src="https://code.jquery.com/jquery-1.12.4.min.js"
            ></script>
            <script
              type="text/javascript"
              src="https://cdn.iamport.kr/js/iamport.payment-1.1.7.js"
            ></script>
            <NextScript />
          </CookiesProvider>
        </body>
      </Html>
    );
  }
}
