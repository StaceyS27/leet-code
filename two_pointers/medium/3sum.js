// find the combination of 3 numbers in the num array that when added together, result in 0
// combination of numbers cannot repeat so by sorting, if the number before it is the same when checking, know to skip that number in the loop

function threeSum(nums){
    const res = [];
   
    nums.sort(function (a, b) {
        return a - b 
    })

    for(let i=0; i<nums.length; i++) {
        const a = nums[i];
        
        if(a > 0) {                             // since its sorted, if the number earlier in the sequence is greater 0, know that can't get a sum of 0 bc all other elements after it are larger 
            break                               // keyword that mean exist loop and continue with next code 
        }

        if(i>0 && a === nums[i-1]){             // will check index before current num if index is not 0 to make sure the numbers are not the same,
            continue                            // if they are, continue. means go to next iteration of i. this avoid repeating same number and possibily getting same combination of numbers already gotten that add to 0
        }

        let l = i+1;                            // for loop acts as first pointer and l anr r pointers are the 2nd and 3rd. 
        let r = nums.length -1;                 // nums[i] aka 'a' stays still while the pointers move 

        while(l<r){
            const threeSum = a + nums[l] + nums[r];
            if(threeSum > 0){                               // similar to 2 sum II. since sorted and if sum is too big, decrease the number the pointer is 'pointing' at by going down in the array 
                r--;
            } else if(threeSum < 0){
                l++;
            } else {                                        // could be written as if threeSum === 0, found combination and push to res array 
                res.push([a, nums[l], nums[r]]);
                l++;                                        // and move the pointers to move along the while loop
                r--;
                while(nums[l]===nums[l-1] && l<r) {         // but if the left pointer is pointing at a number identical to the one it was previously pointing at, 
                    l++                                     // move it so that it doesnt result in same combination 
                }                                           // by moving l, you move right since l is now a different number and a different r element needs to be combined to find another sum that === 0
            }
        }
    }
    return res; 
}


// time complexity: O(n^2)
// space complexity: O(1)