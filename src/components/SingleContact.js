import React, { Component } from 'react';
import Button from './Button';



  
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