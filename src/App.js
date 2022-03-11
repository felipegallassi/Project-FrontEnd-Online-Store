import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import SearchPage from './SearchPage';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/" component={ SearchPage } />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
