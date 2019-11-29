const user = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [...state, { email: action.email, id: action.id }];

    default:
      return state;
  }
};

export default user;
