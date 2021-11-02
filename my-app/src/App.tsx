import React from 'react';
/*import logo from './logo.svg';*/

import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ProductPage from './pages/ProductPage';

const App = () => {
  console.log('App Re-rendered');
  return (
    <Router>
      
        <Switch>
          <Route exact path="/">
            <MainPage/>
          </Route>
          <Route  path="/catagory/:slug">
           <ProductPage/>
          </Route>
          <Redirect to="/items"/>
        </Switch>
     
    </Router>
  );
};

export default (App);
