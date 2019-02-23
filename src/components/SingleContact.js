import React, { Component } from 'react';


  
function SingleContact(props) {
    return (
        <div>
            <header>
                {props.one.name}
            </header>
            <p>
                {props.one.id}
            </p>
        </div>
    )
}

export default SingleContact;