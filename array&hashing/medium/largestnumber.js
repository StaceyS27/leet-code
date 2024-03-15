// Largest Number

// given an array of postive integers 'nums'
// arrange them so that they form the largest number and return it as a string




var largestNumber = function(nums) {
    // Custom sorting function
    nums.sort((a, b) => {
        const num1 = '' + a + b;
        const num2 = '' + b + a;
        return num2.localeCompare(num1);
    });

    // Handle case where all elements are zeros
    if (nums[0] === 0) return '0';

    // Concatenate sorted numbers to form the largest number
    return nums.join('');
};
