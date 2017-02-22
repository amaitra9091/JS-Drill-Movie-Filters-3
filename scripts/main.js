function each(list, callback) {
    //write a function that iterates of the list and invokes the callback on
    //each list item
    list.forEach(callback);
}

function filterBy (criteria) {
    //return a function that returns a Boolean value
        //if
            //the data matches the filter value return true
        //else
            //return false
    return function (data) {
        return criteria === data.genre;
    };

}

function filter(list, fn) {
    var outputList = [];
    each(list, function(value) {
        if(fn(value)) {
            outputList.push(value);
        }
    });
    return outputList;
    //list is a list of data
    //fn returns true or false. You can think of the fn as a Check
    //using each, iterate over each element in the list
    //if the list item passes the check, then save the list item
    //retutn all of the list items that pass the check
}
