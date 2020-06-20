import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/app.scss'

import React from 'react';
import './App.css';
import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './containers/Home';
import BookDetail from './containers/Book/BookDetail'

class App extends React.Component {
  render(){
    return (
      <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/book/:id" component={BookDetail} />
          </Switch>
      </Router>
    );
  }
}

export default App;
