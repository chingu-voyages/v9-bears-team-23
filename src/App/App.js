import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// vendors
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/scss/global.scss';
import "../assets/vendor/nucleo/css/nucleo.css";
import "../assets/vendor/font-awesome/css/font-awesome.min.css";

// main components
import Landing from '../components/Landing/Landing';
import Login from '../components/Login/Login'
import Register from '../components/Register/Register'
import AdsList from '../components/AdsList/AdsList'
import Navigation from '../components/Navigation/Navigation';
import Profile from '../components/Profile/Profile'
import PrivateRoute from '../utils/PrivateRoute'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/ads" component={AdsList} />

          {/* Private routes */}
          <Route path="/profile" component={Profile} />
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
