export const getRem = () => {
  if (typeof window === 'undefined') {
    return 10.41;
  }
  if (window.innerWidth >= 361 && window.innerWidth <= 375) {
    return 10.416;
  }
  return Math.min(13, Math.max(7, Math.ceil(window.innerWidth / 18) / 2));
};

export const rem = (input: number): string => `${input / 10}rem`;
