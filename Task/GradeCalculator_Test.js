/*Write a program that calculates and displays the letter grade for a given numerical score (e.g., A, B, C, D, or F) based on the following grading scale:
A: 90-100
B: 80-89
C: 70-79
D: 60-69
F: 0-59
*/

// ----------------------------Way -1
let score = -10
if (score > 100 || score <0 )
{
    console.log("Invalid Score");
}
else if (score >= 90 && score <=100 )
{
    console.log("Grade A");
}
else if (score >= 80 && score <= 89)
{
    console.log("Grade B");
}
else if (score >= 70 && score <= 79)
{
    console.log("Grade C");
}
else if (score >= 60 && score <= 69)
{
    console.log("Grade D");
}
else 
{
  console.log("Grade F");  
}


// //way-------------------- 2
// let score = 1
// if (score > 100 || score < 0)
// {
//    console.log("Invalid Grade");
// }
// else if (score >= 90)
// {
//     console.log("Grade A");
// }
// else if (score >= 80)
// {
//     console.log("Grade B");
// }
// else if (score >= 70)
// {
//     console.log("Grade C");
// }
// else if (score >= 60)
// {
//     console.log("Grade D");
// }
// else
// {
//   console.log("Grade F");  
// }


////------------------way -3
// let score = 62
// if (score >= 90 && score <=100 )
// {
//     console.log("Grade A");
// }
// else if (score >= 80 && score <= 89)
// {
//     console.log("Grade B");
// }
// else if (score >= 70 && score <= 79)
// {
//     console.log("Grade C");
// }
// else if (score >= 60 && score <= 69)
// {
//     console.log("Grade D");
// }
// else if (score >= 0 && score <= 59) 
// {
//   console.log("Grade F");  
// }
// else
// {
//  console.log("Invalid Score");
// }