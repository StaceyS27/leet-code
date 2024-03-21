// Find All Anagrams in a String

// given two strings s and p 
// return an array of all the start indices of p's anagrams in s 
// anagrams have the same letters with the same frequencies 

var findAnagrams = function (s, p) {
    let smap = new Map()
    let pmap = new Map()

    for (let i = 0; i < p.length; i++) {                                    // all the letters of p will first be stored in a hash map
        if (!pmap.has(p[i])) {                                              // key will be the letter and value will be the frequncy of the letter in the string 
            pmap.set(p[i], 1)
        } else {
            pmap.set(p[i], (pmap.get(p[i]) + 1))
        }
    }

    let left = 0;                                                           // left and right pointers will be used to form a window equal to the length of p
    let right = 0;                                                          // to compare if the substring of s is an anagram of p 
    let result = []                                                         // result array will store start indices for anagrams of p in s 

    while (right < s.length) {
        if (!smap.has(s[right])) {                                          // if s[right] is not in the smap (for s string), then add it
            smap.set(s[right], 1)                                           // otherwise, increase its value/frequency by 1 
        } else {
            smap.set(s[right], (smap.get(s[right]) + 1))
        }

        let windowSize = (right - left) + 1;

        if (windowSize === p.length) {                                              // once the window size is equal to size of p (ready to compare s substring with p)..
            let count = 0;

            for (let key of smap.keys()) {                                          // will iterate through the keys in the smap to see if the pmap has it 
                if (pmap.has(key) && smap.get(key) === pmap.get(key)) {             // also if those letters in the smap occur with the same frequency in the pmap 
                    count++                                                         // that would indicate that that particular substring in s formed by the window is an anagram of p
                } else {                                                            // the count variable is keeping count of how many of the keys in the smap map were iterated thru and met the criteria 
                    break;                                                          // if the criteria wasn't met, then it would break out of the loop, and the count would be less than the size of smap
                }                                                                   // because not all keys would have been iterated through 
            }                                                                       // in that case, the left index would not be the start of one of the anagrams of p 

            if (count === smap.size) {                                              // but if the count is equal to the size of the smap, then that means the iteration thru the smap was completed
                result.push(left)                                                   // bc the keys in the smap kept being found in the pmap additionally, the values at that key was equal in both maps 
            }

            smap.set(s[left], (smap.get(s[left]) - 1))                              // regardless of the outcome, will move the left and right pointers by 1 to the right
                                                                                    // so to prepare, will remove the character on the left pointer from the smap since the pointer will advance 
            if (smap.get(s[left]) === 0) {                                          // if the decrement in the count results in a value of zero for that character in the map, will delete it from the map
                smap.delete(s[left])
            }
        }


        if (windowSize === p.length) {                                              // to keep the window size as desired (length of p), will advance both pointers
            left++
            right++
        } else {                                                                    // however, initially, when the window size is not the length of p ..
            right++                                                                 // will keep moving the right pointer and starting again at the top of the while loop and adding it to the smap
        }                                                                           // until the window is the length of p and will be able to compare both hash maps and check if the substring and p are anagrams 

    }
    return result;
};


// time complexity - O(s + p)
    // s is length of input string s and p is length of input string p 
    // similar to O(n)
    // iterating through string p initially to form pmap
    // iterating through string s on main loop using sliding window to find substrings that are anagrams of p 
    // also iterating through keys of smap which is also O(p) since at most it is the length of p 
    
    // how i understand it :) (both space and time)

// space complexity - O(p)
    // worst case, both hasmaps of length of p
    // all the characters in p and the window at the moment in s, at worst, are distinct characters 
