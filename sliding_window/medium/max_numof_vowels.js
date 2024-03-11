// Maximum Number of Vowels in a Substring of Given Length 

// given a string s an integer k 
// return the max number of vowels in any substring of s with length k 

var maxVowels = function(s, k) {
    let left = 0;
    let right = 0;

    let vowelSet = new Set(['a', 'e', 'i', 'o', 'u'])
    let substringCount = 0;
    let maxVowelCount = 0;
    
    while(right < s.length) {
        if (vowelSet.has(s[right])) {
            substringCount += 1;
        }
    
        if (right - left === (k - 1)) {
            maxVowelCount = Math.max(substringCount, maxVowelCount);
            if (vowelSet.has(s[left])) {
                substringCount -= 1;
            }
            left += 1;
            right += 1;
        } else {
            right += 1;
        }
    }

    return maxVowelCount; 
}


//_________________________________________________________________________________________

//** also inefficient solution

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

// ** inefficient solution to the problem ***

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