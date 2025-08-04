
// HOF - Higher Order Function
// A function that takes another function as an argument or returns a function as its result.

// Clousure
// A function that has access to its own scope, the outer function's scope, and the global scope, even after the outer function has finished executing.

/**
 * For understanding the concept of Higher Order Functions and Closures, we can create a simple example.
 */

function counter() {
    let count = 0; // This variable is private to the counter function

    return function () { // This inner function is a ***closure
        count++; // It has access to the ***count variable
        return count;
    }
}

let increment = counter(); // increment is now a function that can access the count variable
console.log(increment);  // Output: [Function (anonymous)] it holds latest value of count



console.log(increment()); // Output: 1, first call increments count to 1
console.log(increment()); // Output: 2, second call increments count to 2
console.log(increment()); // Output: 3, third call increments count to 3

// The above code demonstrates how a closure can maintain state across multiple calls.
// The `counter` function creates a private variable `count` and returns an inner function that has access to it.
// Each time the `increment` function is called, it increments the `count` variable and returns the new value.


// =============================================================================

/**
 * Reusable Discount Function
 * This function takes a discount percentage and returns a function that applies that discount to a given price
 */

function createDiscountCalculator(discountPercentage) {
    return function (price) {
        const discountAmount = price * (discountPercentage / 100);
        return price - discountAmount;
    }
}
let tenPercentDiscount = createDiscountCalculator(10);
let twentyPercentDiscount = createDiscountCalculator(20);

console.log(tenPercentDiscount(100)); // Output: 90
console.log(tenPercentDiscount(200)); // Output: 180
    
console.log(twentyPercentDiscount(100)); // Output: 80
console.log(twentyPercentDiscount(200)); // Output: 160