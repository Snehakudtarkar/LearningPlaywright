/*
//Test Environment Config
In CI/CD pipelines, tests run against different environments. Write a JavaScript program using a switch statement that takes an environment name stored in a variable and prints the base URL, API key pattern, and timeout. Use const for fixed values and let for the assembled config.

Environments: dev, staging, qa, production/prod. Each has different base URL, API key prefix, timeout, and description.
*/
const envName = "dev234";
const env = envName.toLowerCase();

let Url;
let APIkey;
let Timeout;
let Description;

switch (env) {
    case "dev": 
    Url ="https//dev.com";
    APIkey ="key1";
    Timeout ="60 sec";
    Description = "devlopment environment";
    break;

    case "qa": 
    Url ="https//qa.com";
    APIkey ="key2";
    Timeout ="60 sec";
    Description = "QA environment";
    break;

    case "stagging": 
    Url ="https//stagging.com";
    APIkey ="key1";
    Timeout ="60 sec";
    Description = "stagging environment";
    break;

    case "production": 
    Url ="https//production.com";
    APIkey ="key1";
    Timeout ="60 sec";
    Description = "production environment";
    break;

    default : 
    Url ="Unknown";
    APIkey ="Unknown";
    Timeout ="NA";
    Description = "Unknown Environment";
    console.log("Invalid environment detected: "+ envName);
}

console.log("Environment: " + env.toUpperCase()); 
console.log("Base URL: " + Url);
console.log("API url: " + APIkey);
console.log("Timeout: " + Timeout);
console.log("Description: " + Description);