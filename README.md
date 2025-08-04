function counter() {
    let count = 0;
    return function () { 
        count++;
        return count;
    }
}

let increment = counter(); 
console.log(increment);  



console.log(increment()); //output: ?
console.log(increment()); //output: ?
console.log(increment()); //output: ?