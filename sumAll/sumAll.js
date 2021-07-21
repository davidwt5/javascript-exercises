const sumAll = function(a,b) {
    let sum = 0;

    if(typeof(a) != "number" || typeof(b) != "number") return "ERROR";
    if(a < 0 || b < 0) return "ERROR";

    // Sums when a < b
    if(a < b) {
        for(let i=a; i<=b; i++) {
            sum += i;
        }
    }
    // Sums when b < a
    for(let i=b; i<=a; i++) {
        sum += i;
    }
    

    return sum;
};

module.exports = sumAll;
