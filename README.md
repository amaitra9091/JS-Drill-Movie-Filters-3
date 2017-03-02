# JS Drill: Movie Filters

## Notes
### SOFTWARE COMMANDMENT: Write the least amount of code possible. 
#### Why?

#### To understand "Why" we must first understand a concept: Complexity.

#### Complexity is a qualitative measure of 
1. "Is the code hard to read?"
2. "Can I remove code without changing the expected behavior?"

#### Answering yes, means the code is COMPLEX.

Each line of code that you write increases complexity. 

&&

As complexity increases, the more space for bugs.

### Take-Away: Write less code.

Ex:

large program

Involve complexity —> complexity == Bad
More space for bugs to hide


## A.

```javascript
var total = 0, count = 1; while (count <= 10) {

total += count;

count += 1; }

console.log(total);
```

## B.

```javascript
console.log(sum(range(1, 10)));
```


### A or B, which one is more likely to contain a bug? A.

#### B: constitutes simple concepts that are applied to solve the problem. Functional. We trust that each component works, as defined. And, if there is a bug, the bug is Easy to locate. 

#### A: not easy to understand.

## How to think about a given problem:

### GIVEN A PROBLEM:

- Creating functional units that will be used to solve the problem. Make it easy to understand.
- You must notice when a concept is begging to be abstracted into a new word.
- Hide what no one cares to see. 

### Higher-Order Functions 

#### Functions that operate on other functions, by taking them as arguments or by returning them, are called higher-order functions

#### Examples:

#### Functions that create new functions.

```javascript
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
```
#### Functions that operate on other functions, by taking them as arguments

In Javascript, a function is value, just like a number (1), string ('Phil'), Boolean (true), etc...

All values, including functions can be stored in a variable as follows
```
/**
 * Test if your input value is greater than 10.
 * @param {number} a - a number
 */
var isGreaterThan10 = function(a) {
    return a > 10;
}```

Once the function is stored in a variable you can either:
1. Invoke the function
/**
 * Test if your input value is greater than 10.
 * @param {number} a - a number
 */
```var isGreaterThan10 = function(a) {
    return a > 10;
}

isGreaterThan10(1); // false
```
or, 2. pass the function as a parameter in a function
/**
 * Test if your input value is greater than 10.
 * @param {number} a - a number
 */```

var isGreaterThan10 = function(a) {
    return a > 10;
}

// getListOfNumbers takes 

/**
 * Generates an array of numbers, which pass the test.
 * @param {array} list - an array of numbers
 * @param {function} test - a function that takes 1 parameter and returns a boolean.
 */

var getListOfNumbers = function(list, test) {
    var output = [];
    
    for(var i = 0; i < list.length; i++) {
        var listItem  = list[i];
        var listItemPassedTest = test(listItem);
        if(listItemPassedTest) {
            output.push(listItem);
        }
    }

    return output;
}

getListOfNumbers(isGreaterThan10, [1,2,3,10,222,1,2])
// --> [10,222]

```
       
## Exercise 

1. Fork and clone the repo onto your local computer.
2. Open index.html into your local browser, and try clicking the buttons. Nothing should happen.
3. Your goal is to complete this movie filtering app. Go into `scripts/main.js` and read through the comments and fill in the code.

