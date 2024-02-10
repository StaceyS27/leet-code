// return an result array that at position [i],
// it is the product of every number in the input array except the one at nums[i]

// solved by keeping count of the product of numbers before position i
// (prefix) and making the element at that position the product in the result array

// when all the prefix products are placed in the result array, 
// the products of numbers following the number at a given position are multiplied by whats already in the results array
// the prefix and postfix products are increased by multiplying it by the number just passed

function productExceptSelf(nums) {
    const result = [];
    let prefix = 1;                         // pre and postfix start with 1 and are multiplied by the elements during iteration
    let postfix= 1;

    for(let i=0; i<nums.length; i++){       // by the end of this loop, all the numbers prior to the element at a given position
        result[i] = prefix;                 // are multiplied and placed in results array ready for multiplication with numbers after it 
        prefix *= nums[i];                  // so that it can be a product of all the numbers in the array except nums[i]
    }

    for(let i=nums.length-1; i>=0; i--){
        result[i] *= postfix                // whats in the results array will now be postfix (products of numbers following the element at a certain position)
        postfix *= nums[i]
    }

    return result; 
}

// Time Complexity: O(n)
    // two for loops so 2n but constants are ignored in analysis so O(n)

// Space Complexity: O(n)
    // result array same length as input array 