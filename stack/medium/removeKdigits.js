// Remove K Digits

//** only passed 29/43 cases

var removeKdigits = function(num, k) {
    let stack = [];
    let count = 0;

    if (num.length === k) {
        return "0";
    }

    for (let i = 0; i < num.length; i++) {
        if (count === k) {
            stack.push(num[i]);
            continue;
        }
        if (stack.length === 0) {
            stack.push(num[i]);
            continue;
        }
        if (stack[stack.length - 1] > num[i]) {
            stack.pop();
            count++;
            stack.push(num[i]);
        } else {
            count++;
        }
    }
    
    let pointer = 0
    while (stack[pointer] === '0') {
       pointer++
    }

    let smallStr = stack.slice(pointer, stack.length)
    console.log(smallStr)

    if (smallStr.length === 0) {
        return "0";
    }

    return smallStr.join("");
};
