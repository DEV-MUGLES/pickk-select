import React from 'react';
import styled from 'styled-components';

import { useItemPackage } from '@src/hooks';
import { useRouter } from 'next/router';

import SelectItemCard from '@src/components/select/item-card';

function PackagePage() {
  const router = useRouter();
  const { code } = router.query;

  const { data: itemPackage, error } = useItemPackage(code?.toString());

  if (error) {
    return <>잘못된 경로입니다.</>;
  }

  if (!itemPackage) {
    return null;
  }

  const { items } = itemPackage;

  return (
    <Wrapper>
      {items.map((item) => (
        <SelectItemCard key={item.id} {...item} />
      ))}
    </Wrapper>
  );
}

export default PackagePage;

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`;
