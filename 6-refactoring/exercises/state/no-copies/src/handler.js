import { saveNoCopies } from './utils.js';
import { state } from '../data/state.js';


export const saveNoCopiesHandler = () => {
  let userInput = null;
  while (userInput === null) {
    userInput = prompt('enter a string to save');
  }

  const result = saveNoCopies(array, newValue);
  const message = data.noCopies.join(', ');
  alert(message, result);
};
