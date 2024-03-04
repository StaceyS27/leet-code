// Find Peak Element

// need to only return one of the peaks of the array
// array may have many so while only one side of the array is being searched in binary search
// it is okay since we are only looking for one peak

// problem is asking for the index of a peak in the array 

function findPeakElement(nums) {
    let l = 0;
    let r = nums.length - 1;
    let mid = null;                                                             // kept out the loop to track mid and return if criteria is met                                                      
    
    while (l <= r) {
        mid = Math.floor((l + r) / 2);
        
        if (mid < nums.length - 1 && nums[mid] < nums[mid + 1]) {               // checks to make sure mid is not the at the first or last index
            l = mid + 1;                                                        // are to make sure mid is within bounds and comparison can happen 
        } else if (mid > 0 && nums[mid] < nums[mid - 1]) {
            r = mid - 1;
        } else {
            break;                                                            // if the element at the mid index is neither less that the elements to the right or left
        }                                                                    // if is the local peak and so while loop should break (exit) and return current mid 
    }                                                                         // greater than its neighbors 
    
    return mid;
};


// time - O(log n)
    // binary search 
// space - O(1)
