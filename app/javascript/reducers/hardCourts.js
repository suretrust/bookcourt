const hardCourts = (state = [], action) => {
  switch (action.type) {
    case 'SET__CLAY_COURTS':
      return action.courts;

    default:
      return state;
  }
};

export default hardCourts;
