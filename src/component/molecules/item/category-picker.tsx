import React from 'react';
import styled from 'styled-components';

import { Picker } from '@src/component/atoms';

import { getTypeByName } from '@src/lib/ItemTypes';
import { ItemMajorTypes, ItemMinorTypes } from '@src/types';

import ITEM_MAJOR_TYPES from '@src/data/item/types.json';

export type ItemCategoryPickerProps = {
  value: [ItemMajorTypes, ItemMinorTypes];
  onChange: (value: [ItemMajorTypes, ItemMinorTypes]) => void;
};

function ItemCategoryPicker({ value, onChange }: ItemCategoryPickerProps) {
  const [itemMajorType, itemMinorType] = value;

  const handleTypeChange = (e) => {
    const { name, value } = e.target;

    const type = getTypeByName(value)?.type;
    onChange(
      name === 'itemMajorType'
        ? [type as ItemMajorTypes, null]
        : [itemMajorType, type as ItemMinorTypes]
    );
  };

  return (
    <Wrapper>
      <Picker
        name="itemMajorType"
        value={itemMajorType?.name}
        onChange={handleTypeChange}
        block
        items={[{ key: '_', label: '대분류', value: null }].concat(
          ITEM_MAJOR_TYPES.map((type) => ({
            key: type.id.toString(),
            label: type.name,
            value: type.name,
          }))
        )}
        style={{ marginRight: '0.8rem' }}
      />
      <Picker
        name="itemMinorType"
        value={itemMinorType?.name}
        onChange={handleTypeChange}
        block
        items={[
          { key: '_', label: '중분류', value: null },
          ...(itemMajorType?.itemMinorTypes?.map((type) => ({
            key: type.id,
            label: type.name,
            value: type.name,
          })) || []),
        ]}
        disabled={!itemMajorType}
      />
    </Wrapper>
  );
}

export default React.memo(ItemCategoryPicker);

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: fit-content;
  margin-bottom: 1.2rem;
`;
