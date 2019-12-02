const indoorCourts = (state = [], action) => {
  switch (action.type) {
    case 'SET_INDOOR_COURTS':
      return action.indoorCourts;

    default:
      return state;
  }
};

export default indoorCourts;
