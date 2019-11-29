const setUser = user => ({
  type: 'SET_USER',
  user,
});

const setCourts = courts => ({
  type: 'SET_COURTS',
  courts,
});

export { setUser, setCourts };
