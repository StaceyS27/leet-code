// Find the Index of the First Occurence in a String

// the index on haystack (the larger string) will move until the first letter in needle (the potential substring) is found
// once it is, k will start at i and move throughout the haystack to see if every letter matches the needle
// if j reaches needle.length -1 (the last index) it will still enter the loop and check needle at the last index is equal to haystack at k
// j will be incremented to needle.length so thats why you check if j is equal to the length
// if it is, it means all the characters in the needle were found in the haystack
// return i

// envision it like sliding window where i stays and k scans the rest of the haystack to see if it matches with the needle 

var strStr = function(haystack, needle) {
    if (needle.length == 0) return 0;
    for (let i = 0; i < haystack.length; i++) {
        let k = i, j = 0;
        while (haystack[k] == needle[j] && j < needle.length) {
            k++, j++;
        }
        if (j == needle.length) return i;
    }
    return -1; 
}