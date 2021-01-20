export const addDashToPhoneNumber = (value: string | number) => {
  const number = value.toString().replace(/[^0-9]/g, '');

  const secondIndex = number.length > 10 ? 7 : 6;
  const result = [
    number.slice(0, 3),
    number.slice(3, secondIndex),
    number.slice(secondIndex, number.length),
  ]
    .filter((value) => value != '')
    .join('-');
  return result.slice(0, 13);
};

export const removeCountryCode = (value: string | number) => {
  const number = value.toString().replace(/[^0-9]/g, '');

  if (number.slice(0, 2) !== '82') {
    return value.toString();
  }
  return addDashToPhoneNumber('0' + number.slice(2, number.length));
};
