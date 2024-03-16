// Valid Palindrome II

// a palindrome is a word that is the same when written forwards and backwards
// have to return true if word is a palindrome after up to one letter removal 

// 2 pointers are used an if the characters don't match at the pointers
// the string is sliced to create a new substring that only considers part of the string between L and R pointers
    // dont need to consider the previous letters bc already proven to be a palindrome
// 2 slices are created because want to consider if a palidrome will exist if either of the characters are removed
    // in the problem, can remove up to one letter to make palindrome 
// slice method makes new string starting and including the first argument 
// and up to, but not including the second argument 
    // skipL makes a string that would exist if l is removed (achieved by skipping it)
        // going up to r+1 means that the character at r will be included 
    // skipR makes a string that would exist is r is removed (achieved by forming string from l to r but not including r)

// the strings are passed into the isPalindrome helper function and if once again mismtaching letters are found (only 1 letter allowed for the problem),
// the helper function will return false 
// if when both strings skipL and skipR are passed in and both return false,
// then OR statement will evaluate to false and the entire function will also return false 
// if when the skipR or skipL are passed in and one returns true (if both are true, will also evaluate to true),
    // would happen when no more mismatches are found
    // the whole function will return true
    // this is because with just the removal of either the char at l or r, the palidrome exists

function validPalindrome(s){
    let l = 0;
    let r = s.length - 1;

    while(l < r){
        if(s[l] !== s[r]){
            const skipL = s.slice(l+1, r+1);
            const skipR = s.slice(l, r);

            return isPalindrome(skipL) || isPalindrome(skipR);
        }

        l++;
        r--;
    }

    return true;                                // return true if loop finishes and never returns false
}                                               // happens when all the characters of the string at the 2 pointers correspond and are the same 


function isPalindrome(s) {
    let l=0;
    let r = s.length -1;

    while(l<r){
        if(s[l] !== s[r]){
            return false
        }

        l++;
        r--;
    }

    return true; 
}

// time complexity - O(n)
    // as the pointers are moving along the string, it is only O(n)
    // but when mismatching characters are encountered, 2 slice methods are performed which are O(n) operations 
        // ? but traveling parts of the string not traversed yet 
    // the ispalindrome function is called twice on the same part of the string (which at worst is 'n' long) - O(2 * n) or O(n + n)
        // one time exlcuding the r and the other excluding the left 
        // however this is reduced to O(n) in big O calculations 

// space complexity - O(n)
    // slice methods make new strings which at worst are or near length of input string, 'n'
    // 2 * n but 2 is ignored in calculations 