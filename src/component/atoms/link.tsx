import React, { ReactNode, ReactNodeArray } from 'react';
import styled from 'styled-components';
import _Link, { LinkProps } from 'next/link';

function Link({
  href,
  as,
  passHref = true,
  children,
  className,
}: LinkProps & { children: ReactNode | ReactNodeArray; className?: string }) {
  if (!href) {
    return <>{children}</>;
  }
  return (
    <_Link {...{ href, as, passHref }}>
      <A className={className}>{children}</A>
    </_Link>
  );
}

export default React.memo(Link);

const A = styled.a`
  text-decoration: none;
`;
