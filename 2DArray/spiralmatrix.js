// given an mxn matrix, return all tthe elements of the matrix in spiral order

// to traverse the matrix in a spiral motion, 4 pointers are created 
    // top: which alings to the upper most row
    // bot: alings with the last row
    // left: left/first column
    // right: right/last column

// the while loop continues while the pointers have not passed each other 
// passing each other signifies that all elements of that row or column have been added already 

function spiralOrder(matrix) {
    const order = [];

    let top = 0;
    let bot = matrix.length-1;
    let left = 0;
    let right = matrix[0].length-1;

    while (left <= right && top <= bot){
        for(let i=left; i<=right; i++) {                            // adds top row from left to right
            order.push(matrix[top][i])
        }
        top++;

        for(let i=top; i<=bot; i++){                                // adds right column from top to bottom
            order.push(matrix[i][right])
        }
        right--;

        if (top<=bot) {                                             // adds bottom row from right to left
            for(let i=right; i>=left; i--) {                        // the top<=bot condition is important here again bc want to make sure that row hasnt been added already
                order.push(matrix[bot][i])                          // if the top and bottom pointers are passed each other, row already added
            }
        }
        bot--;

        if(left<=right) {                                           //adds left column from bottom to top
            for(let i=bot; i>=top; i--) {                           // condition check again important bc it ensures that the particular column hasnt been added yet 
                order.push(matrix[i][left])
            }
        }
        left++;
    }

    return order
}