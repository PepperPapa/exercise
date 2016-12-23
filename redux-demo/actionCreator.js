export const REQUEST_POST = "request_post";
export const RECEIVE_POST = "receive_post";

export function requestPost(id) {
  return {
    type: REQUEST_POST,
    id: id
  };
}

export function receivePost(response) {
  return {
    type: RESPONE_FETCH,
    post: response
  };
}
