// design a stack that supports push, pop, top, and retrieving thhe minimum element in constant time 

// destructuring objects: {minStack} = this 
    // this is like saying minStack = this.minStack which puts into a variable the value gotten at this.minStack
    // above, the minStack property is destructured from the this object and the value is also stored in the variable named minStack
   


class MinStack {
    constructor() {                         
        this.stack = [];                // stack array is the main stack where elements are pushed and popped
        this.minStack = [];             // minStack is used to keep track of the minimum element at any point in the stack 
    }

    push (val, { minStack } = this) {                         // to push, passing in value given and destructured minStack property from this object
        this.stack.push(val);

        const isMinEmpty = !minStack.length;                // ! operator turns minStack.length into a boolean. isEmpty is true if minstack is empty bc length = 0 -> falsey which is then turned true by NOT operator 
        const hasNewMin = val <= this.top(minStack);        // also evaluates to true or false. true if the new value is <= the top of the minStack 
        const canAddmin = isMinEmpty || hasNewMin;          // if either isMinEmpty or hasNewMin is true (meany if the minstack is empty or there is a new min value),
        if (canAddmin) minStack.push(val);                  // can push value into minStack 
    }                                                       // when a new number is pushed to the stack, will be pushed into main stack (definetely) and the minStack if its less than current min/ min on top
    
    pop () {                            
        const top = this.stack.pop();                       // pops top/end of main stack array and if the top of main array equals top of minstack array (it is the min), 
                                                            // then the top/end of that one is popped so that the new min is current 
        if(top === this.getMin()) {                         // getMin method by default takes the minStack and returns its top/end value                      
            this.minStack.pop()                             // getMin method uses top method and returns last element if stack passed (stack or minStack) have a length, otherwise will return null 
        }
    }

    top (stack = this.stack) {                                               // returns the top/end element of the stack (either main one or minStack) without removing it 
        return stack.length ?                                   // returns null if it is empty/falsey if length = 0 
            stack[stack.length - 1] :
            null; 
    }

    getMin (minStack = this.minStack) {                         // returns min element in the minStack using top method
        return this.top(minStack)
    }
}


// time complexity 
    // O(1) because items are pushed into a stack and popped, have constant time complexity
    // to get the min also done in constant time because it is pushed to a seperate array 'minStack'
        // getting the top/end of this array will get min which is constant time/ just accessing last element 

// space complexity 
    // O(n) elements pushed into main and min arrays 

