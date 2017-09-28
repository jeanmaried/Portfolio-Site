import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Rocket from './components/Rocket';
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Header from './page/Header';
import Footer from './page/Footer';

class Routes extends Component {

  render(){
    return(
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/rocket" component={Rocket}/>  
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/projects" component={Projects}/>
        </Switch>
      </div>
    </BrowserRouter>
      )
  }
}

export default Routes;