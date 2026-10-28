let num = prompt("Enter a number:");
num = Number(num);  // convert string to number

if (num % 2 === 0) {
    console.log(num + " is Even");
} else {
    console.log(num + " is Odd");
}


// The prompt() function is a browser-only feature. 
// If you are running your JavaScript file directly inside VS Code using Node.js, prompt() will not work.