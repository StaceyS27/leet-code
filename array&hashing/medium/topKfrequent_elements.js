// Given an integer array nums and an integer k, 
// return the k most frequent elements.

// make a map to store {the number => frequency in which they occur}

// use bucket sort to solve the problem
// an empty bucket (or alternatively a new instance of the Array class with a length equal to that of the nums array)
// the position in the buckets array represent the frequency and the elements at a particular position are numbers that are repeated ith time 
// created a buckets array and pushed empty subarrays to store numbers
// for of loop iterates through the map numFrequency entries | Object.entries results in key value pairs in array [key, value]

function topKFrequent(nums, k) {
    const numFrequency = new Map();

    // Count the frequency of each number
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        numFrequency.set(num, (numFrequency.get(num) || 0) + 1);
    }

    // Create an array of buckets to store numbers based on frequency
    const buckets = [];
    for (let i = 0; i <= nums.length; i++) {                            // have to make a bucket with at most nums.length length bc at worst, one element happens num.length times (repeated throughout the whole array)
        buckets.push([]);                                               // cant use buckets[i].push bc bucket hasn't been initialized at that index yet
    }

    // Put numbers into buckets based on their frequency
    for(let [num, frequency] of numFrequency.entries()){
        buckets[frequency].push(num)                            // at the frequency position, will push numbers that occur that may times 
    }
    
    
    // Extract the top k frequent numbers from the buckets                          // buckets: [[], [1,3]] for example saying that 2 and 3 occured 1 times in the original array
    const result = [];
    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {            // start at the back of the buckets array to find elements that occurred the most number if times 
        const bucket = buckets[i];
        for (let j = 0; j < bucket.length && result.length < k; j++) {              // will not enter second loop if bucket (inner array of buckets) is empty 
            result.push(bucket[j]);                                                 // result array receiving the pushed the elements from the subarray has to be smaller than k to re-enter loop (otherwise, has the kth most frequent elements)
        }                                                                           // if result.length = k, finished 
    }

    return result;
};


// Time Complexity 
    // O(n + k)
        // O(n) input array iterated to place elements and their frequency in the map 
        // bucket also n long 
        // bucket iterated through in first loop but in the second nested for loop, it doesnt go through the entire bucket b/c in order to reenter loop, the result array has to have less than k number of elements
        // so second nested loop O(k)

// Space Complexity O(n)
    // size of bucket and map coincides with size of input array 