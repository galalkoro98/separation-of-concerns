/**
 *
 */
export const averageEvens = (allNumbers) => {
  let howManyEvens = 0;
  let sumOfEvens = 0;

  allNumbers.forEach((num) => {
    if (num % 2 === 0) {
      sumOfEvens += num;
      howManyEvens += 1;
    }
  });

  let average = sumOfEvens / howManyEvens;
  if (howManyEvens === 0) {
    return 0;
  } else {
    return average;
  }
};
