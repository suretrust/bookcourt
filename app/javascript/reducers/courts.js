const courts = (state = [], action) => {
  switch (action.type) {
    case 'BOOK_COURT':
      return state;

    default:
      break;
  }
  return state;
};

export default courts;
