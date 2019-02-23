import React, { Component } from 'react';
import _ from 'lodash';
import ListContacts from './ListContacts';
import Search from './Search';
import Button from './Button';
import './Main.css';

class App extends Component {

    state = {
        users: [
            {
              name: "Sara",
              id: 1,
            },
            {
              name: "Mark",
              id: 2,
            },
            {
              name: "Emma",
              id: 3,
            }
          ],
        found: '', 
        sort: 'acs'
    }

    handleInputChange = (event) => { 
        console.log(event.target.value) 
        this.setState({
          searching: event.target.value,
          
        })
      }

    handleButtonFind = (event) => {
        this.state.users.map(element => {
            if (element.name.includes(this.state.searching) === true){
                this.setState({found: element.name})
            }
        })
    }


    sortUp = () => {
        let sort = this.state.users;
        sort = _.orderBy(sort, 'name', 'acs');
        this.setState({users: sort})
    }

    sortDown = () => {
        let sort = this.state.users;
        sort = _.orderBy(sort, 'name', 'desc');
        this.setState({users: sort})
    }

  render() {
      
    return (
        <div className="contacts">
            <Search handleInputChange = {this.handleInputChange}/>

            <Button handleButtonClick = {this.handleButtonFind} name = {"Search"}/>
            <Button handleButtonClick = {this.sortUp} name = {"Sort up"}/>
            <Button handleButtonClick = {this.sortDown} name = {"Sort down"}/>

            <h1>Contacts:</h1>
            <ListContacts contacts = { this.state.users} />
            <div className="found">
                {this.state.found}
            </div>
        </div>
        );
  }
}

export default App;
