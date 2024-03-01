// Remove Duplicates From Sorted Array II

// problem solved using 2 pointers approach
// left pointer stays still while right pointer moves to see if the next numbers in sorted arr are duplicates
// once same element count (counting number of duplicates in arr) reaches 3,
// the element at the current position where the rt pointer is is removed/spliced
// splice method: 1st arg index to start, second how much to delete
// have to move right pointer back once repeating element is removed bc otherwise new element now present at rt pointer pos due to splice and array position rearrangement
// will not be evaluated against current streak of repeating numbers (right pointer will increase, skipping it)

// if the streak is no longer continued and num[left] !== num[right], left pointer moves to right
// and sameElementCount is restarted at 1 again
// right pointer will increase and enter next loop 

// okay to start both pointers at 0 bc will start the same element count at 1 

function removeDuplicates(nums) {
    let left = 0;
    let right = 0;

    let sameElCount = 0;

    while(right<nums.length) {
        if(nums[left] === nums[right]) {
            sameElCount++;
        } else {
            left = right;
            sameElCount = 1;
        }

        if(sameElCount>2) {
            nums.splice(right, 1);
            right--;
            sameElCount--;
        }

        right++
    }

    return nums.length 
}

// time - O(n)
    // n is length of array 
// space - O(1)
    // no additional data structures used whose size is dependent on input arr size 

//____________________________________________________________________________________________________

// ** non optimal solution ~ O(n^2) time complexity

var removeDuplicates = function(nums) {

    let left = 0;
    let right = 1;

    while(right<nums.length) {
        while((nums[left] === nums[right]) && (nums[left] === nums[right+1])) {
            nums.splice((right+1),1)
        }
        if(nums[left] === nums[right]) {
            left+=2
            right+=2
        } else {
            left++
            right++
        }
    }

    return nums.length
    
};