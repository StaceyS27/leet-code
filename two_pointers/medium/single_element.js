// 540. Single Element in a Sorted Array

// given a sorted array of integers that appear exactly twice except 1 element which appears once
// return the element that appears once with a solution of O(log n) time and O(1) space 

// this solution uses the idea that the array sizes will always have a length of an odd number
    // since every number will have its corresponding pair except 1 

// if the mid point of the array is an even number, then there will be an even number of elements to its right and left 
    // ex: [1,1,2,3,3,4,4,8,8] mid = 4 and has 4 elements to its right and 4 to its left 
// likewise, if midpoint is an odd number, there will be an odd number of elements to its right and left 
    // ex: [7,7,10,11,11,12,12] mid = 3 and has 3 elements to its right and left 
// ? since its the mid point, will have the same number of elements to its right and left + 1 to make the odd number length of the array
    // array length of 11 midpoint 0+10/2 = 5 and will have 5 num to left and  5 to right plus mid in the middle to make 11 elements

// using this property, can accurately predict which side of the array to go next after fiding mid
    // this is based on whether the mid point is odd or even
    // if the mid point is even, then has a even number of elements next to it        ****(see example above with even mid number)*****
        // if the number to the rt of the mid is not equal to it, then that means that every number on the right has a pair
        // and does not have a lonesome number bc there are an even number of numbers and most numbers have a pair except 1 
        // so then can move rt pointer to mid -1 
        // if the numbers are equal (mid and the number to the right of it), then that means one number on that side doesnt have a pair
            // so move left to mid + 1
    
    // if the midpoint is an odd number, then there are odd numer of elements to its right and left  ***** (see example above with odd mid numer)*****
    // if number to its right are equal that means all numbers have a pair
        // so move right pointer to mid - 1 

function singleDuplicate(nums) {
    let left = 0;
    let right = nums.length - 1; 

    while(left<=right){
        let mid = Math.floor((left+right)/2)

        if(nums[mid]!==nums[mid+1] && nums[mid]!==nums[mid-1]){
            return nums[mid]
        }

        if(mid%2===0){
            if(nums[mid+1]!==nums[mid]){
                right= mid-1;
            } else {
                left = mid + 1
            }
        } else {
            if(nums[mid+1]!==nums[mid]){
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }
}



// O(log n) time and O(1) space
    // binary search used and no additional data structures used 