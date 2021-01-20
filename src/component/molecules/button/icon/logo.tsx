import React from 'react';
import Link from 'next/link';

import ButtonProps from '../button-props';
import Button from '../button-default';
import { BLACK } from '@src/component/atoms/colors';

import LogoIcon from '@src/asset/icons/common/logo/default';

export type IProps = ButtonProps & {
  fill?: string;
};

export default function LogoButton(props: IProps) {
  const { fill } = props;
  return (
    <Link href="/" passHref>
      <a aria-label="home">
        <Button backgroundColor={props.backgroundColor}>
          <LogoIcon
            style={{ width: '6.4rem', height: '1.6rem' }}
            fill={fill || BLACK}
          />
        </Button>
      </a>
    </Link>
  );
}
