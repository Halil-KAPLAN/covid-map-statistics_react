export const formatNumber = (number, decimalPlaces) =>
  ((number || number === 0) &&
    number.toLocaleString(undefined, {
      minimumFractionDigits: decimalPlaces,
    })) ||
  "";
