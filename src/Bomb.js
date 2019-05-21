// your Bomb code here!
import React, { Component } from 'react';

class Bomb extends Component {
    state = {
        secondsLeft: this.props.initialCount
    }
    render() {
        return (
            <div>
                <p>{this.state.secondsLeft === 0 ? "Boom!" : "120 seconds left before I go boom!"  }</p>
            </div>
        );
    }
}


export default Bomb;
