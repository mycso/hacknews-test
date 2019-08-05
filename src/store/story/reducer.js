import { actionTypes } from './actions';

const getInitialState = () => ({
	storyIds: [],
	stories: [],
	page: 0,
	isFetching: false,
	error: '',
});

const story = (state = getInitialState(), { type, payload }) => {
	switch(type) {
		case actionTypes.FETCH_STORY_IDS_REQUEST:
		case actionTypes.FETCH_STORIES_REQUEST:
			return {
				...state,
				isFetching: true,
			};
		case actionTypes.FETCH_STORY_IDS_SUCCESS:
			return {
				...state,
				...payload,
			}
		case actionTypes.FETCH_STORIES_SUCCESS:
			return {
				...state,
				//Adding all the previous stories and new stories in array
				stories: [...state.stories, ...payload.stories],
				page: state.page + 1,
				isFetching: false,
			};
		default: 
			return state;
	}
};

export default story;