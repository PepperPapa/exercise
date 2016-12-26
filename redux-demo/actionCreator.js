export const REQUEST_POST = "request_post";
export const RECEIVE_POST = "receive_post";

export function requestPost(subredit) {
  return {
    type: REQUEST_POST,
    subredit: subredit
  };
}

export function receivePost(response) {
  return {
    type: RECEIVE_POST,
    post: response
  };
}

export function fetchPost(subredit) {
  return function(dispatch) {
    dispatch(requestPost(subredit));
    return fetch(`https://www.reddit.com/r/${subredit}.json`)
           .then(res => res.json())
           .then(function(json) {
             //console.log(json);
             dispatch(receivePost(json));
           });
  }
}
