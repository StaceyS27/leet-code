// given a string, return true if 
    // 1. open brackets are closed by the same bracket
    // 2. open brackets are closed in the correct order
    // 3. every closed bracket has a corresponding open bracket of the same type

// when closing brackets, it's supposed to close the nearest one first 
    // ex: ([{}]) curly is the first closing and its closing the curly next to it 
    // ex: even here (){}[] the first closing parenthesis closing previous open 


function isValid(s) {
    // initialize am empty stack to track open brackets
    const stack = [];
    
    // map with key (closed brackets) and values (corresponding open values) | initialized as an object 
    const map = {
        '}': '{',
        ']': '[',
        ')': '(',
    };

    // iterate through each character in the input string
    for(let i =0; i<s.length; i++) {
        const char = s[i];

        // check if current character is not a key in the map object aka a opening bracket. if an opening bracket, push into stack array 
        // because intial closing brackets are supposed to close nearest open ones, stack works well to remove open bracket from it with pop once closed bracket encountered
        if(!(char in map)){                                             
            stack.push(char)
        } else {                                                        // else, if char is a key in map (a closing bracket)
            if(stack[stack.length - 1] === map[char]) {                 // if the value at char key in map is equal to the last element in the stack (closing the latest opening bracket),
                stack.pop()                                             // pop it from the stack so that next corresponding closing bracket can be matched with its opening pair
            } else {                                                    // if the value at key char doesnt match latest element in stack, there is a mismtach in brackets ex: (]] and should return false 
                return false
            }
        }
    }

    return stack.length === 0;                                          // if the stack is empty, meaning all opening brackets were matched with corresponding closing,
}                                                                       // it is a valid string and will return true since the expression will be true 


// time complexity
    // O(n) where n is the size of the string. iterated through with the for loop
// space complexity
    // O(n) n size of string. in worst case, input string has all opening brackets and will be added to the stack array
    // making the space taken up directly related to size of string. 

