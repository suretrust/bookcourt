const COURT_TYPES = [
  'All Courts',
  'Carpet Courts',
  'Clay Courts',
  'Hard Courts',
  'Grass Courts',
  'Indoor Courts',
];

const emailIsValid = email => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

export { COURT_TYPES, emailIsValid };
