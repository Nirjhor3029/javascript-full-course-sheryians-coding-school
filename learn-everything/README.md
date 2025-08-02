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


