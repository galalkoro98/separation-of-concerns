import { capSwap } from './util.js';

export const capSwapHandler = () => {
  // read & process user input
  let userInput = null;
  while (userInput === null) {
    userInput = prompt('enter a string to cap-swap');
  }

  // communicate result to user
  //   alert(capSwapped);
  const swapHandler = capSwap(userInput);
  alert(swapHandler);
};
