
import { search } from './util.js';
// import { data } from './data.js';

export const searchFoodsHandler = () => {
  const query = prompt('enter a search query');
  if (query === null || query === '') {
    return;
  }

  const searchResult = search(array, newValue);
  const message = `foods matching "${query}":${searchResult}`;
  alert(message);
};



