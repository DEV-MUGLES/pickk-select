import React from 'react';
import { createGlobalStyle, keyframes } from 'styled-components';
import reset from 'styled-reset';
import App from 'next/app';
import Head from 'next/head';
import { SWRConfig } from 'swr';

const snakbarAnimation = keyframes`
  0% { bottom: -6.4rem; }
  20% { bottom: 0; }
  87% { bottom: 0; }
  100% { bottom: -6.4rem; }
`;

const GlobalStyle = createGlobalStyle`
${reset}
html {
  margin: 0;
  padding: 0;
  background-color: #fff;
  position: relative;
  z-index: -1;
}
body {
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', 'Noto Sans KR', sans-serif;
  font-size: 1rem;
  overflow-x: hidden;
  width: 100%;
  -webkit-overflow-scrolling: touch;
}
input {
  -webkit-appearance: none;
  -webkit-border-radius: 0;
}
html,
body,
body > div:nth-child(2) {
  height: 100%;
}
*,
::after,
::before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.slick-track {
  display: flex;
}

.rc-notification {
  @media (max-width: 450px) {
    left: 0;
  }
  @media (min-width: 451px) {
    left: calc((100vw - 36rem) / 2);
  }
  @media (min-width: 1024px) {
    left: calc(((100vw - 36rem + 15vw) / 2));
  }
}

.rc-notification-notice {
  visibility: collapse;
  padding: 0;
  margin: 0;
}

.move-up-leave.move-up-leave-active {
  visibility: visible;
  animation: ${snakbarAnimation} 1.5s;
}

@media (max-width: 252px) {
  html {
    font-size: 7px;
  }
}
@media (min-width: 253px) and (max-width: 270px) {
  html {
    font-size: 7.5px;
  }
}
@media (min-width: 271px) and (max-width: 288px) {
  html {
    font-size: 8px;
  }
}
@media (min-width: 289px) and (max-width: 306px) {
  html {
    font-size: 8.5px;
  }
}
@media (min-width: 307px) and (max-width: 324px) {
  html {
    font-size: 9px;
  }
}
@media (min-width: 325px) and (max-width: 342px) {
  html {
    font-size: 9.5px;
  }
}
@media (min-width: 343px) and (max-width: 360px) {
  html {
    font-size: 10px;
  }
}
@media (min-width: 361px) and (max-width: 375px) {
  html {
    font-size: 10.416px;
  }
}
@media (min-width: 376px) and (max-width: 378px) {
  html {
    font-size: 10.5px;
  }
}
@media (min-width: 379px) and (max-width: 396px) {
  html {
    font-size: 11px;
  }
}
@media (min-width: 397px) and (max-width: 414px) {
  html {
    font-size: 11.5px;
  }
}
@media (min-width: 415px) and (max-width: 432px) {
  html {
    font-size: 12px;
  }
}
@media (min-width: 433px) and (max-width: 450px) {
  html {
    font-size: 12.5px;
  }
}
@media (min-width: 451px) {
  html {
    font-size: 13px;
  }

@media (min-width: 1024px) {
  .overlay {
    &&{
      display: none;
    }
  }
}

`;

class PickkApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>핔 select</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <GlobalStyle />
        <SWRConfig
          value={{
            revalidateOnFocus: false,
          }}
        >
          <Component {...pageProps} />
        </SWRConfig>
      </>
    );
  }
}

export default PickkApp;
