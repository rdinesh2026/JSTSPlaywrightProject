let results = ["pass", "fail", "pass", "error", "fail","Not pass","fail"];
console.log(results);

let positionOfFail = results.indexOf("fail"); //1
console.log("Position of the Fail element: " + positionOfFail);
results.indexOf("skip");  // -1

// lastIndexOf — searches from the end
let lastIndexOfFail = results.lastIndexOf("fail");
console.log("Last position of the Fail element: " + lastIndexOfFail);

// includes — returns boolean
let includesError = results.includes("error"); // true
console.log("Does the array include error? : " + includesError);