import React, { Component } from 'react';

class Button extends Component {

    render() {
        return (
            <button onClick={this.props.handleButtonClick}>{this.props.name}</button>
        )
    }
};
 
export default Button;
