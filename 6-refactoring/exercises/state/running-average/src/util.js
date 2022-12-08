/**
 *
 */
export const average = (arr) => {
  let sum = 0;
  for (let number of arr) {
    sum = sum + number;
  }

  if (!arr.length) {
    return 0;
  }

  const averageOfArr = sum / arr.length;
  return averageOfArr;
};
