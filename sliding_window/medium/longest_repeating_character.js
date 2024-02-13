// return the longest substring containing the same letter if you can perform k number of operations
// to any letter that needs it to keep the same letter going 

// using the sliding window approach, the right pointer will keep increasing increasing the length (len) of the subarray
// length is the difference between left and right pointers + 1

// the character at position r will be either added to the hashmap, or the value for that key will be increased by 1

// the values, obtained by the .values() method on the map will be compared in the math.max method using the spread operator
// the diff b/w the length of substring b/w window/ 2pointers and the max value (the most frequent character so far b/w the 2 pointers)
// will be compared to k 
// diff says how many of the characters between the 2 pointers would need to be changed to keep the same letter going 
// if greater than k, the most number of changes allowed, decrease the amount of the character at position l in the map
// because the new window will not include it, as the left pointer will be increased 

// since the left pointer can be potentially changed, new length for the window (substring b/w pointers) will be changed using formula

// res (result to be return/longest substring with repeating letters) can be changed depending whether or not current res is longer than the length of new window

function characterReplacement(s, k) {
    let res = 0;
    let count = new Map();
    let l =0;

    for(let r=0; r<s.length; r++) {
        let len = r - l + 1
        count.set(s[r], 1 + (count.get(s[r]) || 0))

        if((len - Math.max(...count.values())) > k) {
            count.set(s[l], count.get(s[l]) - 1)                        // decreasing the amount of character on s[l] in map bc left pointer will be advanced/ window will be changed
            l++;
        }

        len = r - l + 1;
        res = Math.max(res, len)
    }

    return res;                                             // returns longest length of substring that will have repeating letters if k number of changes are made 
}


// time complexity: o(n)
    // iterates through the string with the for loop
    // also iterates through the values in the hashmap 
    // linear time complexity where n is the length of the string/ dependent on n

// space complexity
    // dependent on the number of distinct characters in a window 