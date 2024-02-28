// given 2 strings s and t 
// return true if s is a subsequence of t, otherwise false 
// subsequence of a string is a new string that is formed by having some of the letters
// but now all of the larger string, however, the order in which they appear is maintained 

// two pointer approach used because once the letter of the possible subsequence is found in the larger string,
// have to keep both pointers moving forward in order to keep the same sequence of letters as they appear in the original string 


var isSubsequence = function(s, t) {
    let wordPointer = 0;
    let subPointer = 0;

    while (wordPointer < t.length && subPointer < s.length) {
        if (s[subPointer] === t[wordPointer]) {
            subPointer++;
        }
        wordPointer++;
    }

    return subPointer === s.length;
};


// time - O(m + n)
    // where m and n are the lengths of strings s and t
    // at worst, algorithm will have to traverse the entire lengths of both strings
// space - O(1)
    // space used not dependent on the size of inputs (strings s and t)