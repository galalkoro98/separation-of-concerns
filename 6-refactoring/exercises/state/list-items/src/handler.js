import { list } from './util.js';
// import { bulletPoint } from './data.js';

export const listHandler = () => {
  const allInputs = [];
  let acceptingInput = true;
  while (acceptingInput) {
    const nextInput = prompt('enter a list item');
    if (nextInput !== null) {
      allInputs.push(nextInput);
    } else {
      acceptingInput = false;
    }
  }

  const result = list(allInputs);
  const message = `all items:${result}`;
  alert(message);
};
