/**
 *
 */
export const search = (array, newValue) => {
  const result = array
    .filter((food) => food.includes(newValue))
    .map((food) => `\n- ${food}`)
    .join('');

  let emptyString = '';

  if (newValue === emptyString) {
    return emptyString;
  }
  return result;
};

// console.log(search(['egg', 'pie', 'peanut'], 'e'));
