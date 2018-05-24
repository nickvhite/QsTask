import { combineReducers } from 'redux';

import score from './score';
import boxCollection from './boxCollection';

export default combineReducers({
	score,
	boxCollection
})