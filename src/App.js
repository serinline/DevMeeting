import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';

import Main from './components/Main';
import Homepage from './components/Homepage';
import SingleContactOut from './components/SingleContactOut';




class App extends Component {

  

  render() {
    let user = {id: 1,
                name: 'tmp' };

    return (
      <BrowserRouter>
      <div>
          <nav>
              <Link to="/Homepage">Homepage</Link>
              <p></p>
              <Link to="/Main">Main</Link>
              <p></p>
              <Link to="/SingleContact">SingleContact</Link>
          </nav>
          <Route path="/Homepage" component={Homepage}  ></Route>
          <Route path="/Main" component={Main} ></Route>
          <Route path="/SingleContact" component={SingleContactOut}> </Route> 
        </div>
  </BrowserRouter>
    );
  }
}

export default App;

