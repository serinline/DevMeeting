import React, { Component } from 'react';
import Button from './Button';



  
function SingleContactOut(props) {

    let usertmp = [];

    fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(json => {
                    console.log(json)
                    usertmp = {json}
                })

    return (
        <div>
            <div>
                {usertmp[0]}
            </div>
        </div>
        
    )
}

export default SingleContactOut;