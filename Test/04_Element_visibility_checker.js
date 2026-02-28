/*In UI automation (Cypress/Playwright), you often need to validate element states before interacting with them. Write a JavaScript program that checks an element's properties (isPresent, isDisplayed, isEnabled) and prints the appropriate action a QA engineer should take. Use strict equality (===), logical operators (&&, ||), and the ternary operator for severity level. States: READY (all true), DISABLED (present+displayed but not enabled), HIDDEN (present but not displayed), NOT FOUND (not present). Severity: CRITICAL (not present), WARNING (not displayed or not enabled), OK (all good).*/

const isPresent=false;
const isDisplayed=true;
const isEnabled=true;

let state;
let action;

if (isPresent && isDisplayed && isEnabled){
    state="READY";
    action="Elemet is present, displayed and interactable, Proceed with check/type action";
}else if(isPresent && isDisplayed && !isEnabled){
    state="DISABLED";
    action="Element is present and displayed but not enabled, wait to enabled the element";
}else if(isPresent && !isDisplayed){
    state="HIDDEN";
    action="Element is present but not displayed, wait to display the element";
}else if(!isPresent){
    state="NOT FOUND";
    action="Element is not present";
}

const severity = !isPresent ? "CRITICAL" : (!isDisplayed || !isEnabled) ? "WARNING" : "OK"; //neted ternery condition

console.log("isPresent: " +isPresent);
console.log("isDisplayed: " +isDisplayed);
console.log("isEnabled: " +isEnabled);
console.log("state of the element: " +state);
console.log("Action: " +action);
console.log("Severity: " +severity);


