// being asked that with O(n) time complexity (without sorting array),
// find longest consecutive sequence

// array stored in set. set constructor taking nums as an argument

// if a number in the array doesn't have a number to its 'left border'/ one less than it, t
// then it can be the start of a new sequence
// if becomes the current num and the streak is one
// if the number plus 1 continues to exist in the set, the streak of consecutive numbers continues to increase 
// when the while loop is exited, math.max method takes any number of arguments and returns the largest
// if the current streak is larger than the current max length, the max length is now the current length 



function longestConsecutive(nums) {
    if (nums.length === 0) {
        return 0;
    }

    // Create a HashSet to store the unique elements
    const numSet = new Set(nums);

    let maxLength = 0;

    // Iterate through each number in the array
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        // Check if the current number is the start of a sequence
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            // Extend the sequence to the right
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }

            // Update the maxLength with the current streak if it is longer
            maxLength = Math.max(maxLength, currentStreak);
        }
    }

    return maxLength;
};

// time complexity O(n)
// space O(n) set created related to length of input array 
