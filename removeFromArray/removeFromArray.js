const removeFromArray = function(arr, ...items) {
    for(item of items) {
        let index = arr.indexOf(item);
        if(index > -1) {
            arr.splice(index, 1);
        }
    }

    return arr;
};

module.exports = removeFromArray;
