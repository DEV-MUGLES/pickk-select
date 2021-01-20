import React from 'react';
import styled from 'styled-components';

import { P, Img } from '@src/component/atoms';
import { BLACK, SALE_RED } from '@src/component/atoms/colors';

const defaultBlockComponent = (blockType) =>
  ({
    unstyled: Unstyled,
    paragraph: Unstyled,
    'header-one': H1,
    atomic: Atomic,
  }[blockType] || null);

const defaultStyleComponent = (style) =>
  ({
    BOLD: Bold,
    ITALIC: Italic,
    UNDERLINE: Underline,
    STRIKETHROUGH: 's',
    CODE: 'code',
    RED: Red,
  }[style] || 'span');

const defaultEntityComponent = (entityType) =>
  ({
    image: ({ data }) => (
      <Img {...data} style={{ width: '100%', height: 'auto' }} />
    ),
    link: ({ data, children }) => <a href={data.url}>{children}</a>,
  }[entityType]);

const parseBlockComponent = (component) => {
  if (typeof component === 'object' && component instanceof Array) {
    return component;
  }
  return [component, null];
};

export default function DraftjsRenderer({
  data: { blocks, entityMap },
  getBlockComponent = defaultBlockComponent,
  getStyleComponent = defaultStyleComponent,
  getEntityComponent = defaultEntityComponent,
  textComponent = ({ children }) => children,
}) {
  const blockList = [];
  const blocksDepthStack = [];

  for (const block of blocks) {
    if (block.depth > 0) {
      blocksDepthStack[block.depth - 1].children =
        blocksDepthStack[block.depth - 1].children || [];
      blocksDepthStack[block.depth - 1].children.push(block);
    } else {
      blockList.push(block);
    }
    blocksDepthStack[block.depth] = block;
    blocksDepthStack.splice(block.depth + 1);
  }

  const renderBlockArray = (array) => {
    const newArray = [];
    let innerArray = [];
    for (const block of array) {
      if (innerArray.length > 0 && innerArray[0].type === block.type) {
        innerArray.push(block);
      } else {
        innerArray = [block];
        newArray.push(innerArray);
      }
    }
    return newArray.map((group) =>
      React.createElement(
        parseBlockComponent(getBlockComponent(group[0].type))[1] ||
          React.Fragment,
        { key: group[0].key },
        group.map((block) =>
          React.createElement(
            parseBlockComponent(getBlockComponent(block.type))[0] ||
              React.Fragment,
            { key: block.key, data: block.data },
            block.children
              ? [renderRichText(block), ...renderBlockArray(block.children)]
              : renderRichText(block)
          )
        )
      )
    );
  };

  const renderRichText = (block) => {
    let indexes = [0];

    block.entityRanges.forEach((entity) => {
      indexes.push(entity.offset);
      indexes.push(entity.offset + entity.length);
    });
    block.inlineStyleRanges.forEach((style) => {
      indexes.push(style.offset);
      indexes.push(style.offset + style.length);
    });
    indexes.sort((a, b) => a - b);

    indexes = indexes.filter(
      (v, i) => indexes.indexOf(v) === i && v != block.text.length
    );

    const ranges = indexes
      .map((index, i) => ({
        start: index,
        end: indexes[i + 1] || block.text.length,
      }))
      .map(({ start, end }) => ({
        start,
        end,
        text: block.text.substring(start, end),
        styles: block.inlineStyleRanges
          .filter(
            (style) =>
              style.offset <= start && style.offset + style.length >= end
          )
          .map((style) => style.style),
        entities: block.entityRanges
          .filter(
            (entity) =>
              entity.offset <= start && entity.offset + entity.length >= end
          )
          .map((entity) => entityMap[entity.key]),
      }));

    const renderStyledText = (text, styles) => {
      let rendered = text;
      for (let i = 0; i < styles.length; i++) {
        rendered = React.createElement(
          getStyleComponent(styles[i]) || React.Fragment,
          {},
          rendered
        );
      }
      return rendered;
    };

    const renderEntities = (text, entities) => {
      let rendered = text;
      for (const entity of entities) {
        rendered = React.createElement(
          getEntityComponent(entity.type) || React.Fragment,
          { data: entity.data },
          rendered
        );
      }
      return rendered;
    };

    return ranges.map((range, index) =>
      React.cloneElement(
        renderEntities(
          renderStyledText(
            React.createElement(
              textComponent || React.Fragment,
              { children: null },
              range.text
            ),
            range.styles
          ),
          range.entities
        ),
        { key: index }
      )
    );
  };

  return <Wrapper>{renderBlockArray(blockList) || ''}</Wrapper>;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: fit-content;
`;

const Red = styled.strong`
  font-weight: inherit;
  color: ${SALE_RED};
`;

const Bold = styled.b`
  font-weight: 700;
`;

const Italic = styled.i`
  font-style: italic;
`;

const Underline = styled.u`
  text-decoration: underline;
`;

const H1 = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  padding: 0 0.8rem;
  border-left: 0.4rem solid ${BLACK};
  margin: 1.6rem 0;
`;

const Unstyled = styled(P).attrs(() => ({
  level: 2,
  style: {
    margin: '0.4rem 0',
    padding: '0 1.2rem',
  },
}))``;

const Atomic = styled.div`
  width: 100%;
  height: fit-content;
`;
