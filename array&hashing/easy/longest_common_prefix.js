// Longest Common Prefix 

// write a function to find the longest common prefix amongst an array of strings 
// if there is no common prefix, return an empty string ""

// in this approach, the individual strings within an array are treated like a matrix 
// ex: ["flower", "flow", "flight"]
// first find the shortest string length because that will dictate how many columns will be searched 
// next will iterate column by column. first check the first letter of all strings within the array 
// compare to the column in the first row, if not equal then mosr common prefix previously found returned 
// ex compare first letter on 1st row vs first letter on 2nd and 3rd rows 
// once the comparison is done for all rows in one column, if function did not return, it means that letter is present and can added to prefix
// can add variable letter to prefix which is a string because when concatenating with a string in javascript using the + operator, 
// it will automatically be converted to a string

function longestCommonPrefix(strs) {
    let minLength = Infinity;

    for (let i = 0; i < strs.length; i++) {
        minLength = Math.min(minLength, strs[i].length);
    }

    let prefix = "";
    let j = 0;

    while (j < minLength) {
        let letter = strs[0][j];

        for (let i = 1; i < strs.length; i++) {                            // can start in row with position 1 because first one at position 0 is used as a baseline 
            if (strs[i][j] !== letter) {
                return prefix;
            }
        }

        prefix += letter;
        j++;
    }

    return prefix;
};

// time complexity - O(n * m)
    // n number of strings in the array
    // m length of the shortest string in the array
    // going through each individual string in the array (length of array n) m times
    // m times because will only keep checking each individual string for common letters at most m times (length of the shortest string)

// space complexity - O(m)
    // space taken up by prefix variable is dependent and at worst the length of the shortest string in the array
    // other variables are constants and size will not change based on input size. 


//_________________________________________________________________________________________________________________________

// another way to solve the problem (neetcode)

// in this way, the first word is initialized as the longest common prefix  'pre'
// then each string in the string array is iterated through word by word and compared from the back to the front
// if the current word at doesnt match index by index to the 'pre' word, 
// the pre is sliced to create a new string that doesnt include the current index as a common prefix 
// slice method arguments - 2nd is not inclusive in slicing, just index before
// if index does not exist in current word/string being compared, will return undefined and if condition in for loop will still be true which will result in slicing


function longestCommonPrefix(strs) {
    let pre = strs[0];

    for(let word of strs) {
        for(let i=pre.length-1; i>=0; i--){
            if(pre[i]!==word[i]){
                pre = pre.slice(0, i)
            }
        }
    }
    
    return pre;
}

// time - O(n^2)
// sapce - O(N)
