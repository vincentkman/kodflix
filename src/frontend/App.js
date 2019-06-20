import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Films from './/Components/Films';
import Info from './Components/Info/Info';
import NotFound from './Not-Found';
 
import './App.css';
import './KeyFrames.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Films} />
            <Route exact path='/Not-Found' component={NotFound}/>
            <Route exact path='/:filmId' component={Info} />
          </Switch>
        </div>
      </Router> 
    );
  }
}

export default App;