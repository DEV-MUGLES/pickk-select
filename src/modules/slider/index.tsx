import React, { useState, SetStateAction, useEffect } from 'react';
import styled from 'styled-components';

import Row from '@src/component/atoms/Row';

import { getRem } from '@src/lib/utils/Rem';

function clamp(n: number, min: number, max: number) {
  return Math.max(Math.min(n, max), min);
}

const SLIDE_SENSITIVITY = 12;

export type SliderCardProps = {
  swiping: boolean;
};

export type SliderProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Card: React.FunctionComponent<any>;
  widthRem: number;
  marginRightRem?: number;
  current: number;
  setCurrent: React.Dispatch<SetStateAction<number>>;
  loop?: boolean;
  labelStyle?: React.CSSProperties;
  style?: React.CSSProperties;
  autoPlay?: boolean;
  interval?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cardProps?: any;
};

function Slider({
  items = [],
  Card,
  widthRem,
  marginRightRem = 0,
  current,
  setCurrent,
  loop,
  labelStyle,
  style,
  autoPlay,
  interval = 4000,
  cardProps = {},
}: SliderProps) {
  const [topDelta, setTopDelta] = useState({ x: 0, y: 0 });
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [pressed, setPressed] = useState(false);
  const [differOffset, setDifferOffset] = useState({ x: 0, y: 0 });
  const [swiping, setSwiping] = useState(false);
  const [timerId, setTimerId] = useState(null);

  const [isVertical, setVertical] = useState(false);

  const SLIDE_WIDTH = getRem() * (widthRem + marginRightRem);

  useEffect(() => {
    setMouse({ x: -current * SLIDE_WIDTH, y: 0 });
    _setInterval();
  }, [current]);

  const handleTouchStart = (e) => {
    handleMouseDown(e.touches[0]);
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    handleMouseMove(e.touches[0]);
  };

  const handleMouseDown = ({ pageX, pageY }) => {
    setTopDelta({ x: pageX - mouse.x, y: pageY - mouse.y });
    setPressed(true);
    setSwiping(false);
    setVertical(false);
  };

  const handleMouseMove = ({ pageX, pageY }) => {
    if (pressed) {
      const mouse = {
        x: pageX - topDelta.x,
        y: pageY - topDelta.y,
      };
      const differ = { x: -mouse.x - current * SLIDE_WIDTH, y: -mouse.y };

      if (Math.abs(differOffset.x + differ.x) >= 1.5) {
        setSwiping(true);
      }

      if (isVertical) return;

      if (Math.abs(differOffset.y + differ.y) >= 35) {
        setVertical(true);
      }

      if (Math.abs(differOffset.x) * SLIDE_SENSITIVITY > SLIDE_WIDTH) {
        let newCurrent = current;
        if (differOffset.x > 0) {
          newCurrent++;
        } else if (differOffset.x < 0) {
          newCurrent--;
        }
        if (!loop) {
          newCurrent = clamp(newCurrent, 0, (items?.length || 0) - 1);
        } else {
          newCurrent = (newCurrent + items?.length) % items?.length;
        }
        setCurrent(newCurrent);
        setMouse({ x: -newCurrent * SLIDE_WIDTH, y: 0 });
        handleMouseUp();
        return;
      }
      setDifferOffset({
        x: differOffset.x + differ.x,
        y: differOffset.y + differ.y,
      });
    }
  };

  const handleMouseUp = () => {
    if (!pressed) {
      return;
    }
    setDifferOffset({ x: 0, y: 0 });
    setPressed(false);
    setTopDelta({ x: 0, y: 0 });
  };

  const _setInterval = () => {
    _clearInterval();
    let newCurrent = current + 1;
    if (!loop) {
      newCurrent = clamp(newCurrent, 0, items?.length - 1);
    } else {
      newCurrent = (newCurrent + items?.length) % items?.length;
    }
    if (autoPlay) {
      setTimerId(
        setInterval(() => {
          setCurrent(newCurrent);
        }, interval)
      );
    }
  };

  const _clearInterval = () => {
    clearInterval(timerId);
  };

  const hoverStart = () => {
    if (autoPlay) {
      _clearInterval();
    }
  };

  const hoverEnd = () => {
    if (autoPlay) {
      _setInterval();
    }
  };

  return (
    <Wrapper style={style}>
      <Label
        style={labelStyle}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
        onMouseEnter={hoverStart}
        onMouseLeave={hoverEnd}
      >
        <Row
          style={{
            width: 'fit-content',
            height: 'fit-content',
            alignItems: 'center',
            transform: `translateX(${mouse.x}px)`,
            transition: 'transform ease-out 0.3s',
          }}
        >
          {items?.map((item, index) => (
            <Card
              key={index}
              index={index}
              current={current}
              {...item}
              {...cardProps}
              onClick={() => console.log(index, 'card clicked')}
              swiping={swiping}
            />
          ))}
        </Row>
      </Label>
    </Wrapper>
  );
}

export default React.memo(Slider);

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  overflow: visible;
  position: relative;
`;

const Label = styled.label`
  width: 100%;
  height: fit-content;
  top: 0;
  left: 0;
  z-index: 2;
`;
