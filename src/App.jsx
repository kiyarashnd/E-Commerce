import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Products from './Products';
import NotFound from './NotFound';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/about' component={About}>
          <About />
        </Route>

        <Route path='/Products'>
          <Products />
        </Route>

        <Route path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
