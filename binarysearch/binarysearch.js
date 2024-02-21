// given an array of integers nums which is in sorted ascending order
// and a integer target, write a function to search for target in nums 
// and returns its index. if it doesn't exist, return -1

// must have O(logn) time complexity 

function search(nums, target) {
    let leftIndex = 0;
    let rightIndex = nums.length - 1;

    while(leftIndex<=rightIndex) {
        let middleIndex = Math.floor((leftIndex+rightIndex)/2);

        if(nums[middleIndex] === target) {
            return middleIndex
        }

        if(nums[middleIndex]>target) {
            rightIndex = middleIndex - 1
        } else {
            if(nums[middleIndex]<target) {
                leftIndex = middleIndex + 1
            }
        }
    }

    return -1; 
};

// time complexity as O(logn) because as input size increases, time to run algorithm increases
// but not linearly, as the size of the array processed in the while loop each time is cut in half