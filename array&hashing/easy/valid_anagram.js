
// for this problem, two strings are compared and returns true if they both have the same letters,
// repeated same number of times, but arranged differently (an anagram)
// ex: "anagram" & "nagaram"

function isAnagram(s,t) {
    if(s.length !== t.length) {                                  // if the strings are of varying lengths, not anagrams return false 
        return false
    }

    const letterCountMap = new Map();                           // make a new instance of map class where the letters of the 's' string will be stored as keys
                                                                // and the number of times they occur will be stored as values 
    for(let i=0; i<s.length; i++) {
        const letter = s[i];                                     // store letter in a variable 

        letterCountMap.set(letter, (letterCountMap.get(letter) || 0) + 1)           // set method in a map sets the key value pair, get method returns value at the key passed in
    }                                                                               // if the letter key doesnt exist yet, will be zero + 1, otherwise take the value already present and add 1 

    for(let i = 0; i <t.length; i++) {                  
        const letter = t[i];

        if(!letterCountMap.has(letter)) {                                           // now looping through 't' string and if the map doesnt have the letter, exit loop return false (not anagrams)
            return false;                                                           // has method will return a boolean 
        }

        letterCountMap.set(letter, letterCountMap.get(letter) - 1)                  // if the letter is present set the value at that letter to one less 

        if(letterCountMap.get(letter) === 0) {                                      // if the value at that key/;letter is zero, delete the key value pair 
            letterCountMap.delete(letter);
        }
    }

   return  letterCountMap.size === 0                                      // if the map is empty, will return true | the two strings are anagrams 
}                                                                         // size is a property of the Map class, not a method  


// Time Complexity O(s+t)
    // looping through two different strings 
    // or O(n+n) - which results to O(n) becase the coefficient in 2n is ignored in analysis 

// Space Complexity 
    // worst: O(n) - created a map of the longest string with no repeating letters 
    // best: O(c) - c being number of unique characters 