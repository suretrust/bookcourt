const grassCourts = (state = [], action) => {
  switch (action.type) {
    case 'SET_GRASS_COURTS':
      return action.grassCourts;

    default:
      return state;
  }
};

export default grassCourts;
