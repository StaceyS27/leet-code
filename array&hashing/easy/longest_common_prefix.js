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

        for (let i = 1; i < strs.length; i++) {
            if (strs[i][j] !== letter) {
                return prefix;
            }
        }

        prefix += letter;
        j++;
    }

    return prefix;
};


