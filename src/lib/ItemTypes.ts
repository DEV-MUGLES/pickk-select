import ITEM_MAJOR_TYPES from '@src/data/item/types.json';
import { ItemTypeUnit } from '@src/types';

export const root = {
  id: 0,
  itemMajorTypes: ITEM_MAJOR_TYPES,
  name: '전체',
  code: 'ALL',
};

const typeLabels = ['itemMajorType', 'itemMinorType'];

export const getTypeById = (
  input: number,
  now = root,
  typeLabel = null
): ItemTypeUnit => {
  if (input < 0) {
    return {
      id: {},
      type: root,
    };
  }
  for (const label of typeLabels) {
    if (!now[`${label}s`]) continue;
    for (const itemType of now[`${label}s`]) {
      if (itemType.id === input) {
        if (typeLabel && label !== typeLabel) {
          continue;
        }
        return {
          id: {
            [`${label}Id`]: itemType.id,
          },
          type: itemType,
        };
      } else {
        const result = getTypeById(input, itemType);
        if (result) return result;
      }
    }
  }
  return null;
};

export const getTypeByCode = (
  input: string | string[],
  now = root,
  typeLabel = null
): ItemTypeUnit => {
  const keyword = input.toString().toUpperCase();
  if (keyword === 'ALL') {
    return {
      id: {},
      type: root,
    };
  }
  for (const label of typeLabels) {
    if (!now[`${label}s`]) continue;
    for (const itemType of now[`${label}s`]) {
      if (itemType.code === keyword) {
        if (typeLabel && label !== typeLabel) {
          continue;
        }
        return {
          id: {
            [`${label}Id`]: itemType.id,
          },
          type: itemType,
        };
      } else {
        const result = getTypeByCode(input, itemType);
        if (result) return result;
      }
    }
  }
  return null;
};

export const getTypeByName = (
  input: string | string[],
  now = root,
  typeLabel = null
): ItemTypeUnit => {
  const keyword = input.toString().toUpperCase();
  if (keyword === 'ALL') {
    return {
      id: {},
      type: root,
    };
  }
  for (const label of typeLabels) {
    if (!now[`${label}s`]) continue;
    for (const itemType of now[`${label}s`]) {
      if (itemType.name === keyword) {
        if (typeLabel && label !== typeLabel) {
          continue;
        }
        return {
          id: {
            [`${label}Id`]: itemType.id,
          },
          type: itemType,
        };
      } else {
        const result = getTypeByName(input, itemType);
        if (result) return result;
      }
    }
  }
  return null;
};

export const getIdByType = (type: ItemTypeUnit['type']): ItemTypeUnit['id'] => {
  if (!type) {
    return {};
  }
  if (type['itemMajorTypes']) {
    return {};
  }
  if (type['itemMinorTypes']) {
    return {
      itemMajorTypeId: type.id,
    };
  }
  return {
    itemMinorTypeId: type.id,
  };
};

export const getItemTypeTree = (type) => {
  if (!type) {
    return {};
  }
  if (type.itemMajorTypes) {
    return {};
  }
  if (type.itemMinorTypes) {
    return {
      itemMajorType: type,
    };
  }
  if (type.itemFinalTypes) {
    return {
      itemMajorType: root.itemMajorTypes.find((majorType) =>
        majorType.itemMinorTypes.find((minorType) => minorType.id === type.id)
      ),
      itemMinorType: type,
    };
  }
  return {
    itemMajorType: root.itemMajorTypes.find((majorType) =>
      majorType.itemFinalTypes.find((finalType) => finalType.id === type.id)
    ),
    itemMinorType: root.itemMajorTypes
      .reduce((acc, majorType) => acc.concat(majorType.itemMinorTypes), [])
      .find((minorType) =>
        minorType.itemFinalTypes.find((finalType) => finalType.id === type.id)
      ),
    itemFinalType: type,
  };
};

export const getTitleByType = (type): string => {
  const { itemMajorType, itemMinorType, itemFinalType } = getItemTypeTree(type);
  if (!itemMajorType) {
    return '전체';
  }
  if (!itemMinorType) {
    return itemMajorType.name;
  }
  if (!itemFinalType) {
    return itemMinorType.name;
  }
  if ((itemMinorType.name as string).includes(itemFinalType.name)) {
    return itemFinalType.name;
  }
  return `${itemFinalType.name} ${itemMinorType.name}`;
};
