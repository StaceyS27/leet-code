// 1930 Unique Length-3 Palindromic Subsequences 


// *** Need to review this one ****

var countPalindromicSubsequence = function(s) {
    let count = 0;
    let chars = new Set(s);

    // Iterate over each unique character in the set
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (!chars.has(char)) {
            continue; // Skip if we've already processed this character
        }

        let first = s.indexOf(char);
        let last = s.lastIndexOf(char);

        // Calculate the count of unique characters in the substring
        let substring = s.slice(first + 1, last);
        let uniqueChars = new Set(substring);
        count += uniqueChars.size;

        // Remove this character from the set to avoid processing it again
        chars.delete(char);
    }

    return count;
};
//_________________________________________________________________________________________________


// only passes 43/70 time complexity O(n^3)  -- time limit exceed msg given 
var countPalindromicSubsequence = function(s) {
    let set = new Set();
    let left = 0;

    while (left < s.length - 2) {
        let middle = left + 1;
        while (middle < s.length - 1) {
            let right = middle + 1;
            while (right < s.length) {
                if (s[left] === s[right]) {
                    let palindrome = s[left] + s[middle] + s[right];
                    set.add(palindrome);
                }
                right++;
            }
            middle++;
        }
        left++;
    }

    return set.size;
};