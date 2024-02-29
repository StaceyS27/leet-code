// return true if the nums array contains two elements that are equal in value
// and whose absolute value of the difference beteween the indices is less than or equal to k

// optimal approach uses the sliding window technique to find duplicates
// the window/difference between pointers/indices never exceed k
// if they do, the left pointer is moved forward and element at the leftPtr position is removed from the set
// so that set only reflects size of desired window 

function containsNearbyDuplicate(nums, k){
    let leftPtr = 0;
    let rightPtr = 0;                                   // right pointer also started at 0 so can add elements to the set

    let windowSet = new Set();

    while(rightPtr < nums.length) {
        if(windowSet.has(nums[rightPtr])) {             // can return true right away bc duplicate found meets criters. difference between indices does not exceed k 
            return true; 
        } else {
            windowSet.add(nums[rightPtr])
        }
        rightPtr++

        if(rightPtr - leftPtr > k) {                    // if the window is too large, will delete element at leftPtr from set
            windowSet.delete(nums[leftPtr])             // and advance left pointer to keep set with desired window/difference in indices
            leftPtr++
        }
    }

    return false; 
}

// time - O(n)
    // nums array traversed once 
    // n is the length of the array 
// space - O(min(n, k))
    // set used and at most, its size will go up to k to keep index diff/window
    // but n also added in case the number of elements in nums array is less than k
    // min(n, k) takes the smaller number and assigns it the space complexity

//_______________________________________________________________________________________________

// ** non optimal solution 
// time - O(n^2)
// space - O(n)

var containsNearbyDuplicate = function(nums, k) {
    let mapCount = new Map(); 
 
   for(let i=0; i<nums.length; i++) {
       if(!mapCount.has(nums[i])) {
           mapCount.set(nums[i],[i])
       } else {
           const mapValue = mapCount.get(nums[i])
           mapValue.push(i)                                                 // cannot push directly into value array and assign it as the new value when setting new values in hash
           mapCount.set(nums[i], mapValue)                                  // this is bc push method returns length of array, so have to do it in seperate steps 
       }
   }
 
   for(let values of mapCount.values()) {
       if(values.length>1) {
           for(let i=0; i<values.length; i++){
               for(let j=0; j<values.length; j++){
                   if((i!==j) && (Math.abs(values[i]-values[j]) <= k)) {
                       return true
                   }
               }
           }
       }
   }
 
   return false    
 };

