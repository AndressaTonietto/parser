const parserReverse = (param) => {
  let reverse = '';
  if (typeof param === 'number') {
    return new Error(['Param type must be a string']);
  }
  for (let i = param.length - 1; i >= 0; i--) {
    /* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
    reverse += param[i];
  }
  return reverse;
};

export default parserReverse;
