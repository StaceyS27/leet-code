// Asteroid Collision

// given an array of asteroids of integers 
// the value of each integer in the array represents the size of the asteroid
// and the sign represents the direction that it is going

// if an array of asteroids starts with a negative number, then it will never collide with incoming asteroids 
// even if they are positive because will look like this <---  ---> ex: [-5, 10]
// another ex is [-2, -1, 1, 2] the resulting asteroids array will still be the same because the asteroids even though diff signs, will never make contact
// sum: a positive approaching a negative will never cause a collision
// but a negative approaching a positive will 

// because of this reason, the while loop only needs to check the stack when the stack has a pos num on top and the incoming asteroid is a neg num
// the diff or addition between the two indicates which one will explode (the one of larger magnitiude will)
    // if the "diff" is negative (or less than 0), then that means the incoming neg asteroid is larger and will destroy/pop postive asteroid from the stack
    // if the diff is positive, means the asteroid in the stack is larger, so will stay, and asteroid variable is just assigned value of 0 
        // value of 0 is used later in code 
        // is asteroid is truthy, or not zero, then it will be pushed into the stack (neg and pos numbers are both truthy)
        // but if it is zero, will not be added
    // the last case after else block is referring to the case in which the 'diff' is 0 which is caused by the incoming asteroid and the top most asteroid ..
    // of the stack being of the same magnitude, but diff signs
        // in this case both asteroids will cause each other to explode
        // causing the top most asteroid of the stack to be popped
        // and assigning the incoming asteroid a value of 0 so that it won't be pushed into the stack later in the code as it is already destroyed 


const asteroidCollision = (asteroids) => {
    let stack = [];

    for (let i = 0; i < asteroids.length; i++) {
        let asteroid = asteroids[i];

        while (stack.length !== 0 && asteroid < 0 && stack[stack.length - 1] > 0) {        
            let diff = asteroid + stack[stack.length - 1];

            if (diff < 0) {
                stack.pop();
            } else if (diff > 0) {
                asteroid = 0;
            } else {
                asteroid = 0;
                stack.pop();
            }
        }

        if (asteroid) {
            stack.push(asteroid);
        }
    }

    return stack;
};


// time complexity - O(n)
    // even though it seems like there are two nested loops, time is O(n).. 
    // because while loop does not cause reprocessing of the same input array 
    // (?) instead does constant time comparisons between the asteroid in question and the top of the stack 
    // diff and pop also constant time operations
    // not dependent on size of input array even though at worst can have a lot of pos numbers in asteroids arr followed by larger neg num

// space complexity - O(n)
    // stack size dependent on input size and can be proportional 
    // worst case a lot of pos or neg in input array which will all be pushed into the stack 