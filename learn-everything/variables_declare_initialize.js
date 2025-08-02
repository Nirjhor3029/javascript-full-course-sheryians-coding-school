

// var age = 10;
// console.log(age);

function greet() {
    var name = "John";
    var age = 25; // This will shadow the global age variable
    if (age > 18) {
        name = "Doe";
        let father = "Smith"; // This variable is block-scoped
    }
    console.log(`Hello, ${name} you are ${age} years old!`);
    // console.log(father); // This will throw an error because father is not defined outside the if block
}
greet();

// function newMember(){
//         console.log(`Hello, ${name} you are ${age} years old!`);
// }
// newMember();

console.log(Nirjhor);
var Nirjhor = "Hello Nirjhor";
console.log(Nirjhor);



console.log(abcd); // This will throw an error because abcd is not hoisted like var
let abcd = "Hello abcd";
console.log(abcd); 