import React, { Component } from 'react';
import Button from './Button';

class Search extends Component { 

    render() {
        return (
            <div className="Search">
                    <input
                        placeholder="Search by name"
                        onChange={this.props.handleInputChange}
                    />
            </div>
        )
    }
}


export default Search;