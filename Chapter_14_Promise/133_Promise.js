let order = new Promise(function (resolve, reject) {
  let foodReady = true;
  if (foodReady) {
    resolve("Pizza Delivered");
  } else {
    reject("Order Cancelled!!");
  }
});

console.log(order);

// A Promise is an OBJECT. It wraps a value that will be available later.
