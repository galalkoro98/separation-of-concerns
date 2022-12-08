import { reverseAndUpper } from './util.js';

export const reverseAndUpperHandler = (even) => {
  const input = even.target.value;
  const reversedUppercase = reverseAndUpper(input);
  document.getElementById('output').innerHTML = reversedUppercase;
};
