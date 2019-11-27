import React from 'react';
// import '../assets/styles/css/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import CourtTypes from './CourtTypes';
import CourtsList from '../containers/CourtsList';
import { Provider } from 'react-redux';
import Home from './Home';
import SignUp from './SignUp';
import store from '../store/store';

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
