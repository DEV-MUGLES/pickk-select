import React from 'react';

import AccordionRow, { AccordionRowProps } from './row';

export type AccordionProps = {
  data: Array<Pick<AccordionRowProps, 'title' | 'children' | 'isVisible'>>;
};

function Accordion({ data }: AccordionProps) {
  return (
    <div>
      {data?.map((row, i) => (
        <AccordionRow {...row} />
      ))}
    </div>
  );
}

export default React.memo(Accordion);
