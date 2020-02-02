import * as types from "./types";

export function getPosts(payload) {
    return {
      type: types.GET_POSTS,
      payload: payload
    };
  }
  
export function savePosts(payload) {
    return {
    type: types.SAVE_POSTS,
    payload: payload
    };
}
