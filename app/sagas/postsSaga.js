
import { put, call, select } from 'redux-saga/effects';
import * as PostsServices from '../api/methods/PostsServices';
import * as postsActions from '../redux/actions/postsActions';
import * as appActions from '../redux/actions/appActions';

import { AppConstants } from "../constants/AppConstants";


export function* requestPosts(action) {
  try {
    var { callBack } = action.payload;
    yield put(appActions.showFullScreenLoader("Fetching Posts"));
    const response = yield call(yield PostsServices.getPost());
    console.log("Posts response", response);
    if (response) {
      yield put(postsActions.savePosts(response.data)); 
      callBack(response.data);
    }
    yield put(appActions.hideFullScreenLoader());
  } catch (error) {
    yield put(appActions.hideFullScreenLoader());
    action.payload.callBack(response.data);
  }
}



export function* requestThumbnails(action) {
  try {
    var { callBack } = action.payload;
    yield put(appActions.showFullScreenLoader("Fetching Posts"));
    const response = yield call(yield PostsServices.getThumbnails());
    console.log("Posts response", response);
    if (response) {
      yield put(postsActions.saveThumbnails(response.data)); 
      callBack(response.data);
    }
    yield put(appActions.hideFullScreenLoader());
  } catch (error) {
    yield put(appActions.hideFullScreenLoader());
    action.payload.callBack(response.data);
  }
}