import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import Films from './Components/Gallery/Films';
import Info from './Components/Info/Info';
import NotFound from './Components/Not-Found/Not-Found';
import ReactGA from 'react-ga';

import Menu from './Components/Menu/Menu';

 
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    ReactGA.initialize('UA-143239330-1');
    ReactGA.pageview(props.location.pathname + props.location.search);
    props.history.listen((location) => {
      ReactGA.pageview(location.pathname + location.search);  
    });
  }
  render() {
    return (
        <div className="App">
          <Menu/>
          <Switch>
            <Route exact path='/' component={Films} />
            <Route exact path='./Not-Found' component={NotFound}/>
            <Route exact path='/:filmId' component={Info} />
          </Switch>
        </div>
    );
  }
}

export default withRouter(App);
