import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Hints extends Component {
    constructor(props) {
        super(props);

    }
    
    
    render() {
        return (
            <div>
                <h3>Hints!</h3>
                <p># word = h1</p>
                <p>## word = h2</p>
                <p>### word = h3...</p>
                <p>**word** = bold</p>
                <p>*word* = Italics</p>
                <p>Double enter = new paragraph</p>
            </div>
        );
    }
}

Hints.propTypes = {

};

export default Hints;