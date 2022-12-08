a
import { average } from './util.js';
// import { data } from './data.js';

import { state } from '../data/state.js';


export const runningAverageHandler = () => {
  const userInput = prompt('add a number to the running average');
  if (userInput === null) {
    alert('good bye');
    return;
  }

  const newNumber = Number(userInput);
  if (Number.isNaN(newNumber) || userInput === '') {
    alert(`"${userInput}" is not a valid number`);
    return;
  }

  const averageResult = average(userInput, newNumber);

  const message = `running average: ${averageResult}`;
  alert(message);
};
