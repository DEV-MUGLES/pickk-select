export const isLastSyllableHasfinalConsonant = (word) => {
  if (typeof word !== 'string') return;

  const lastSyllable = word.charAt(word.length - 1);
  const uniCode = lastSyllable.charCodeAt(0);

  if (uniCode < 44032 || uniCode > 55203) return;

  return (uniCode - 44032) % 28 !== 0;
};

export const stringToNumArr = (str: string, separator: string): number[] =>
  str.split(separator).map((numStr) => Number(numStr.trim()));

export const stringToNumber = (str: string): number =>
  Number(str.replace(/[^0-9]/g, '') || '0');
