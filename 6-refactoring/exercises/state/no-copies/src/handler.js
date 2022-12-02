import { saveNoCopies } from './util.js';
// import { data } from './data.js';

export const saveNoCopiesHandler = () => {
  let userInput = null;
  while (userInput === null) {
    userInput = prompt('enter a string to save');
  }

  const result = saveNoCopies(array, newValue);
  const message = data.noCopies.join(', ');
  alert(message, result);
};
