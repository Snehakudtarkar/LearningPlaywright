/*Test Case Result Counter
After a test suite runs, you receive an array of test results (strings: "pass", "fail", "skip"). Write a JavaScript program using a for loop that counts how many tests passed, failed, and were skipped. Print a test report with total tests, counts, pass rate percentage, and a verdict (all passed → ready for release, ≤2 failures → review, >2 failures → block release).

*/

const testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass", "fail"]
let passCount_1 = 0;
let failCount_1 = 0;
let skipCount_1 = 0;

for (let i=0; i<testResults.length; i++){
    if (testResults[i] === "pass"){
    passCount_1++;
} else if(testResults[i] === "fail"){
    failCount_1++;
} else if(testResults[i] === "skip"){
    skipCount_1++;
}
}
const totalTest = testResults.length;
const passRate = ((passCount_1/totalTest)* 100).toFixed(2) ;

console.log("============Test Report============");
console.log("Total Test: " + totalTest) ;
console.log("Pass Rate: " + passRate + "%");
console.log("Total Pass Test: " + passCount_1) ;
console.log("Total Fail Test: " + failCount_1) ;
console.log("Total Skip Test: " + skipCount_1) ;

if (failCount_1===0){
    console.log("all test passed → ready for release");
}else if (failCount_1 <= 2){
    console.log("Test review is required before release");
}else {
    console.log("Too many failure of test, Block the Release");
} 