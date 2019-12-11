import { combineReducers } from 'redux';
import courts from './courts';
import user from './user';

export default combineReducers({
  courts,
  user,
});
