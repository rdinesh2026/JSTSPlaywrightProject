
function greetUser(name) {
    return `Hello, ${name}! Welcome to the world of functions!`;
} 


//anonymous function 
const greetUser1 = function(name) {
    return `Hello, ${name}! Welcome to the world of functions!`;
}  

//Arrow function
const greetUser2 = (name) => `Hello, ${name}! Welcome to the world of functions!`;



console.log(greetUser("Alice")); // Calling the function
console.log(greetUser("Bhavin")); // Calling the function
console.log(greetUser1("Charlie")); // Calling the function
