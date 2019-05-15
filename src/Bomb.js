import React, { Component } from 'react';

export default class Bomb extends Component {
	constructor(props) {
		super(props)
		this.state = {
			secondsLeft: this.props.initialCount
		}
	}

	chooseMessage = () => {
		if (this.state.secondsLeft === 0)
			return 'Boom!'
		else
			return `${this.state.secondsLeft} seconds left before I go boom!`
	}

	render() {
		// const bombMessage = this.state.secondsLeft === 0 ? 'Boom!' : `${this.props.secondsLeft} seconds left before I go boom!`
		return(this.chooseMessage())
	}
}
// your Bomb code here!
