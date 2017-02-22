
SOFTWARE COMMANDMENT: Write the least amount of code possible. 
Why?
To understand "Why" we must first understand a concept: Complexity.
Complexity is a qualitative measure of 
1.)"Is the code hard to read?"
2.)"Can I remove code without changing the expected behavior?"
Answering yes, means the code is COMPLEX.

Each line of code that you right increases complexity. 
&&
As complexity increases, the more space for bugs.

Take-Away: Write less code.

Ex:
~
large program

Involve complexity —> complexity == Bad
More space for bugs to hide
~
A.

var total = 0, count = 1; while (count <= 10) {

total += count;

count += 1; }

console.log(total);


B.

console.log(sum(range(1, 10)));

~ 

A or B, which one is more like;y to contain a bug? A.

B. constitutes simple concepts that are applied to solve the problem. Functional. We trust that each component works, as defined. And, if there is a bug, the bug is Easy to locate. 

A. not easy to understand.

How to think about a given problem:

GIVEN A PROBLEM:
Creating functional units that will be used to solve the problem. Easy to understand
You must notice when a concept is begging to be abstracted into a new word
Hide what no one cares to see. 


Higher-Order Functions 

Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions

~
Examples:

Functions that create new functions.

function greaterThan(n) {
    return function(m) { 
        return m > n; 
    };
}

var greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// → true
console.log(greaterThan10(9));
// → false
console.log(greaterThan10(10));
// → false


 1st function registers the returned function, defines variables of the returned function, given it’s args.

~

Functions that change other functions.

function executor(f) { 
    return function(arg) {
        console.log("calling with", arg);
        var val = f(arg);
        console.log("called with", arg, "- got", val); 
        return val;
    }; 
}

executor(Boolean)(0);
// → calling with 0
// → called with 0 - got false

// How is executor similar to greaterThan? 

~

Exercise
//The goal is to filter a list of movies by a user-defined by a specific criteria

Given a list of MOVIES

~

JSON : data storage and communication format on the Web

All property names have to be surrounded by double quotes
Only simple data expressions are allowed—no function calls, variables, or anything that involves actual computation.
JS functions
JSON.stringify
JS —> JSON
takes a JavaScript value and returns a JSON-encoded string.
{name: "X", born: 1980} —> "name":"X","born”:1980
JSON.parse
JSON-encoded string —> Value it encodes
var ancestry = JSON.parse(ANCESTRY_FILE); // parse into props, values
console.log(ancestry.length); // makes values accessible by their prop. 
// → 39
 
Filtering an array

Key: you pass filer a function rich returns t/f given an input. This will then be used to populate an array.

 function filter(array , test) {

var passed = [];
for (var i = 0; i < array.length; i++) {

if (test(array[i])) passed.push(array[i]);

}

return passed; }

}));

console.log(filter(ancestry , function(person) {

 return person.born > 1900 && person.born < 1925;

function(person) { // → [{name: "Philibert Haverbeke", ...}, ...]

 

 This function is pure. It does not modify the array it is given.

 Transforming with map

The map method transforms an array by applying a function to all of its elements and building a new array from the returned values. The new array will have the same length as the input array, but its content will have been “mapped” to a new form by the function.

 

function map(array , transform) {
var mapped = [];
for (var i = 0; i < array.length; i++)

mapped.push(transform(array[i])); return mapped;

}

var overNinety = ancestry.filter(function(person) { return person.died - person.born > 90;

});
console.log(map(overNinety , function(person) {

return person.name; }));

// → ["Clara Aernoudts", "Emile Haverbeke", // "Maria Haverbeke”]



Same thing except the transform extracts a value, which is returned.

MAP WILL INSERT THE RETURNED VALUE INTO A NEW ARRAY

FILTER WILL INSERT ALL ELEMENTS WHICH PASS THE TEST NTO THE ARRAY



Summarizing with reduce

returns/computes a single value from an array.

function reduce(array , combine , start) { var current = start;
for (var i = 0; i < array.length; i++)

current = combine(current , array[i]); return current;

}

console.log(reduce([1, 2, 3, 4], function(a, b) { return a + b;

}, 0)); // → 10



Define a function current which sets the value of current. Current and the next index value are run through current. Once iterated through, reduce returns the current value.





Work with trees:

function reduceAncestors(person , f, defaultValue) { function valueFor(person) {

if (person == null) return defaultValue;

else
return f(person, valueFor(byName[person.mother]),

valueFor(byName[person.father]));

}

return valueFor(person); }

 

 

 

 

 

 

 



 



 

 



 