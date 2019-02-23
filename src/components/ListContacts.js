import React, { Component } from 'react';
import SingleContact from './SingleContact';


function ListContacts(props){
    console.log(props.contacts)
    return (

        <div>
             { props.contacts.map((contact, index) =>
                <SingleContact key={ contact.id }
                                one={ contact }
                                index = {index}
                                onePerson = {props.onePerson} />
            ) }
        </div>

    )
}

export default ListContacts;



// function BasicRender(props){
//     let contactsRender = contacts.map((element, index) => 
//       <div key={index}>
//           <div>{element.name}</div>
//           <div>{element.id}</div>
//       </div>)
//     return (
//         <div> {contactsRender} </div>
//     )
// }