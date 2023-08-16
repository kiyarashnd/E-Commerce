import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Products from './pages/products/Products';
import NotFound from './utils/NotFound';
import Cart from './pages/cart/Cart';
import Login from './pages/login/Login';
import Pro from './pages/singleProduc/Pro';

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
