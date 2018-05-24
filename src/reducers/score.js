const initialState = 0;

export default function score(state = initialState, action) {
	if ( action.type === 'ADD_POINT') {
		state = state + 1;
	} else if ( action.type === 'DROP_POINTS') {
		state = 0;
	}
	return state;
}