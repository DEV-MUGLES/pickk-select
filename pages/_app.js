import React from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import reset from 'styled-reset';
import App from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import { SWRConfig } from 'swr';

import initGA from '../src/lib/ga';
import TagManager from 'react-gtm-module';
import * as Sentry from '@sentry/browser';

import LogoHandIcon from '@src/asset/icons/common/logo/hand';
import { P, Clickable, Space } from '../src/component/atoms';

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

const tagManagerArgs = {
  gtmId: process.env.GTM_ID,
};

Sentry.init({
  dsn: process.env.SENTRY_DSN,
});

class PickkApp extends App {
  componentDidCatch(error, errorInfo) {
    if (process.env.NODE_ENV === 'production') {
      Sentry.withScope((scope) => {
        Object.keys(errorInfo).forEach((key) => {
          scope.setExtra(key, errorInfo[key]);
        });

        Sentry.captureException(error);
      });
    }

    super.componentDidCatch(error, errorInfo);
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>핔 - 당신의 패션 선택지</title>
          <meta
            name="naver-site-verification"
            content="38191251ab7e3cd0cb4a0a4b8b6f76ee0f3c1f9e"
            key="naver"
          />
          <meta
            name="keywords"
            content="핔사이트,픽사이트,깡스타일리스트,진진호,키작은광자,식스타일,호수,맨투맨,데님팬츠,니트,스니커,로맨틱무브,더니트컴퍼니,커스텀어클락,가먼트레이블,벨리에,수아레,낫앤낫,페이탈리즘,피스워커,모드나인,메종미네드,커렌트,페이브먼트,"
          />
          <meta name="author" content="핔 - 당신의 패션 선택지" />
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
