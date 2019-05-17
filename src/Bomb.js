// your Bomb code here!
// your ImageSlider code here!
import React, { Component } from 'react';

export default class Bomb extends Component {
    state = {
        secondsLeft: this.props.initialCount
    }
    render() {

        if (this.state.secondsLeft < 1) {
            return (
                <div>
                    Boom!
                </div>
            )
        } else {
            return (
                <div>
                    {this.state.secondsLeft} seconds left before I go boom!
         </div>
            )
        }

    }
}
