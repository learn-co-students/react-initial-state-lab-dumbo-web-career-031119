// your Bomb code here!
import React, { Component } from 'react';

class Bomb extends React.Component {

  state = {
    secondsLeft: this.props.initialCount
  }

  render() {
    const text = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`
    return (
      <div>
        { text }
      </div>
    )
  }
}

export default Bomb;
