// given an array of string tokens that represents an arithmeric expression in reverse polish notation 
// ex: tokens input: ["2", "1", "+", "3", "*"]
// when the operator comes up, it performs the operator on the two previous number in the stack
// when numbers are encountered in the tokens array they are pushed as numbers into the stack (initially they are strings)
// once the operation is performed on the last two numbers in the stack, the result is pushed so that number can be used in the next operation
// the two numbers the operation was performed on are popped off so that the only number left is the result of the previous operation (like PEMDAS operation in math)

function evalPRN (tokens) {
    const stack = []

    const operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => Math.trunc(a/b)                  // Math.truc is a method that truncates the decimal part of a number and just leaves the integer 
    }

    function performOperation (char) {
        const rightNum = stack.pop();                    // pop off two most recent numbers to perform operation on and store in a variable to use in the function below 
        const leftNum = stack.pop();

        const operation = operations[char];             // get the corresponding function at the key char, if the char encountered in the token array is an operator 

        return  operation(leftNum, rightNum)
    }

    for(i=0; i<tokens.length; i++) {
        const char = tokens[i];

        if(char in operations) {                            // if char is a operator ..
            const value = performOperation(char)
            stack.push(value)                               // once operation has been performed and two numbers that have been operated on have been popped off, push into the stack its result so that it can be used in the next arithmetic (PEMDAS)
        } else {                                            // otherwise if char is just a number written as a string
            stack.push(Number(char))
        }

    }

    return stack.pop();                                     // once all operations in the tokens string array have been performed, only one number will be left. pop it off to get result of the expression
}






