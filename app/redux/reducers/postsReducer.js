import createReducer from '../../lib/createReducer';
import * as types from '../actions/types';

const initialState = {
    posts:[],
    thumbnails:[]
};

export const postsReducer = createReducer(initialState, {
    [types.SAVE_POSTS](state, action) {
        return {
            ...state,
            posts: action.payload
        };
    },
    [types.SAVE_THUMBNAILS](state, action) {
        return {
            ...state,
            thumbnails: action.payload
        };
    },

});
