// Isomorphic Strings

// given s and t, determine if they are isomorphic
// two strings are isomorphic if characters in s can be replaced to get t 
// no two characters can map to the same character
// but a character can map to itself 

// in the more optimal solution below, 
// each letter in each string is mapped to the corresponding letter in the same position at string t
// if not already present in map
// the reverse, unlike other solution, is also done and the string at thw ith position at t is mapped to the same char at index i in s
// this ensures letters are not mapping to two different letters 

var isIsomorphic = function (s, t) {
    if (s.length !== t.length) return false;

    const mapOne = new Map();
    const mapTwo = new Map();

    for (let i = 0; i < s.length; i++) {
        if (mapOne.has(s[i])) {
            if (mapOne.get(s[i]) !== t[i]){
                return false; 
            }
        } else {
            mapOne.set(s[i], t[i])
        } 

        if (mapTwo.has(t[i])) {
            if (mapTwo.get(t[i]) !== s[i]){
                return false
            } 
        } else {
            mapTwo.set(t[i], s[i])
        }
    }

    return true;
};

// time complexity - O(n)
    // iterates through both strings once (actually 2n or n + n but reduced to n in big O calculation)
// space complexity - O(n)
    // also reduced from 2n or n + n (n being the sizes of s and t bc they are the same size)
    // at worst, each character is unique and will be added to hashmap 
//_____________________________________________________________________________________________________

//** non-optimal solution ** 

var isIsomorphic = function(s, t) {
    let map = new Map();

    for(let i=0; i<s.length; i++){
        if(!map.has(s[i])){
            for(const value of map.values()){                   // done to check that no two letters will map to the same letter
                if(value === t[i]) {                            // check first that the t[i] that s[i] will map to is not already used 
                    return false                                // as a value for another key 
                }
            }
            map.set(s[i], t[i])
        };
        if(map.has(s[i])){
            if(t[i]!== map.get(s[i])){
                return false
            }
        }
    }
    
    return true 
};

// time complexity - O(n^2) 
    // where n is the length of the input string s (though both input strings have the same length according to constraint)
    // need to iterate through the map.values array n number of times at worst (n being size of input string 's')
        // happens when each character in the s string is unique. need to look to make sure there isn't a letter already mapping to t[i]
// space complexity - O(n)
    // worst case all characters in s string are unique and all need to be stored in the map 