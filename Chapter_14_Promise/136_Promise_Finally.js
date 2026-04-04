let testRun = new Promise(function (resolve, reject) {
  reject("Assertion failed!");
});

testRun
  .then(function (data) {
    //resolve
    console.log(data);
  })
  .catch(function (error) {
    //reject
    console.log(error);
  })
  .finally(function (done) {
    //always executed
    console.log("I will be executed anyhow!!");
  });

  // .finally() ALWAYS runs — whether the test passed or failed. Just like afterEach() in Cypress or Playwright.
