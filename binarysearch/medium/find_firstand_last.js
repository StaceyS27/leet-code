// Find First and Last Position of Element in sorted Array 

// given a sorted array in ascending order,
// find the starting and ending position of a given target value 
    // can be repeated in the array 
// algorithm must be written in O(log n) runtime complexity 

function searchRange(nums, target){
    let start = 0;                                 // for starting and ending indices once target value found
    let end = 0;

    let left = 0;                                   // pointers for binary search 
    let right = nums.length-1;

    while(left<=right){
        let mid = Math.floor((left+right)/2)

        if(nums[mid]===target){                                         // once target is found at mid index, search to its left to look for starting index of value 
            start = mid;                                                // start index will be one less than the actual start bc the variable is decremented prior to checking
            while(nums[start]===target){                                // to see if it equals the value so add one to start for the actual index 
                start-=1
            }
            start+=1;

            end = mid                                                   // same for end, will check to the right of the mid index (now target) to see where it end 
            while(nums[end]===target){
                end+=1
            }
            end-=1;

            return [start, end]
        }

        if(nums[mid]>target){                                           // adjusting pointers if target not found 
            right=mid-1
        } else {
            left = mid+1
        }
    }

    return [-1, -1]                                                     // return this if function has not returned yet, meaning target not found 
}


// time complexity - O(log n)
    // binary search
    // even though while loops are used after target is found to find starting and ending indices,
    // are not iterating through the entire array (ideally) to find start and end 
        // though can happen if all the numbers in the array are the target value and so function will have runtime of O(n)
        // as it will be dominating the time complexity calculation 
        // can avoid by performing additional binary searches on left side of mid and right side of mid to find start and end points 
            // ? probably by restarting the left to 0 and right to mid - 1 for the start search 
            // and left to mid + 1 and right to nums.length -1 for the right for the end search 


// space complexity - O(1)
    // no additional data structure used that grows as the size of the input array grows 