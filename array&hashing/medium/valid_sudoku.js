function isValidSudoku(board) {
    for(let i=0; i < board.length; i++){                    // checking to make sure rows dont repeat any number 
        const row = board[i];
        const set = new Set();
        for(let j=0; j<row.length; j++){
            if(set.has(row[j]) && row[j]!== "."){
                return false 
            } else {
                set.add(row[j])
            }
        }
    }

    for(let i=0; i<9; i++){                                 // checking to make sure the columns dont repeat any numbers 
        const set = new Set();                              // set is 'resetted' when the inner loop (column) finishes and a new i is assigned 
        for(let j=0; j<9; j++){
            const column = board[j][i]
            if(set.has(column) && column!== "."){
                return false 
            } else {
                set.add(column)
            }
        }
    }

            const grid1 = new Set();                                        // cant put it inside the for loops below will reset set when loop is completed and going back in when the index is changed in the upper most loop 
            const grid2 = new Set();                                        // used below when subgrids are checked to make sure the numbers dont repeat         
            const grid3 = new Set();
            const grid4 = new Set();
            const grid5 = new Set();
            const grid6 = new Set();
            const grid7 = new Set();
            const grid8 = new Set();
            const grid9 = new Set();


    for(let i=0; i<9; i++){                                             
        for(let j=0; j<9; j++){
            if((0<=i && i<=2) && (0<=j && j<=2)){
                if(grid1.has(board[i][j]) && board[i][j]!=="."){
                    return false
                } else {
                    grid1.add(board[i][j])
                }
            }

            if((0<=i && i<=2) && (3<=j && j<=5)){
                if(grid2.has(board[i][j]) && board[i][j]!=="."){
                    return false
                } else {
                    grid2.add(board[i][j])
                }
            }

            if((0<=i && i<=2) && (6<=j && j<=8)){
                if(grid3.has(board[i][j]) && board[i][j]!=="."){
                    return false
                } else {
                    grid3.add(board[i][j])
                }
            }

            if((3<=i && i<=5) && (0<=j && j<=2)){
                if(grid4.has(board[i][j]) && board[i][j]!=="."){
                    return false
                } else {
                    grid4.add(board[i][j])
                }
            }

            if((3<=i && i<=5) && (3<=j && j<=5)){
                if(grid5.has(board[i][j]) && board[i][j]!=="."){
                    return false
                } else {
                    grid5.add(board[i][j])
                }
            }

            if((3<=i && i<=5) && (6<=j && j<=8)){
                if(grid6.has(board[i][j]) && board[i][j]!=="."){
                    return false
                } else {
                    grid6.add(board[i][j])
                }
            }

            if((6<=i && i<=8) && (0<=j && j<=2)){
                if(grid7.has(board[i][j]) && board[i][j]!=="."){
                    return false
                } else {
                    grid7.add(board[i][j])
                }
            }

            if((6<=i && i<=8) && (3<=j && j<=5)){
                if(grid8.has(board[i][j]) && board[i][j]!=="."){
                    return false
                } else {
                    grid8.add(board[i][j])
                }
            }

            if((6<=i && i<=8) && (6<=j && j<=8)){
                if(grid9.has(board[i][j]) && board[i][j]!=="."){
                    return false
                } else {
                    grid9.add(board[i][j])
                }
            }
        }
    }

    return true; 


};

// Time Complexity
    // technically O(1) because the input size is fixed at 81 elements (9 columns and rows)
    // time to run doesnt increase with size
// space complexity
    // also O(1)
    // because size of sets stay constant at 9 at most and doesnt change with input size. 
    // input size constant 