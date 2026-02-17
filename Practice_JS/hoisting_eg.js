// what is hoisting ?
/*Hoisting is JavaScript’s behavior where variable and function declarations are moved to memory during the creation phase before code execution.
var is hoisted with undefined, let and const are hoisted but remain in Temporal Dead Zone, and function declarations are fully hoisted.*/

//--------------------------var eg
var x = 1;
function demo() {
    console.log(x);
    var x = 2; // output -->> undefined
}
demo();
//------------------------------------

// GLOBAL PHASE
// ------------
// Memory:
// x → undefined
// demo → function
// Execution:
// x = 1

// CALL demo()
// -----------
// DEMO MEMORY CREATION
// --------------------
// x → undefined   (local variable created)
// DEMO EXECUTION
// --------------
// console.log(x) → undefined
// x = 2
/*Inside the function, var x is hoisted to the top and initialized with undefined.
When console.log(x) runs, it refers to the local x, not the global one, so it prints undefined.*/

//-------------------let eg explain below
var x = 1;

function demo() {
    console.log(x);
    let x = 2;// output -->> ReferenceError: Cannot access 'x' before initialization
}
demo();
//------------------------------------

// GLOBAL
// ------
// x → 1

// CALL demo()
// -----------
// MEMORY CREATION (inside function)
// ---------------------------------
// x → TDZ (not initialized)
// EXECUTION
// ---------
// console.log(x) → ❌ ReferenceError
// let x = 2

/*let variables are hoisted but not initialized.
They stay in the Temporal Dead Zone until the declaration line executes.
When console.log(x) runs, JS finds the local x but it's in TDZ, so it throws a ReferenceError.*/

//------------------------function eg explain below
console.log(a);
var a = 10;

test();

function test() {
    console.log("Hello");
}
//------------------------------------

//output undefined
//output Hello

//note - exeute seperately each eg and take chatgpt help for any query