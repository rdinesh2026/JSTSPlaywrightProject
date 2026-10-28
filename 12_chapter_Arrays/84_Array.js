let arr = [1,2,3];
console.log(arr);

// Add to END
arr.push(4);
console.log("Added element: " + arr);

// Remove from END
arr.pop();
console.log("Removed last element: " + arr); 
arr.push(5, 6);
console.log("Added elements: " + arr);

// Add to BEGINNING
arr.unshift(20);
console.log("Added element to beginning: " + arr);

// Remove from BEGINNING
arr.shift();
console.log("Removed first element: " + arr);

// [ 1, 2, 3, 5, 6 ]
arr.splice(2,1);
console.log("Spliced element: " + arr);

arr.splice(2, 0, 99);
//arr.splice(2, 2, 99);
// arr.splice(2, 0, 99); it will add 99 at index 2 and remove 0 elements
// arr.splice(2, 1, 99); it will add 99 at index 2 and remove 1 element

// arr.splice(2, 2, 99);
console.log(arr);

// [ 1, 2, 99, 5, 6 ]
arr.splice(1, 2, 10, 20);
console.log(arr);