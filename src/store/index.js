import { createStore } from 'redux';
import reducer from './reducer';
import middleware from './middleware';

const configuireStore = initialState => {
	const store = createStore(reducer, initialState, middleware);
	return store;
};

export default configuireStore;