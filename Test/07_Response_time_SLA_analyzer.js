/*
As a performance tester, you collect API response times in milliseconds. Write a JavaScript program using a while loop that analyzes an array of response times and prints a performance report with min, max, average, and how many responses breached the SLA threshold (> 500ms). Use comparison operators for min/max tracking.
*/

APIresponce = [ 120, 450, 501, 499, 600, 240 ];
max_responseTime = 500;
let i =0;
let minResponse=0;
let maxResponse=0;


 ( i < APIresponce.length) {
    if (i > 500) {
        
    }
    else if (i < 500){
        console.log("Performance is max");
    }

}

