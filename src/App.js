import React, { Component } from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';
import NotFound from './components/notfound/NotFound';
import Layout from './components/layout';

class App extends Component {

  render(){
    return(
    <HashRouter>
      <div>
        <Layout>
          <main>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/about" component={About}/>  
              <Route exact path="/contact" component={Contact}/>
              <Route exact path="/projects" component={Projects}/>
              <Route component={NotFound} />
            </Switch>
          </main>
        </Layout>
      </div>
    </HashRouter>
      )
  }
}

export default App;