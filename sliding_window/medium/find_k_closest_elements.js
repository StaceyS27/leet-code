// **** Not correct solution, need to work on it **** 



var findClosestElements = function(arr, k, x) {
    // result should be sorted in ascending order 
    // binary search for x 
    // once found put 2 pointers right before it and after it 
    // if the abs value of the difference is greater than the other leave that pointer there
    // move the other pointer until the diff is equal to the other side 
    // make sure to consider the boundaries
    // and if the window doesnt have k values in it 
    // store diff in some sort of variable 

    let set = new Set(arr);
    if(!set.has(x)) {
        let result =[];
        if(x>arr[arr.length-1]){
            for(let i=arr.length-1; i>=0 && result.length<k; i--){
                result.push(arr[i])
            }
        } else {
            for(let i=0; i<arr.length && result.length<k; i++) {
                result.push(arr[i])
            }
        }

        return result; 
    }

    // binary search
    let left = 0;
    let right = arr.length-1;

    let targetIndex = -1;

    while(left<=right) {
        let mid = Math.floor((left+right)/2)

        if(arr[mid] === x) {
            targetIndex = mid;
            break; 
        }
        if(arr[mid]>x){
            right = mid - 1;
        } else {
            left = mid + 1
        }
    }

    console.log(targetIndex)

    let leftBorder = targetIndex;
    let rightBorder = targetIndex;
    
    let windowSize = (rightBorder - leftBorder) + 1;

    while(windowSize<k) {
        if(leftBorder === 0) {
            rightBorder+=1;
        } else if (rightBorder === arr.length -1) {
            leftBorder-=1
        } else if((Math.abs(arr[leftBorder-1] - x)) <= (Math.abs(arr[rightBorder+1] - x))) {
            leftBorder-=1
        } else {
            rightBorder+=1
        }
    }

    let output = arr.slice(leftBorder, rightBorder + 1)

    return output
    
};