const clayCourts = (state = [], action) => {
  switch (action.type) {
    case 'SET_CLAY_COURTS':
      return action.clayCourts;

    default:
      return state;
  }
};

export default clayCourts;
