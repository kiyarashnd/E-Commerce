import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './components/About';
import Products from './Products';
import NotFound from './NotFound';
import Cart from './Cart';
import Login from './Login';
import Pro from './Pro';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/About'>
          <About />
        </Route>

        <Route exact path='/Products'>
          <Products />
        </Route>

        <Route path='/Cart'>
          {/* <Cart cartTours={cartTours} setCartTorus={setCartTorus}></Cart> */}
          <Cart></Cart>
        </Route>

        <Route path='/Login'>
          <Login></Login>
        </Route>

        <Route path='/Products/:id'>
          <Pro></Pro>
        </Route>

        <Route path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
