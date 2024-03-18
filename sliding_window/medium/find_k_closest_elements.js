// Find K Closest Elements

// given a sorted array arr and 2 integers k and x
// return the k closest integers to x in the array
// result should be in ascending order 

// another point given: the values are closer to the target value if the absolute value of the difference is less
// and if the difference is that same, the smaller number is considered closer 

// tip: x may or may not be in the array 
// if it is not in the array, need to find k numbers closest to it and return it 
// if it is in the array, the number itself is considered part of the k numbers closest to x 


var findClosestElements = function (arr, k, x) {
    // Binary search to find index of x, which is the target
    let left = 0;
    let right = arr.length - 1;
    let targetIndex = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === x) {                                   
            targetIndex = mid;
            break;
        } else if (arr[mid] < x) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    // If x is not found, find the closest match
    let minDiff = Infinity                                          // x may not be in tha array so the targetIndex may still be unchanged
    let closestTarget = null
    if (targetIndex === -1) {
        for (let i = 0; i < arr.length; i++) {
            if (Math.abs(arr[i] - x) < minDiff) {
                minDiff = Math.abs(arr[i] - x)
                closestTarget = i
            }
        }
    }
    console.log(closestTarget)

    let leftBorder = targetIndex;                                   // leave the borders on index in case desired k value/window size is only 1 
    let rightBorder = targetIndex;                                  // could have also just declared the variables with no values assigned and then assign values in if and else blocks
                                                                    // can keep same if like below, but make the else to make borders equal targetIndex
    // Update borders if closestTarget is found                     // cannot declare and assign value to variable in if and else block only bc then no other part of code will have access to it 
    if (closestTarget !== null) {                                   // will change borders if closestTarget is not null which happens if x is not in the array
        leftBorder = closestTarget;                                 // need to specify closesttarget not equal null bc if it is equal to 0, still considered falsey
        rightBorder = closestTarget;                                // and won't execute the if block 
    }

    let windowSize = rightBorder - leftBorder + 1;

    while (windowSize < k) {
        if (leftBorder === 0) {                                                                         // make sure borders won't go out of bounds 
            rightBorder++;
        } else if (rightBorder === arr.length - 1) {
            leftBorder--;
        } else if (Math.abs(arr[leftBorder - 1] - x) <= Math.abs(arr[rightBorder + 1] - x)) {           // as mentioned before, even if the diff is the same b/w x and two numbers, the smaller number is considered closest 
            leftBorder--;                                                                               // so will decrement left border to include smaller number in k closest to element
        } else {
            rightBorder++;
        }

        // Update windowSize after adjusting borders
        windowSize = rightBorder - leftBorder + 1;                                                  // need to recalculate window size inside loop once borders are changed
    }                                                                                               // won't do it from the outside where window size is initialized

    let output = arr.slice(leftBorder, rightBorder + 1)                                             // ensures k closest remains in ascending order 
                                                                                                    // 2nd argument in slice not included in newly formed array
    return output;
};

// time complexity
    // if x is not in the array, will have to possibly search entire array to find closest value O(n)
    // then reiterate through the array to find the k closest values 
    // O(n + k)

    // if x is in the array, will use binary search to find the index of x
    // then again find the k closest values in the 2nd while loop
    // O(logn + k)

    // ? maybe worst time then is O(n+k)

// space complexity - O(k) ?
    // ? output array would grow with the size of k 