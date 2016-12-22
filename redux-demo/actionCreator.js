const REQUEST_FTECH = "request_fetch";
const RESPONSE_FTECH = "response_fetch";

export let getPost = function (id) {
  return {
    type: REQUEST_FTECH,
    id: id
  };
}

export let responsePost = function (json) {
  return {
    type: RESPONE_FETCH,
    res: json
  };
}
