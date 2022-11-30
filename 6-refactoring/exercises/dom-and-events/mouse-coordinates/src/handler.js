import { formatCoordinates } from './util.js';

export const showMouseCoordinates = (event) => {
  const xValue = event.pageX;
  const yValue = event.pageY;

  const mouseHandler = formatCoordinates(xValue, yValue);
  document.getElementById('mouse-position').innerHTML = mouseHandler;
};
