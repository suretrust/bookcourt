const courts = (state = [], action) => {
  switch (action.type) {
    case 'SET_COURTS':
      return action.courts;

    default:
      break;
  }
  return state;
};

export default courts;
