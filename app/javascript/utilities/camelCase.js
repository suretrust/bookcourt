const camelCase = str => {
  const strArray = str.split(' ');
  return `${strArray[0].toLowerCase()}${strArray[1]}`;
};

export default camelCase;
