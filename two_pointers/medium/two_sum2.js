// return the indices + 1 for the two numbers whose total equals target
// inpuy arr sorted in ascending order

function twoSum(numbers, target){
    let left = 0;
    let right = numbers.length - 1;

    while(left < right){
        const sum = numbers[left] + numbers[right];

        if(sum === target){
            return [left + 1, right + 1]
        }

        if(sum < target){                       // bc input is in ascending order
            left++;
        } else {
            right--;
        }
    }
}

// time complexity: O(n)
// space complexity: O(1) no extra data structures like hashmaps used 