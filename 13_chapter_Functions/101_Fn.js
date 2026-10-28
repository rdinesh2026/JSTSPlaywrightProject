/*
In the context of the Playwright automation framework, a "function" generally refers to the asynchronous API methods used to control browser actions, locate elements, and structure test execution.
Because modern web applications are highly dynamic, almost all core Playwright functions are asynchronous and return promises, meaning they must be prefixed with the await keyword
*/

// Function In JS - Resuable block of code that can be called with a name and can accept parameters to perform a specific task. 
// Functions help in organizing code, making it reusable, and improving readability.

// Define a function 
/*
function name(parameters) {
 // code to be executed
 //return or no return value
}
*/

// Call a function  
// functionName(arguments);
/*
1. Built in fucntion
2. User defined function
    1. no return or no parameters
    2. with return and no parameters
    3. with return and with parameters
    4. no return and with parameters
3. Default parameters
4. anonymous function
5. arrow function
6. IIFE (Immediately Invoked Function Expression)
7.Higher order function
8. Recursive function in other words a function that calls itself
*/

function greet() {
    console.log("Hello, welcome to the world of functions!");
}

greet(); // Calling the function