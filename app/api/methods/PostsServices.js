import Api from '..';
import { ApiEndpoint, Method } from '../ApiConstants';

/**
  API request signature (URL, method, token, params, data)
 */

export function getPost(){
  return Api(
    ApiEndpoint.GET_POSTS,
    Method.GET,
    null,
    null,
    null
  );
}

export function getThumbnails(){
  return Api(
    ApiEndpoint.GET_THUMBNAILS,
    Method.GET,
    null,
    null,
    null
  );
}