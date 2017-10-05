import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Launch from './components/Launch';
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Header from './page/Header';
import Footer from './page/Footer';

const NotFound = () => <h1>Not Found</h1>

class Routes extends Component {

  render(){
    return(
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/game" component={Launch}/>  
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/projects" component={Projects}/>
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
      )
  }
}

export default Routes;