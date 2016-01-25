function getURL(url) {
  return new Promise(function (reslove, reject) {
    var req = new XMLHttpRequest();
    req.open("GET", url, true);

    req.onload = function () {
      if (req.status == 200) {
        reslove(req.responseText);
      } else {
        reject(new Error(req.statusText));
      }
    };

    req.onerror = function () {
      reject(new Error(req.statusText));
    };
    req.send();
  });
}

getURL("http://httpbin.org/get").then(
  function onFulfilled(value) {
  console.log(value);
}).catch(
  function onRjected(error) {
  console.log(error);
});
