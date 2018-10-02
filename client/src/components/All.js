import React, { Component } from 'react';

class All extends Component {
    render() {
        function handleClick(e) {
            e.preventDefault();
            console.log('The link was clicked.');
          }
        return (
            <form method = 'get' action = '/works/all'>

                <button onClick={handleClick}>Click</button>
                 
            </form>
        )
    }
}

export default All