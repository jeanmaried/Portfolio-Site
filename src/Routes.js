import React, { Component } from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Launch from './components/Launch';
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';

const NotFound = () => <h1>Not Found</h1>

class Routes extends Component {

  render(){
    return(
    <HashRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/game" component={Launch}/>  
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/projects" component={Projects}/>
          <Route component={NotFound} />
        </Switch>
      </div>
    </HashRouter>
      )
  }
}

export default Routes;