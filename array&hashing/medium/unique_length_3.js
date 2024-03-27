// 1930 Unique Length-3 Palindromic Subsequences 



// only passes 43/70 time complexity O(n^3)
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