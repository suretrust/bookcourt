import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from '../store/store';
import Login from './Login';
import CourtTypes from './CourtTypes';
import CourtsList from '../containers/CourtsList';
import Home from './Home';
import SignUp from './SignUp';
import NotFound from './NotFound';
import carpetCourtsList from '../components/carpetCourtsList';
import clayCourtsList from '../components/clayCourtsList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/court-types" exact component={CourtTypes} />
            <Route path="/court-types/all-courts" component={CourtsList} />
            <Route
              path="/court-types/carpet-courts"
              component={carpetCourtsList}
            />
            <Route path="/court-types/clay-courts" component={clayCourtsList} />
            <Route path="/courts-list" exact component={CourtsList} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
