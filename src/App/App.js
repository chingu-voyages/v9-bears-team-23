import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css';
import '../assets/scss/global.scss';
import "../assets/vendor/nucleo/css/nucleo.css";
import "../assets/vendor/font-awesome/css/font-awesome.min.css";


import Landing from '../components/Landing/Landing';
import Login from '../components/Login/Login'
import Register from '../components/Register/Register'
import AdsList from '../components/AdsList/AdsList'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/ads" component={AdsList} />
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
