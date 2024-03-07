// Subarray Sum Equals K 

// in this problem, we are asked to return count which is the number of subarrays within nums
// that when added together, equal to k
// a prefix sum approach is used in this problem. prefix sum is the sum of the elements prior to and including the current position
// ex: [1, 2, 3] the prefix sum at i=1 is 3
// as the nums array is iterated through, the prefix sum is added to the map or its frequency is increased if already present in the map
// sum - k represents, if present, the prefix that when removed from the sum, will allow the sum k to be present in the remaining array 
// sum - k = prefix | or prefix + k = sum | or k = sum - prefix | when rearranged 
// ex: [1, 2, 3, 4, 1] when iterated to i=2 prefix sum is 6 and in the map there is already the prefix needed when sum(6)-k(5) which equal 1
// this means when the prefix which is index 1 is removed, then the k of 5 is possible and there is the 1st subarray that equals to k ([2,3])
// the next is [4,1]


var subarraySum = function(nums, k) {
    // initialize variables for count, cumulative sum, and a hashmap
    let count = 0;
    let sum = 0;
    let map = new Map();
    
    // initialize the map with an entry for the cumulative sum 0 (no elements considered yet)
    map.set(0, 1);
    
    // iterate through the array using a for-of loop
    for (const num of nums) {
        // Update the cumulative sum
        sum += num;

        // check if there exists a subarray with sum equal to k
        if (map.has(sum - k)) {
            // Increment the count by the number of occurrences of the sum - k
            count += map.get(sum - k);
        }

        // update the hashmap with the current cumulative sum
        map.set(sum, (map.get(sum) || 0) + 1);
    }

    // return the final count of subarrays with sum equal to k
    return count;
};

console.log(subarraySum([1,2,3,4,1], 5))                // returns count of 2 
