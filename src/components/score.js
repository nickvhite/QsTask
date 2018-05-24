import React from 'react';
import {connect} from 'react-redux';

const score =({ eventList }) => (
	<div id="score">
		<p>SCORE: {eventList.score}</p>
	</div>
);

export default connect(
	state => ({
		eventList: state
	}),
	dispatch => ({})
)(score);