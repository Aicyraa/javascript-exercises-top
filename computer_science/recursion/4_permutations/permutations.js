const permutations = function(arr) {
    // get a fix index
    // apply recursing to the items (the fix index is excluded)
    
    // simpliest input => base case
    // simple input => [1, 2] visualize data easier. [1, 2] and [2, 1]
    const results = []

    if (arr.length === 1 || arr.length === 0) {
        results.push(arr)
        return results
    } 

    for (let i = 0; i < arr.length; i++) {
        // check if i == index
        const remaining = arr.filter((_, index) => index !== i)
        const subPermutation = permutations(remaining)
        for (const perm of subPermutation) {
            results.push([arr[i], ...perm])
        }
    }

    return results
};

// Do not edit below this line
module.exports = permutations;
