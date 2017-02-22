function each(list, callback) {
    /*
    Write a function that iterates through the list and calls the callback on
    each list item.
    */
}

function filterBy (criteria) {
    /*
    return a function that returns a Boolean value
      if
        the data matches the filter value return true
      else
        return false
    */

}

function filter(list, fn) {
    var outputList = []; //Array of the values that "pass" the check
    each(list, function(value) {
      /*
      list is a list of data.
      fn is a function that returns a boolean. You can think of the fn as a checking function.
      Using each, iterate over each element in the list
        if the list item passes the check:
          then save the list item
      */
    });
    //Return all of the list items that pass the check
    return outputList;
}
