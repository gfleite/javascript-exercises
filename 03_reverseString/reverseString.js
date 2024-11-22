const reverseString = function(oldString) {
    let newString='';

    for (let i = oldString.length - 1; i >= 0; i--){  //length -1 for the index
        newString += oldString[i];
    } 

    return newString;
};

// Do not edit below this line
module.exports = reverseString;
