import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';
import NotFound from './components/notfound/NotFound';
import Skills from './components/Skills';
import Layout from './components/layout';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import store from './redux/store';
import { Provider } from 'react-redux';

import PopUp from './components/PopUp';

class App extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <HashRouter>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <Provider store={store}>
            <Layout>
              <Switch>
                <Route exact path="/" component={PopUp} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/skills" component={Skills} />
                <Route component={NotFound} />
              </Switch>
            </Layout>
          </Provider>
        </MuiThemeProvider>
      </HashRouter>
    );
  }
}

export default App;
