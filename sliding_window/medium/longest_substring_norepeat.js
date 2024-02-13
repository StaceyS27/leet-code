// find the longest substring within a string that doesnt have any repeating characters
// will keep moving right pointer until the element at position r is already present in the set
// then need to delete the elements from set/move the left pointer forward until the character on thr rt is no longer repeated

// once the previous element that was added is removed (that equals to current character on R pointer),
// can continue by adding s[r]
// and comparing previous max with current set size to see which one is larger and replace if need be 
// set keeps track of longest non repeating substring 

function lengthOfLongestSubstring(s) {
    const set = new Set();
    let l = 0;
    let max = 0;

    for(let r=0; r<s.length; r++) {                     // s[l] added initially to set bc l and r both start at 0
        while(set.has(s[r])) {                          // loop continues until character in set that equals current char on r is removed 
            set.delete(s[l]);                           // l pointer is moved to facilate that 
            l++
        }
        set.add(s[r]);                                  // once there are no repeating characters, s[r] can be added
        max = Math.max(max, set.size)
    }
    
    return max; 
}

// time O(n) - each character is added at most to the set once and removed once, making time complexity O(n)
    // left and right pointers move forward only
    // in nested for loops, chracters are processed more than once (keep starting from the beginning the inner loop when the outer loop increases)

// space O(n) - set used 