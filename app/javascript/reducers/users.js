const users = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [...state, { email: action.email }];

    default:
      break;
  }
  return state;
};

export default users;
