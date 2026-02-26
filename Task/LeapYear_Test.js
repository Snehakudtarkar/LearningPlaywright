/*✅ Leap Year Checker:

Create a program that determines whether a given year is a leap year. A leap year is divisible by 4, but not by 100 unless it is also divisible by 400. Use an if-else statement to make this determination.

A year is a leap year if:
✅ It is divisible by 4
❌ But NOT divisible by 100
✅ UNLESS it is also divisible by 400

In short formula:
(year % 4 === 0 && year % 100 !== 0) || year % 400 === 0

year = 2026 , no leap year */
// ---------------------------------way 1
// let year = 1900;
// if (year%400===0 )
// {
//     console.log("It's a Leap Year");
// }
// else if (year%100===0)
// {
//     console.log("It's not a Leap Year");
// }
// else if(year%4===0 ){
//     console.log("It's a Leap Year");
// }
// else{
//     console.log("Not a Leap Year");
// }

//-------------------------- way 2 
let year = 2024;
if ((year%4===0 && year%100 !==0) || year%400===0)
{
    console.log("It's a Leap Year");
}
else{
    console.log("Not a Leap Year");
}