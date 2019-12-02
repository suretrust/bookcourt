const setUser = user => ({
  type: 'SET_USER',
  user,
});

const setCourts = courts => ({
  type: 'SET_COURTS',
  courts,
});

const setCarpetCourts = carpetCourts => ({
  type: 'SET_CARPET_COURTS',
  carpetCourts,
});

const setGrassCourts = grassCourts => ({
  type: 'SET_GRASS_COURTS',
  grassCourts,
});

const setIndoorCourts = indoorCourts => ({
  type: 'SET_INDOOR_COURTS',
  indoorCourts,
});

const setClayCourts = clayCourts => ({
  type: 'SET_CLAY_COURTS',
  clayCourts,
});

const setHardCourts = hardCourts => ({
  type: 'SET_HARD_COURTS',
  hardCourts,
});

export {
  setUser,
  setCourts,
  setHardCourts,
  setClayCourts,
  setCarpetCourts,
  setIndoorCourts,
  setGrassCourts,
};
