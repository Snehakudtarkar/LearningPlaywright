// Iterate - Go from one to another. // 

let tests = ["login", "checkout", "search"];

// for (let i = 0; i < tests.length; i++) {
//     console.log(tests[i]);
// }

// console.log("----");

// // for...of (cleanest for values)
// for (let test of tests) {
//     console.log(test) // value
// }
console.log("----");

// forEach (no return value)
tests.forEach((test, index) => {

    console.log(`${index}: ${test}`);
});

console.log("----");
// entries() — index + value

for (let [i, test] of tests.entries()) {
    console.log(i, test);
}

console.log("----");

let students = ["methis", "senthil", "ajay", "rahul"];


for (let student in students) {
    console.log(student, " -> ", students[student]); // index = in
}

let result = Array.isArray([1, 2, 3]);
let result1 = Array.isArray("a");
console.log(result);
console.log(result1);

let [first, second, ...third] = [10, 20, 30, 40, 50];
console.log(first);
console.log(second);
console.log(third);