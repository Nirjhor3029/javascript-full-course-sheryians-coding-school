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
