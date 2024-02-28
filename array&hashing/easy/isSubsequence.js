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
