import { combineReducers } from 'redux';
import courts from './courts';
import users from './users';

export default combineReducers({
  courts,
  users,
});
