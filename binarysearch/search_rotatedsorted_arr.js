// given an arr nums in ascending order that may have been rotated at an unknown pivot,
// return the index of the given target using O(log n) runtime complexity 
// can be rotated [4,5,6,7,0,1,2] where the arr is essentially split into 2 sorted arrays 
    // the left most index can be the smallest out of that part of the arr that is ascending 
    // and the right most index has be the largest out of that part of the arr that is ascending 
    // an example of how it can be rotated 


function search(nums, target) {
    let left = 0;
    let right = nums.length -1;

    while(left<=right) {
        const mid = Math.floor((left+right)/2);

        const middleNum = nums[mid];
        const leftNum = nums[left];
        const rightNum = nums[right];

        if(middleNum === target) {
            return mid
        }

        if(leftNum <= middleNum) {
            if(leftNum<=target && target<middleNum) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        if(leftNum > middleNum) {
            if(target>middleNum && target<=rightNum) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1 

}

// time complexity: O(log n)
// space complexity: O(1)

