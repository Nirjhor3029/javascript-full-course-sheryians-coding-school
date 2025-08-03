# Chapter 1: Variables & Declarations

This chapter covers the fundamentals of variables and declarations in JavaScript. Understanding these concepts is crucial for writing clear and effective code.

## Key Concepts

- **Variable Declaration**: Variables in JavaScript can be declared using `var`, `let`, or `const`. Each keyword has different scoping rules and use cases.

- **Variable Initialization**: This is the process of assigning a value to a variable at the time of declaration.

- **Variable Scope**: JavaScript variables can have either global or local scope, which determines where they can be accessed in the code.

## Code Examples

### Variable Declaration and Initialization

```javascript
var age = 10;
console.log(age);

let name = "John";
const pi = 3.14;
```

### Variable Scope

```javascript
function greet() {
    var name = "John";
    var age = 25; // This will shadow the global age variable
    if (age > 18) {
        name = "Doe";
        let father = "Smith"; // This variable is block-scoped
    }
    console.log(`Hello, ${name} you are ${age} years old!`);
}
```

### Hoisting

JavaScript allows variable declarations to be moved to the top of their containing scope during the compile phase. This is known as hoisting.

```javascript
console.log(Nirjhor); // undefined
var Nirjhor = "Hello Nirjhor..";
console.log(Nirjhor);

console.log(abcd); // ReferenceError: abcd is not defined
let abcd = "Hello abcd";
console.log(abcd); 
```

## Summary

In this chapter, we learned about declaring variables using `var`, `let`, and `const`, the importance of initialization, and how scope and hoisting affect variable behavior.




# Chapter 2: Data Types & Type System

This chapter delves into the intricacies of JavaScript's data types and type system. It is essential to master these concepts to effectively manipulate data and understand JavaScript's behavior.

## Key Concepts

- **Primitive and Reference Data Types**: JavaScript data types are divided into primitive types (such as `number`, `string`, `boolean`, `null`, `undefined`, and `symbol`) and reference types (such as `object`, `array`, and `function`).

- **Dynamic Typing**: JavaScript is dynamically typed, meaning variables can hold values of any data type, and the type is determined at runtime.

- **`typeof` Operator**: The `typeof` operator is used to check the data type of a variable, though it has some quirks (e.g., `typeof null` returns `"object"`).

- **Type Coercion & Conversion**: JavaScript can implicitly or explicitly convert values from one type to another, known as coercion. Explicit conversion can be done using functions like `Number()`, `String()`, etc.

- **Truthy & Falsy Values**: In JavaScript, certain values are considered "truthy" or "falsy" in contexts requiring a boolean value. For example, `0`, `""`, `null`, `undefined`, and `NaN` are falsy.

## Code Examples

### Primitive and Reference Data Types

```javascript
let num = 42; // number
let str = "Hello"; // string
let isTrue = true; // boolean
let obj = { name: "Alice" }; // object
let arr = [1, 2, 3]; // array
```

### Dynamic Typing

```javascript
let variable = "I am a string";
variable = 100; // Now it's a number
```

### `typeof` Operator

```javascript
console.log(typeof 42); // "number"
console.log(typeof "Hello"); // "string"
console.log(typeof null); // "object"
```

### Type Coercion & Conversion

```javascript
console.log("5" + 5); // "55" (string concatenation)
console.log(Number("5") + 5); // 10 (explicit conversion)
```

### Truthy & Falsy Values

```javascript
if (0) {
    console.log("This won't print, 0 is falsy");
}

if ("non-empty string") {
    console.log("This will print, non-empty strings are truthy");
}
```

## Summary

This chapter covered the various data types in JavaScript, how dynamic typing works, the quirks of the `typeof` operator, type coercion, and the concepts of truthy and falsy values. Understanding these will aid in writing robust and predictable JavaScript code.






# Chapter 3: Operators

In this chapter, we will cover the different types of operators available in JavaScript, including arithmetic, comparison, logical, assignment, bitwise, unary, and ternary operators.

## Arithmetic Operators

Arithmetic operators are used to perform mathematical operations on numbers.

### Examples

```javascript
let sum = 5 + 3; // Addition
let difference = 5 - 3; // Subtraction
let product = 5 * 3; // Multiplication
let quotient = 5 / 3; // Division
let remainder = 5 % 3; // Modulus
let exponentiation = 5 ** 3; // Exponentiation
```

## Comparison Operators

Comparison operators are used to compare two values and return a boolean value.

### Examples

```javascript
console.log(5 == "5"); // true (equality)
console.log(5 === "5"); // false (strict equality)
console.log(5 != "5"); // false (inequality)
console.log(5 !== "5"); // true (strict inequality)
console.log(5 > 3); // true (greater than)
console.log(5 < 3); // false (less than)
console.log(5 >= 3); // true (greater than or equal to)
console.log(5 <= 3); // false (less than or equal to)
```

## Logical Operators

Logical operators are used to combine multiple boolean expressions.

### Examples

```javascript
console.log(true && false); // false (logical AND)
console.log(true || false); // true (logical OR)
console.log(!true); // false (logical NOT)
```

## Assignment Operators

Assignment operators are used to assign values to variables.

### Examples

```javascript
let x = 5; // Assignment
x += 3; // Addition assignment (x = x + 3)
x -= 3; // Subtraction assignment (x = x - 3)
x *= 3; // Multiplication assignment (x = x * 3)
x /= 3; // Division assignment (x = x / 3)
x %= 3; // Modulus assignment (x = x % 3)
```

## Bitwise Operators

Bitwise operators are used to perform operations on binary representations of numbers.

### Examples

```javascript
console.log(5 & 3); // Bitwise AND
console.log(5 | 3); // Bitwise OR
console.log(5 ^ 3); // Bitwise XOR
console.log(~5); // Bitwise NOT
console.log(5 << 1); // Left shift
console.log(5 >> 1); // Right shift
```

## Unary Operators

Unary operators are operators that operate on a single operand.

### Examples

```javascript
let y = 5;
console.log(++y); // Increment
console.log(--y); // Decrement
console.log(typeof y); // Typeof
```

## Ternary Operator

The ternary operator is a shorthand for the if-else statement.

### Examples

```javascript
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No"; // Ternary operator
console.log(canVote);
```

## JavaScript: `typeof` vs `instanceof`

### 1. `typeof` Operator
- Used to determine the **primitive type** of a variable.
- Returns a **string** indicating the type.
- Works well with primitives (string, number, boolean, undefined, symbol, bigint) and functions.
- For arrays, objects, and null, it returns `'object'`.

#### Syntax
```js
typeof variable
console.log(typeof "Hello");   // "string"
console.log(typeof 123);       // "number"
console.log(typeof true);      // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof Symbol());  // "symbol"
console.log(typeof 10n);       // "bigint"
console.log(typeof function(){}); // "function"
```

```js
console.log(typeof [1, 2, 3]); // "object"
console.log(typeof {a:1});     // "object"
console.log(typeof null);      // "object" (quirk in JS)
```

### 2. `instanceof` Operator

Checks if an object is an instance of a constructor or class.

* Returns **boolean** (true / false).
* Does not work on **primitives**.
* Checks through the **prototype chain**.

#### Syntax
```javascript
object instanceof Constructor;

console.log([] instanceof Array);     // true
console.log({} instanceof Object);    // true
console.log(new Date() instanceof Date); // true
console.log(function(){} instanceof Function); // true
console.log("hello" instanceof String); // false (primitive string)
console.log(new String("hello") instanceof String); // true (String object)
```

