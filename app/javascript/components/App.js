import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from '../store/store';
import Login from './Login';
import CourtTypes from './CourtTypes';
import CourtsList from '../containers/CourtsList';
import Home from './Home';
import SignUp from '../containers/SignUp';
import NotFound from './NotFound';
import Court from './Court';

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
            <Route path="/court-types/:type" component={CourtsList} />
            <Route
              path="/court-types/:courts-type/:id"
              exact
              component={Court}
            />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
