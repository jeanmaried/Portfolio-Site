import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import About from './about';
import Home from './home';
import Contact from './contact';
import Projects from './projects';

class App extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
    <BrowserRouter>
     <div>
      <Switch>
        <Route exact path="/" component={About}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/projects" component={Projects}/>
      </Switch>
      </div>
    </BrowserRouter>
      )
  }
}

export default App;