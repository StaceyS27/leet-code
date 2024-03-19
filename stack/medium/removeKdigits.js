// Remove K Digits

// given string num with positive integers and integer k 
// return the smallest possible integer after removing k digits from num

// iterated through num added num[i] to stack
// if top most element in the stack is greater then the current character in the num sring, (as long as k is more than 0)
// that top most element in the stack is removed and the k count is decremented, indicating that one more digit has been removed
// this method will form the smallest number possible
// after all possible digit removals have been used (k===0), push rest of characters in num to stack

// in the second while loop, the loop will continue as long as the numbers encountered equal to 0 
    // this is done to remove any 0s at the beginning of the number

// the pointer will then be pointing at the first non-zero number it encounters,
// which will be the starting index where slicing will happen
// if all k attempts have been used up (k===0), then slicing will end at the last index of the stack 
    // bc 2nd argument in slice does not include that actual index in the argument, but instead the one before it 
// otherwise, if not all ks have been used up, will remove k elements from the end of the stack (not including k numbers in the slicing)
    // using up all available attempts and decreasing the number even further

// the stack array is then converted to a string (desired output) using join method 
    // argument in join allows no space between elements in the array 

// ternary or conditional operator is used at the end 
    // if the string is truthy (meaning not empty), will return the newly formed res string iself
    // otherwise, if it is empty, then a 0 string will be returned 

var removeKdigits = function (num, k) {
    let stack = [];
    for (let i = 0; i < num.length; i++) {
        const ch = num[i];
        while (k > 0 && stack.length > 0 && stack[stack.length - 1] > ch) {
            k--;
            stack.pop();
        }
        stack.push(ch);
    }

   let pointer = 0
    while (stack[pointer] === '0') {
       pointer++
    }

    stack = stack.slice(pointer, stack.length - k);
    let res = stack.join('');
    return res ? res : '0';
};


// time complexity - O(n)
// space complexity - O(n)