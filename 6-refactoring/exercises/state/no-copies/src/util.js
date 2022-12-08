/**
 *
 */

export const saveNoCopies = (array, newValue) => {
  const indexOfArray = array.indexOf(newValue);
  if (indexOfArray === -1) {
    array.push(newValue);
  }
  return array;
};
