import React, {Component} from 'react';
import {connect} from 'react-redux';

class buttons extends Component {
	render() {
		return (
			<div id="buttons">
				<div
					id="button_start"
					onClick={this.props.startGame}
				>
					<p>Start</p>
				</div>
				<div
					id="button_stop"
					onClick={this.props.stopGame}
				>
					<p>Stop</p>
				</div>
			</div>
		)
	}
}

export default connect(
	state => ({
		eventList: state
	}),
	dispatch => ({})
)(buttons);