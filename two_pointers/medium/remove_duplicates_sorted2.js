// Remove Duplicates From Sorted Array II



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