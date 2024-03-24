// 540. Single Element in a Sorted Array

// ** only passed 12/17 cases 

var singleNonDuplicate = function(nums) {
    // run two binary search on the left and right side 
    // if the middle index has a duplicate to the right or the left 
    // continue to do search on left first 
    // if not found on left
    // then do right of mid 
    // return the single element 

    let L1 = 0;
    let R1 = nums.length - 1;
    
    let numsMid = Math.floor((L1 + R1)/2);

    while(L1<=R1){
        let mid = Math.floor((L1 + R1)/2);

        if(nums[mid]!== nums[mid+1] && nums[mid]!==nums[mid-1]){
            return nums[mid]
        } 
        if(nums[R1]!== nums[R1+1] && nums[R1]!==nums[R1-1]){
            console.log(R1)
            return nums[R1]
        } else {
            R1 = mid -1;
        }
    }

    let R2 = nums.length - 1;
    let L2 = numsMid;

    while(L2<= R2){
        let mid = Math.floor((L2+R2)/2);

        if(nums[mid]!==nums[mid+1] && nums[mid]!==nums[mid-1]){
            return nums[mid]
        } else if(nums[L2]!==nums[L2+1] && nums[L2]!== nums[L2-1]){
            return nums[L2]
        } else {
            L2 = mid + 1;
        }
    }

    
};