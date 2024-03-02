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

