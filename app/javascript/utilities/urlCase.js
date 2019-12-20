const urlCase = str => {
  const strArray = str.split(' ');
  return `${strArray[0].toLowerCase()}-${strArray[1].toLowerCase()}`;
};

export default urlCase;
