import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers';

const initialState = {
  courts: [
    {
      name: 'First Court',
      location: 'Kano, Nigeria',
      cost: 5000,
      courtType: 'Carpet Courts',
      courtDetails: 'The first tennis court in Nigeria.',
    },
    {
      name: 'Second Court',
      location: 'Kastina, Nigeria',
      cost: 6000,
      courtType: 'Clay Courts',
      courtDetails: 'The second tennis court in Nigeria.',
    },
    {
      name: 'Third Court',
      location: 'Kaduna, Nigeria',
      cost: 7000,
      courtType: 'Hard Courts',
      courtDetails: 'The third tennis court in Nigeria.',
    },
    {
      name: 'Fourth Court',
      location: 'Abuja, Nigeria',
      cost: 8000,
      courtType: 'Grass Courts',
      courtDetails: 'The fourth tennis court in Nigeria.',
    },
  ],
};

const store = createStore(reducer, initialState);

export default store;
