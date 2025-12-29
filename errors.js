

// Common types of errors



// Syntax errors - when code is not correctle written inaccordance with the grammatical rules of JS: 

// function helloWorld() {
// console.log "hello world"; // Syntax Error: Unexpected string
// }



// Refference error - errors occuring when variable we try to reference to doesnt exist (within
// current scope), wasnt initialized yet or it has been spelled incorrectly.


// const a = "hello";
// const b = "world";

// console.log(c); // ReferenceError: c is not defined



// const z = 5;
// const x = 8;

// function add() {
//     return c;
// }

// function print() {
//     add();
// }

// print(); // Reference error: c i not defined. But as rensonse from browser we received "stack trace":
// at add (errors.js:14:5) - c is not defined at line 14 in scope of add()
// at print (errors.js:18:5) - add() was called by print() at line 18
// at errors.js:21:1 - print() itself was called on line 12 
// stack trace lets us trace the evolution of error back to origin, in this example add()



// Type errors error when an operation could not be performed, typically (but not exclusively) when a 
// value is not of the expected type. can be thrown by following reasons:

// - an operand or argument passed to a function is incompatible with the type expected by that 
// operator or function;
// - when attempting to modify a value that cannot be changed;
// - when attempting to use a value in an inappropriate way.

// const str1 = "Hello";
// const str2 = "World";
// const message = str1.push(str2); // Type Error: str1.push is not a function

// .push() here used to add 2 strings, but .push() used only on arrays, thats why we recieve an error
// in order to fix, we should just replace .push()  to .concat() and error solved.


// Tips for resolving errors:

// - Error message is not our enemy, but friend. 
// - use the debugger (chrome devtools)
// - console is quick debugging tool. console.log(), console.table(), console.trace() are helpful.



// MDN troubeshooting assignment..refer to mdn-trouble.html

