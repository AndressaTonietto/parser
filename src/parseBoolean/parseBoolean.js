const parseBoolean = (param) => {
  switch (param) {
    case 1:
    case 'true':
    case '1':
      return true;
    default:
      return false;
  }
};

export default parseBoolean;
