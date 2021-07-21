const repeatString = function(str, times) {
    if(times < 0) return "ERROR";
    let repeatedString = '';
    for(i=0; i<times; i++) {
        repeatedString += str;
    }

    return repeatedString;
};

module.exports = repeatString;
