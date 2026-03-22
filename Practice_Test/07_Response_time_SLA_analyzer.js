/*
As a performance tester, you collect API response times in milliseconds. Write a JavaScript program using a while loop that analyzes an array of response times and prints a performance report with min, max, average, and how many responses breached the SLA threshold (> 500ms). Use comparison operators for min/max tracking.
*/

const responseTimes = [ 120, 450, 501, 499, 600, 240 ];
let maxResponseTime = responseTimes[0];
let minResponseTime = responseTimes[0];
let SLA_Tresold = 500;
let index = 0 ;
let totalRespnseTime = 0;
let slaBreach =0 ;

 while ( index < responseTimes.length) {
    const current = responseTimes[index];

    if (current < minResponseTime ) {minResponseTime=current;}
    if (current > maxResponseTime) {maxResponseTime=current;}

    totalRespnseTime = totalRespnseTime + current ;
    
    if (current > SLA_Tresold ) {
        slaBreach++;
    }

    index++

    }
const average = (totalRespnseTime / responseTimes.length).toFixed(2);
console.log("Total request responses: " + responseTimes.length);
console.log("Max Respnce Time: " + maxResponseTime);
console.log("Min Respnce Time: " + minResponseTime);
console.log("Average Response Time: " + average + "ms");
console.log("Responses breached the SLA threshold: " + slaBreach);

//++++++++++++++++++++++++++++++++++++ way 2 +++++++++++++++++++++++++++++++++++++++++++++++

// const responseTimes = [120, 230, 450, 510, 180, 620, 340, 780, 290, 150, 530, 410];
// const SLA_LIMIT = 500;

// let min = responseTimes[0];
// let max = responseTimes[0];
// let totalTime = 0;
// let breachCount = 0;
// let index = 0;

// console.log("Checking SLA breaches (threshold: " + SLA_LIMIT + "ms)...");
// console.log("");

// while (index < responseTimes.length) {
//   const current = responseTimes[index];

//   if (current < min) { min = current; }
//   if (current > max) { max = current; }

//   totalTime += current;

//   if (current > SLA_LIMIT) {
//     breachCount++;
//     console.log("  ⚠️ SLA BREACH at request #" + (index + 1) + ": " + current + "ms");
//   }

//   index++;
// }

// const average = (totalTime / responseTimes.length).toFixed(2);
// const breachPercentage = ((breachCount / responseTimes.length) * 100).toFixed(2);

// console.log("");
// console.log("===== PERFORMANCE REPORT =====");
// console.log("Total Requests   : " + responseTimes.length);
// console.log("Min Response     : " + min + "ms");
// console.log("Max Response     : " + max + "ms");
// console.log("Avg Response     : " + average + "ms");
// console.log("SLA Threshold    : " + SLA_LIMIT + "ms");
// console.log("SLA Breaches     : " + breachCount + " (" + breachPercentage + "%)");

// const overallStatus = breachCount === 0 ? "✅ ALL PASSED" : "❌ SLA VIOLATED";
// console.log("Overall Status   : " + overallStatus);
// console.log("==============================");