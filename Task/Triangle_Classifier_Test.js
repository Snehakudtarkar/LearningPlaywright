//Write a program that classifies a triangle based on its side lengths. Given three input values representing the lengths of the sides, determine if the triangle is equilateral (all sides are equal), isosceles (exactly two sides are equal), or scalene (no sides are equal). Use an if-else statement to classify the triangle.
// --------------------------------way 1
// let a=5, b=5, c=8;

// if(a===b && b===c){
//     console.log("Triangle is equilateral");
// }
// else if (a===b || b===c || a===c){
//     console.log("Triangle is isosceles");
// }
// else{
//     console.log("Triangle is scalene");
// }


//------------------------- way 2
/*Better Version (With Triangle Validation)

In real logic, we should first check if it forms a valid triangle.

Triangle rule:(addition of 2 sides should be greater then 3rd side)
a + b > c
a + c > b
b + c > a

// ✅ Professional Version */
let a = 5;
let b = 5;
let c = 8;

// Check valid triangle 
if (a + b <= c || a + c <= b || b + c <= a) {
    console.log("Not a valid triangle");
}
else if (a === b && b === c) {
    console.log("Equilateral Triangle");
}
else if (a === b || b === c || a === c) {
    console.log("Isosceles Triangle");
}
else {
    console.log("Scalene Triangle");
}
