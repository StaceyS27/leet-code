// given integers temp array return an answer array such that ans[i]
// is the number of days after the ith day you have to wait to get warmer temp

function dailyTemperatures (temperatures) {
    const answer = new Array(temperatures.length).fill(0);
    const stack = [];

    for(let i=0; i<temperatures.length; i++) {
        while(stack.length>0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const prevIndex = stack.pop();
            answer[prevIndex] = i - prevIndex;
        }

        stack.push(i);
    }

    return answer; 
}

// stack used to keep track of indices of temperatures for which the greater temp hasn't been found yet
// while iterating if current temp is greater than temp at the index at the top of the stack,
// index in answer array updated and it is popped off as greater temp found 
// continues while loop while condition still true 


// time and space complexity 
    // time complexity : O(n)
        // each elemented iterated/pushed into stack/popped off once with the for loop
        // while loop is just accessing elements using elements at the top of the stack - constant time 
    
    // space complexity: O(n)
        // answer array will be same length as temperatures input array
        // stack array in worst case scenerio, if temp array has decreasing temps throughout, will also have a length of n
            // temp[i] won't be greater than previous indices stored in stack so those indices won't be popped off 

//__________________________________________________________________________________________________________________________

// inefficient solution: time complexity O(n^2)

// using the for loop to check each temperature individually and for each number in the temperatures array, 
// every number after it is checked to see if it greater than temperature at i 
// if no temp found greater than the current, push zero

var dailyTemperatures = function(temperatures) {
    const answer = [];

    for(let i=0; i<temperatures.length; i++) {
        let j = i + 1;

        while(j<temperatures.length && !(answer[i])) {
            if(temperatures[j]>temperatures[i]) {
                const numOfDays = j-i;
                answer.push(numOfDays);
            }
            j++;    
        }

        if(answer[i] === undefined) {
            answer.push(0)
        }
    }

    return answer; 
    
};
