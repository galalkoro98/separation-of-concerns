/**
 *
 */

const bulletPoint = '*'; // data to refactor out of this file
export const list = (allInputs) => {
  let stringList = '';
  for (const input of allInputs) {
    stringList += `\n${bulletPoint} ${input}`;
  }
  return stringList;
};
