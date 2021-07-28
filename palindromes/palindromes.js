const palindromes = function(str) {
    if(str.length === 0) return true;

    // Ignoring irrelevant characters and case
    str = str.toLowerCase();
    str = str.split('').filter(char => {
        const regex = new RegExp('[a-z]');
        return regex.test(char);
    });

    // Checks Palindrome
    let i=0, j=str.length-1;
    while(i < j) {
        if(str[i] !== str[j]) 
            return false;
        i++;
        j--;
    }
    return true;
};

module.exports = palindromes;
