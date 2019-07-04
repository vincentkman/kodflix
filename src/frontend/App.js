import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Films from './Components/Gallery/Films';
import Info from './Components/Info/Info';
import NotFound from './Components/Not-Found/Not-Found';

import ReactGA from 'react-ga';
// ReactGA.initialize('UA-000000-01');
// ReactGA.pageview(window.location.pathname + window.location.search);
 
import './App.scss';
// import './Utilities/KeyFrames.scss';
// import './Utilities/Mixins.scss'; 
// import './Utilities/Variables.scss';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Films} />
            <Route exact path='./Not-Found' component={NotFound}/>
            <Route exact path='/:filmId' component={Info} />
          </Switch>
        </div>
      </Router> 
    );
  }
}
