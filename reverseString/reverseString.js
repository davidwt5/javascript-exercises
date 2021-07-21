const reverseString = function(str) {
    let reversed = [];
    for(char of str.split('')) {
        reversed.unshift(char);
    }
    return reversed.join('');
};

module.exports = reverseString;
