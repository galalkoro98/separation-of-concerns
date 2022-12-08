/**
 *
 */
export const list = (allInputs) => {
  let stringList = '';

  allInputs.forEach((input) => {
    stringList += `\n- ${input}`;
  });

  return stringList;
};
