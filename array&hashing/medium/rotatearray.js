// rotate array to the right kth times 

// **non-optimal solution**
// time O(n*k)
    // the splice method moves the index of all the numbers following the insertion O(n) worst case
    // the splice method/movement of indices happens k times (the number of rotations)

function rotate(nums, k) {
    for(let i = nums.length -1; i>((nums.length -1)-k); i--) {
        let number = nums.pop();
        nums.splice(0, 0, number);
    }

    return nums;
};

//______________________________________________________________________________________________________

// more optimal solution 

// time O(n) 
    // traverses array nums once, where n is the size of the array 
// space O(n)
    // newArr array is the same length os nums array
    // space used dependent on size of input array (nums)

// using modulo
    // used to keep index wihtin certain bounds
    // if a number is at position 6 and the length of the the arr is 7
    // if k is 1 , its new index will be (6+1)%7 which will put it back to index zero when moved 1 position to the rt

function rotate(nums, k) {
    const newArr = new Array(nums.length).fill(0);          // new array created with same length as nums

    for (let i = 0; i < nums.length; i++) {
        const newIndex = (i + k) % nums.length;             // modulo used to make sure index stays within bounds of length of nums array 
        newArr[newIndex] = nums[i];                         // if index is at nums length and above will cycle back to index 0 
    }

    return newArr;
};

console.log(rotate([1,2,3,4,5,6,7], 3)) // for some reason solution not working on leetcode, but working on vs code 
