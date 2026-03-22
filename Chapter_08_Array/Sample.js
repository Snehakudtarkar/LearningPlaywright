//function concepts 
// function without return 
function add(a, b) {
  a + b;
}

console.log(add(2, 3)); // undefined

//function with console.log but not return 
function add(a, b) {
 console.log(a + b); // 5
}
let result = add(2,3);
console.log(result); //undefined


// normal function
function greet(name) {
  return "Hello " + name;
}
console.log(greet("Sneha"));

// Short version of arrow function 
const greet = name => "Hello " + name;
console.log(greet("sneha"));

function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}

console.log(fullName("Sneha", "Kudtarkar"));

let url = "https://staging.vwo.com/api/login?retry=true";
console.log(url.search(/login/)); // regex

console.log(url.search(/\d+/));
//-------------
function begger(money) {
    console.log("Thanks", money);
}

let returnMesomething = begger(100);
console.log(returnMesomething);

function sayHello() {
    console.log('Hi');
    return "Hello";
}

let relative = sayHello();
console.log(relative);

function runTest(name, status, duration) {
    return `${name}: ${status} (${duration}ms)`;
}

// Arguments
console.log(runTest("Login", "pass", 320));
// "Login: pass (320ms)"


function retry(testName, maxRetries = 3, delay = 1000) {
    console.log(`Retrying ${testName} up to ${maxRetries} times, ${delay}ms apart`);
}

retry("Login");
retry("Checkout", 5);
retry("API Test", 2, 500);

function sum(...numbers) {
  console.log(numbers);
}

sum(1, 2, 3, 4);


function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3));      // 6
console.log(sum(5, 10, 15, 20));

//Rest Parameters
function logResults(suiteName, ...results) {
    console.log(`Suite: ${suiteName}`);
    console.log(`Results: ${results.join(", ")}`);
}

logResults("Auth Suite", "pass", "fail", "pass", "skip");
// Suite: Auth Suite
// Results: pass, fail, pass, skip
//------=--
console.log(greet("Alice"));

function greet(name) {
    return `Hello, ${name}!`;
}

sayHi("Bob"); // ❌ TypeError: sayHi is not a function its a fn expression 

const sayHi = function (name) {
    return `Hi, ${name}!`;
};

function pramod_doing_work(worker, callback) {
    console.log("Started the class PW")
    let work = worker;

    // dasdasdasdsadasdsadas
    console.log("Finished the class PW")
    callback();
}

function callWife() {
    console.log("Call wife when done");
}

pramod_doing_work('PW class', callWife);

function runTest(testName, callback) {
    let result = "pass";
    // 100 lines
    callback(testName, result)
}

function onComplete(name, result) {
    console.log(`${name} finished with: ${result}`);
}

runTest("loginTest", onComplete)


function makeCounter(start = 0) {

    let count = start;  // this variable is "closed over"
    return {
        increment() { count++; },
        decrement() { count--; },
        get() { return count; }
    }

}

let counter = makeCounter(0);
counter.increment();
counter.increment();
counter.increment();
console.log(counter.get());
counter.decrement();
console.log(counter.get());


function makeRateLimiter(limit) {

    let call = 0;

    function check() {
        call++;
        return call <= limit;
    }

    return check;
}

let limiter = makeRateLimiter(3);
console.log(limiter());
console.log(limiter());
console.log(limiter());
console.log(limiter());

let str = "He said \"Hello\"";
console.log(str);