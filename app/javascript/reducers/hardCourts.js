const hardCourts = (state = [], action) => {
  switch (action.type) {
    case 'SET_HARD_COURTS':
      return action.hardCourts;

    default:
      return state;
  }
};

export default hardCourts;
