/**
 *
 */
export const typeCaster = (stringToCast, intendedType) => {
  // if (intendedType === 'string') {
  //   return String(stringToCast);
  // } else if ( intendedType === 'number') {
  //   return Number(stringToCast);
  // } else if (intendedType === 'boolean') {
  //   return Boolean(stringToCast);
  // } else {
  //   return undefined;
  // }

  switch (intendedType) {
    case 'string':
      return String(stringToCast);
    case 'number':
      return Number(stringToCast);
    case 'boolean':
      return Boolean(stringToCast);
    default:
      return undefined;
  }
};
