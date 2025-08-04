
// Normal functions
/**
 * reuse, organize, stop auto run the code
 */

// Function Declaration
function greetings() {
    console.log("hello bhai");

}
greetings();


for (let index = 0; index < 10; index++) {
    greetings(); // This will call the greetings function 10 times
}




// Function assigned into a variable: Function Expression
let happyNewYear = function () {
    console.log("Happy New Year" + Date());
}

happyNewYear();


// Fat Arrao Function

// Fat Arrow Function
// parameters & arguments
let add = (a, b) => {
    return a + b
};
console.log(add(5, 3));


// Default, Rest & Spread Parameters

// Default Parameters
let add1 = (a = 0, b = 0) => {
    return a + b
};
console.log(add1()); // 0
console.log(add1(5, 4)); // 9

// Rest Parameters
function abcd(name, dateOfBirth, ...val) {
    console.log(val); // [1, 2, 3, 4, 5]
    console.log(name); // 'nirjhor'
    console.log(dateOfBirth); // 1994
}
abcd('nirjhor', 1994, 1, 2, 3, 4, 5);


// Spread Parameters
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// ====================================================

// First Class Functions
// Functions can be passed as arguments, returned from other functions, and assigned to variables

// Example-1 of First Class Functions
function bcde(param) {
    param();
}

bcde(function () {
    console.log("This is a callback function");
});

// Example-2 of First Class Functions
function greet(name) {
    return `Hello, ${name}!`;
}
function processUserInput(callback) {
    const name = 'Alice';
    console.log(callback(name));
}
processUserInput(greet);



/**
 * HOF - Higher Order Function
 * A function that takes another function as an argument or returns a function as its result.
 */

// accept a function as a parameter 
function higherOrderFunction(callback) {
    console.log("Before callback");
    callback();
    console.log("After callback");
}
higherOrderFunction(function () {
    console.log("This is the callback function");
});


// return a function
function outerFunction() {
    return function innerFunction() {
        console.log("This is the inner function");
    };
}
console.log(outerFunction()); // Logs the inner function definition

// To call the inner function, we need to invoke the outer function first
outerFunction()();



// ============================================================
// IIFE - Immediately Invoked Function Expression
// A function that runs as soon as it is defined

(function(){})(); // This is an IIFE its a function that runs as soon as it is defined

(function () {
    console.log("This is an IIFE");
})();

// =============================================================
/**
 *  Pure Vs Impure Functions
 */
// Pure Function: A function that always produces the same output for the same input and has no side effects.
function pureFunction(x) {
    return x * 2; // Always returns the same output for the same input
}

// Impure Function: A function that may produce different outputs for the same input or has side effects.
let counter = 0;
function impureFunction() {
    counter++;
    return counter;
}


// =============================================================

/**
 * Closures 
 * A closure is when a function "remembers" the variables from its outer scope even after that outer function has finished running.
 */
function outerFunction() {
    let outerVariable = 'I am from outer function';

    function innerFunction() {
        console.log(outerVariable); // Accessing outer function's variable
    }

    return innerFunction; // Returning the inner function
}

const closureFunction = outerFunction();
closureFunction();


function createCounter() {
    let count = 0;

    return function() {
        count++;
        console.log(count);
    };
}

let counter1 = createCounter();

counter1();  // Output: 1
counter1();  // Output: 2
counter1();  // Output: 3

// lexical scope
function lexicalScopeExample() {
    let outerVariable = 'layer1';

    function innerFunction() {
        let innerVariable = 'layer2';
        console.log(outerVariable); // Accessing outer function's variable
        console.log(innerVariable); // Accessing inner function's variable
        // Nested function can access both inner and outer variables

        
        
        // console.log(nestedVariable); // This will throw an error as nestedVariable is not defined in this scope



        function nestedFunction() {
            let nestedVariable = 'layer3'; // Accessing inner function's variable
            console.log(nestedVariable);
            console.log(innerVariable);
            console.log(outerVariable); // Accessing outer function's variable
            
        }
    }

    innerFunction(); // Calling the inner function



    // nestedFunction(); // Uncommenting this will throw an error as nestedFunction is not defined in this scope
}
lexicalScopeExample()