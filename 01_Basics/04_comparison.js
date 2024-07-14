/*
console.log(2 > 1)
console.log(2 < 1)
console.log(2 == 1)
console.log(2 != 1)


console.log("2" > 3);
console.log("02" > 3);
console.log("2" > "1");
console.log(2 > "1");
console.log("sam" > "1")

// make sure that the data type of both the character  should be same 
//  in this the  character inside the double inverted comma ( " " ), will work as a number


console.log(null > 0)         // false
console.log(null == 0)      // false    
console.log(null >= 0)      // True 

// the reason is that an equality check == and comparisons >, <, >=, <= work differently
// Comparisons convert NULL to a NUMBER, treating it as 0.
// That's why null >= 0 is TRUE and null > 0 is false.

console.log(undefined > 0)          // false
console.log(undefined >= 0)         // false
console.log(undefined < 0)          // false
console.log(undefined <= 0)         // false    
console.log(undefined == 0)         // false
console.log(undefined != 0)         // True


// the difference b/w equalto ( == ) and === is that.....
//  == compares the value , Double equals (==) is a comparison operator, which transforms the operands having the same type before comparison.
// ===  not only checks the value but also check/compares the data type also.

0 == false   // true
0 === false  // false, because they are of a different type
1 == "1"     // true, automatic type conversion for value only
1 === "1"    // false, because they are of a different type
null == undefined // true
null === undefined // false
'0' == false // true
'0' === false // false
*/
// strict check     ===

console.log("20" == 20);
console.log("20" === 20);
console.log(20 == 20);
console.log("20" === "20");

// in this we always avoid using this type of values .