const parseInteger = (param) => {
  if (typeof param === 'string') {
    return new Error(['Param type must be a number']);
  }
  return parseInt(param, 10);
};

export default parseInteger;
