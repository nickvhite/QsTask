const initialState = {};

export default function boxCollections(state = initialState, action) {
	if ( action.type === 'DROP_COLLECTION') {
		for (let key in state) delete state[key];
	} else if ( action.type === 'ADD_COLLECTION_ELEMENT') {
		state[action.payload.id] = action.payload.box;
	} else if ( action.type === 'REMOVE_COLLECTION_ELEMENT') {
		delete state[action.payload];
	}
	return state;
}