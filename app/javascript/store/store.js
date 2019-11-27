import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';

const initialState = {
  courts: [],
};

const store = createStore(reducer, initialState, applyMiddleware(thunk));

export default store;
