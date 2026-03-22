//Retry Failed API Call --In automation testing, API calls sometimes fail due to network issues. Write a JavaScript program that simulates retrying a failed API call using a do...while loop. The program should retry a maximum of 5 times. Simulate random success/failure using Math.random() (40% chance of success: randomValue > 0.6). Log each attempt and print the final result.

let MAX_ATTEMPTS = 5;
attemptNumber =0 
do {

    attemptNumber++
    const randomValue = Math.random();
    isSuccess = randomValue > 0.6

    if (isSuccess) {
        console.log("API call attempt: " + attemptNumber + " is success");        
    }else {
        console.log("API call attempt: " + attemptNumber + " is failed");
    }


}while(!isSuccess && attemptNumber < MAX_ATTEMPTS);;

console.log("--- Final Result ---");

if (isSuccess) {
  console.log("API call PASSED after " + attemptNumber + " attempt(s).");
} else {
  console.log("API call FAILED after " + attemptNumber + " attempts. Max retries exhausted.");
  console.log("ACTION: Raise a bug - API is unreliable.");
}



// const MAX_ATTEMPTS = 5;
// let attemptNumber = 0;
// let isSuccess = false;

// console.log("Starting API call with retry logic...");
// console.log("");

// do {
//   attemptNumber++;
//   const randomValue = Math.random();
//   isSuccess = randomValue > 0.6;

//   if (isSuccess) {
//     console.log("Attempt " + attemptNumber + ": ✅ SUCCESS (Response 200 OK)");
//   } else {
//     console.log("Attempt " + attemptNumber + ": ❌ FAILED (Timeout/Error)");
//   }
// } while (!isSuccess && attemptNumber < MAX_ATTEMPTS);

// console.log("");
// console.log("--- Final Result ---");

// if (isSuccess) {
//   console.log("API call PASSED after " + attemptNumber + " attempt(s).");
// } else {
//   console.log("API call FAILED after " + attemptNumber + " attempts. Max retries exhausted.");
//   console.log("ACTION: Raise a bug - API is unreliable.");
// }

// //
/*

// Element Visibility Checker
In UI automation (Cypress/Playwright), you often need to validate element states before interacting with them. Write a JavaScript program that checks an element's properties (isPresent, isDisplayed, isEnabled) and prints the appropriate action a QA engineer should take. Use strict equality (===), logical operators (&&, ||), and the ternary operator for severity level.

States: READY (all true), DISABLED (present+displayed but not enabled), HIDDEN (present but not displayed), NOT FOUND (not present).
Severity: CRITICAL (not present), WARNING (not displayed or not enabled), OK (all good).

//Test Data Generator
As an SDET, you frequently need to generate test data for form testing. Write a JavaScript program that generates test user data using a for loop. Each user should have a unique ID (USR-0001 format), name, email, and role (cycling through: admin, editor, viewer, tester, manager). Every 3rd user should be inactive (edge case testing). Demonstrate proper use of var (global counter), let (loop variables), and const (fixed values).


//Login Brute-Force Detection
Write a JavaScript program that simulates a login system with brute-force detection. The system should lock the account after 3 consecutive failed attempts. Use a do...while loop to process login attempts from an array. Demonstrate var (global counter), let (loop variables), and const (credentials and threshold). Validate using strict equality (===) and logical operators (&&).
//Mini Test Suite Runner
Build a mini test suite runner that executes test cases and generates a summary report. This question combines ALL topics: var/let/const, if-else, switch, for loop, while loop, do...while, operators (===, !==, &&, ||, ??, ternary), typeof checks, and identifiers.

Each test case has a name, expected value, actual value, and comparison type (strictEqual, looseEqual, typeCheck, truthy, lessThan). Run all tests, track pass/fail/error counts, find consecutive passes from start (while loop), find first failure (do...while), and print a comprehensive report.

*/