// given two strings, return true if one of s1's permutations is a substring of s2
    // s1 smaller and s2 larger 

// permutation: diff arrangements of the same elements ex: ABC ACB BAC BCA CAB CBA
    // the number of possible permutations for a set of n number of distinct elements is n! (factorial)
    // in ABC, there are 3 elements so the number of permutations is 3 X 2 X 1 = 6 (6 combintations above)

// permutations are checked in every window by matching numbers of each letter (via map)
    // all permutations have the same number of each individual letter just in different order 
    // so wont need to check for each individual permuation but instead just if the frequencies of each letter matches 


function checkInclusion(s1, s2){
    const len_s1 = s1.length;
    const len_s2 = s2.length;

    if(len_s1 > len_s2) {                         // bc s1 can't be a substring if larger in length than s2
        return false 
    }

    // helper function
     function areMapsEqual(map1, map2){                             // helper function to check of two maps are equal            
        if(map1.size !== map2.size) {                               // have the same size (number of key value pairs)
            return false 
        }

        for(const [key, value] of map1.entries()) {                 // and each key (letters) have the same values (frequency in which they occur) for a particular window 
            if(!map2.has(key) || map2.get(key) !== value){         // when iterating through map1, if that correspoding key in map2 dont have the same value as current key-value pair, return false 
                return false;                                       // also return false if map2 doesnt have key found in map 1 
            }
        }

        return true; 
     }

     // initializing counters for s1 and current window in s2                                
     const count_s1 = new Map();                                    // maps to keep track of letters/their frequency in s1 amd the particular window in s2
     const count_window = new Map();

     // populate s1 and current window maps 
     for(let i=0; i<len_s1; i++) {
        count_s1.set(s1[i], (count_s1.get(s1[i]) || 0) + 1);
        count_window.set(s2[i], (count_window.get(s2[i]) || 0) + 1)         // populate count_window map with characters in longer string (s2) only up to length of s1 to compare and see if it has it as substring
     }

     // check first window
     if(areMapsEqual(count_s1, count_window)) {                             // if when the helper function is called the function returns true, return true and main function will return true bc a part of s2 did have a permutation of s1
        return true;                                                        // returns true if same size and all the keys are both maps in the current window have the same values/frequncies 
     }

     // slide the window through s2
     for(let i = len_s1; i<len_s2; i++) {                                   // start at len_s1 bc in first window already checked first part of s2, will check from there and all the way to end of s2
        // remove the leftmost character from the window                    // left most character remove one by one with each iteration to check for presence of any of s1's permuations. window present in map, the for loop exist to remove and add elements to it 
        const leftChar = s2[i-len_s1];
        count_window.set(leftChar, count_window.get(leftChar) - 1);         // remove left most char from map by decrementing by 1, but if value now 0 bc of the removal, delete key value pair 
        if(count_window.get(leftChar) === 0) {
            count_window.delete(leftChar)
        }

        // add current character to the window                                              // each window is created in the current window map by removing left most character and adding current character, maintaining size equal to s1
        const currentChar = s2[i];
        count_window.set(currentChar, (count_window.get(currentChar)|| 0) + 1);

        if(areMapsEqual(count_s1, count_window)) {                                          // for each iteration/window change, the maps are compared and if helper function is true, then the main function will exist and return true at any iteration
            return true 
        }
     }

     return false 

}   


// Example usage:
const s1 = "ab";
const s2_1 = "eidbaooo";
const s2_2 = "eidboaoo";

console.log(checkInclusion(s1, s2_1));  // Output: true
console.log(checkInclusion(s1, s2_2));  // Output: false



// time complexity
    // O(len_S2) - which is the length of string s2 (the longer string)
    // this is because at worst the function has to iterate through the entire string (slide the window) to find a permutation of s1
    // however may find it early in the iteration, but still big O considering worst time 

// space complexity
    // O(len_s1) - length of the shorter string s1
    // this is because for every iteration, 
        // the size for s1 (count_s1) remains constant
        // but the other map, count_window changes, but with each iteration maintains size of s1 for comparison