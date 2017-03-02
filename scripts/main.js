/**
 * Iterates through the list and invokes the callback on each item in the list.
 * @param {array} list - an array of numbers
 * @param {function} callback - a function that takes 1 parameter and doesn't return anything
 */

function each(list, callback) {
  
}

/**
 * Returns a function.
 * @param {string} criteria - a string
 */

function filterBy (criteria) {
    return function (data) {
        return criteria === data.genre;
    };

}

/**
 * Returns a filtered array containing items that meet the criteria.
 * @param {array} list - an array of movies(please see dont-touch.js for the list of movies)
 * @param {function} fn - a function which takes 1 {string} argument and returns boolean a value
 */

function filter(list, fn) {
    var outputList = []; //Array of the values that "pass" the check
    each(list, function(value) {



    });
    return outputList;
}
