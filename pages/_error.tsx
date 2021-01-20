import React from 'react';
import styled from 'styled-components';
import * as Sentry from '@sentry/browser';
import Link from 'next/link';
import Router from 'next/router';

import { P, Space, Row, Col } from '@src/component/atoms';

Sentry.init({ dsn: process.env.SENTRY_DSN });

/**
 * Send an error event to Sentry.
 *
 * Server-side:
 * Next.js captures SSR errors and never passes them to the Sentry
 * middleware. It does, however, render the _error.js component, so
 * we can manually fire Sentry events here.
 *
 * Client-side:
 * Unhandled client exceptions will always bubble up to the _error.js
 * component, so we can manually fire events here.
 */
const notifySentry = (err, req, statusCode) => {
  Sentry.configureScope((scope) => {
    if (!req) {
      scope.setTag(`ssr`, 'false');
    } else {
      scope.setTag(`ssr`, 'true');
      scope.setExtra(`url`, req.url);
      scope.setExtra(`params`, req.params);
      scope.setExtra(`query`, req.query);
      scope.setExtra(`statusCode`, statusCode);
      scope.setExtra(`headers`, req.headers);

      if (req.user) {
        scope.setUser({ id: req.user.id, email: req.user.email });
      }
    }
  });

  Sentry.captureException(err);
};

const DATA = {
  404: {
    title: '죄송합니다. 현재 찾을 수 없는 페이지를 요청하셨습니다.',
    description:
      '존재하지 않는 주소를 입력하셨거나,\n요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.\n궁금한 점이 있으시면 언제든 아래 번호로 문의해 주시기 바랍니다.'
  },
  500: {
    title: '시스템 장애가 발생했습니다.',
    description:
      '지금 이 서비스와 연결할 수 없습니다.\n문제를 해결하기 위해 열심히 노력하고 있습니다.\n궁금한 점이 있으시면 언제든 아래 번호로 문의해 주시기 바랍니다.'
  }
};

export type ErrorPageProps = {
  statusCode: number;
};

const ErrorPage = ({ statusCode }) => {
  const { title, description } = DATA[statusCode] || DATA[500];
  return (
    <Wrapper>
      <StatusCode>
        <P level={35} fontWeight="bold" color="#666">
          {statusCode}
        </P>
      </StatusCode>
      <Space level={2} />
      <P level={2} fontWeight="medium" color="#888">
        {title}
      </P>
      <Space level={3} />
      <P level={1} color="#aaa" preWrap textAlign="center" lineHeight="2.5rem">
        {description}
      </P>
      <Space level={1} />
      <P level={1} color="#888" fontWeight="medium">
        문의번호 : 010-4413-1261
      </P>
      <Space level={9} />
      <Row style={{ width: 'fit-content' }}>
        <LinkButton href="/" label="홈으로" />
        <Space level={3} direction="ROW" />
        <LinkButton label="이전 페이지로" />
      </Row>
    </Wrapper>
  );
};

const Neumorphism = `
    background: linear-gradient(145deg, #ffffff, #e6e6e6);
    box-shadow:  20px 20px 60px #d9d9d9, 
        -20px -20px 60px #ffffff;
`;

const NeumorphismSmall = `
    background: linear-gradient(145deg, #ffffff, #e6e6e6);
    box-shadow:  8px 8px 17px #d9d9d9, 
        -8px -8px 17px #ffffff;
`;

const Wrapper = styled(Col)`
  width: fit-content;
  height: fit-content;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const StatusCode = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 20rem;
  height: 20rem;
  ${Neumorphism}
`;

const LinkButton = ({ href, label }: { label: string; href?: string }) =>
  href ? (
    <Link href={href} passHref>
      <A>
        <P level={2} fontWeight="medium" color="#666">
          {label}
        </P>
      </A>
    </Link>
  ) : (
    <A onClick={() => Router.back()}>
      <P level={2} fontWeight="medium" color="#666">
        {label}
      </P>
    </A>
  );

const A = styled.a`
  width: 12rem;
  height: fit-content;
  border-radius: 2rem;
  padding: 1.2rem 0;
  text-decoration: none;
  color: #666;
  display: flex;
  justify-content: center;
  align-items: center;
  ${NeumorphismSmall}
`;

ErrorPage.getInitialProps = async ({ req, res, err }) => {
  const statusCode =
    err?.response?.status || res?.statusCode || err?.code === 'ENOENT'
      ? 404
      : null;

  notifySentry(err, req, statusCode);

  res.statusCode = statusCode;
  return { statusCode };
};

export default ErrorPage;
