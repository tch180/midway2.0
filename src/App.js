import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';

///////////////
//  Componets
///////////////
import Navbar from '../src/navbar/navbar';
import HomePage from '../src/homepage/homepage';
import about from '../src/about/about';
// import service from '../src/service/service';
// import contact from '../src/about/contact';
import directions from '../src/about/directions';
import forms from '../src/forms/forms';
///////////////
//  Sass/Bootstrap
///////////////
import 'bootstrap'
import './App.scss';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" style={{fontFamily: 'Montserrat'}}>

        <Router>
          <React.Fragment> {/* really cool, no more nesting divs !!!!  */}

            <Navbar />

            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/about' component={about} />
              {/* <Route exact path='/services' component={service} /> */}
              <Route exact path='/directions' component={directions} />
              <Route exact path='/forms' component={forms}/>
            </Switch>
          </React.Fragment>

        </Router>

      </div>
    );
  }
}

export default App;
