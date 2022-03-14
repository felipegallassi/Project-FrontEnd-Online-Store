import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchPage from './SearchPage';
import ShoppingCart from './ShoppingCart';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/shopping-cart" component={ ShoppingCart } />
            <Route exact path="/" component={ SearchPage } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
