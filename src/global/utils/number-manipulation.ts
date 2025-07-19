export const roundUpToGivenNumberOfDecimalPlaces = (
  num: number,
  dp: number
): number => {
  // Ensure dp is non-negative
  if (dp < 0) {
    throw new Error('Decimal places cannot be negative');
  }

  // Handle case where dp is 0 (round to nearest integer)
  if (dp === 0) {
    return Math.ceil(num);
  }

  // Create a multiplier based on the number of decimal places
  const multiplier = Math.pow(10, dp);

  // Round the number to the desired decimal places
  return Math.ceil(num * multiplier) / multiplier;
};

export const partsMarkupLabourTotal = (
  parts: number,
  markup: number,
  labour: number,
  labourRate: number
): number => {
  let preparedMarkupRate = markup / 100 + 1;
  return parts * preparedMarkupRate + labour * labourRate;
};
