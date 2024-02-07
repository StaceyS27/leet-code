// Contains Duplicate ** REVIEW **

// Non Optimal Solution
function containsDuplicate(nums) {
    nums.sort(function(a, b){                               // sorting algorithms have a time complexity of n(logn)
        return a - b                                        // uses for loop or while loop to go through arrays but input sizes get cut into half as el are split into L & R arrays                                   
     });
 
     for(let i=0; i < nums.length; i++){                    // for loop adds additional time complexity of O(n), but negliable when comapred to sorting to complexity 
         if(i===0){                                         // so overall O(nlogn) | hash set will improve time complexity with sacrifice with space complexity 
             if(nums[1] === nums[0]){
                 return true
             }
         };
 
         if(i === (nums.length - 1)) {
             if(nums[nums.length-1] === nums[nums.length-2]){
                 return true
             }
         }
 
         if(nums[i] === nums[i+1] || nums[i] === nums[i-1]){
             return true 
         }
     }

     return false 
}


// Hash Set Solution - Optimal
function containsDuplicate(nums) {
    const numSet = new Set();                       // create instance of set class/datastructure 

    for(let i =0; i<nums.length; i++) {
        const num = nums[i];                        
        if(numSet.has(num)) {                      // has method in set class that checks for presence of element
            return true;                           // if element is present, return true | there is a duplicate 
        }
        numSet.add(num);                           // if element in the nums arrary is not present in numSet (the hash set), add it to it
    }

    return false;                                   // if the for loop has been completed, and no retuns, return false 
}

const nums = [2,14,18,22,22]
console.log(containsDuplicate(nums))

// Time Complexity: O(n)
    // uses the for loop to check every item in the array and add it to the hash set if not already present
    // hash set desirable bc doesnt allow duplicate addition of elements 
    // when checking to see if the individual element in the array exist in the hash set (using the has method), the set has a constant look up 
        // this is because when elements are added to hash sets, a hash code is computed and it is used to determine where the element will be stored 
        // the same hash code is used to directly access/search the specific bucket for a particular element in the hash set  (easy access)
            // element converted to to hash code and easily found?
            // in arrays, desired value is compared to elements at every position using a for loop until it is found (arr[i]=== target)
    // insertion in hash set also O(1)

// Space Complexity: O(n)
    // sacrifice space complexity for a better time complexity
    // creating a new hash set and can be possibly as long as the array

    
// example of a set: Set(4) {1, 2, 3, 4 }
