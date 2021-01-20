import { ItemOption, Options } from '@src/types';

export const isOptionSoldOut = (
  values: ItemOption['options']['values'],
  isSoldout: ItemOption['options']['isSoldout'],
  selectedOptions: Options,
  option: {
    label: string;
    value: string;
  }
): boolean => {
  const { label, value } = option;
  const labelIndex = Object.keys(values).indexOf(label);
  const valueIndex = values[label].indexOf(value);
  const selected = Object.keys(selectedOptions).map((label) => {
    const value = selectedOptions[label];
    return values[label].indexOf(value);
  });

  const childrenNum = Object.keys(values)
    .filter((_, i) => i > labelIndex)
    .reduce((acc, curr) => acc * values[curr].length, 1);

  const soldoutNum = isSoldout.filter(
    (v) =>
      JSON.stringify(v.slice(0, labelIndex + 1)) ===
      JSON.stringify([...selected, valueIndex])
  ).length;
  return childrenNum === soldoutNum;
};

const ItemOptionsUtil = {
  isOptionSoldOut,
};

export default ItemOptionsUtil;
