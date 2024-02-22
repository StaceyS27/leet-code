// given an integer matrix with rows in ascending order
// and the first integer on each row greater than last integer of the previous row 
// return true if a target integer is in the matrix, otherwise false 

function searchMatrix(matrix, target) {
    let rows = matrix.length;                       // how many rows/elements does the matrix have 
    let cols = matrix[0].length;                    // the length of each subarray in the matrix. called cols bc represents number of columns in the matrix

    let top = 0;                                    // top and bot are pointers pointing at the rows/elements in the larger array. top and bottom 
    let bot = rows - 1;

    while(top<=bot) {
        let row = Math.floor((top + bot)/2);           // based on where the top and bottom pointers are, calculate the middle row/element of the larger matrix

        if(target>matrix[row][cols-1]) {              // if the target is bigger than the last element of the middle row/subarray 
            top = row + 1;                           // bring the top pointer down to after the middle row (down if viewing as a matrix)
        } else if(target<matrix[row][0]) {           // if the targer is smaller than the first element in 'row' (the middle subarray in the matrix)
            bottom = row - 1;                       // bring the bottom pointer up (or decrease its index)
        } else {                                    // if target is not greater than or less than those values, must be in that particular subarray so break/exit while loop
            break;
        }                                           // loop will keeping going until row that meets range for target is found 
    }

    if(!(top<=bot)) {                               // the two pointers traversing the matrix are not supposed to cross (top>bottom),
        return false                                // but if they do, it is because a row that has a range where the target could fall into is not found, 
    }                                               // therefore target not found and should return false 

    let row = Math.floor((top+bot) / 2);            // reestablish into a variable the row that contains the target possibly based on top and bottom indices. can't be accessed from while loop

    let l = 0                                       // pointers initialized to search with the columns with the established row 
    let r = cols - 1;

    while(l<=r) {
        let m = Math.floor((l+r)/2);                // the middle index within the row stored in variable m 

        if(target>matrix[row][m]) {                 // left pointer moves to the right of middle index
            l = m + 1
        } else if(target<matrix[row][m]) {          //  move right pointer to the left of middle index
            r = m - 1; 
        } else if(target === matrix[row][m]) {      // target found 
            return true
        }
    }

    return false                                    // target not found in identified row even through was between highest and lowest number in subarray 

}

