import ITEM_TAGS from '@src/data/item/tags.json';

export const getItemTagById = (id: number) =>
  ITEM_TAGS.find((itemTag) => itemTag.id === id);

export const getItemTagsByMinorTypeId = (itemMinorTypeId: number) =>
  ITEM_TAGS.filter((itemTag) => itemTag.itemMinorTypeId === itemMinorTypeId);
