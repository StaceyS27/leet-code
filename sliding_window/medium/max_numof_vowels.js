// Maximum Number of Vowels in a Substring of Given Length 

// given a string s an integer k 
// return the max number of vowels in any substring of s with length k 

// ex: if k is 3 and we have the string "abciiidef", when right is at position 2 and left at 0, k is achieved (3 elements)
// but diff between positions is k - 1 | ex: 2 - 0 = k - 1

// efficient solution that passes all tests :) 

var maxVowels = function(s, k) {
    let left = 0;                                                                   // both pointers set to position 0 on the input string 
    let right = 0;

    let vowelSet = new Set(['a', 'e', 'i', 'o', 'u'])                               // vowels stored in set and if char is in set, then it is a vowel 
    let substringCount = 0;                                                         // and can increment vowel count 
    let maxVowelCount = 0;                                                          // once the count of vowels in substring of desired length k is completed, compared with maxVowelCount
                                                                                    // to get max number of vowels within a substring of s 
    while(right < s.length) {
        if (vowelSet.has(s[right])) {
            substringCount += 1;
        }
    
        if (right - left === (k - 1)) {                                              // the right pointer will keep increasing until length of window is k (k being the number of elements present in the window)
            maxVowelCount = Math.max(substringCount, maxVowelCount);                 // at this point can compare substring count with max count to keep track of largest num of vowels in substring 
            if (vowelSet.has(s[left])) {                                             // in preparation for counting # of vowels in next substring, if there is a vowel at the left position, it is removed from substring count
                substringCount -= 1;                                                 // bc the window will no longer include it as left pointer is advanced 
            }                                                                        // characters not processed by pointers as many times as other solutions 
            left += 1;                                                               // unlike other solutions, right pointer is just increased by 1 bc left pointer was also increased 
            right += 1;                                                              // this way, desired window/substring length (k) is maintained 
        } else {                                                                     // once desired window length is achieved, while the while statement is truthy, the function will only add right char to substring count 
            right += 1;                                                              // and change present window using 2nd if statement w/o having to enter else block 
        }
    }

    return maxVowelCount; 
}

// time complexity - O(n)
    // each character processed at most 2 times 
        // first during initial expansion of window 
        // then during contraction or when moving window to the right 

// space complexity - O(1)
    // even though a set is used to store vowels
    // the size of the set is not dependent on the size of the input string 's'
    // the size stays constant. predefined number of vowels 

//_________________________________________________________________________________________

//** inefficient solution **

// time complexity - O(3n) which is reduced to O(n)
// more efficient than solution below, but even still some letters are at most processed 3 times 
// because the right pointer is resetted to the left pointer after desired 'window length' (k) is achieved 
// making it so that some letters are checked at most 3 times 

var maxVowels = function(s, k) {
    let left = 0;
    let right = 0;

    let vowelSet = new Set(['a', 'e', 'i', 'o', 'u'])
    let substringCount = 0;
    let maxVowelCount = 0;
  
    while(right<s.length){
        if(vowelSet.has(s[right])) {
            substringCount+=1;
        }
    
        if(right-left === (k-1)){
            maxVowelCount = Math.max(substringCount, maxVowelCount);
            substringCount = 0;
            left += 1;
            right = left;
        } else {
            right++
        }
    }

    return maxVowelCount; 

};

//_________________________________________________________________________________________

// ** inefficient solution to the problem ** 

// time - O(n*k) 
    // k is the length of the desired substring 

// the problem with this approach and other approach above is that will visit some numbers more than once
// unnecessarily iterating through some letters again when incrementing left by 1 
// but checking again that were already checked in the previously substring when performing the nested for loop

// some letters visited at most k times 
// in example below, letter c and forward, visited 3 times, which is the value of k 

function maxVowels2(s, k) {
 let left = 0;
    let right = (left + k);

    let vowelMax = 0;
    let vowelSet = new Set(['a', 'e', 'i', 'o', 'u'])

    while(right<s.length){
        let vowelCount = 0;
        for(let i = left; i<right; i++){
            if(vowelSet.has(s[i])){
                vowelCount+=1
            }
        }
        vowelMax = Math.max(vowelMax, vowelCount);
        left++;
    }

    return vowelMax;
}




let s = "abciiidef"
let k = 3
console.log(maxVowels2(s, k))