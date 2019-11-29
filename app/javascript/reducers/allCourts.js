const allCourts = (state = [], action) => {
  switch (action.type) {
    case 'ALL_COURTS':
      return action.courts;

    default:
      return state;
  }
};

export default allCourts;
