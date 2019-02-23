import React, { Component } from 'react';
import ListContacts from './ListContacts';


class App extends Component {
  render() {
      
    return (
        <div>
            <h1>Contacts:</h1>
            <ListContacts />
        </div>
        );
  }
}

export default App;
