import React from 'react';
import { Provider } from 'react-redux';
// import '../assets/styles/css/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from '../store/store';
import Login from './Login';
import CourtTypes from './CourtTypes';
import CourtsList from '../containers/CourtsList';
import Home from './Home';
import SignUp from './SignUp';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/:court-type/:courts" component={CourtTypes} />
            <Route path="/find-court" component={CourtsList} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
