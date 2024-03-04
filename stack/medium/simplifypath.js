// Simplify Path 

// in this problem, the absolute path to a file or directory is given as the string 'path'
// problem is asking for the simplified/canonical path to a file or directory
// with no "." or "..", also only a single slash and does not end with a slah 

// ex: path = "/a/../../b/../c//"
// when the split method is used on path, the path string is converted to an array and split into elements based on what is b/w the slashes
// ex: path.split("/") becomes ["a", "..", "..", "b", "..", "c", "", ""]   - area between slashes considered an empty string
// the filter(Boolean) method removes all falsey values from the newly formed array after using the split method 
    // that is because Boolean, when used a function, converts values into a boolean based on JS truthy and falsely values 
    // ex: falsey values include NaN, empty strings, undefined, 0, null, and false 
    // empty strings in array above would be filtered out forming ["a", "..", "..", "b", "..", "c"]

// stack useful in this problem because keeps track of directory prior to ".." which is to go up one level in the directory
// this is why its popped off from stack (result should only return directory path from root to file/directory)
// however if stack is empty, won't be able to pop previous directory or top of the stack
// "." is ignored bcause just stays in same directory 
// will return simple path with no dots or extra slashes or slash at the end
// just with root directory "/" in front and directories seperated by slash

// join method joins array into a string, placing "/" b/w previous elements in the array ex: a, b, c
// but in the case above will only return "/c" as other directories are popped off

function simplifyPath(path){
    let stack =[];

    let paths = path.split("/").filter(Boolean);

    for(let i=0; i<paths.length; i++){
        if(paths[i]!=="." && paths[i]!==".."){
            stack.push(paths[i])
        }

        if(paths[i]==".." && stack.length>0){
            stack.pop()
        }
    }

    return "/" + stack.join("/")
}