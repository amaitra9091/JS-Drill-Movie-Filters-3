
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
