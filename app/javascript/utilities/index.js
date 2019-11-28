const COURT_TYPES = [
  'Carpet Courts',
  'Clay Courts',
  'Hard Courts',
  'Grass Courts',
];

const emailIsValid = email => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

export { COURT_TYPES, emailIsValid };
