let apiCall = new Promise(function (resolve, reject) {
  reject("500 error");
});

apiCall
  .then(function (data) {
    console.log("Done successfully!");
  })
  .catch(function (error) {
    console.log(error);
  });

// .catch() runs ONLY when the promise is rejected.
//  .then() is completely skipped.
