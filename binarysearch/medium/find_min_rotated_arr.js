// array given sorted in ascending order is rotated between 1 and n times 
// ex: nums = [0,1,2,4,5,6,7] might be [4,5,6,7,0,1,2]
// find the min with an algorithm that runs O(log n) time

// binary search used and once the element in the middle is found, if the part to the rt is less than the middle than the min is somewhere there
// otherwise if the last element on the right is greater than min, then it is only ascending at that point and min would not be there
// need to move pointers to the portion that may have it 
// bc it was originally in ascending order, if there is a point at which the numbers are no longer increasing, that would be the min (nums[mid]> nums[mid+1])

function findNums(nums) {
    let left = 0
    let right = nums.length - 1

    if (nums.length === 1) {
        return nums[left]
    }

    if (nums[left] < nums[right]) {
        return nums[left];
    }


    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[mid + 1]) {
            return nums[mid + 1]
        }

        if (nums[right] > nums[mid]) {
            right = mid
        } else {
            left = mid + 1
        }

    }
};

// time complexity - O(log n)
// space - O(1)