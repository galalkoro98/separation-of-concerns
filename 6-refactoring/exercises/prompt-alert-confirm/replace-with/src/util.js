/**
 *
 */
export const replaceWith = (stringToRepacify, oldChar, newChar) => {
  // execute core logic
  let newString = '';
  for (const char of stringToRepacify) {
    if (char === oldChar) {
      newString += newChar;
    } else {
      newString += char;
    }
  }
  return newString;
};
