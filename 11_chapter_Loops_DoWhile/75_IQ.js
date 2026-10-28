// Do while vs while


// while -- While will always check the condition first. 
// Do while -- Do while will always execute the code block at least once, 
// even if the condition is false.
// let a = 10;
// while(a < 10){
//     console.log(a);
//     a++;
// }

let a = 10;
do {
    console.log(a);
    a++;
} while (a < 10);