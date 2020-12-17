import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Products from './Components/Products';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route path='/products'>
            <Products />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
        
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
