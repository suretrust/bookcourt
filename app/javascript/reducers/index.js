import { combineReducers } from 'redux';
import courts from './courts';
import carpetCourts from './carpetCourts';
import clayCourts from './clayCourts';
import hardCourts from './hardCourts';
import grassCourts from './grassCourts';
import indoorCourts from './indoorCourts';
import allCourts from './allCourts';
import user from './user';

export default combineReducers({
  courts,
  user,
  carpetCourts,
  clayCourts,
  hardCourts,
  grassCourts,
  indoorCourts,
  allCourts,
});
