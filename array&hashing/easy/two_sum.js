// Two Sum

// return indices of elements in a array that when added together, equal the target

function twoSum(nums, target) {
    const map = new Map();                     // map to store element and its index. looking through a map has a constant time complexity 

    for(let i =0; i<nums.length; i++) {
        const difference = target - nums[i]    // we are looking for difference in the map which added with the element at position i, will equal target

        if(map.has(difference)){                // has checks for presence of key difference in the map
            return [i, map.get(difference)]     // return current index and the index of the 'diff' element stored as a value in the map. get method returns value 
        }

        map.set(nums[i], i)                     // if element that together with element at position i add to target not found, 
    }                                           // add element and index as key value pairs in the map

    return [];                                  // return empty array if no pair found 
}

// time complexity: O(n) - iterating through the nums array to check if the pair that adds to the target exist 
// space complexity: O(n) - hash map can be as big as the size of the input array (n)