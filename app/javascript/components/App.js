import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from '../store/store';
import CourtTypes from './CourtTypes';
import CourtsList from '../containers/CourtsList';
import Home from './Home';
import SignUp from '../containers/SignUp';
import NotFound from './NotFound';
import CourtDetails from '../containers/CourtDetails';
import BookCourt from './BookCourt';
import Bookings from './Bookings';
import BookingConfirmed from './BookingConfirmed';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/court-types" exact component={CourtTypes} />
            <Route path="/court-types/:type" component={CourtsList} />
            <Route path="/courts/:id" component={CourtDetails} />
            <Route path="/book-court/:id" component={BookCourt} />
            <Route path="/bookings" component={Bookings} />
            <Route path="/booking-confirmed" component={BookingConfirmed} />
            <Route path="/404" component={NotFound} />
            <Redirect to="/404" />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
