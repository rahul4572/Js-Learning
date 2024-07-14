
// primitive data types 

// String, symbol, Number, Boolean, undefined, Null,  BigInt

// Javascript is a dynamic typed language. This means that the type of data type of a variable is determined at runtime, rather than at compile time


const score = 100


const id = Symbol('12345');
const anotherId = Symbol('12345');

//console.log(id == anotherId);

console.log(id === anotherId);

//const bigNumber = 51651646465146540042251235484n
//console.log(bigNumber);
// non-primitive data type ( Reference )

// arrays, object, functions 

const hero = ["shaktiman", "naagraj", "doga"]
let obj = {
    name: "Kanika",
    age: 22,
}
//console.log(hero);
//console.log(obj);

// function

const myFunc = function() {
    console.log("Hello World");
}

console.log(typeof bigNumber)
console.log(typeof myFunc)
console.log(typeof hero)

