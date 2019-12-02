import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from '../store/store';
import CourtTypes from './CourtTypes';
import CourtsList from '../containers/CourtsList';
import Home from './Home';
import SignUp from '../containers/SignUp';
import NotFound from './NotFound';
import CourtDetails from '../containers/CourtDetails';
import BookCourt from './BookCourt';

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
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
