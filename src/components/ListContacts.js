import React, { Component } from 'react';
import SingleContact from './SingleContact';

const contacts = [
    {
      name: "Sara",
      id: 1
    },
    {
      name: "Mark",
      id: 2
    },
    {
      name: "Emma",
      id: 3
    }
  ]

function ListContacts(props){
    return (

        <div>
             { contacts.map(contact =>
                <SingleContact key={ contact.id }
                                one={ contact } />
            ) }
        </div>

    )
}

export default ListContacts;



function BasicRender(props){
    let contactsRender = contacts.map((element, index) => 
      <div key={index}>
          <div>{element.name}</div>
          <div>{element.id}</div>
      </div>)
    return (
        <div> {contactsRender} </div>
    )
}