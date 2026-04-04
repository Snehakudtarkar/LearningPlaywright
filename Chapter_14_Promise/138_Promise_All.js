// eg -1
let checkAuth = Promise.resolve("Auth Ok");
let checkDB = Promise.resolve("DB Ok");
let checkCache = Promise.resolve("Cashe Ok");

Promise.all([checkAuth, checkDB, checkCache]).then(function (results) {
  console.log("All checks:", results);
});

// eg -2
Promise.all([
  Promise.resolve("OK"),
  Promise.reject("DB Down"),
  Promise.resolve("OK"),
])

  .then(function (r) {
    console.log(r);
  })
  .catch(function (err) {
    console.log("Failed:", err);
  });
