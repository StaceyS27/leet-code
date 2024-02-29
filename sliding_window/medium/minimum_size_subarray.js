// given array nums and target
// return min length of subarray whose sum is greater than or equal to target 
// if no such subarray, return 0 

// sliding window approach used where both r and left pointers initialized at start
// when sum is less than target, move rt pointer to the right to increase number of elements and thus the sum
// when looping back, new number added will be added to the sum 
// if sum is greater than target and while it is, keep removing left most number from the window, minimizing the window size 
// while still keeping sum above target 
// each time min window size compared to current one stored in variable and replaced if needed 
// also in moving left pointer number removed from sum because not part of the window anymore

// started window at infinity bc if started at 0, it will always be the min and not be correct 
// if started at length of array may not be correct also bc the length may be the min window to achieve sum greater than or equal to target
// maybe could have started at nums.length + 1 (not a real window) so would return 0 bc window not found

var minSubArrayLen = function(target, nums) {
    let right = 0;
    let left = 0;
    let minWindow = Infinity
    let sum = 0

    while (right<nums.length) {
        sum += nums[right];

        while(sum>=target) {
            let windowSize = (right - left) + 1;
            minWindow = Math.min(minWindow, windowSize);
            sum -= nums[left];
            left++
        }

        if(sum<target){
            right++
        }
    }
    if(minWindow === Infinity){ 
        return 0
    }

    return minWindow
}

// time - O(n)
    // array traversed only once 
// space - O(1)
    // no additional data structures used are dependent on size of input 