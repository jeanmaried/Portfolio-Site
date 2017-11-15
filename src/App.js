import React, { Component } from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';
import NotFound from './components/notfound/NotFound';
import Layout from './components/layout';
import Float from './components/floating';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {

  render(){
    return(
    <HashRouter>
      <MuiThemeProvider>
        <Layout>
          <main>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/about" component={About}/>  
              <Route exact path="/contact" component={Contact}/>
              <Route exact path="/projects" component={Projects}/>
              <Route exact path="/float" component={Float}/>
              <Route component={NotFound} />
            </Switch>
          </main>
        </Layout>
        </MuiThemeProvider>
    </HashRouter>
      )
  }
}

export default App;