// check if when converting all uppercase letters to lowercase letters
// and removing non-alphanumeric characters, the phrase reads the same forward and back 

// replace method: first argument is what is to be replaced and second is what it will be replaced with 
// below ^ negates the letters and numbers (what is in the brackets). 
// if the string is not alphanumeric (first argument), replace with "" (no space)


function isPalindrome(s) {
    const newString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
    
    let frontPointer = 0
    let backPointer = newString.length -1                           // newString is different from original string length because spaces removed 
                                                                    // also colons, semicolons etc removed.. changing the size. that's why its important to use back pointer at length of new string 
    while(frontPointer<backPointer){
     if(newString[frontPointer] !== newString[backPointer]){
         return false
     }
     frontPointer++;
     backPointer--;
    }
    
    return true     
 };

 // Time Complexity
    // O(n) - the replace method dependent on size of input string. so is the while loop
// Space complexity
    // O(n) - new string variable formed dependent on size of input 