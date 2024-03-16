// Valid Palindrome II

var validPalindrome = function(s) {
    // make a hash and if the values has 3 characters or more with only 1 frequency 
    // then false 

    let left = 0;
    let right = s.length - 1;

    let count = 0;

    while(left<=right){
        if(s[left]!==s[right]){
            count+=1
        }
        left++;
        right--;
    }

    if(count > 1){
        return false
    } else {
        return true 
    }
};


var validPalindrome = function(s) {
    let map = new Map();
    let count = 0;

    for(let i=0; i<s.length; i++){
        if(!map.has(s[i])){
            map.set(s[i], 1)
        } else {
            map.set(s[i], (map.get(s[i])+1))
        }
    }
    console.log(map)

    for(let value of map.values()) {
        if(value === 1) {
            count+=1;
        }
    }

    if(count>2){
        return false
    } else {
        return true 
    }
  }