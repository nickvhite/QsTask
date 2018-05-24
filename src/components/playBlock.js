import React from 'react';
import {connect} from 'react-redux';

const playBlock =({ eventList }) => (
	<canvas width="640" height="480" id="canvas"></canvas>
);

export default connect(
	state => ({
		eventList: state
	}),
	dispatch => ({})
)(playBlock);