const carpetCourts = (state = [], action) => {
  switch (action.type) {
    case 'SET_CARPET_COURTS':
      return action.carpetCourts;

    default:
      return state;
  }
};

export default carpetCourts;
