import createReducer from '../../lib/createReducer';
import * as types from '../actions/types';

const initialState = {
    posts:[],
};

export const postsReducer = createReducer(initialState, {
    [types.SAVE_POSTS](state, action) {
        return {
            ...state,
            posts: action.payload
        };
    },

});
