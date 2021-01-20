import React, { ReactChild, useState } from 'react';
import styled from 'styled-components';

import ChevronUpIcon from '@src/asset/icons/common/chevron/up';
import ChevronDownIcon from '@src/asset/icons/common/chevron/down';
import { Row, P } from '@src/component/atoms';
import { LIGHT_GREY } from '@src/component/atoms/colors';

export type AccordionRowProps = {
  title: string;
  children: ReactChild;
  isVisible?: boolean;
};

function AccordionRow({
  title,
  children,
  isVisible = true,
}: AccordionRowProps) {
  const [selected, setSelected] = useState(false);

  const toggleSelected = () => {
    setSelected(!selected);
  };

  if (!isVisible) {
    return <></>;
  }

  return (
    <Wrapper style={{ backgroundColor: selected ? LIGHT_GREY : 'white' }}>
      <HeadWrapper onClick={toggleSelected}>
        <P level={2} fontWeight="medium">
          {title}
        </P>
        {selected ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </HeadWrapper>
      <Panel style={{ maxHeight: selected ? '300px' : 0 }}>{children}</Panel>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding: 1.2rem 1.6rem;
  transition: background-color 0.1s ease-out;
`;

const HeadWrapper = styled(Row)`
  width: 100%;
  justify-content: space-between;
  padding: 0.8rem 0;
`;

const Panel = styled.div`
  overflow: hidden;
  transition: max-height 0.05s ease-out;
`;

export default React.memo(AccordionRow);
