const indoorCourts = (state = [], action) => {
  switch (action.type) {
    case 'SET__CLAY_COURTS':
      return action.indoorCourts;

    default:
      return state;
  }
};

export default indoorCourts;
