// Largest Number

// given an array of postive integers 'nums'
// arrange them so that they form the largest number and return it as a string

// a customized sorting method is used to solve this problem
// in the sorting method, each number in the array are compared to one another 
    // like sort((a,b) => {b-a})
    // if b - a is positive, then it means b should come before a in descending order
    // otherwise, a should come first
    // similar concept below
        // localecompare is a string method that returns -1 if the string that the method 
        // was called on (nums2) is less then lexicographically than the one in the argument (nums1)
            // lexicographical order is considered digit by digit 
            // ex: 123 is less than 2 bc of the digit by digit comparison 
        // since its -1, means nums1 should come first so that nums arranged can be arranged in lexicographical
        // decreasing order
        // this was of ordering will ensure than at every digit place in the number, the larger num is chosen
        // creating the bigger number

// with this customized sorting method, nums array is sorted lexicographically 
// from largest to smallest and each digit next to each other are comapred to form the largest num possible
// in order to form a resulting string to return, the nums array gets the join method 
// join method with "" as an argument makes a string with all the elements 
// and with no space between 


var largestNumber = function(nums) {
    // Custom sorting function
    nums.sort((a, b) => {
        const num1 = '' + a + b;                    // nums1 and num2 are strings and thus why localeCompare method can be used on them
        const num2 = '' + b + a;
        return num2.localeCompare(num1);
    });

    // Handle case where all elements are zeros
    if (nums[0] === 0) return '0';

    // Concatenate sorted numbers to form the largest number
    return nums.join('');
};

// time complexity - O(n * log n)
    // sorting methods have a time complexity of nlogn
    // additionally the join method on the nums array does contribute time of O(n)
        // but is ignored in calculation as nlogn sorting algorithm contributes more to time complexity 

// space complexity - O(1)
    // no additonal data structures used that increases in size proportional to input array's size
    // sorting method modifies nums in place 